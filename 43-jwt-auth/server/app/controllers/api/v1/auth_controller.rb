class Api::V1::AuthController < ApplicationController

  def create # POST /api/v1/login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      # create token
      # send it
      payload = { user_id: @user.id }
      token = encode(payload)
      render json: {
        success: true,
        token: token,
        user_info: {
          bio: @user.bio,
          avatar: @user.avatar,
          username: @user.username
        }
      }, status: :ok
    else
      render json: { error: true, success: false, failed: true }
    end
  end

end
