class BooksController < ApplicationController

    set :views, "app/views/books"

    get "/books" do
        @books = Book.all
        erb :index
    end

    get "/books/new" do
        @authors = Author.all
        erb :new
    end

    post "/books" do
        author_id = params[:author_id]
        title = params[:title]
        snippet = params[:snippet]
        author = Author.find(author_id)
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        @authors = Author.all
        erb :edit
    end

    patch "/books/:id" do
        @book = Book.find(params[:id])
        author_id = params[:author_id]
        author = Author.find(author_id)
        title = params[:title]
        snippet = params[:snippet]
        @book.update(author: author, title: title, snippet: snippet)
        redirect "/books/#{@book.id}"
    end

    delete "/books/:id" do
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end
end