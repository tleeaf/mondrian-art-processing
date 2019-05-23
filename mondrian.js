
function setup() {
  w = 2001
  h = 1001
  gridscale = 1
  createCanvas(w,h)
  unit = 50 * gridscale
  strokeWeight(unit/4)
  rect(h/2,w/2,unit,unit)
  for(var i = 0; i < w; i+=unit){
    for(var j = 0; j < h; j+=unit){
      drawBlock(i,j,unit)
      //drawBlockRandomSize(i,j,unit)
      //drawBlockRandomPosition(i,j,unit)
      //drawBlockRandomPositionAndSize(i,j,unit)
    }   
  }
}

function drawBlock(x,y,size){
  fill(randomMondrianColor())
  rect(x,y,size,size)
}

function drawBlockRandomSize(x,y,size){
  var p1 = random(4)
  var p2 = random(4)
  fill(randomMondrianColor())
  rect(x,y,size*p1,size*p2)
}

function drawBlockRandomPosition(x,y,size){
  var p1 = random(1,10)
  var p2 = random(1,10)
  fill(randomMondrianColor())
  rect(x+p1*random(-1,1),y+p2*random(-1,1),size,size)
}

function drawBlockRandomPositionAndSize(x,y,size){
  var p1 = random(1,10)
  var p2 = random(1,10)
  fill(randomMondrianColor())
  rect(x+p1*random(-1,1),y+p2*random(-1,1),size*p1,size*p2)
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
