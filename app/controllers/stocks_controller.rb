class StocksController < ApplicationController
  
  def search
    
    if params[:stock]
      @stock = Stock.find_by_ticker(params[:stock])  # Busca primero en la DB propia
      @stock ||= Stock.new_from_lookup(params[:stock]) # Si no encuentra busca directament en la gema
    end
    
    if @stock
      render partial: 'lookup'
    else
      render status: :not_found, nothing:true  # No muestra nada
    end
    
  end
  
end