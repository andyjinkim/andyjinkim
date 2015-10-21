<<<<<<< HEAD
=======

>>>>>>> f1bb4f5d9f4dd57064422f0e69103381a2912028
@students = [
	{name: "Alexander Juneja", email: "alexjuneja1@gmail.com"},
	{name: "Andrew Kim", email: "andyjinkim@gmail.com"},
	{name: "Brian Frager", email: "btfrager@gmail.com"},
	{name: "Genny Langan", email: "cglangan78@gmail.com"},
	{name: "Colin Chan", email: "clnsdabst@gmail.com"},
	{name: "Crystal Murray", email: "crystalsmurray@gmail.com"},
	{name: "Dan McQuillan", email: "djmcquillan76@gmail.com"},
	{name: "Eddie Jung", email: "ejung716@gmail.com"},
	{name: "Ellie Shahla", email: "ess9213@yahoo.com"},
	{name: "Emma Gilhuly", email: "emmagilhuly@me.com"},
	{name: "Eunice Chang", email: "omgunis@gmail.com"},
	{name: "Ivy Wong", email: "ivykww@gmail.com"},
	{name: "John Meredith", email: "johnm589@yahoo.com"},
	{name: "Juan Ruelas", email: "jruel006@ucr.edu"},
	{name: "Ken Carrington", email: "kcarring93@verizon.net"},
	{name: "Kevin Williams", email: "kevin.williams@onidaprep.com"},
	{name: "Kristen Gunn", email: "ohkristen@creativekdg.com"},
	{name: "Lilly Ghassemieh", email: "lillygh@gmail.com"},
	{name: "Nick Hendren", email: "nhendren7@gmail.com"},
	{name: "Rich Donnellan", email: "rich.donnellan@gmail.com"},
	{name: "Sam Hager", email: "sam.hager11@gmail.com"},
	{name: "Sam Richardson", email: "samrichardson01@hotmail.com"},
	{name: "Santiago Casar", email: "santiago@nowhereprod.com"},
	{name: "Sean Esteva", email: "seangeleno@gmail.com"},
	{name: "Sean Hall", email: "seanhall22@gmail.com"},
	{name: "Seri Orfali", email: "seriorfali@gmail.com"},
	{name: "Stefanie Koenig", email: "stefanie.l.koenig@gmail.com"},
	{name: "Ted Shumway", email: "shumway.ted@gmail.com"},
	{name: "Veronica Sykes", email: "vasykes@gmail.com"}
]

# A method to create a new student hash and push it to our students array
# The argument here is named student to make it clear it's a hash holding details about a new student
<<<<<<< HEAD
def new_student(name, email)
  @students << {name: name, email: email}
=======
def new_student(student_name, student_email)
		@students.push({name: student_name, email: student_email})
>>>>>>> f1bb4f5d9f4dd57064422f0e69103381a2912028
end

# A method to list our existing students in a particular format
  # This uses a new method, sort_by, which works similar to sort & came from the documentation
  # Then we're using string interpolation to define exactly what we want the output to look like
def list_students
<<<<<<< HEAD
  @students.sort_by {|n| n[:name]}
=======
  @students.reverse.sort_by {|n| n[:name] }
>>>>>>> f1bb4f5d9f4dd57064422f0e69103381a2912028
end

# n is a placeholder, "i" can also be used

# A method to count how many students we have, also using string interpolation to generate output
def count_students
<<<<<<< HEAD
	@students.count
	puts "There are #{num_students} students in the class"
=======
	@students.length
>>>>>>> f1bb4f5d9f4dd57064422f0e69103381a2912028
end

### BONUS

# A method to print a student's email, where the student's name can be passed as an argument to run the 'search'.
def student_details(student_name)
<<<<<<< HEAD
	@students.find {|n| n[:name] == student_name}[:email]
=======
		@students.find {|n| n[:name] == student_name} [:email]
>>>>>>> f1bb4f5d9f4dd57064422f0e69103381a2912028
end
