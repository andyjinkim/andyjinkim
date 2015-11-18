console.log("hello");
var x = 0
var y = 0
var vy = 6.36

function preload(){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=santa+monica&APPID=7bbbb47522848e8b9c26ba35c226c734'
  weather = loadJSON(url);
  vy = weather.wind.speed
}

function setup(){
  createCanvas(800,600);
  background(128);
};

function draw(){
  background(128)
  rect(x, y += vy, 200, 150)
}
