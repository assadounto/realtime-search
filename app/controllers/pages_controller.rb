class PagesController < ApplicationController
  include TrackSearch
  include SetCurrentVisitor
  before_action :track_search, only: [:search]


  def search
    @most_searched = Search.searches_ordered_limited
    query = params[:search] || ""
    @results = Search.where("params ILIKE ?", "%#{query}%").distinct

  end


end
