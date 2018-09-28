class Api::V1::UsersController < ApplicationController

  # authenticate this!
  # actually find the user!
  def profile
    authorization = request.headers['Authorization']
    token = authorization.split(' ')[1]
    payload = decode(token)
    user = User.find(payload['user_id'])
    render json: { user: UserSerializer.new(user) }, status: :accepted
  end

  # Sign Up
  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end
