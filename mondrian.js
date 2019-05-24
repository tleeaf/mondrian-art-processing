var whiteRatioSlider
var whiteRatioVal
var gridscale, unit
var frameW, frameH

function setup() {
  w = 3000
  h = 1001
  frameW = 2001
  frameH = 1001
  
  gridscale = .5
  createCanvas(w,h)
  unit = 50 * gridscale
  
  strokeWeight(unit/5)
  
  whiteRatioSlider = createSlider(10,90,1);
  whiteRatioSlider.position(2050,10);
  whiteRatioSlider.style('width', '80px');
  whiteRatioVal = whiteRatioSlider.value()
  drawGrid(frameW,frameH,unit)
}

function draw() {
  if(whiteRatioVal != whiteRatioSlider.value()){
    whiteRatioVal = whiteRatioSlider.value()
    drawGrid(frameW,frameH,unit)
  }
}

function drawGrid(x,y,gridUnit){
    for(var i = 0; i < frameW; i+=gridUnit){
    for(var j = 0; j < frameH; j+=gridUnit){
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
  var red = color(255,0,0)
  var blue = color(0,0,255)
  var yellow = color(255,255,0)
  //var white = color(255,255,255)
  //var black = color(0,0,0)
  var colors = [red,blue,yellow]
  var p = random(10,90)
  if(p < whiteRatioVal){
    return color(255,255,255)
  }
  else{
    return random(colors)
  }
}
