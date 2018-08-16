require 'test_helper'

class FarmersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get farmers_index_url
    assert_response :success
  end

end
