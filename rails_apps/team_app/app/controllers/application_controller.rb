class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  @@database = [
      {name: "Jarrett Jack", age: 31, number: 0, position: "Point Guard", ppg: 14.3, rpg: 3.9, apg: 5.7, stl: 1.1, blk: 0.3},
      {name: "Bojan Bogdanovic", age: 26, number: 44, position: "Shooting Guard", ppg: 13.8, rpg: 4.4, apg: 1.5, stl: 0.7, blk: 0.2},
      {name: "Joe Johnson", age: 34, number: 7, position: "Small Forward", ppg: 15.5, rpg: 4.4, apg: 3.5, stl: 0.7, blk: 0.2},
      {name: "Thaddeus Young", age: 27, number: 30, position: "Power Forward", ppg: 16.7, rpg: 6.4, apg: 2.5, stl: 1.9, blk: 0.5},
      {name: "Brook Lopez", age: 27, number: 11, position: "Center", ppg: 21.4, rpg: 8.7, apg: 1.1, stl: 0.7, blk: 2.1},
    ]

  @@imagedatabase = [
    {url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2768.png&w=350&h=254", title: "Jarrett Jack"},
    {url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3593.png&w=350&h=254", title: "Bojan Bogdanovic"},
    {url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1007.png&w=350&h=254", title: "Joe Johnson"},
    {url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3244.png&w=350&h=254", title: "Thaddeus Young"},
    {url: "http://a.espncdn.com/i/headshots/nba/players/full/3448.png", title: "Brook Lopez"}
  ]

end
