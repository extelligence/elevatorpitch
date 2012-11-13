require 'sinatra'
require "sinatra/reloader" if development?

configure :development do
  Slim::Engine.set_default_options :pretty => true
end

get '/' do
    slim :index, :layout => false
end
