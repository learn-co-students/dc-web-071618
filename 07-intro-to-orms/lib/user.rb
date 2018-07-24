class User
  @@all = []
  def initialize(props= {})
    @username = props["username"]
    @@all << self
  end

  def self.all
    @@all
  end
end
