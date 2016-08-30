class DocumentsController < ApplicationController

  def index
    documents = Document.where(name: params[:name]).where.not('content' => nil, 'deal_id' => params[:deal_id])
    render json: documents
  end

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

  def destroy
    document = Document.find(params[:id])
    document.destroy
    head :no_content
  end

  private 

  def document_params
    params.require(:document).permit(:name, :content, :deal_id, :complete)
  end

end
