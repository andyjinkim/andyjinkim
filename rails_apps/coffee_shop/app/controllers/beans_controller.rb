class BeansController < ApplicationController
  def index
  end

  def show
  end

  def edit
  end

  def new
    @bean = Bean.new
    @bean.roast = 'dark'
    @bean.cost = 0.99
  end
end
