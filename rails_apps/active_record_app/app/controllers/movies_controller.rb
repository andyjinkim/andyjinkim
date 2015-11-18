class MoviesController < ApplicationController
  def index
    @first_user = User.first
    @movies = Movie.all
    @movies_for_1st = Movie.where({user_id: @first_user.id})
  end

  def show
    @id = params[:id]
    @movie = Movies.find(@id)
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
