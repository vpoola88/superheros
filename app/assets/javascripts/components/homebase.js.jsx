var SuperHeroes = React.createClass({
  render: function(){
    return(
      <div>
        <SuperHeroList />
      </div>
    )
  }
});

var SuperHeroList = React.createClass({
  getInitialState: function(){
    return {
      heroes: []
    }
  },

  componentDidMount: function() {
    this.getHeroes();
  },

  getHeroes: function() {
    var component = this;

    var request = $.ajax({
      url: '/superheros',
      dataType: 'JSON',
      type: 'GET'
    });
    request.done(function(heroData) {
      component.setState({ heroes: heroData });
    });
    request.fail(function(xhr, status, error) {
      console.error(xhr, status, error);
    });
  },

  render: function(){
    // this is an array of React Elements
    var superHeroNodes = this.state.heroes.map(function(hero) {
      return (
        <SuperHero superName={hero.super_name} realName={hero.real_name}>
          This will only be printed if we refer to "this.props.children"
        </SuperHero>
      )
    });
    return (
      <div className="heros">
      <SuperHeroForm updateHeroes={this.getHeroes} />
        {superHeroNodes}
      </div>
    );
  }
});

var SuperHero = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.superName}</h1>
        <h3>{this.props.realName}</h3>
      </div>
    )
  }
});

var SuperHeroForm = React.createClass({
  getInitialState: function(){
    return {
      newHero: ""
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    var heroForm = this;

    var superName = React.findDOMNode(this.refs.superName).value.trim();
    var realName = React.findDOMNode(this.refs.realName).value.trim();

    var request = $.ajax({
      type: 'POST',
      url: '/superheros',
      data:
        { superhero:
          {
            realBadAssShit: "scary",
            super_name: superName,
            real_name: realName
          }
        },
      dataType: 'JSON'
    });
    request.done(function(newHero) {
      heroForm.props.updateHeroes();
    });
    request.fail(function(xhr, status, error) {
      alert('fuck you');
    });

  },

  render: function() {
    return (
      <form className="badass" ref="coolForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Super Hero Name:" ref="superName" />
        <input type="text" placeholder="Real Name:" ref="realName" value="Hal Jordan" />
        <input type="text" placeholder="Super Power:" ref="superPower" />
        <input type="text" placeholder="Weakness:" ref="weakness" />
        <input type="text" placeholder="Age:" ref="age" />
        <input type="submit" value="Create Superhero!" />
      </form>
    );
  }
});





