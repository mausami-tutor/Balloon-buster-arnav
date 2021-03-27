var bow , arrow,  bg, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var ss;
var explosion;
var gameOverImg,restartImg;
var exp;

var play=1
var end=2
var gameState=play
function preload(){

  explosion=loadAnimation("exp1.png","exp2.png","exp3.png","exp4.png","exp5.png","exp6.png","exp7.png","exp8.png","exp9.png","exp10.png");

    backgroundImage = loadImage("bg.jpg");
  
    arrowImage = loadImage("arrow.png");
    bowImage = loadImage("bow.png");
    red_balloonImage = loadImage("red_ball.png");
    green_balloonImage = loadImage("greenball.png");
    pink_balloonImage = loadImage("pinkball.png");
    ss = loadSound("h.mp3");
    arrowSound=loadSound("arrow.mp3")
    explosionSound=loadSound("Explosion1.mp3")
    restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
   
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    
    
    bg = createSprite(windowWidth/2,windowHeight/2);
    bg.addImage(backgroundImage);
    bg.scale = 1
    bow = createSprite(windowWidth/2,700,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.3;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  exp=createSprite(width/2, height/2, 20,20)
  exp.scale=1.5
  exp.visible=false

}

function draw() {

    background("white")
    if(gameState===play){
      bg.velocityX = -3 
      gameOver.visible = false;
      restart.visible = false;
      
  
      if (bg.x < 200){
        bg.x = windowWidth/2+300;
      }
      bow.x = World.mouseX
      var select_balloon = Math.round(random(1,4));
    
      if (World.frameCount % 100 == 0) {
        if (select_balloon == 1) {
          redBalloon();
        } else if (select_balloon == 2) {
          greenBalloon();
        
        } else {
          pinkBalloon();
        }
      }
    /*  if(arrowGroup[0]!==undefined && redB[0]!== undefined){
        if (arrowGroup[0].isTouching(redB[0])) {
        redB[0].destroy();
        arrowGroup[0].destroy();
        score=score+1;
        }
      }
  
  
      if(arrowGroup[0]!==undefined && greenB[0]!== undefined){
      
        if (arrowGroup[0].isTouching(greenB[0])) {
          greenB[0].destroy();
          arrowGroup[0].destroy();
          score=score+1;
        }
      }
    
      if(arrowGroup[0]!==undefined && pinkB[0]!== undefined){
        if (arrowGroup[0].isTouching(pinkB[0])) {
          pinkB[0].destroy();
          arrowGroup[0].destroy();
          score=score+1;
        }
      }*/

      for (i=0;i<arrowGroup.length;i++){
        for(j=0;j<greenB.length;j++){
          if(arrowGroup[i]!== undefined && greenB[j]!== undefined && arrowGroup[i]. isTouching (greenB[j])){
            arrowGroup[i].destroy()
            greenB[j].destroy()
            score=score+1
          }
        }
      }
      for (i=0;i<arrowGroup.length;i++){
        for(j=0;j<redB.length;j++){
          if(arrowGroup[i]!== undefined && redB[j]!== undefined && arrowGroup[i]. isTouching (redB[j])){
            arrowGroup[i].destroy()
            redB[j].destroy()
            score=score+1
          }
        }
      }
      for (i=0;i<arrowGroup.length;i++){
        for(j=0;j<pinkB.length;j++){
          if(arrowGroup[i]!== undefined && pinkB[j]!== undefined && arrowGroup[i]. isTouching (pinkB[j])){
            arrowGroup[i].destroy()
            pinkB[j].destroy()
            score=score+1
          }
        }
      }


      if(redB[0]!==undefined){
        if(redB[0].y>height-10){
          gameState=end
          exp.x=redB[0].x
          exp.y=redB[0].y
          exp.visible=true
          exp.addAnimation("blast",explosion)
          redB[0].destroy()
          explosionSound.play()
        }
      }
      if(greenB[0]!==undefined){
        if(greenB[0].y>height-10){
          gameState=end
          exp.x=greenB[0].x
          exp.y=greenB[0].y
          exp.visible=true
          exp.addAnimation("blast",explosion)
          greenB[0].destroy()
          explosionSound.play()
        }
      }
      if(pinkB[0]!==undefined){
        if(pinkB[0].y>height-10){
          gameState=end
          exp.x=pinkB[0].x
          exp.y=pinkB[0].y
          exp.visible=true
          exp.addAnimation("blast",explosion)
          pinkB[0].destroy()
          explosionSound.play()
        }
      }
      
    }
    if (gameState===end){
      bg.velocityX = 0;
      gameOver.visible = true;
      restart.visible = true;
      pinkB.setVelocityYEach(0);
      redB.setVelocityYEach(0);
      greenB.setVelocityYEach(0);
      greenB.setLifetimeEach(-1);
      blueB.setLifetimeEach(-1);
      pinkB.setLifetimeEach(-1);
    }
    console.log(gameState)   
    
    drawSprites();
      text("Score: "+ score, 500,50);
      if(mousePressedOver(restart)) {
        reset();
      }
  
  }
  
  
  function redBalloon() {
    var red = createSprite(Math.round(random(20, 700)),0, 10, 10);
    red.addImage(red_balloonImage);
    red.velocityY = 3;
    red.lifetime = 400;
    red.scale = 1.0;
    redB.add(red);
  }
  
  
  
  function greenBalloon() {
    var green = createSprite(Math.round(random(20, 700)),0, 10, 10);
    green.addImage(green_balloonImage);
    green.velocityY  = 3;
    green.lifetime = 400;
    green.scale = 0.03;
    greenB.add(green);
  }
  
  function pinkBalloon() {
    var pink = createSprite(Math.round(random(20, 700)),0, 10, 10);
    pink.addImage(pink_balloonImage);
    pink.velocityY  = 3;
    pink.lifetime = 400;
    pink.scale = 0.5
    pinkB.add(pink);
  }
  
  
  // Creating  arrows for bow
   function createArrow() {
    var arrow= createSprite(100, 700, 60, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.x=bow.x;
    arrow.velocityY = -6;
    arrow.lifetime = 100;
    arrow.scale = 0.1;
    arrowGroup.add(arrow);
    
  }

  function keyPressed(){
if(keyCode===32){

    createArrow();
    //ss.play();
    arrowSound.play()
}


  }
  function reset(){
    gameState=play
     pinkB.destroyEach();
     redB.destroyEach();
     greenB.destroyEach();
     
     score = 0
      exp.visible=false
     
 }
  