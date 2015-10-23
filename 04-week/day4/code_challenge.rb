def ex_oh string return string.count('x') == string.count('o') end

#   if (string.count 'x') == (string.count 'o')
#     return true
#   else
#     return false
#   end
# end

puts ex_oh('xoxooxoxx')

def additive_persistence(num)
  while num.to_s.length > 1
    additive_1 = 0
    arr = num.to_s.each_char.map { |c| c.to_i }
    arr.each { |d| additive_i += d }
    num = additive_i
  end
  num
end
