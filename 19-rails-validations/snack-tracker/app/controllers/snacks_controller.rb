require 'pry'
class SnacksController < ApplicationController

  before_action :find_snack, only: [:edit, :show, :update, :destroy]

  def index
    @snacks = Snack.all
  end
  
  def show
  end

  def new
    # loads empty create form
    @snack = Snack.new
  end

  def create
    # byebug
    @snack = Snack.create(accepted_params)
    if @snack.errors

  
      render :new
    else
      redirect_to snack_path(@snack)
    end
  end

  def edit
  end

  def update
    @snack.update(accepted_params)
    redirect_to snack_path(@snack)
  end

  def destroy
    @snack.destroy
    redirect_to snacks_path
  end

  private

  def accepted_params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end

  def find_snack
    @snack = Snack.find(params[:id])
  end
end
