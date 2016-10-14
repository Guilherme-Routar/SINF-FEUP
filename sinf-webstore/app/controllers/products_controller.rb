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
    authorize! :manage, @product
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
    authorize! :manage, @product
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @book, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      end
    end
  end

  def destroy
    authorize! :manage, @product
    @product.destroy
    respond_with(@product)
  end

  private
  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :owner, :brand, :desciption, :price, :availability, :image, :resource)
  end
end
