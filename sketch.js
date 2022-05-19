var trex, trex_running, trex_runningnb, trex_crouching, trex_crouchingnb, trex_collided, trex_collidednb, 
trex_runninggreen, trex_crouchinggreen, trex_collidedgreen, 
trex_runningbrown, trex_crouchingbrown, trex_collidedbrown;
var edges;
var ground, ground_image, ground_colored_image;//, groundvisibility = false;
var cloud, cloud_image, cloud_filled_img;
//var cloud2;
var invisibleground;
var cactu1, cactu2, cactu3, cactu4, cactu5, cactu6, cactuG, 
cactu1nb, cactu2nb, cactu3nb, cactu4nb, cactu5nb, cactu6nb, 
birdG, birdanm, birdimg, greenbirdanm, greenbirdimg, brownbirdanm, brownbirdimg, 
cloudG;
var gameover, restart, gameoverimg, gameover_coloredimg, restartimg;
var normalbutton, normalbuttonimg, 
coloridobutton, coloridobuttonimg, 
overnormal, overcolored, 
leftbutton, leftbuttonimg, 
rightbutton, rightbuttonimg, 
selectbutton, selectbuttonimg;
var score = 0;
var highscore = 0;
var PLAY = 1;
var END = 0;
var SELECT = -1;
var gamestate = SELECT;
var jumpsound, failsound, checkpointsound;
var trexIsCrouching = false;
var trexIsJumping = false;
var highscoreS, highscoreimg;
var Isnight = false;
var Isday = true;
var dayMost = true;
var nightMost = false;
var trexIsInvencibleCactus = false;
var trexIsInvencibleBirds = false;
var crouchbutton, crouchbuttonimg;
var staranim;
var dinosaurcolor = "notselected";
var TrexColorido = "notselected";
var coloridobuttonover = false, normalbuttonover = true;
var trexfont;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function preload() {
  //Carregar imagens em variáveis auxiliares.
  trex_running = loadAnimation("./trex/trex1-blink.png",  "./trex/trex3.png", "./trex/trex4.png", 
  "./trex/trex1.png", "./trex/trex3.png", "./trex/trex4.png");
  trex_runningnb = loadAnimation("./trex/trex1-blink(no borders).png",  
  "./trex/trex3(no borders).png", "./trex/trex4(no borders).png", 
  "./trex/trex1(no borders).png", "./trex/trex3(no borders).png", "./trex/trex4(no borders).png");
  trex_runninggreen = loadAnimation("./trex/green/greentrex1-blink(no borders).png",  
  "./trex/green/greentrex3(no borders).png", 
  "./trex/green/greentrex4(no borders).png", "./trex/green/greentrex1(no borders).png", 
  "./trex/green/greentrex3(no borders).png", "./trex/green/greentrex4(no borders).png");
  trex_runningbrown = loadAnimation("./trex/brown/browntrex1-blink(no borders).png",  
  "./trex/brown/browntrex3(no borders).png", 
  "./trex/brown/browntrex4(no borders).png", "./trex/brown/browntrex1(no borders).png", 
  "./trex/brown/browntrex3(no borders).png", "./trex/brown/browntrex4(no borders).png");
  trex_collided = loadAnimation("./trex/trex_collided.png");
  trex_collidednb = loadAnimation("./trex/trex_collided(no borders).png");
  trex_collidedgreen = loadAnimation("./trex/green/trex_collidedgreen(no borders).png");
  trex_collidedbrown = loadAnimation("./trex/brown/trex_collidedbrown(no borders).png");
  ground_image = loadImage("ground2.png");
  ground_colored_image = loadImage("ground2(colored).png");
  cloud_image = loadImage("./imagens-de-fundo/cloud.png");
  cloud_filled_img = loadImage("./imagens-de-fundo/cloud(filled).png");
  trex_crouching = loadAnimation("./trex/trex_low1-blink.png", "./trex/trex_low2(eye fixed).png", 
  "./trex/trex_low1(eye fixed).png", "./trex/trex_low2(eye fixed).png", 
  "./trex/trex_low1(eye fixed).png", "./trex/trex_low2(eye fixed).png");
  trex_crouchingnb = loadAnimation("./trex/trex_low1-blink(no borders).png", 
  "./trex/trex_low2(eye fixed)(no borders).png", "./trex/trex_low1(eye fixed)(no borders).png", 
  "./trex/trex_low2(eye fixed)(no borders).png", 
  "./trex/trex_low1(eye fixed)(no borders).png", "./trex/trex_low2(eye fixed)(no borders).png");
  trex_crouchinggreen = loadAnimation("./trex/green/greentrex_low1-blink(no borders).png", 
  "./trex/green/greentrex_low2(eye fixed)(no borders).png", 
  "./trex/green/greentrex_low1(eye fixed)(no borders).png", 
  "./trex/green/greentrex_low2(eye fixed)(no borders).png", 
  "./trex/green/greentrex_low1(eye fixed)(no borders).png", 
  "./trex/green/greentrex_low2(eye fixed)(no borders).png");
  trex_crouchingbrown = loadAnimation("./trex/brown/browntrex_low1-blink(no borders).png", 
  "./trex/brown/browntrex_low2(eye fixed)(no borders).png", 
  "./trex/brown/browntrex_low1(eye fixed)(no borders).png", 
  "./trex/brown/browntrex_low2(eye fixed)(no borders).png", 
  "./trex/brown/browntrex_low1(eye fixed)(no borders).png", 
  "./trex/brown/browntrex_low2(eye fixed)(no borders).png");
  cactu1nb = loadImage("./inimigos-obstaculos/obstacle1(colored)(no borders).png");
  cactu2nb = loadImage("./inimigos-obstaculos/obstacle2(colored)(no borders).png");
  cactu3nb = loadImage("./inimigos-obstaculos/obstacle3(colored)(no borders).png");
  cactu4nb = loadImage("./inimigos-obstaculos/obstacle4(colored)(no borders).png");
  cactu5nb = loadImage("./inimigos-obstaculos/obstacle5(colored)(no borders).png");
  cactu6nb = loadImage("./inimigos-obstaculos/obstacle6(colored)(no borders).png");
  cactu1 = loadImage("./inimigos-obstaculos/obstacle1.png");
  cactu2 = loadImage("./inimigos-obstaculos/obstacle2.png");
  cactu3 = loadImage("./inimigos-obstaculos/obstacle3.png");
  cactu4 = loadImage("./inimigos-obstaculos/obstacle4.png");
  cactu5 = loadImage("./inimigos-obstaculos/obstacle5.png");
  cactu6 = loadImage("./inimigos-obstaculos/obstacle6.png");
  gameoverimg = loadImage("gameOver.png");
  gameover_coloredimg = loadImage("gameOver(colored).png");
  restartimg = loadImage("restart.png");
  normalbuttonimg = loadImage("normal.png");
  coloridobuttonimg = loadImage("Colorido.png");
  leftbuttonimg = loadImage("left_arrow.png");
  rightbuttonimg = loadImage("right_arrow.png");
  selectbuttonimg = loadImage("select.png");
  jumpsound = loadSound("jump.mp3");
  failsound = loadSound("fail.mp3");
  checkpointsound = loadSound("checkPoint.mp3");
  birdanm = loadAnimation("./inimigos-obstaculos/brownbird1(no borders).png", 
  "./inimigos-obstaculos/brownbird2(no borders).png");
  greenbirdanm = loadAnimation("./inimigos-obstaculos/greenbird1(no borders).png", 
  "./inimigos-obstaculos/greenbird2(no borders).png");
  brownbirdanm = loadAnimation("./inimigos-obstaculos/bird1(no borders).png", 
  "./inimigos-obstaculos/bird2(no borders).png");
  birdimg = loadAnimation("./inimigos-obstaculos/bird1(no borders).png");
  greenbirdimg = loadAnimation("./inimigos-obstaculos/greenbird1(no borders).png");
  brownbirdimg = loadAnimation("./inimigos-obstaculos/brownbird1(no borders).png");
  highscoreimg = loadImage("./imagens-de-pontuacao/highscore.png");
  //crouchbuttonimg = loadImage("down_arrow.png");
  staranim = loadAnimation("./imagens-de-fundo/star1.png", 
  "./imagens-de-fundo/star2.png", "./imagens-de-fundo/star3.png");
  trexfont = loadFont("./Trex.ttf");
}

