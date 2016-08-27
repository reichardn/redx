class DocumentsController < ApplicationController

  def create
    document = Document.create(document_params)
    render json: document
  end

  def show
    document = Document.find(params[:id])
    render json: document
  end

  def update
    document = Document.find(params[:id])
    document.update(document_params)
    render json: document
  end

  private 

  def document_params
    params.require(:document).permit(:name, :content, :deal_id)
  end

end
