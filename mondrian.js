
function setup() {
  w = 2001
  h = 1001
  scale = 0.3
  createCanvas(w,h)
  unit = 50 * scale
  strokeWeight(unit/4)
  rect(h/2,w/2,unit,unit)
  for(var i = 0; i < w; i+=unit){
    for(var j = 0; j < h; j+=unit){
      fill(randomMondrianColor())
      rect(i,j,unit,unit)
    }   
  }
}

function randomMondrianColor(){
  //var red = color(255,0,0)
  //var blue = color(0,0,255)
  //var yellow = color(255,255,0)
  //var white = color(255,255,255)
  //var black = color(0,0,0)

  var p = random(1)
  if(p < 0.8){
    return color(255,255,255)
  }
  else{
    if(p < 0.85){
      return color(255,255,0)
    }
    if(p < 0.9){
      return color(0,0,255)
    }
    else return color(255,0,0)
  }
}

function draw() {
  
}
