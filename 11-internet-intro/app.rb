class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['<h1>hello, world</h1>'] # or {}

    return [status_code, header, body]
  end
end
