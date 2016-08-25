class DealsController < ApplicationController

  def index
    deals = Deal.all
    render json: deals, status: 201
  end

  def show
    deal = Deal.find(params[:id])
    render json: deal
  end

end
