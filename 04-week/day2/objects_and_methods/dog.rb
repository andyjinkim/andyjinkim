class Dog
  def initialize(breed, name, age, bark)
    @breed = breed
    @name = name
    @age = age
    @bark = bark
  end

  def get_breed
    `say hi im a #{@breed} my name is #{@name} im #{@age} years old and my bark sounds like #{@bark}`
  end
end

sam = Dog.new("chihuahua", "sam", "85", "meow")
p sam.get_breed
eunice = Dog.new("great dane", "eunice", "5", "woof")
