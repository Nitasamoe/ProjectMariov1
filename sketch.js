var worldSetup = [2,2,2,2,2,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3]
var worldViewState = []
function setup() {
  createCanvas(200,200);
  frameRate(10);
}

var mario = {
  posX:50,
  posY:50,
  inAir:false
}


// JUMP
keyPressed()
function keyPressed(){
    if(keyCode=== UP_ARROW){
      if(mario.inAir === false){
      mario.posY -= 20;
      mario.inAir = true;
      setTimeout(function(){mario.inAir= false},570)
    }
  }
}


function draw(){


  //States
  var movState = Math.round((mario.posX-5)/10);
  var worldState = {
    posY:94+worldSetup[movState]*10, // gives me the height of the world at point of movState
  }

  // gravity setup
  if(mario.posY < worldState.posY){
    mario.posY += 3;
  }



  background(255,255,255)

  if(keyIsDown(RIGHT_ARROW)){mario.posX +=5;}

  if(keyIsDown(LEFT_ARROW)){mario.posX -=5;}

  ellipse(mario.posX,mario.posY,10);


  for(var i=0; i<worldSetup.length;i++){

    let posOneX=i*10;
    let posOneY=(height/2)+worldSetup[i]*10;
    let posTwoX=i*10+10;
    let posTwoY=(height/2)+worldSetup[i]*10;
    let posOldX= (i-1)*10;;
    let posOldY= (height/2)+worldSetup[i-1]*10;;

    line(posOneX,posOneY,posTwoX,posTwoY);

}
}
