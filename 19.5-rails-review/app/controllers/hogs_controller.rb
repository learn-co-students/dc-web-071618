class HogsController < ApplicationController

  def index
    @hogs = Hog.all
  end

  def show
    @hog = Hog.find(params[:id])
  end

  def new
    @hog = Hog.new
  end

  def create
    @hog = Hog.create(hog_params)
    redirect_to hog_path(@hog)
  end

  def edit
    @hog = Hog.find(params[:id])
  end

  def update
    @hog = Hog.find(params[:id])
    @hog.update(hog_params)
    redirect_to hog_path(@hog)
  end


  def destroy
    @hog = Hog.find(params[:id])
    @hog.destroy
    redirect_to hogs_path
  end
  
  private
  def hog_params
    params.require(:hog).permit(:name, :weight, :farmer_id)
  end

end
