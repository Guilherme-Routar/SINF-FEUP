class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  # Ensure the user is logged in.
  before_action :authenticate_user!, only: [:new, :edit, :create, :update, :destroy]
  respond_to :html

  def index
    @products = Product.where(availability: true)
    respond_with(@products)
  end

  def show
    respond_with(@product)
  end

  def new
    @product = Product.new
    respond_with(@product)
  end

  def edit
  end

  def create
    @product = current_user.products.new(product_params)

    respond_to do |format|
      if @product.save
        format.html {redirect_to @product, notice: 'Book was successfully created.'}
      end
    end

    end

    def update
      @product.update(product_params)
      respond_with(@product)
    end

    def destroy
      @product.destroy
      respond_with(@product)
    end

    private
    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name, :owner, :brand, :desciption, :price, :availability)
    end
  end
