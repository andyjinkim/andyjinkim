# class Bird #parent class
#   def fly
#     return "I believe I can fly"
#   end
#
#   def shit_on_car
#     return "Your car sucks"
#   end
# end
#
# class Pigeon < Bird #pigeon inherits from bird
#   def eat_trash
#     return "Get me some trash"
#   end
# end
#
# class BaldEagle < Bird #baldeagle inherits from bird but not from pigeon
#   def shit_on_car
#     return "MURCA"
#   end
# end
#
# @pigeon = Pigeon.new #creates a new object
# @bird = Bird.new #creates a new object
# @baldeagle = BaldEagle.new #creates a new object

############### 2 classes that inherit from mammal, two that inherit from child
class Mammal
  def nipple
    return "I'm a mammal and I have nipples"
  end

  def breathe
    return "I breathe sometimes"
  end
end

class Feline < Mammal
  def nipple
    return "We have 6 nipples, I think"
  end
  def breathe
    return "We breathe like anybody else"
  end
end

class Canine < Mammal
  def nipple
    return "We have some pretty normal nipples"
  end
  def define
    return "We kind of look like dogs but only some of us are"
  end
end

class Liger < Feline
  def nipple
    return "WE ARE LIGERS AND WE HAVE MYTHICAL NIPPLES"
  end
  def breathe
    return "WE ARE LIGERS AND WE BREATHE MYTHICALLY"
  end
end

class Lion < Feline
  def nipple
    return "We have some pretty boring nipples"
  end
  def breathe
    return "I'm getting tired of doing this"
  end
end

class Dog < Canine
  def nipple
    return "Okay seriously I'm tired of doing this"
  end
end

class Wolf < Canine
  def breathe
    return "BORED"
  end
end

@mammal = Mammal.new
@feline = Feline.new
@canine = Canine.new
@liger = Liger.new
@lion = Lion.new
@dog = Dog.new
@wolf = Wolf.new
