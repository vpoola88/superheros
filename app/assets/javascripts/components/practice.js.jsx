var Big = React.createClass({
  getInitialState: function() {
    return {
      buttonName: "GO",
      saysGo: true,
      color: "turqouise"
    }
  },

  makeMyChange: function() {
    this.setState({
      buttonName: this.state.saysGo ? "STOP" : "GO",
      saysGo: !this.state.saysGo
    });

    console.log(this.state.color);
  },

  render: function() {
    var numbers = [1, 2, 3, 4, 5]
    var numbersList = numbers.map(function(number) {
      return (
        <NumBox num={number} />
      );
    });
    console.log(numbersList);
    return (
      <div className="thing">
        {numbersList}
      </div>
    );
    // return (
    //   <div>
    //     <h2>From Big:</h2>
    //     <Small name="Eric" color="green" age="23" height="4" />
    //     <Small name="Vivek" color="blue" age="23" />
    //     <button onClick={this.makeMyChange}>{this.state.buttonName}</button>
    //   </div>
    // );
  }
});

var NumBox = React.createClass({

  render: function() {
    return (
      <p>{this.props.num}</p>
    )
  }
});

// var Small = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>{this.props.name}</h3>
//         <h3>{this.props.age}</h3>
//         <h3>{this.props.height}</h3>
//       </div>
//     );
//   }
// });


