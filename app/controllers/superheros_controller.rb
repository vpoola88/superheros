require 'awesome_print'

class SuperherosController < ApplicationController

  def index
    @superheroes = Superhero.all
    @new_superhero = Superhero.new
    respond_to do |data_type|
      data_type.html { render 'index' }
      data_type.json { render json: @superheroes }
    end
  end

  def show
    @superhero = Superhero.find(params[:id])
  end

  def new
    @superhero = Superhero.new
  end

  def create
    @superhero = Superhero.new(superhero_params)
    respond_to do |data_type|
      if @superhero.save
        data_type.html { redirect_to superheros_path }
        data_type.json { render json: @superhero }
      else
        p "Error"
      end
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @superhero = Superhero.find(params[:id])
    if @superhero
      @superhero.destroy
      redirect_to superheros_path
    else
      "Error..."
    end
  end

  private
    def superhero_params
      params.require(:superhero).permit(
        :real_name, :super_name, :power, :weakness, :age
      )
    end

    def heroes

    end

end
