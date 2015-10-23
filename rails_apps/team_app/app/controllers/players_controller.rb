class PlayersController < ApplicationController
  def index
    @players = @@database
    @photos = @@imagedatabase
  end

  def show
    which_player =
    @player = @@database[params[:id].to_i]
    @photo = @@imagedatabase[params[:id].to_i]
  end
end
