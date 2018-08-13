require 'pry'
class SnacksController < ApplicationController

  before_action :find_snack, only: [:edit, :show, :update, :delete]

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
    snack = Snack.create(accepted_params)
    # @snack = Snack.create(name: params[:snack][:name],
    #                       deliciousness: params[:snack][:deliciousness],
    #                       calories: params[:snack][:calories])
    redirect_to snack_path(snack)
  end

  def edit
  end

  def update
    snack.update(accepted_params)
    redirect_to snack_path(snack)
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
