class InventoriesController < ApplicationController
  def index
    render json: {
      page: 1,
      per: 20,
      totalCount: 5,
      results: [
        { id: 1, name: "Test Product1", price: 1000 },
        { id: 2, name: "Test Product2", price: 2000 },
        { id: 3, name: "Test Product3", price: 3000 },
        { id: 4, name: "Test Product4", price: 4000 },
        { id: 5, name: "Test Product5", price: 5000 }
      ]
    }.to_json
  end
end
