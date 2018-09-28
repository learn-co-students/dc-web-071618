class User < ApplicationRecord
  has_secure_password
  # encrypt the password
  # password=
  # added a validation password can't be blank
  # validation that password and password confirmation match
  # authenticate method
  # returns false if the password is wrong
  # returns the user if the password was right
  validates :username, uniqueness: { case_sensitive: false }
end
