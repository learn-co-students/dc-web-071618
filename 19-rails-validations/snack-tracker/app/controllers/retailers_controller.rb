class RetailersController < ApplicationController

  def index
    @retailers = Retailer.all
  end

  def show
    @retailer = Retailer.find(params[:id])
  end

  def new
    @retailer = Retailer.new
    @retailer.snacks.build 
  end

  def create
    retailer = Retailer.create(accepted_retailer_form_fields)
    redirect_to retailer_path(retailer)
  end

  def destroy
    @retailer = Retailer.find(params[:id])
    @retailer.destroy
    redirect_to retailers_path
  end

  private

  def accepted_retailer_form_fields
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end
end
