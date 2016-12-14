class AutorController < ApplicationController
  def index
    cats = params[:id].split("/")

    @id_autor = cats[0]
  end
end