class HogsController < ApplicationController

   def index
     @hogs = Hog.all
   end

   def show
     @hog = Hog.find(params[:id])
   end

   
end
