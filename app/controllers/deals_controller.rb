class DealsController < ApplicationController

  def index
    deals = Deal.all
    render json: deals, status: 201
  end

  def show
    deal = Deal.find(params[:id])
    render json: deal
  end

  def create
    deal = Deal.create(deal_params)
    deal.build_docs
    render json: deal
  end

  def destroy
    deal = Deal.find(params[:id])
    deal.destroy
    head :no_content
  end

  private 

  def deal_params
    params.require(:deal).permit(:name, :category)
  end

end
