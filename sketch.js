var trex, trex_running, trex_crouching;
var edges;
var ground, ground_image;
var cloud, cloud_image;
//var cloud2;
var invisibleground;
var cactu1, cactu2, cactu3, cactu4, cactu5, cactu6, birdG, birdanm, birdimg, cloudG, cactuG;
var gameover, restart, gameoverimg, restartimg;
var score = 0;
var highscore = 0;
var PLAY=1;
var END=0;
var gamestate = PLAY;
var jumpsound, failsound, checkpointsound;
var trexIsCrouching = false;
var trexIsJumping = false;
var highscoreS, highscoreimg  ;
var Isnight = false;
var Isday = true;
var dayMost = true;
var nightMost = false;
var trexIsInvencibleCactus = false;
var trexIsInvencibleBirds = false;
var crouchbutton, crouchbuttonimg;
var staranim;

function preload() {
  //carregar imagens em variáveis auxiliares
  trex_running = loadAnimation("./trex/trex1-blink.png",  "./trex/trex3.png", "./trex/trex4.png", 
  "./trex/trex1.png", "./trex/trex3.png", "./trex/trex4.png");
  trex_collided = loadAnimation("./trex/trex_collided.png");
  ground_image = loadImage("ground2.png");
  cloud_image = loadImage("./imagens-de-fundo/cloud.png");
  trex_crouching = loadAnimation("./trex/trex_low1-blink.png", "./trex/trex_low2.png", 
  "./trex/trex_low1.png", "./trex/trex_low2.png", 
  "./trex/trex_low1.png", "./trex/trex_low2.png");
  cactu1 = loadImage("./inimigos-obstaculos/obstacle1.png");
  cactu2 = loadImage("./inimigos-obstaculos/obstacle2.png");
  cactu3 = loadImage("./inimigos-obstaculos/obstacle3.png");
  cactu4 = loadImage("./inimigos-obstaculos/obstacle4.png");
  cactu5 = loadImage("./inimigos-obstaculos/obstacle5.png");
  cactu6 = loadImage("./inimigos-obstaculos/obstacle6.png");
  gameoverimg = loadImage("gameOver.png");
  restartimg = loadImage("restart.png");
  jumpsound = loadSound("jump.mp3");
  failsound = loadSound("fail.mp3");
  checkpointsound = loadSound("checkPoint.mp3");
  birdanm = loadAnimation("./inimigos-obstaculos/bird1.png", 
  "./inimigos-obstaculos/bird2.png");
  birdimg = loadAnimation("./inimigos-obstaculos/bird1.png");
  highscoreimg = loadImage("./imagens-de-pontuacao/highscore.png");
  crouchbuttonimg = loadImage("down_arrow.png");
  staranim = loadAnimation("./imagens-de-fundo/star1.png", 
  "./imagens-de-fundo/star2.png", "./imagens-de-fundo/star3.png");
}

function setup() {
  //criação da area do jogo
  createCanvas(windowWidth, windowHeight);//600, 200
  ground = createSprite(width/2, 180, 400, 20);
  ground.addImage("ground", ground_image);
  
  highscoreS = createSprite(100, 33, 10, 10);//windowWidth-80, 33
  highscoreS.addImage("highscoreimg", highscoreimg);
  highscoreS.scale = 1.2;
  
  crouchbutton = createSprite(width/2, 30, 15, 15);
  crouchbutton.addImage("crouchbutton", crouchbuttonimg);
  crouchbutton.scale = 0.7;
  
  /*cloud1 = createSprite(160, 100, 30, 30);
  cloud1.addImage("cloud", cloud_image);
  cloud1.scale = 0.5;
  cloud2 = createSprite(460, 60, 30, 30);
  cloud2.addImage("cloud", cloud_image);
  cloud2.scale = 0.5;*/

  //criando o trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.addAnimation("crouching", trex_crouching);
  trex.scale = 0.5;

  //definindo limites
  edges = createEdgeSprites();

  cloudG = new Group();
  cactuG = new Group();
  birdG = new Group();

  gameover = createSprite(width/2, 100);//300, 100
  gameover.addImage("gameover", gameoverimg);
  gameover.visible = false;

  restart = createSprite(width/2, 140);//300, 140
  restart.addImage("restart", restartimg)
  restart.visible = false;
  restart.scale = 0.6;

  invisibleground = createSprite(200, 190, 400, 10);
  invisibleground.visible = false;

  /*var teste = Math.round(random(1, 100));
  console.log(teste);*/
  //trex.setCollider("rectangle", 0, 0, 400, trex.height);
  trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
  //trex.debug=true;
}

