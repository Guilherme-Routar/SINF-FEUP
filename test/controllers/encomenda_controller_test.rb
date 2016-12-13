require 'test_helper'

class EncomendaControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get getUser" do
    get :getUser
    assert_response :success
  end

end
