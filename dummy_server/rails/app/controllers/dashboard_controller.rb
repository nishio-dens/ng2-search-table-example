class DashboardController < ApplicationController
  def index
    render json: { "System": "All Green" }
  end
end
