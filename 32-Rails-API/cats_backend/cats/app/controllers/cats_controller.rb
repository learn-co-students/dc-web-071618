class CatsController < ApplicationController
  #GET all fetch
  def index
    cat_array = Cat.all
    newArray = cat_array.map{|cat| {name: cat.name, breed: cat.breed, age: cat.age, color: cat.color, quote: cat.quote}}
    render json: Cat.all
  end

  #GET one fetch
  def show
    render json: Cat.find(params[:id])
  end

  #POST fetch
  def create
    render json: Cat.create(cat_param)
  end

  def cat_param
    params.require(:cat).permit(:name, :breed, :age, :color, :quote)
  end

  #PATCH fetch
  def update
    render json: Cat.find_by_id(params[:id]).update(cat_param)
  end

  #DELETE fetch
  def destroy
    render json: Cat.find(params[:id]).destroy()
  end
end