function setup() {
  //Criação da área do jogo.
  createCanvas(windowWidth - 2.4, windowHeight - 2.5);//600, 200

  var trexImg = createImg('./trex/trex_idle(eye fixed).png');
  trexImg.position(width - width - width - width, height - height - height, height);
  trexImg.size(150, 150);
  
  ground = createSprite(width/2, 180, 400, 20);
  ground.visible = false;
  
  //overnormal = createSprite(width/2+295, height/2, 360);
  //oldcoloridobutton
  //coloridobutton = createSprite(width/2+255, height/2);
  //coloridobutton.addImage("colorido", coloridobuttonimg);
  //coloridobutton.scale = 0.6;
  //coloridobutton.visible = false;

  coloridobutton = createButton("");
  coloridobutton.class("largebuttonC");
  coloridobutton.position(width / 2 + 135, height / 2 - 30);
  coloridobutton.mousePressed(turnColored);
  //oldnormalbutton
  //normalbutton = createSprite(width/2-255, height/2);
  ////normalbutton.addImage("colorido", coloridobuttonimg);
  ////normalbutton.scale = 0.6;
  //normalbutton.visible = false;
  
  normalbutton = createButton("");
  normalbutton.class("largebuttonN");
  normalbutton.position(width / 2 -415, height / 2 - 30);
  normalbutton.mousePressed(turnNormal);
  
  /*leftbutton = createSprite(width/2-75, 30, 15, 15);
  leftbutton.addImage("leftarrow", leftbuttonimg);
  leftbutton.scale = 0.7;

  rightbutton = createSprite(width/2+75, 30, 15, 15);
  rightbutton.addImage("rightarrow", rightbuttonimg);
  rightbutton.scale = 0.7;

  selectbutton = createSprite(width/2, 30, 15, 15);
  selectbutton.addImage("selectbutton", selectbuttonimg);
  selectbutton.scale = 0.7;*/
  
  highscoreS = createSprite(100, 33, 10, 10);//windowWidth-80, 33
  highscoreS.addImage("highscoreimg", highscoreimg);
  highscoreS.scale = 1.2;
  highscoreS.visible = false;
  //old crouch button
  //crouchbutton = createSprite(width/2, 30, 15, 15);
  //crouchbutton.addImage("crouchbutton", crouchbuttonimg);
  //crouchbutton.scale = 0.7;
  //crouchbutton.visible = false;

  crouchbutton = createButton("");
  crouchbutton.position(width / 2-35, -350);
  crouchbutton.class("crouchbutton");
  crouchbutton.mousePressed(crouch);
  
  /*cloud1 = createSprite(160, 100, 30, 30);
  cloud1.addImage("cloud", cloud_image);
  cloud1.scale = 0.5;
  cloud2 = createSprite(460, 60, 30, 30);
  cloud2.addImage("cloud", cloud_image);
  cloud2.scale = 0.5;*/

  //criando o trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("runningnb", trex_runningnb);
  trex.addAnimation("collidednb", trex_collidednb);
  trex.addAnimation("collided", trex_collided);
  trex.addAnimation("crouching", trex_crouching);
  trex.addAnimation("crouchingnb", trex_crouchingnb);
  trex.addAnimation("running_green", trex_runninggreen);
  trex.addAnimation("collided_green", trex_collidedgreen);
  trex.addAnimation("crouching_green", trex_crouchinggreen);
  trex.addAnimation("running_brown", trex_runningbrown);
  trex.addAnimation("collided_brown", trex_collidedbrown);
  trex.addAnimation("crouching_brown", trex_crouchingbrown);
  if(TrexColorido == false){
    trex.changeAnimation("running", trex_running);
  }
  trex.scale = 0.5;
  trex.visible = false;

  //definindo limites
  edges = createEdgeSprites();

  cloudG = new Group();
  cactuG = new Group();
  birdG = new Group();

  gameover = createSprite(width/2, 100);//300, 100
  
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
  if(TrexColorido == true && Isday == true){
    background('cyan');
  }else if(TrexColorido == false && Isday == true){
    background('white');
  }else if(TrexColorido !== false && TrexColorido !== true && Isday == true){
    background('white');
  }
  fill('gold');
  stroke('green');
  textSize(15);
  textFont(trexfont);
  if(gamestate !== SELECT){
    text(highscore, highscoreS.x+25, 42);
    textAlign("center");
    text("PONTUAÇÃO: "+score, highscoreS.x+45, 20);//500
  }
  textAlign("center");
  //if(Isnight == false){
  //  background('white'); //nao testei
  //}
  if(dinosaurcolor == "notselected"){
    setDinosaurColor();
  }
  
  if(gamestate == SELECT){
    //textAlign("center");
    fill('cyan');
    stroke('white');
    textSize(45);
    /*text("C", coloridobutton.x-115, coloridobutton.y+25);
    fill('red');
    text("O", coloridobutton.x-70, coloridobutton.y+25);
    fill('orange');
    text("L", coloridobutton.x-25, coloridobutton.y+25);
    fill('lightgreen');
    text("O", coloridobutton.x+20, coloridobutton.y+25);
    fill('lightpink');
    text("R", coloridobutton.x+65, coloridobutton.y+25);
    fill('purple');
    text("I", coloridobutton.x+105, coloridobutton.y+25);
    fill('yellow');
    text("D", coloridobutton.x+153, coloridobutton.y+25);
    fill('lime');
    text("O", coloridobutton.x+200, coloridobutton.y+25);
    fill('gray');
    text("N O R M A L", normalbutton.x+55, normalbutton.y+25);*/
    fill('cyan');
    stroke('green');
    textAlign("center");
    textSize(32);
    text("Selecione Um Modo De Jogo.", width / 2, height/2-95);
    //text("Use As Setas Ou WASD.", width/2, height/2-55);
    /*if(normalbuttonover == true){
      if(keyWentDown("D") || keyWentDown(RIGHT_ARROW) || mouseIsOver(rightbutton)){
        normalbuttonover = false;
        coloridobuttonover = true;
      }
      if(keyDown("space") || mouseIsOver(selectbutton)){//mousePressedOver(selectbutton)){
        TrexColorido = false;
        gamestate = PLAY;
        crouchbutton.visible = true;
        ground.visible = true;
        highscoreS.visible = true;
        gameover.addImage("gameover", gameoverimg);
        //coloridobutton.visible = false;
        ground.addImage("ground", ground_image);
        //groundvisibility = true;
        leftbutton.visible = false;
        rightbutton.visible = false;
        selectbutton.visible = false;
      }
    }
    if(coloridobuttonover == true){
      if(keyWentDown("A") || keyWentDown(LEFT_ARROW) || mouseIsOver(leftbutton)){
        normalbuttonover = true;
        coloridobuttonover = false;
      }
      if(keyDown("space") || mouseIsOver(selectbutton)){//mousePressedOver(selectbutton)){
        TrexColorido = true;
        gamestate = PLAY;
        crouchbutton.visible = true;
        ground.visible = true;
        highscoreS.visible = true;
        gameover.addImage("gameovercolored", gameover_coloredimg);
        //sand.visible = true;
        //coloridobutton.visible = false;
        ground.addImage("groundcolored", ground_colored_image);
        sand = createSprite(width/2, height/2+180, windowWidth, windowHeight-12);
        sand.shapeColor = 'gold';
        //sand.visible = true;
        //groundvisibility = true;
        leftbutton.visible = false;
        rightbutton.visible = false;
        selectbutton.visible = false;
        trex.depth = sand.depth;
        sand.depth = sand.depth+1;
      }
    }*/
  }
  /*if(cloud1.x < -20){
    cloud1.x = 645;
  }
  if(cloud2.x > 670){
    cloud2.x = -10;
  }*/
  //console.log(trex.y);
  if(gamestate == PLAY){
    crouchbutton.position(width / 2-35, 5);
    if(TrexColorido == false){
      trex.visible = true;
    }
    if(score%700==0){
      if(Isnight == false&&dayMost == true){
        //turnnight();
      }
      if(Isday == false&&nightMost == true){
        //turnday();
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
    if(keyDown("space")&&trex.y >=150&&trexIsCrouching==false||//&&!mouseIsOver(crouchbutton)||
    keyDown('W')&&trex.y >=150&&trexIsCrouching==false||//&&!mouseIsOver(crouchbutton)||
    keyDown("UP_ARROW")&&trex.y >=150&&trexIsCrouching==false||//&&!mouseIsOver(crouchbutton)||
    touches.length > 0&&trex.y >=150&&trexIsCrouching==false){
    //&& !mouseIsOver(crouchbutton)){
      touches = [];
      trex.velocityY = -10;
      jumpsound.play();
      //trexIsJumping = true;
    }
    console.log(trexIsJumping);
    if(trex.y >= 150){
      trexIsJumping = false;
    }
    if(trex.y < 150){
      trexIsJumping = true;
    }
    //console.log(trexIsJumping);
    //console.log(trex.y);
    if(keyWentDown("S") && trexIsJumping == false
    ||keyWentDown(DOWN_ARROW) && trexIsJumping == false){
    //||mouseIsOver(crouchbutton) && trexIsJumping==false){
      //crouch();
      //trex.addAnimation("crouching", trex_crouching);
      trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
      if(TrexColorido == true && dinosaurcolor == "Cinza"){
        trex.changeAnimation("crouchingnb", trex_crouchingnb);
      }
      if(TrexColorido == false){
        trex.changeAnimation("crouching", trex_crouching);
      }
      if(TrexColorido == true && dinosaurcolor == "Marrom"){
        trex.changeAnimation("crouching_brown", trex_crouchingbrown);
      }
      if(TrexColorido == true && dinosaurcolor == "Verde"){
        trex.changeAnimation("crouching_green", trex_crouchinggreen);
      }
      trexIsCrouching = true;
      //trex.velocityX = 2;
    }if(keyWentUp("S")
    ||keyWentUp(DOWN_ARROW)){
    //||!keyIsDown(DOWN_ARROW) && !mouseIsOver(crouchbutton)){
    //||!keyIsDown("S")&&!mouseIsOver(crouchbutton)){
      //crouch();
      //trex.addAnimation("running", trex_running);
      trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
      if(TrexColorido == true || dinosaurcolor == "Cinza"){
        trex.changeAnimation("runningnb", trex_runningnb);
      }
      if(TrexColorido == false){
        trex.changeAnimation("running", trex_running);
      }
      if(TrexColorido == true && dinosaurcolor == "Marrom"){
        trex.changeAnimation("running_brown", trex_runningbrown);
      }
      if(TrexColorido == true && dinosaurcolor == "Verde"){
        trex.changeAnimation("running_green", trex_runninggreen);
      }
      trexIsCrouching = false;
      //trex.velocityX = 0;
    }//else if(!keyDown(DOWN_ARROW)&&!mouseIsOver(crouchbutton)&&!keyDown("S")){

    //}*/
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
    if(TrexColorido == true && dinosaurcolor == "Cinza"){
      trex.changeAnimation("collidednb", trex_collidednb);
    }
    if(TrexColorido == false){
      trex.changeAnimation("collided", trex_collided);
    }
    if(TrexColorido == true && dinosaurcolor == "Marrom"){
      trex.changeAnimation("collided_brown", trex_collidedbrown);
    }
    if(TrexColorido == true && dinosaurcolor == "Verde"){
      trex.changeAnimation("collided_green", trex_collidedgreen);
    }
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
  if(frameCount%80==0){//frameCount%60==0
  cloud = createSprite(width+10, 100, 10, 10);//610, 100
  //cloud.velocityX = -(4+3*score/100);//-(5+score/100)
  if(TrexColorido == true){
    cloud.addImage("cloudfilled", cloud_filled_img);
  }else{
    cloud.addImage("cloud", cloud_image);
  }
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
  if(frameCount%70==0){//frameCount%60==0
  var cactu = createSprite(width+10, 165, 10, 40);//610, 165
  //cactu.velocityX = -(5+score/100);//-(5+score/100)
  var aleatorio = Math.round(random(1, 6));
  if(TrexColorido == false){
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
  }else{
    switch(aleatorio){
    case 1:cactu.addImage(cactu1nb);
    break;
    case 2:cactu.addImage(cactu2nb);
    break;
    case 3:cactu.addImage(cactu3nb);
    break;
    case 4:cactu.addImage(cactu4nb);
    break;
    case 5:cactu.addImage(cactu5nb);
    break;
    case 6:cactu.addImage(cactu6nb);
    break;
    default:break;
  }
}
  cactu.scale = 0.5;
  cactu.lifetime = 315;//215
  cactuG.add(cactu);
  }
}

function createbird(){
  if(frameCount%245==0&&score>300){//frameCount%230==0 //225
    var bird = createSprite(width+10, 100, 10, 10);//610, 100
    bird.lifetime = 315;//215
    //bird.velocityX = -(5+score/100);//-(5+score/100)
    if(TrexColorido == true){
      var randombird = Math.round(random(1, 3));
      if(randombird == 1){
        bird.addAnimation("bird", birdanm);
      }
      if(randombird == 2){
        bird.addAnimation("greenbird", greenbirdanm);
      }
      if(randombird == 3){
        bird.addAnimation("brownbird", brownbirdanm);
      }
    }else{
      bird.addAnimation("bird", birdanm);
    }
    bird.scale = 0.51;
    bird.y = Math.round(random(130, 130));
    birdG.add(bird);
  }
}

function reset(){
  gamestate = PLAY;
  //setDinosaurColor();
  if(TrexColorido == true){
    dinosaurcolor = "notselected";
  }
  trex.visible = false;
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

function setDinosaurColor(){
  if(dinosaurcolor == "notselected" && TrexColorido == true && gamestate !== SELECT){
    var randomcolor = Math.round(random(1, 3));
    if(randomcolor == 1){
      dinosaurcolor = "Cinza";
      //trex.addAnimation("running", trex_running);
      //trex.addAnimation("collided", trex_collided);
      //trex.addAnimation("crouching", trex_crouching);
      trex.changeAnimation("runningnb", trex_runningnb);
      //trex.scale = 0.5;
    }
    if(randomcolor == 2){
      dinosaurcolor = "Verde";
      //trex.addAnimation("running_green", trex_runninggreen);
      //trex.addAnimation("collided_green", trex_collidedgreen);
      //trex.addAnimation("crouching_green", trex_crouchinggreen);
      trex.changeAnimation("running_green", trex_runninggreen);
      //trex.scale = 0.5;
    }
    if(randomcolor == 3){
      dinosaurcolor = "Marrom";
      //trex.addAnimation("running_brown", trex_runningbrown);
      //trex.addAnimation("collided_brown", trex_collidedbrown);
      //trex.addAnimation("crouching_brown", trex_crouchingbrown);
      trex.changeAnimation("running_brown", trex_runningbrown);
      //trex.scale = 0.5;
    }
    trex.visible = true;
  }if(dinosaurcolor == "notselected" && TrexColorido == false){
    dinosaurcolor = "Cinza";
    //trex.addAnimation("running", trex_running);
    //trex.addAnimation("collided", trex_collided);
    //trex.addAnimation("crouching", trex_crouching);
    trex.changeAnimation("running", trex_running);
    //trex.scale = 0.5;
    trex.visible = true;
  }
  
}

function crouch(){
  if(trexIsCrouching == false && gamestate == PLAY && trexIsJumping == false){
    //trex.addAnimation("crouching", trex_crouching);
  trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
  if(TrexColorido == true && dinosaurcolor == "Cinza"){
    trex.changeAnimation("crouchingnb", trex_crouchingnb);
  }
  if(TrexColorido == false){
    trex.changeAnimation("crouching", trex_crouching);
  }
  if(TrexColorido == true && dinosaurcolor == "Marrom"){
    trex.changeAnimation("crouching_brown", trex_crouchingbrown);
  }
  if(TrexColorido == true && dinosaurcolor == "Verde"){
    trex.changeAnimation("crouching_green", trex_crouchinggreen);
  }
  trexIsCrouching = true;
  //trex.velocityX = 2;
  }else if(trexIsCrouching == true && gamestate == PLAY){
    trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
    if(TrexColorido == true || dinosaurcolor == "Cinza"){
      trex.changeAnimation("runningnb", trex_runningnb);
    }
    if(TrexColorido == false){
      trex.changeAnimation("running", trex_running);
    }
    if(TrexColorido == true && dinosaurcolor == "Marrom"){
      trex.changeAnimation("running_brown", trex_runningbrown);
    }
    if(TrexColorido == true && dinosaurcolor == "Verde"){
      trex.changeAnimation("running_green", trex_runninggreen);
    }
    trexIsCrouching = false;
    //trex.velocityX = 0;
  }else{

  }
  
}

function turnColored(){
  TrexColorido = true;
  gamestate = PLAY;
  crouchbutton.visible = true;
  ground.visible = true;
  highscoreS.visible = true;
  gameover.addImage("gameovercolored", gameover_coloredimg);
  //sand.visible = true;
  //coloridobutton.visible = false;
  ground.addImage("groundcolored", ground_colored_image);
  sand = createSprite(width/2, height/2+180, windowWidth, windowHeight-12);
  sand.shapeColor = 'gold';
  //sand.visible = true;
  //groundvisibility = true;
  //leftbutton.visible = false;
  //rightbutton.visible = false;
  //selectbutton.visible = false;
  trex.depth = sand.depth;
  sand.depth = sand.depth+1;
  coloridobutton.position(-1250, height / 2 - 30);
  normalbutton.position(-1250, height / 2 - 30);
}

function turnNormal(){
  TrexColorido = false;
  gamestate = PLAY;
  crouchbutton.visible = true;
  ground.visible = true;
  highscoreS.visible = true;
  gameover.addImage("gameover", gameoverimg);
  //coloridobutton.visible = false;
  ground.addImage("ground", ground_image);
  //groundvisibility = true;
  //leftbutton.visible = false;
  //rightbutton.visible = false;
  //selectbutton.visible = false;
  coloridobutton.position(-1250, height / 2 - 30);
  normalbutton.position(-1250, height / 2 - 30);
}

