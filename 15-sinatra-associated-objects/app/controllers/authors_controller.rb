class AuthorsController < ApplicationController

    set :views, "app/views/authors"


    get "/authors" do 
        @authors = Author.all 
        erb :index
    end

    get "/authors/new" do
        # load a blank author form
        erb :new
    end

    post "/authors" do
        # create a new author
        author_name = params[:author_name]
        author = Author.find_or_create_by(name: author_name)
        params[:book].each do |book_info|
            book_title = book_info[:title]
            book_snippet = book_info[:snippet]
            Book.create(author: author, title: book_title, snippet: book_snippet)
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/:id" do
        @author = Author.find(params[:id])
        erb :show
    end


end