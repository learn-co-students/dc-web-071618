require 'pry'

class ApplicationController < Sinatra::Base

    set :views, "app/views"

    get "/" do
        erb :home
    end

    get "/books" do
        @books = Book.all
        erb :index
    end

    get "/books/new" do
        erb :new
    end

    post "/books" do
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end


end
