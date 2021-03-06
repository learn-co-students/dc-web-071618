class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:username])

    if @user 
        session[:user_id] = @user.id 
        redirect_to snacks_path
    else 
        flash.notice = "No user found with that name"
        render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end

end
