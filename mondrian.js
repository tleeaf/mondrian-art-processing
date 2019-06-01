var whiteRatioSlider;
var whiteRatioVal;
var gridscale, unit;
var frameW, frameH;
var Xdim = 20, Ydim = 20;
var MAX_BLOCK_SIZE = 4;
var gridMap;
var gridMapIndex;

function initGridMap(){
  gridMap = Array(Xdim);
  for(var i = 0; i < gridMap.length; i++){
    gridMap[i] = Array(Ydim).fill(0);
  }
  gridMapIndex = Array(Xdim*Ydim).fill(0).map(function(x,i){
  return i;
});
}

function setup() {
  w = 2000;
  h = 801;
  frameW = 1001;
  frameH = 801;
  
  gridscale = 0.5;
  createCanvas(w,h);
  unit = 50 * gridscale;
  
  whiteRatioSlider = createSlider(10,90,75,1);
  whiteRatioSlider.position(frameW + 50,10);
  whiteRatioSlider.style('width', '80px');
  text("Color <-> White",frameW + 50 ,40);
  
  stroke(40);
  strokeWeight(unit/10);
  
  
  
  
  whiteRatioVal = whiteRatioSlider.value();
  drawVariedGrid(unit);
}

function draw() {
  if(whiteRatioVal != whiteRatioSlider.value()){
    whiteRatioVal = whiteRatioSlider.value();
    drawVariedGrid(unit);
  }
}


function drawVariedGrid(gridUnit){
  initGridMap();
  var blockNumber = 1;
  while(gridMapIndex.length > 0){
    var blockW = int(random(1,MAX_BLOCK_SIZE));
    var blockH = int(random(1,MAX_BLOCK_SIZE));
    placeBlock(blockW,blockH,blockNumber);
    blockNumber++;
  }
}

//finds the next free space
function placeBlock(blockW, blockH,number){ 
   var nextFreeSpace = flatTo2DIndex(gridMapIndex[0],Xdim,Ydim);
   var X = nextFreeSpace[0];
   var Y = nextFreeSpace[1];
   markSpaces(X,Y,blockW,blockH,number);
}

//given a starting cell index, mark the adjacent cells occupied based on the width and height of the block
function markSpaces(startX,startY,blockW,blockH,number){
   //gridMap[startX][startY]
   if(startX + blockW > Xdim)
     blockW = Xdim - startX;
   if(startY + blockH > Ydim)
     blockH = Ydim - startY;
   var actualW = blockW
   for(var i = startX; i < startX + blockW; i++){
  
     for(var j = startY; j < startY + blockH; j++){
      if(gridMapIndex.indexOf(j*Ydim + i) < 0){
        actualW = i - startX;
        break;
      }
       if(i < Xdim && j < Ydim){
         gridMap[i][j] = number;
         gridMapIndex.splice(gridMapIndex.indexOf(j*Ydim + i),1);
       }
     }
   }
   drawBlock(startX,startY,actualW,blockH);
}

function flatTo2DIndex(index,xMax,yMax){
   return [index%xMax,floor(index/yMax),];
}

function flatFrom2DIndex(X,Y){
  return Y*Ydim + X;
}

function drawEvenGrid(x,y,gridUnit){
    for(var i = 0; i < frameW; i+=gridUnit){
    for(var j = 0; j < frameH; j+=gridUnit){
      drawBlock(i,j,unit,unit);
    }   
  }
}

function drawBlock(x,y,sizeX,sizeY){
  fill(randomMondrianColor());
  rect(x*unit,y*unit,sizeX*unit,sizeY*unit);
}

function drawBlockRandomSize(x,y,size){
  var p1 = random(4);
  var p2 = random(4);
  fill(randomMondrianColor());
  rect(x,y,size*p1,size*p2);
}

function drawBlockRandomPosition(x,y,size){
  var p1 = random(1,10);
  var p2 = random(1,10);
  fill(randomMondrianColor());
  rect(x+p1*random(-1,1),y+p2*random(-1,1),size,size);
}

function drawBlockRandomPositionAndSize(x,y,size){
  var p1 = random(1,10);
  var p2 = random(1,10);
  fill(randomMondrianColor());
  rect(x+p1*random(-1,1),y+p2*random(-1,1),size*p1,size*p2);
}

function randomMondrianColor(){
  var red = color(230,0,0);
  var blue = color(0,0,230);
  var yellow = color(240,240,0);
  var black = color(40);
  var colors = [red,blue,yellow,black];
  var p = random(10,90);
  if(p < whiteRatioVal){
    return color(250,250,250);
  }
  else{
    return random(colors);
  }
}