function draw() {
  background('white');
  fill('gold');
  stroke('green');
  textSize(20);
  text(highscore, highscoreS.x+25, 40);
  textAlign("center");
  //if(Isnight == false){
  //  background('white'); //nao testei
  //}
  text("Pontuação: "+score, highscoreS.x, 20);//500
  /*if(cloud1.x < -20){
    cloud1.x = 645;
  }
  if(cloud2.x > 670){
    cloud2.x = -10;
  }*/
  //console.log(trex.y);
  if(gamestate == PLAY){
    if(score%700==0){
      if(Isnight == false&&dayMost == true){
        turnnight();
      }
      if(Isday == false&&nightMost == true){
        turnday();
      }
    }
    cloudG.setVelocityXEach(-(4+3*score/100));//-(5+score/100)
    cactuG.setVelocityXEach(-(5+score/100));//-(5+score/100)
    birdG.setVelocityXEach(-(5+score/100));//-(5+score/100)
    //ground.velocityX = -2;
    ground.velocityX = -(4+3*score/100);//-(4+3*score/100)
    score = score+Math.round(getFrameRate()/30);
    if(score>0&&score%100==0){
      checkpointsound.play();
    }
    if(ground.x < 350){//< 0
      ground.x = ground.width/2;
    }
    if(keyDown("space")&&trex.y >=150&&trexIsCrouching==false||
    keyDown('W')&&trex.y >=150&&trexIsCrouching==false||
    keyDown("UP_ARROW")&&trex.y >=150&&trexIsCrouching==false||
    touches.length > 0&&trex.y >=150&&trexIsCrouching==false){//&&!mouseIsOver(crouchButton)){
      touches = [];
      trex.velocityY = -10;
      jumpsound.play();
      //trexIsJumping=true;
    }
    if(trex.y>=150){
      trexIsJumping = false;
    }
    if(trex.y<150){
      trexIsJumping = true;
    }
    //console.log(trexIsJumping);
    //console.log(trex.y);
    if(keyWentDown('S')&&trexIsJumping==false
    ||  keyWentDown("DOWN_ARROW")&&trexIsJumping==false
    ||mouseIsOver(crouchbutton)&&trexIsJumping==false){
      //trex.addAnimation("crouching", trex_crouching);
      trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
      trex.changeAnimation("crouching", trex_crouching);
      trexIsCrouching=true;
      //trex.velocityX = 2;
    }if(keyWentUp('S')
    ||keyWentUp("DOWN_ARROW")//){
    ||!keyDown("DOWN_ARROW")&&!mouseIsOver(crouchbutton)
    ||!keyDown('S')&&!mouseIsOver(crouchbutton)){
      //trex.addAnimation("running", trex_running);
      trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
      trex.changeAnimation("running", trex_running);
      trexIsCrouching=false;
      //trex.velocityX = 0;
    }
    trex.velocityY = trex.velocityY + 0.5;
    createcactu();
    createclouds();
    createbird();
    if(cactuG.isTouching(trex)&&trexIsInvencibleCactus == false
    ||birdG.isTouching(trex)&&trexIsInvencibleBirds == false){
      //trex.velocityY = -10;
      //jumpsound.play();
      gamestate = END;
      failsound.play();
    }
  }
  else if(gamestate == END){
    ground.velocityX = 0;
    trex.changeAnimation("collided", trex_collided);
    trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
    trex.velocityY = 0;
    cactuG.setLifetimeEach(-1);
    birdG.setLifetimeEach(-1);
    cloudG.setLifetimeEach(-1);
    cactuG.setVelocityXEach(0);
    cloudG.setVelocityXEach(0);
    birdG.setVelocityXEach(0);
    //birdG.addAnimation("bird", birdimg);
    //birdG.changeAnimation("bird", birdimg);
    restart.visible = true;
    gameover.visible = true;
    if(mousePressedOver(restart)
    ||touches.length > 0){
      //console.log("Reinicia.");
      reset();
      touches = [];
    }
  }
  //pular quando a tecla de espaço for pressionada
  
  
  
  //cloud1.velocityX =  -0.5;
  //cloud2.velocityX =  +0.5;
  //gravidade
  //colidindo
  //trex.collide(edges[3]);
  trex.collide(invisibleground);
  
  //console.log(frameCount);
  drawSprites();
}
function createclouds(){
  if(frameCount%60==0){//frameCount%60==0
  cloud = createSprite(width+10, 100, 10, 10);//610, 100
  //cloud.velocityX = -(4+3*score/100);//-(5+score/100)
  cloud.addImage("cloud", cloud_image);
  cloud.lifetime = 415;//215
  cloud.scale = 0.5;
  cloud.y = Math.round(random(50, 100));//windowHeight-100(windowHeight update soon(maybe))
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
  cloud.depth = crouchbutton.depth;
  crouchbutton.depth = crouchbutton.depth+1;
  crouchbutton.depth = gameover.depth;
  cloud.depth = gameover.depth;
  gameover.depth = gameover.depth+1;
  trex.depth = gameover.depth;
  gameover.depth = gameover.depth+1;
  cloudG.add(cloud);
}
}

function createcactu(){
  if(frameCount%50==0){//frameCount%60==0
  var cactu = createSprite(width+10, 165, 10, 40);//610, 165
  //cactu.velocityX = -(5+score/100);//-(5+score/100)
  var aleatorio = Math.round(random(1, 6));
  switch(aleatorio){
    case 1:cactu.addImage(cactu1);
    break;
    case 2:cactu.addImage(cactu2);
    break;
    case 3:cactu.addImage(cactu3);
    break;
    case 4:cactu.addImage(cactu4);
    break;
    case 5:cactu.addImage(cactu5);
    break;
    case 6:cactu.addImage(cactu6);
    break;
    default:break;
  }
  cactu.scale = 0.5;
  cactu.lifetime = 315;//215
  cactuG.add(cactu);
  }
}

function createbird(){
  if(frameCount%225==0&&score>300){//frameCount%230==0
    var bird = createSprite(width+10, 100, 10, 10);//610, 100
    //bird.velocityX = -(5+score/100);//-(5+score/100)
    bird.lifetime = 315;//215
    bird.addAnimation("bird", birdanm);
    bird.scale = 0.51;
    bird.y = Math.round(random(130, 130));
    birdG.add(bird);
  }
}

function reset(){
  gamestate = PLAY;
  restart.visible = false;
  gameover.visible = false;
  cactuG.destroyEach();
  cloudG.destroyEach();
  birdG.destroyEach();
  trex.changeAnimation("running", trex_running);
  if(score>highscore){
    highscore = score;
  }
  score = 0;
  
}

function turnnight(){
  Isnight = true;
  Isday = false;
}

function turnday(){
  Isnight = false;
  Isday = true;
}
