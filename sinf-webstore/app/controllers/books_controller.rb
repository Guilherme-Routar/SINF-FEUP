class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :edit, :create, :update, :destroy]

  respond_to :html

  def index
    @books = Book.search(params[:search])
  end

  def show
    respond_with(@book)
  end

  def new
    @book = Book.new
    respond_with(@book)
  end

  def edit
    authorize! :manage, @book
  end

  def create
    @book = current_user.books.new(book_params)
    respond_to do |format|
      if @book.save
        format.html {redirect_to @book, notice: 'Book was successfully created.'}
      end
    end

  end

  def update
    authorize! :manage, @book
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to @book, notice: 'book was successfully updated.' }
        format.json { render :show, status: :ok, location: @book }
      end
    end
  end

  def destroy
    authorize! :manage, @book
    @book.destroy
    respond_with(@book)
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:name, :owner, :brand, :desciption, :price, :availability, :image, :resource)
  end
end
