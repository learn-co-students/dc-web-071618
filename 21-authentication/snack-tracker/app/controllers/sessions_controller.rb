class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:username])


    if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id  # login 
        redirect_to snacks_path
    else 
        flash.notice = "Username and Password do not match"
        render :new
    end
  end

  def destroy # logout
    session[:user_id] = nil
    redirect_to login_path
  end

end
