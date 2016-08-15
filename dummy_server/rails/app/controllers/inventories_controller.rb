class InventoriesController < ApplicationController
  def index
    inventories = Inventory.search_with(
      params[:filter], params[:sort], params[:page], params[:per]
    )
    render json: {
      page: params[:page] || 1,
      per: params[:per] || 20,
      totalCount: inventories.total_count,
      results: inventories
    }.to_json
  end
end
