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
var highscoreS, highscoreimg;

function preload() {
  //carregar imagens em variáveis auxiliares
  trex_running = loadAnimation("trex1-blink.png",  "trex3.png", "trex4.png", 
  "trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  ground_image = loadImage("ground2.png");
  cloud_image = loadImage("cloud.png");
  trex_crouching = loadAnimation("trex_low1-blink.png", "trex_low2.png", 
  "trex_low1.png", "trex_low2.png", 
  "trex_low1.png", "trex_low2.png");
  cactu1 = loadImage("obstacle1.png");
  cactu2 = loadImage("obstacle2.png");
  cactu3 = loadImage("obstacle3.png");
  cactu4 = loadImage("obstacle4.png");
  cactu5 = loadImage("obstacle5.png");
  cactu6 = loadImage("obstacle6.png");
  gameoverimg = loadImage("gameOver.png");
  restartimg = loadImage("restart.png");
  jumpsound = loadSound("jump.mp3");
  failsound = loadSound("fail.mp3");
  checkpointsound = loadSound("checkPoint.mp3");
  birdanm = loadAnimation("bird1.png", "bird2.png");
  birdimg = loadAnimation("bird1.png");
  highscoreimg = loadImage("highscore.png");
}

function setup() {
  //criação da area do jogo
  createCanvas(600, 200);
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", ground_image);
  
  highscoreS = createSprite(520, 33, 10, 10);
  highscoreS.addImage("highscoreimg", highscoreimg);
  highscoreS.scale = 1.2;
  
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

  gameover = createSprite(300, 100);
  gameover.addImage(gameoverimg);
  gameover.visible = false;

  restart = createSprite(300, 140);
  restart.addImage(restartimg)
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
  text("Score: "+score, 450, 20);//500
  text(highscore, highscoreS.x+15, 40);
  /*if(cloud1.x < -20){
    cloud1.x = 645;
  }
  if(cloud2.x > 670){
    cloud2.x = -10;
  }*/
  //console.log(trex.y);
  if(gamestate == PLAY){
    //ground.velocityX = -2;
    ground.velocityX = -(4+3*score/100);
    score = score+Math.round(getFrameRate()/30);
    if(score>0&&score%100==0){
      checkpointsound.play();
    }
    if(ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&&trex.y >=150&&trexIsCrouching==false||
    keyDown('W')&&trex.y >=150&&trexIsCrouching==false||
    keyDown("UP_ARROW")&&trex.y >=150&&trexIsCrouching==false){
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
    if(keyWentDown("S")&&trexIsJumping==false||keyWentDown("DOWN_ARROW")&&trexIsJumping==false){
      //trex.addAnimation("crouching", trex_crouching);
      trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
      trex.changeAnimation("crouching", trex_crouching);
      trexIsCrouching=true;
      //trex.velocityX = 2;
    }if(keyWentUp("S")||keyWentUp("DOWN_ARROW")){
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
    if(cactuG.isTouching(trex)||birdG.isTouching(trex)){
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
  if(frameCount%60==0){
  cloud = createSprite(610, 100, 10, 10);
  cloud.addImage("cloud", cloud_image);
  cloud.scale = 0.5;
  cloud.y = Math.round(random(50, 100));
  cloud.velocityX = -3;
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
  cloud.depth = gameover.depth;
  gameover.depth = gameover.depth+1;
  trex.depth = gameover.depth;
  gameover.depth = gameover.depth+1;
  cloudG.add(cloud);
}
}

function createcactu(){
  if(frameCount%60==0){
  var cactu = createSprite(610, 165, 10, 40);
  cactu.velocityX = -(5+score/100);
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
  cactu.lifetime = 215;
  cactuG.add(cactu);
  }
}

function createbird(){
  if(frameCount%230==0&&score>300){
    var bird = createSprite(610, 100, 10, 10);
    bird.velocityX = -(5+score/100);
    bird.lifetime = 215;
    bird.addAnimation("bird", birdanm);
    bird.scale = 0.4;
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
