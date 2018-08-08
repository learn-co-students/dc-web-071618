Book.destroy_all
Author.destroy_all

GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books
GoogleBooks::Adapter.new("Beverly Clearly").fetch_books
GoogleBooks::Adapter.new("R.L. Stein").fetch_books