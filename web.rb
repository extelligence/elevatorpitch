require 'sinatra'
require "sinatra/reloader" if development?

configure do
  Slim::Engine.set_default_options :pretty => true
end

get '/' do
    @twitter = ENV['TWITTER']
    slim :index, :layout => false
end
