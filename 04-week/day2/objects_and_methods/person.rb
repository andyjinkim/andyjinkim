class Person
  #Let's create a getter method for @eye_color
  attr_reader(:eye_color)
  #attr_writer(:eye_color) #this creates a setter method for @eye_color
  #attr_accessor(:eye_color) #this creates both setter and getter methods for eye_color

  #class variable is shared by all objects of the class Person
  @@count = 0

  #initialize runs every time a new instance of Person is created
  def initialize(nombre, sexo, ojos)
    @@count += 1
    puts ("count so far #{@@count}")

    @name = nombre
    @sex = sexo
    @eye_color = ojos
  end

#this is a getter method for name
  def name #used to be get_name
    @name
  end
#this is a setter method for name
  def name=(nombre) #used to be set_name
    @name = nombre
  end
#this is a getter method for sex
  def get_sex
    return "and I am " + @sex
  end
#use "say" to make it read on speakers
  def say_name
    `say my name is #{@name}`
  end
end

juan = Person.new("chalupa batman", "male", "brown")
juan.name=('juanito')

jimmy = Person.new("jimmy", "male", "brown")
jimmy.name='jimmito'
p juan.name
p jimmy.name()
p jimmy.eye_color
