class ProductController < ApplicationController
	def new
	end

	def show
		@product_id = params[:id]
		#if Imagem.where(idProduto: @product_id).take.nil?
		#	@imgs = nil
		#else @imgs = Imagem.where(idProduto: @product_id)
		#end

		@desc = ProductDescription.where(idProduto: @product_id).take
		@reviews = Review.where(produto_id: @product_id).paginate(:page => params[:page], :per_page => 5).order('id DESC')
		@avg = @reviews.average(:rating)


	end
end