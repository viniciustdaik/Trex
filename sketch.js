var trex, trex_running, trex_runningnb, trex_crouching, trex_crouchingnb, trex_collided, trex_collidednb, 
trex_runninggreen, trex_crouchinggreen, trex_collidedgreen, 
trex_runningbrown, trex_crouchingbrown, trex_collidedbrown;
var edges;
var ground, ground_image, ground_colored_image;//, groundvisibility = false;
var cloud, cloud_image, cloud_filled_img, cloudG;
//var cloud2;
var invisibleground;
var cactu1, cactu2, cactu3, cactu4, cactu5, cactu6, cactuG, 
cactu1nb, cactu2nb, cactu3nb, cactu4nb, cactu5nb, cactu6nb;
var bird, birdIsInvencibleBirds = false, birdIsInvencibleGround = false, 
birdIsFalling = false, birdIsFlying = false, hitGround = false, 
birdG, birdanmleft, birdimgleft, greenbirdanmleft, greenbirdimgleft, brownbirdanmleft, brownbirdimgleft, 
birdanmright, birdimgright, greenbirdanmright, greenbirdimgright, brownbirdanmright, brownbirdimgright;
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
var Isnight = false, Isday = true;
var dayMost = true, nightMost = false;
var trexIsInvencibleCactus = false;
var trexIsInvencibleBirds = false;
var crouchbutton, crouchbuttonimg;
var staranim;
var dinosaurcolor = "notselected", birdcolor = "notselected";
var TrexColorido = "notselected", sand;
var coloridobuttonover = false, normalbuttonover = true;
var trexfont;

var ShowBestHighscore = false, ShowBestHighscoresButton, 
ShowBestHighscoreActive = false, BestHighscores, ShowBestHighscoresButtonHitbox;

var BestHighscores1 = false, BestHighscores2 = false, BestHighscores3 = false, BestHighscores4 = false, 
BestHighscores5 = false;

var BestHighscores1DeleteButton, BestHighscores2DeleteButton, BestHighscores3DeleteButton, 
BestHighscores4DeleteButton, BestHighscores5DeleteButton;

var game = "notselected";

var version = 1.22351, mostRecentVersion = null, reloadButton;//actual version=1.222

var gotStateOneTime = false;

var initialHeight;//, newHeight;

var PcFeaturesOnMobile = false;

var getStateOrNot = false;

var cactuhitboxG;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);//iPad

var isiPad = /iPad/i.test(navigator.userAgent);//iPad

var isAndroid = /Android/i.test(navigator.userAgent);

var isiPhoneXR = /iPhoneXR/i.test(navigator.userAgent);

let isIPhoneXR = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio &&
window.devicePixelRatio === 2 && window.screen.width === 414 &&
window.screen.height === 896

//var isTablet = /iPad/i.test(navigator.userAgent);

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
  birdanmleft = loadAnimation("./inimigos-obstaculos/birds/bird1(no borders)-left.png", 
  "./inimigos-obstaculos/birds/bird2(no borders)-left.png");
  greenbirdanmleft = loadAnimation("./inimigos-obstaculos/birds/greenbird1(no borders)-left.png", 
  "./inimigos-obstaculos/birds/greenbird2(no borders)-left.png");
  brownbirdanmleft = loadAnimation("./inimigos-obstaculos/birds/brownbird1(no borders)-left.png", 
  "./inimigos-obstaculos/birds/brownbird2(no borders)-left.png");
  birdanmright = loadAnimation("./inimigos-obstaculos/birds/bird1(no borders)-right.png", 
  "./inimigos-obstaculos/birds/bird2(no borders)-right.png");
  greenbirdanmright = loadAnimation("./inimigos-obstaculos/birds/greenbird1(no borders)-right.png", 
  "./inimigos-obstaculos/birds/greenbird2(no borders)-right.png");
  brownbirdanmright = loadAnimation("./inimigos-obstaculos/birds/brownbird1(no borders)-right.png", 
  "./inimigos-obstaculos/birds/brownbird2(no borders)-right.png");
  birdimgleft = loadAnimation("./inimigos-obstaculos/birds/bird1(no borders)-left.png");
  greenbirdimgleft = loadAnimation("./inimigos-obstaculos/birds/greenbird1(no borders)-left.png");
  brownbirdimgleft = loadAnimation("./inimigos-obstaculos/birds/brownbird1(no borders)-left.png");
  birdimgright = loadAnimation("./inimigos-obstaculos/birds/bird1(no borders)-right.png");
  greenbirdimgright = loadAnimation("./inimigos-obstaculos/birds/greenbird1(no borders)-right.png");
  brownbirdimgright = loadAnimation("./inimigos-obstaculos/birds/brownbird1(no borders)-right.png");
  highscoreimg = loadImage("./imagens-de-pontuacao/highscore.png");
  //crouchbuttonimg = loadImage("down_arrow.png");
  staranim = loadAnimation("./imagens-de-fundo/star1.png", 
  "./imagens-de-fundo/star2.png", "./imagens-de-fundo/star3.png");
  trexfont = loadFont("./Trex.ttf");
}

function setup() {
  //Criação da área do jogo.
  createCanvas(windowWidth - 2.3, windowHeight - 2.5);//600, 200

  database = firebase.database();

  initialHeight = height;

  reloadButton = createButton("Recarregar");
  reloadButton.position(width - width - width, height - 25);
  reloadButton.size(80, 35);
  reloadButton.class("reloadButton");
  reloadButton.mousePressed(reload);

  BestHighscores = createSprite(width - width - width, -350);
  BestHighscores.visible = false;

  ShowBestHighscoresButtonHitbox = createSprite(width - width - width, -350, 50, 50);

  BestHighscores1DeleteButton = createButton("");
  BestHighscores1DeleteButton.size(20, 20);
  BestHighscores1DeleteButton.class("TrashButton");
  BestHighscores1DeleteButton.position(width - width - width, height/2);
  BestHighscores1DeleteButton.mousePressed(resetBestHighscoreOne);

  BestHighscores2DeleteButton = createButton("");
  BestHighscores2DeleteButton.size(20, 20);
  BestHighscores2DeleteButton.class("TrashButton");
  BestHighscores2DeleteButton.position(width - width - width, height/2);
  BestHighscores2DeleteButton.mousePressed(resetBestHighscoreTwo);

  BestHighscores3DeleteButton = createButton("");
  BestHighscores3DeleteButton.size(20, 20);
  BestHighscores3DeleteButton.class("TrashButton");
  BestHighscores3DeleteButton.position(width - width - width, height/2);
  BestHighscores3DeleteButton.mousePressed(resetBestHighscoreThree);

  BestHighscores4DeleteButton = createButton("");
  BestHighscores4DeleteButton.size(20, 20);
  BestHighscores4DeleteButton.class("TrashButton");
  BestHighscores4DeleteButton.position(width - width - width, height/2);
  BestHighscores4DeleteButton.mousePressed(resetBestHighscoreFour);

  BestHighscores5DeleteButton = createButton("");
  BestHighscores5DeleteButton.size(20, 20);
  BestHighscores5DeleteButton.class("TrashButton");
  BestHighscores5DeleteButton.position(width - width - width, height/2);
  BestHighscores5DeleteButton.mousePressed(resetBestHighscoreFive);

  var trexImg = createImg('./trex/trex_idle(eye fixed).png');
  trexImg.position(width - width - width - width, height - height - height, height);
  trexImg.size(150, 150);
  
  ground = createSprite(width/2, 180, 400, 20);
  ground.addImage("ground", ground_image);
  ground.addImage("groundcolored", ground_colored_image);
  ground.visible = false;
  
  //overnormal = createSprite(width/2+295, height/2, 360);
  //oldcoloridobutton
  //coloridobutton = createSprite(width/2+255, height/2);
  //coloridobutton.addImage("colorido", coloridobuttonimg);
  //coloridobutton.scale = 0.6;
  //coloridobutton.visible = false;

  ShowBestHighscoresButton = createButton("");
  ShowBestHighscoresButton.position(width - width - width, -350);
  ShowBestHighscoresButton.size(50, 50);
  ShowBestHighscoresButton.class("BestHighscoresButton");
  ShowBestHighscoresButton.mousePressed(handleBestHighscores);

  coloridobutton = createButton("");
  coloridobutton.class("largebuttonC");
  coloridobutton.position(width - width - width, height / 2 - 30);
  coloridobutton.mousePressed(turnColored);

  infiniteflightbutton = createButton("");
  infiniteflightbutton.class("squarebuttonIF");
  infiniteflightbutton.position(width / 2 + 255, height / 2 - 30);
  infiniteflightbutton.mousePressed(turnVooInfinito);

  //oldnormalbutton
  //normalbutton = createSprite(width/2-255, height/2);
  ////normalbutton.addImage("colorido", coloridobuttonimg);
  ////normalbutton.scale = 0.6;
  //normalbutton.visible = false;
  
  normalbutton = createButton("");
  normalbutton.class("largebuttonN");
  normalbutton.position(width - width - width, height / 2 - 30);
  normalbutton.mousePressed(turnNormal);

  infiniteracebutton = createButton("");
  infiniteracebutton.class("squarebuttonIR");
  infiniteracebutton.position(width / 2 -415, height / 2 - 30);
  infiniteracebutton.mousePressed(turnCorridaInfinita);

  
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

  sand = createSprite(width/2, height/2+180, width, height-12);
  sand.shapeColor = '#e7e060';
  sand.visible = false;

  bird = createSprite(50, 160, 20, 50);
  bird.addAnimation("birdright", birdanmright);
  bird.addAnimation("greenbirdright", greenbirdanmright);
  bird.addAnimation("brownbirdright", brownbirdanmright);
  bird.addAnimation("birdimgright", birdimgright);
  bird.addAnimation("greenbirdimgright", greenbirdimgright);
  bird.addAnimation("brownbirdimgright", brownbirdimgright);
  bird.setCollider("rectangle", 0, 0, 50, 50);
  //bird.debug = true;
  bird.scale = 0.51 / 2 / 2 + 0.8;
  bird.visible = false;

  //definindo limites
  edges = createEdgeSprites();

  cloudG = new Group();
  cactuG = new Group();
  birdG = new Group();
  cactuhitboxG = new Group();

  gameover = createSprite(width / 2, 100);//300, 100
  gameover.addImage("gameovercolored", gameover_coloredimg);
  gameover.addImage("gameover", gameoverimg);
  gameover.visible = false;

  restart = createSprite(width / 2, 140);//300, 140
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

  getState();
}

function draw() {
  if(ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x
    ||ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y){
    ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 25;
    ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 25;
  }
  if(gamestate == PLAY){
    score = score+Math.round(getFrameRate()/30);
    cloudG.setVelocityXEach(-(4+3*score/100));//-(5+score/100)
    cactuG.setVelocityXEach(-(5+score/100));//-(5+score/100)
    cactuhitboxG.setVelocityXEach(-(5+score/100));//-(5+score/100)
    birdG.setVelocityXEach(-(5+score/100));//-(5+score/100)
    //ground.velocityX = -2;
    ground.velocityX = -(4+3*score/100);//-(4+3*score/100)
    if(ground.x < 350){//< 0
      ground.x = ground.width/2;
    }
  }
  if(game !== "notselected" && TrexColorido == "notselected"){
    if(infiniteflightbutton.position.x !== width - width - width){
      infiniteflightbutton.position(width - width - width, height / 2 - 30);
    }
    if(infiniteracebutton.position.x !== width - width - width){
      infiniteracebutton.position(width - width - width, height / 2 - 30);
    }
    if(normalbutton.position.x !== width / 2 -415){
      normalbutton.position(width / 2 -415, height / 2 - 30);
    }
    if(coloridobutton.position.x !== width / 2 + 135){
      coloridobutton.position(width / 2 + 135, height / 2 - 30);
    }
  }
  if(TrexColorido == true && Isday == true){
    background('cyan');
  }else if(TrexColorido == false && Isday == true){
    background('white');
  }else if(TrexColorido !== false && TrexColorido !== true && Isday == true){
    background('white');
  }
  if(mostRecentVersion !== null && mostRecentVersion > version){
    console.log('This is not the most Recent Version.');
    push();
    textSize(35);
    fill('red');
    textAlign("center");
    stroke('darkred');
    text("Está versão não é a mais recente.", width/2, height - 25);
    if(reloadButton.x !== width/2 + 265|| reloadButton.y !== height - 50){
      reloadButton.position(width/2 + 265, height - 50);
    }
    pop();
  }
  push();
    fill('gold');
    stroke('yellow');
    textAlign("center");
    textSize(35);
    if(isAndroid == true){
      text("É um Android!", width/2, height/2);
    }
    if(isiPad == true){
      text("É um iPad!", width/2, height/2);
    }
    if(isiPhoneXR == true || isIPhoneXR == true){
      text("WOW! FUNCIONOU! DETECTOU UM iPhone XR!", width/2, height/2);
      if(isiPhoneXR == true){
        text("isiPhoneXR é true", width/2, height + 35);
      }
      if(isIPhoneXR == true){
        text("isIPhoneXR é true", width/2, height + 35);
      }
    }
  pop();
  if(game == "notselected"){
    textSize(30);
    fill('gold');
    stroke('green');
    textFont(trexfont);
    textAlign("center");
    //if(initialHeight == height){
      text("Voo Infinito", infiniteflightbutton.x + 85, infiniteflightbutton.y + 200);
    //}else{
    //  text("Voo Infinito", infiniteflightbutton.x + 85, infiniteflightbutton.y - newHeight - 200);
    //}
    /*if(isMobile && PcFeaturesOnMobile == false){
      push();
      fill('red');
      stroke('darkred');
      if(!isMobile){
        textSize(30);
      }else{
        textSize(15);
      }
      text("Não Disponível Em Celular", infiniteflightbutton.x + 85, infiniteflightbutton.y + 230);
      pop();
    }*/
    text("Corrida Infinita", infiniteracebutton.x + 85, infiniteracebutton.y + 200);
  }
  fill('gold');
  stroke('green');
  textSize(15);
  textFont(trexfont);
  if(gamestate !== SELECT){
    var BestHighscoresY = 25 - 35;
    var BestHighscoresX;
    if(width >= 1533 && !isMobile){
      BestHighscoresX = width/2 - 410;
    }
    if(isMobile){
      BestHighscoresX = ShowBestHighscoresButton.x - 110;
    }
    
    if(ShowBestHighscore == true){
      if(ShowBestHighscoreActive == true){
        push();
        textAlign("center");
        if(BestHighscores1 !== false){
          text("HI 1:"+BestHighscores1, BestHighscores.x, BestHighscores.y);
        }else{
          text("HI 1:Nenhum", BestHighscores.x, BestHighscores.y);
        }

        if(BestHighscores2 !== false){
          text("HI 2:"+BestHighscores2, BestHighscores.x, BestHighscores.y+25);
        }else{
          text("HI 2:Nenhum", BestHighscores.x, BestHighscores.y+25);
        }

        if(BestHighscores3 !== false){
          text("HI 3:"+BestHighscores3, BestHighscores.x, BestHighscores.y+50);
        }else{
          text("HI 3:Nenhum", BestHighscores.x, BestHighscores.y+50);
        }

        if(BestHighscores4 !== false){
          text("HI 4:"+BestHighscores4, BestHighscores.x, BestHighscores.y+75);
        }else{
          text("HI 4:Nenhum", BestHighscores.x, BestHighscores.y+75);
        }

        if(BestHighscores5 !== false){
          text("HI 5:"+BestHighscores5, BestHighscores.x, BestHighscores.y+100);
        }else{
          text("HI 5:Nenhum", BestHighscores.x, BestHighscores.y+100);
        }
        pop();
      }
      if(ShowBestHighscoresButton.x !== width - 55
      ||ShowBestHighscoresButton.y !== 5){
        ShowBestHighscoresButton.position(width - 55, 5);
      }
      if(ShowBestHighscoreActive == true && BestHighscores.x !== width/2
      ||ShowBestHighscoreActive == true && BestHighscores.y !== height/2 - height/2/2 + 35){
        BestHighscores.x = BestHighscoresX;
        //BestHighscores1DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 20);
        //BestHighscores2DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 45);
        //BestHighscores3DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 68);
        //BestHighscores4DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 92);
        //BestHighscores5DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 118);
        BestHighscores.y = BestHighscoresY + 35;
      }
      if(ShowBestHighscoreActive == false && BestHighscores.x !== width - width - width
      ||ShowBestHighscoreActive == false && BestHighscores.y !== -350){
        BestHighscores.x = width - width - width;
        BestHighscores1DeleteButton.position(width - width - width, -350);
        BestHighscores2DeleteButton.position(width - width - width, -350);
        BestHighscores3DeleteButton.position(width - width - width, -350);
        BestHighscores4DeleteButton.position(width - width - width, -350);
        BestHighscores5DeleteButton.position(width - width - width, -350);
        BestHighscores.y = -350;
      }
      if(ShowBestHighscoreActive == true){
        if(BestHighscores1 !== false && BestHighscores1DeleteButton.x !== BestHighscoresX + 100 - 15){
          BestHighscores1DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 20);
        }
        if(BestHighscores2 !== false && BestHighscores2DeleteButton.x !== BestHighscoresX + 100 - 15){
          BestHighscores2DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 45);
        }
        if(BestHighscores3 !== false && BestHighscores3DeleteButton.x !== BestHighscoresX + 100 - 15){
          BestHighscores3DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 68);
        }
        if(BestHighscores4 !== false && BestHighscores4DeleteButton.x !== BestHighscoresX + 100 - 15){
          BestHighscores4DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 92);
        }
        if(BestHighscores5 !== false && BestHighscores5DeleteButton.x !== BestHighscoresX + 100 - 15){
          BestHighscores5DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 118);
        }
        if(BestHighscores1 == false &&  BestHighscores1DeleteButton.x !== width - width - width
        ||BestHighscores1 == false &&  BestHighscores1DeleteButton.y !== -350){
          BestHighscores1DeleteButton.position(width - width - width, -350);
        }
        if(BestHighscores2 == false &&  BestHighscores2DeleteButton.x !== width - width - width
        ||BestHighscores2 == false &&  BestHighscores2DeleteButton.y !== -350){
          BestHighscores2DeleteButton.position(width - width - width, -350);
        }
        if(BestHighscores3 == false &&  BestHighscores3DeleteButton.x !== width - width - width
        ||BestHighscores3 == false &&  BestHighscores3DeleteButton.y !== -350){
          BestHighscores3DeleteButton.position(width - width - width, -350);
        }
        if(BestHighscores4 == false &&  BestHighscores4DeleteButton.x !== width - width - width
        ||BestHighscores4 == false &&  BestHighscores4DeleteButton.y !== -350){
          BestHighscores4DeleteButton.position(width - width - width, -350);
        }
        if(BestHighscores5 == false &&  BestHighscores5DeleteButton.x !== width - width - width
        ||BestHighscores5 == false &&  BestHighscores5DeleteButton.y !== -350){
          BestHighscores5DeleteButton.position(width - width - width, -350);
        }
      }
    }
    if(key == "Escape"){
      key = null;
      keyCode = null;
      ShowBestHighscoresButton.position(width - width - width, 5);
      BestHighscores.x = width - width - width;
      BestHighscores1DeleteButton.position(width - width - width, -350);
      BestHighscores2DeleteButton.position(width - width - width, -350);
      BestHighscores3DeleteButton.position(width - width - width, -350);
      BestHighscores4DeleteButton.position(width - width - width, -350);
      BestHighscores5DeleteButton.position(width - width - width, -350);
      BestHighscores.y = -350;
      background("white");
      gamestate = -1;
      score = 0;
      highscore = 0;
      birdG.destroyEach();
      cactuG.destroyEach();
      cloudG.destroyEach();
      bird.visible = false;
      ground.visible = false;
      sand.visible = false;
      trex.visible = false;
      highscoreS.visible = false;
      gameover.visible = false;
      restart.visible = false;
      game = "notselected";
      dinosaurcolor = "notselected";
      birdcolor = "notselected";
      TrexColorido = "notselected";
      trexIsCrouching = false;
      trexIsJumping = false;
      birdIsFalling = false;
      birdIsFlying = false;
      bird.rotation = 0;
      bird.y = 160;
      if(crouchbutton.y !== -350){
        crouchbutton.position(width / 2-35, -350);
      }
      if(infiniteflightbutton.x !== width / 2 + 255){
        infiniteflightbutton.position(width / 2 + 255, height / 2 - 30);
      }
      if(infiniteracebutton.x !== width / 2 -415){
        infiniteracebutton.position(width / 2 -415, height / 2 - 30);
      }
    }
    text(highscore, highscoreS.x+25, 42);
    textAlign("center");
    text("PONTUAÇÃO: "+score, highscoreS.x+45, 20);//500
  }
  textAlign("center");
  //if(Isnight == false){
  //  background('white'); //nao testei
  //}
  if(dinosaurcolor == "notselected" && game == "Corrida Infinita"){
    setDinosaurColor();
  }
  if(gamestate == SELECT){
    if(key !== null || keyCode == 27){
      key = null;
      keyCode = null;
    }
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
    if(game == "Corrida Infinita"){
    /*if(cloud1.x < -20){
      cloud1.x = 645;
    }
    if(cloud2.x > 670){
      cloud2.x = -10;
    }*/
    //console.log(trex.y);
    if(gamestate == PLAY){
      if(birdG.isTouching(cactuG) || birdG.isTouching(cactuhitboxG)){
        birdG.destroyEach();
        //console.log("Birds touching cactuG | cactuhitboxG destroyed!");
      }
      if(crouchbutton.x !== width / 2-35 && trexIsJumping == false
      ||crouchbutton.y !== 5 && trexIsJumping == false){
        crouchbutton.position(width / 2-35, 5);
      }
      if(crouchbutton.x !== width / 2-35 && trexIsJumping == true
      ||crouchbutton.y !== -350 && trexIsJumping == true){
        crouchbutton.position(width / 2-35, -350);
      }
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
      if(score>0&&score%100==0){
        checkpointsound.play();
      }
      if(keyDown("space")&&trex.y >=150&&trexIsCrouching==false||//&&!mousePressedOver(crouchbutton)||
      keyDown('W')&&trex.y >=150&&trexIsCrouching==false||//&&!mousePressedOver(crouchbutton)||
      keyDown("UP_ARROW")&&trex.y >=150&&trexIsCrouching==false||//&&!mousePressedOver(crouchbutton)||
      touches.length > 0&&trex.y >=150&&trexIsCrouching==false
      && !mousePressedOver(ShowBestHighscoresButtonHitbox)){
      //&& !mouseIsOver(crouchbutton)){
        touches = [];
        trex.velocityY = -10;
        //jumpsound.stop();
        jumpsound.play();
        //trexIsJumping = true;
      }
      console.log(trexIsJumping);
      if(trex.y >= 150 ||trex.collide(invisibleground)){
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
      crouchbutton.position(width / 2-35, -350);
      trexIsCrouching = false;
      trexIsJumping = false;
      if(TrexColorido == false){
        //birdG.setAnimationEach("birdimgleft", birdimgleft);
      }
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
  }
  
  if(game == "Voo Infinito" && gamestate == PLAY){
    createclouds();
    createbird();
    if(dinosaurcolor == "notselected" && game == "Voo Infinito"){
      setBirdColor();
    }
    if(keyDown("space")||//&&!mouseIsOver(crouchbutton)||
    keyDown('W')||//&&!mouseIsOver(crouchbutton)||
    keyDown("UP_ARROW")||//&&!mouseIsOver(crouchbutton)||
    touches.length > 0){
    //&& !mouseIsOver(crouchbutton)){
      touches = [];
      bird.velocityY = -10;
      //trexIsJumping = true;
    }
    bird.velocityY = bird.velocityY+0.8;
    if(birdIsFalling == false && bird.velocityY > 0){
      birdIsFalling = true;
      birdIsFlying = false;
    }
    if(birdIsFalling == true && bird.velocityY <= 0){
      birdIsFalling = false;
    }
    if(birdIsFlying == false && bird.velocityY < 0){
      birdIsFlying = true;
    }
    if(birdIsFalling == true && bird.rotation !== 15){
      bird.rotation = bird.rotation+1;
    }
    if(birdIsFalling == false && birdIsFlying == false && bird.rotation !== 0){
      bird.rotation = bird.rotation-1;
    }
    if(birdIsFlying == true && bird.rotation !== -15){
      bird.rotation = bird.rotation-1;
    }
    console.log("Falling: "+birdIsFalling, "Flying: "+birdIsFlying);
    //console.log("Flying: "+birdIsFlying);
    if(bird.isTouching(birdG) && birdIsInvencibleBirds == false|| bird.y < -10){
      failsound.play();
      //if(birdcolor !== "Cinza"){//!== "Cinza"
        //bird.y = bird.y + 11;
      //}//else{
        //bird.y = bird.y + 7.5;
      //}
      gamestate = END;
      if(TrexColorido == true){
        if(birdcolor == "Cinza"){
          bird.changeAnimation("birdimgright", birdimgright);
        }
        if(birdcolor == "Verde"){
          bird.changeAnimation("greenbirdimgright", greenbirdimgright);
        }
        if(birdcolor == "Marrom"){
          bird.changeAnimation("brownbirdimgright", brownbirdimgright);
        }
      }else{
        bird.changeAnimation("birdimgright", birdimgright);
      }
    }
    else if(bird.collide(ground) && birdIsInvencibleGround == false){
      hitGround = true;
      failsound.play();
      gamestate = END;
      if(birdcolor !== "Cinza"){
        bird.y = bird.y + 11;
      }else{
        bird.y = bird.y + 7.5;
      }
      if(TrexColorido == true){
        if(birdcolor == "Cinza"){
          bird.changeAnimation("birdimgright", birdimgright);
        }
        if(birdcolor == "Verde"){
          bird.changeAnimation("greenbirdimgright", greenbirdimgright);
        }
        if(birdcolor == "Marrom"){
          bird.changeAnimation("brownbirdimgright", brownbirdimgright);
        }
      }else{
        bird.changeAnimation("birdimgright", birdimgright);
      }
    }
  }else if(game == "Voo Infinito" && gamestate == END){
    if(hitGround == true){
      bird.rotation = 0;
      hitGround = false;
    }
    if(TrexColorido == false){
      //birdG.setAnimationEach("birdimgleft", birdimgleft);
    }
    if(TrexColorido == true){
      //if(birdG.birdimgleft !== null){
      //  birdG.setAnimationEach("birdimgleft", birdimgleft);
      //}
    }
    ground.velocityX = 0;
    restart.visible = true;
    gameover.visible = true;
    cactuG.setLifetimeEach(-1);
    birdG.setLifetimeEach(-1);
    cloudG.setLifetimeEach(-1);
    cactuG.setVelocityXEach(0);
    cloudG.setVelocityXEach(0);
    birdG.setVelocityXEach(0);
    
    bird.velocityY = 0;
    if(mousePressedOver(restart)
    ||touches.length > 0){
      //console.log("Reinicia.");
      reset();
      touches = [];
    }
    //if(bird.y > height + 160){
    //  bird.velocityY = 0;
    //}
  }

  drawSprites();
}
function createclouds(){
  var cloudspawntime;
  if(game == "Corrida Infinita"){
    cloudspawntime = 80;
  }
  if(game == "Voo Infinito"){
    cloudspawntime = 30;
  }
  if(frameCount%cloudspawntime==0){//frameCount%60==0
    cloud = createSprite(width+10, 100, 10, 10);//610, 100
    //cloud.velocityX = -(4+3*score/100);//-(5+score/100)
    if(TrexColorido == true){
      cloud.addImage("cloudfilled", cloud_filled_img);
    }else{
      cloud.addImage("cloud", cloud_image);
    }
    cloud.lifetime = 415;//215
    if(game == "Corrida Infinita"){
      cloud.scale = 0.5;
    }
    if(game == "Voo Infinito"){
      cloud.scale = 0.5 / 2 / 2 + 0.8;
    }
    cloud.depth = trex.depth;
    bird.depth = trex.depth;
    restart.depth = trex.depth;
    trex.depth = trex.depth+1;
    bird.depth = bird.depth+1;
    restart.depth = restart.depth+1;
    cloud.depth = crouchbutton.depth;
    crouchbutton.depth = crouchbutton.depth+1;
    crouchbutton.depth = gameover.depth;
    cloud.depth = gameover.depth;
    gameover.depth = gameover.depth+1;
    trex.depth = gameover.depth;
    gameover.depth = gameover.depth+1;
    cloudG.add(cloud);
    if(game == "Corrida Infinita"){
      cloud.y = Math.round(random(50, 100));//windowHeight-100(windowHeight update soon(maybe))
    }
    if(game == "Voo Infinito"){
      cloud.y = Math.round(random(50, height - 100));//windowHeight-100(windowHeight update soon(maybe))
    }
  }
}

function createcactu(){
  var debughitbox = false;
  if(game == "Corrida Infinita"){
    if(frameCount%70==0){//frameCount%60==0
      var cactu = createSprite(width+10, 165, 10, 40);//610, 165
      var hitbox = createSprite(cactu.x, cactu.y, 75, 200);
      hitbox.visible = false;
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
      if(debughitbox == true){
        cactu.debug = true;
        hitbox.debug = true;
      }
      cactu.scale = 0.5;
      cactu.lifetime = 315;//215
      cactuG.add(cactu);
      cactuhitboxG.add(hitbox);
    }
  }
}

function createbird(){
  var debughitbox = false;
  var upperbirdenabled = true;
  if(game == "Corrida Infinita"){
    if(frameCount%245==0&&score>=300){//frameCount%230==0 //225 //frameCount%245==0
      var enemybird = createSprite(width+10, 100, 10, 10);//610, 100
      enemybird.y = Math.round(random(130, 130));
      if(upperbirdenabled == true){
        var upperbird = createSprite(enemybird.x, 100-30, 10, 80);
        //upperbird.visible = false;
        upperbird.lifetime = 315;
      }
      enemybird.lifetime = 315;//215
      //enemybird.velocityX = -(5+score/100);//-(5+score/100)
      if(TrexColorido == true){
        var randombird = Math.round(random(1, 3));
        if(randombird == 1){
          enemybird.addAnimation("birdleft", birdanmleft);
          enemybird.addAnimation("birdimgleft", birdimgleft);
          enemybird.changeAnimation("birdleft", birdanmleft);
          if(upperbirdenabled == true){
            upperbird.addAnimation("birdleft", birdanmleft);
            upperbird.addAnimation("birdimgleft", birdimgleft);
            upperbird.changeAnimation("birdleft", birdanmleft);
          }
        }
        if(randombird == 2){
          enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
          enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
          enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
          if(upperbirdenabled == true){
            upperbird.addAnimation("greenbirdleft", greenbirdanmleft);
            upperbird.addAnimation("greenbirdimgleft", greenbirdimgleft);
            upperbird.changeAnimation("greenbirdleft", greenbirdanmleft);
          }
        }
        if(randombird == 3){
          enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
          enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
          enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
          if(upperbirdenabled == true){
            upperbird.addAnimation("brownbirdleft", brownbirdanmleft);
            upperbird.addAnimation("brownbirdimgleft", brownbirdimgleft);
            upperbird.changeAnimation("brownbirdleft", brownbirdanmleft);
          }
        }
      }else if(TrexColorido == false){
        enemybird.addAnimation("birdleft", birdanmleft);
        enemybird.addAnimation("birdimgleft", birdimgleft);
        enemybird.changeAnimation("birdleft", birdanmleft);
        if(upperbirdenabled == true){
          upperbird.addAnimation("birdleft", birdanmleft);
          upperbird.addAnimation("birdimgleft", birdimgleft);
          upperbird.changeAnimation("birdleft", birdanmleft);
        }
      }else{}
      enemybird.scale = 0.51;
      if(upperbirdenabled == true){
        upperbird.scale = 0.51;
      }
      if(debughitbox == true){
        enemybird.debug = true;
        if(upperbirdenabled == true){
          upperbird.debug = true;
        }
      }
      birdG.add(enemybird);
      if(upperbirdenabled == true){
        birdG.add(upperbird);
      }
    }
  }
  if(game == "Voo Infinito"){
    if(frameCount%125==0&&score>100){
      if(!isMobile){
        var randomform = Math.round(random(1, 3));
      }else if(isMobile){
        var randomform = Math.round(random(1, 2));
      }
      if(isMobile){
        var maxb = 20;
        if(randomform == 1){
          for(var b = 1; b <= maxb; b = b+1){
            if(b !== 3 && b !== 4){
              var enemybird = createSprite(width+10, 80*b, 10, 10);//+10, 10, 10);
              enemybird.lifetime = 315;
              if(b == maxb){
                enemybird.y = 20;
              }
              enemybird.setCollider("rectangle", 0, 0, 50, 50);
              if(enemybird.y > height){
                enemybird.destroy();
              }else{
                if(TrexColorido == true){
                  var randombird = Math.round(random(1, 3));
                  if(randombird == 1){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }
                  if(randombird == 2){
                    enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                    enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                    enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                  }
                  if(randombird == 3){
                    enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                    enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                    enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                  }
                }else if(TrexColorido == false){
                  enemybird.addAnimation("birdleft", birdanmleft);
                  enemybird.addAnimation("birdimgleft", birdimgleft);
                  enemybird.changeAnimation("birdleft", birdanmleft);
                }else{}
                enemybird.scale = 0.51 / 2 / 2 + 0.8;
                if(debughitbox == true){
                  enemybird.debug = true;
                }
                birdG.add(enemybird);
              }
            }
              
            
          }
        }
          if(randomform == 2){
            for(var b = 1; b <= 20; b = b+1){
              if(b !== 2 && b !== 3){
                var enemybird = createSprite(width+10, 80*b, 10, 10);//+10, 10, 10);
                enemybird.lifetime = 315;
                if(b == maxb){
                  enemybird.y = 20;
                }
                enemybird.setCollider("rectangle", 0, 0, 50, 50);
                if(TrexColorido == true){
                  var randombird = Math.round(random(1, 3));
                  if(randombird == 1){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }
                  if(randombird == 2){
                    enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                    enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                    enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                  }
                  if(randombird == 3){
                    enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                    enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                    enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                  }
                }else if(TrexColorido == false){
                  enemybird.addAnimation("birdleft", birdanmleft);
                  enemybird.addAnimation("birdimgleft", birdimgleft);
                  enemybird.changeAnimation("birdleft", birdanmleft);
                }else{}
                enemybird.scale = 0.51 / 2 / 2 + 0.8;//0.6
                if(debughitbox == true){
                  enemybird.debug = true;
                }
                birdG.add(enemybird);
              }
            }
          }
          /*if(randomform == 3){
            for(var b = 1; b <= 20; b = b+1){
            if(b !== 7 && 6){
              var enemybird = createSprite(width+10, 80*b+10, 10, 10);
              enemybird.lifetime = 315;
              if(b == maxb){
                enemybird.y = 20;
              }
              enemybird.setCollider("rectangle", 0, 0, 50, 50);
              if(TrexColorido == true){
                var randombird = Math.round(random(1, 3));
                if(randombird == 1){
                  enemybird.addAnimation("birdleft", birdanmleft);
                  enemybird.addAnimation("birdimgleft", birdimgleft);
                  enemybird.changeAnimation("birdleft", birdanmleft);
                }
                if(randombird == 2){
                  enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                  enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                  enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                }
                if(randombird == 3){
                  enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                  enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                  enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                }
              }else if(TrexColorido == false){
                enemybird.addAnimation("birdleft", birdanmleft);
                enemybird.addAnimation("birdimgleft", birdimgleft);
                enemybird.changeAnimation("birdleft", birdanmleft);
              }else{}
              enemybird.scale = 0.51 / 2 / 2 + 0.6;
              if(debughitbox == true){
                enemybird.debug = true;
              }
              birdG.add(enemybird);
            }
          }
        }*/
      }
      if(!isMobile){
        var maxb = 14;
        for(var b = 1; b <= maxb; b = b+1){
          if(randomform == 1){
            if(b !== 5 && b !== 6){
              /*if(b == 11 && height >= 861){
                var enemybird = createSprite(width+10, 80*10, 10, 10);
                enemybird.lifetime = 315;
                if(enemybird.y > height){
                  enemybird.destroy();
                }else{
                  if(TrexColorido == true){
                    var randombird = Math.round(random(1, 3));
                    if(randombird == 1){
                      enemybird.addAnimation("birdleft", birdanmleft);
                      enemybird.addAnimation("birdimgleft", birdimgleft);
                      enemybird.changeAnimation("birdleft", birdanmleft);
                    }
                    if(randombird == 2){
                      enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                      enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                      enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                    }
                    if(randombird == 3){
                      enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                      enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                      enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                    }
                  }else if(TrexColorido == false){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }else{}
                  enemybird.scale = 0.51 / 2 / 2 + 0.8;
                  if(debughitbox == true){
                    enemybird.debug = true;
                  }
                  birdG.add(enemybird);
                }
              }*/
              //if(b !== 11){
                var enemybird = createSprite(width+10, 80*b, 10, 10);
                enemybird.lifetime = 315;
                if(b == maxb){
                  enemybird.y = 0;
                }
                
                if(enemybird.y > height){
                  enemybird.destroy();
                }else{
                  if(TrexColorido == true){
                    var randombird = Math.round(random(1, 3));
                    if(randombird == 1){
                      enemybird.addAnimation("birdleft", birdanmleft);
                      enemybird.addAnimation("birdimgleft", birdimgleft);
                      enemybird.changeAnimation("birdleft", birdanmleft);
                    }
                    if(randombird == 2){
                      enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                      enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                      enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                    }
                    if(randombird == 3){
                      enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                      enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                      enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                    }
                  }else if(TrexColorido == false){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }else{}
                  enemybird.scale = 0.51 / 2 / 2 + 0.8;
                  if(debughitbox == true){
                    enemybird.debug = true;
                  }
                  birdG.add(enemybird);
                }
              //}
            }
      
          }
          if(randomform == 2){
            if(b !== 2 && b !== 3){
              /*if(b == 11 && height >= 861){
                var enemybird = createSprite(width+10, 80*10, 10, 10);
                enemybird.lifetime = 315;
                
                if(enemybird.y > height){
                  enemybird.destroy();
                }else{
                  if(TrexColorido == true){
                    var randombird = Math.round(random(1, 3));
                    if(randombird == 1){
                      enemybird.addAnimation("birdleft", birdanmleft);
                      enemybird.addAnimation("birdimgleft", birdimgleft);
                      enemybird.changeAnimation("birdleft", birdanmleft);
                    }
                    if(randombird == 2){
                      enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                      enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                      enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                    }
                    if(randombird == 3){
                      enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                      enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                      enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                    }
                  }else if(TrexColorido == false){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }else{}
                  enemybird.scale = 0.51 / 2 / 2 + 0.8;
                  if(debughitbox == true){
                    enemybird.debug = true;
                  }
                  birdG.add(enemybird);
                }
              }*/
              //if(b !== 11){
                var enemybird = createSprite(width+10, 80*b, 10, 10);
                enemybird.lifetime = 315;
                if(b == maxb){
                  enemybird.y = 0;
                }
                
                if(enemybird.y > height){
                  enemybird.destroy();
                }else{
                  if(TrexColorido == true){
                    var randombird = Math.round(random(1, 3));
                    if(randombird == 1){
                      enemybird.addAnimation("birdleft", birdanmleft);
                      enemybird.addAnimation("birdimgleft", birdimgleft);
                      enemybird.changeAnimation("birdleft", birdanmleft);
                    }
                    if(randombird == 2){
                      enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                      enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                      enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                    }
                    if(randombird == 3){
                      enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                      enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                      enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                    }
                  }else if(TrexColorido == false){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }else{}
                  enemybird.scale = 0.51 / 2 / 2 + 0.8;
                  if(debughitbox == true){
                    enemybird.debug = true;
                  }
                  birdG.add(enemybird);
                }
              //}
              
            }
          }
          if(randomform == 3){
            if(b !== 7 && b !== 8){
              /*if(b == 11 && height >= 861){
                var enemybird = createSprite(width+10, 80*10, 10, 10);
                enemybird.lifetime = 315;
                
                if(enemybird.y > height){
                  enemybird.destroy();
                }else{
                  if(TrexColorido == true){
                    var randombird = Math.round(random(1, 3));
                    if(randombird == 1){
                      enemybird.addAnimation("birdleft", birdanmleft);
                      enemybird.addAnimation("birdimgleft", birdimgleft);
                      enemybird.changeAnimation("birdleft", birdanmleft);
                    }
                    if(randombird == 2){
                      enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                      enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                      enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                    }
                    if(randombird == 3){
                      enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                      enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                      enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                    }
                  }else if(TrexColorido == false){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }else{}
                  enemybird.scale = 0.51 / 2 / 2 + 0.8;
                  if(debughitbox == true){
                    enemybird.debug = true;
                  }
                  birdG.add(enemybird);
                }
              }*/
              //if(b !== 11){
                var enemybird = createSprite(width+10, 80*b, 10, 10);
                enemybird.lifetime = 315;
                if(b == maxb){
                  enemybird.y = 0;
                }
                
                if(enemybird.y > height){
                  enemybird.destroy();
                }else{
                  if(TrexColorido == true){
                    var randombird = Math.round(random(1, 3));
                    if(randombird == 1){
                      enemybird.addAnimation("birdleft", birdanmleft);
                      enemybird.addAnimation("birdimgleft", birdimgleft);
                      enemybird.changeAnimation("birdleft", birdanmleft);
                    }
                    if(randombird == 2){
                      enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                      enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                      enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
                    }
                    if(randombird == 3){
                      enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                      enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                      enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
                    }
                  }else if(TrexColorido == false){
                    enemybird.addAnimation("birdleft", birdanmleft);
                    enemybird.addAnimation("birdimgleft", birdimgleft);
                    enemybird.changeAnimation("birdleft", birdanmleft);
                  }else{}
                  enemybird.scale = 0.51 / 2 / 2 + 0.8;
                  if(debughitbox == true){
                    enemybird.debug = true;
                  }
                  birdG.add(enemybird);
                }
              //}
              
            }
          }
        }
      }
        
      /*
      if(randomform == 1){
        for(var b = 1; b <= 2; b = b+1){
          var enemybird = createSprite(width+10, 80*b, 10, 10);
          enemybird.lifetime = 315;
          if(TrexColorido == true){
            var randombird = Math.round(random(1, 3));
            if(randombird == 1){
              enemybird.addAnimation("birdleft", birdanmleft);
              enemybird.addAnimation("birdimgleft", birdimgleft);
              enemybird.changeAnimation("birdleft", birdanmleft);
            }
            if(randombird == 2){
              enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
              enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
              enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
            }
            if(randombird == 3){
              enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
              enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
              enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
            }
          }else if(TrexColorido == false){
            enemybird.addAnimation("birdleft", birdanmleft);
            enemybird.addAnimation("birdimgleft", birdimgleft);
            enemybird.changeAnimation("birdleft", birdanmleft);
          }else{}
          enemybird.scale = 0.51 / 2 / 2 + 0.8;
          if(debughitbox == true){
            enemybird.debug = true;
          }
          birdG.add(enemybird);
        }
        for(var b = 1; b <= 3; b = b+1){
          var enemybird = createSprite(width+10, height*b / 3, 10, 10);
          if(enemybird.y == height){
            enemybird.y = enemybird.y / 2;
          }
          enemybird.lifetime = 315;
          if(TrexColorido == true){
            var randombird = Math.round(random(1, 3));
            if(randombird == 1){
              enemybird.addAnimation("birdleft", birdanmleft);
              enemybird.addAnimation("birdimgleft", birdimgleft);
              enemybird.changeAnimation("birdleft", birdanmleft);
            }
            if(randombird == 2){
              enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
              enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
              enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
            }
            if(randombird == 3){
              enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
              enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
              enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
            }
          }else if(TrexColorido == false){
            enemybird.addAnimation("birdleft", birdanmleft);
            enemybird.addAnimation("birdimgleft", birdimgleft);
            enemybird.changeAnimation("birdleft", birdanmleft);
          }else{}
          enemybird.scale = 0.51 / 2 / 2 + 0.8;
          if(debughitbox == true){
            enemybird.debug = true;
          }
          birdG.add(enemybird);
        }
      }
      if(randomform == 2){
        for(var b = 1; b <= 2; b = b+1){
          var enemybird = createSprite(width+10, 80/b, 10, 10);
          enemybird.lifetime = 315;
          if(TrexColorido == true){
            var randombird = Math.round(random(1, 3));
            if(randombird == 1){
              enemybird.addAnimation("birdleft", birdanmleft);
              enemybird.addAnimation("birdimgleft", birdimgleft);
              enemybird.changeAnimation("birdleft", birdanmleft);
            }
            if(randombird == 2){
              enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
              enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
              enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
            }
            if(randombird == 3){
              enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
              enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
              enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
            }
          }else if(TrexColorido == false){
            enemybird.addAnimation("birdleft", birdanmleft);
            enemybird.addAnimation("birdimgleft", birdimgleft);
            enemybird.changeAnimation("birdleft", birdanmleft);
          }else{}
          enemybird.scale = 0.51 / 2 / 2 + 0.8;
          if(debughitbox == true){
            enemybird.debug = true;
          }
          birdG.add(enemybird);
        }
        for(var b = 1; b <= 5; b = b+1){
          var enemybird = createSprite(width+10, height/b * 3, 10, 10);
          if(b == 2){
            enemybird.y = enemybird.y / 2;
          }
          if(b == 3){
            enemybird.y = enemybird.y / 2 / 0.5;
          }
          if(b == 4){
            enemybird.y = ground.y - 65;
          }
          if(b == 5){
            enemybird.y = ground.y - 65 - 210;
          }
          if(enemybird.y == height){
            enemybird.y = enemybird.y / 2;
          }
          enemybird.lifetime = 315;
          if(TrexColorido == true){
            var randombird = Math.round(random(1, 3));
            if(randombird == 1){
              enemybird.addAnimation("birdleft", birdanmleft);
              enemybird.addAnimation("birdimgleft", birdimgleft);
              enemybird.changeAnimation("birdleft", birdanmleft);
            }
            if(randombird == 2){
              enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
              enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
              enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
            }
            if(randombird == 3){
              enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
              enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
              enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
            }
          }else if(TrexColorido == false){
            enemybird.addAnimation("birdleft", birdanmleft);
            enemybird.addAnimation("birdimgleft", birdimgleft);
            enemybird.changeAnimation("birdleft", birdanmleft);
          }else{}
          enemybird.scale = 0.51 / 2 / 2 + 0.8;
          if(debughitbox == true){
            enemybird.debug = true;
          }
          birdG.add(enemybird);          
        }
      }*/
    }
  }
}

function reset(){
  //if(getStateOrNot == true){
    getState();
  //}
  bird.rotation = 0;
  gamestate = PLAY;
  //setDinosaurColor();
  if(game == "Corrida Infinita"){
    if(TrexColorido == true){
      dinosaurcolor = "notselected";
    }
    trex.visible = false;
    gameover.x = width / 2
    gameover.y = 100;
    restart.x = width / 2
    restart.y = 140;
    trexIsCrouching = false;
    trexIsJumping = false;
  }
  if(game == "Voo Infinito"){
    birdIsFalling = false;
    birdIsFlying = false;
    if(TrexColorido == true){
      bird.visible = false;
      birdcolor = "notselected";
    }else{
      bird.changeAnimation("birdright", birdanmright);
    }
    bird.y = 160;
    restart.y = height / 2 + 40;
    gameover.y = height / 2;
  }
  restart.visible = false;
  gameover.visible = false;
  cactuG.destroyEach();
  cloudG.destroyEach();
  birdG.destroyEach();
  trex.changeAnimation("running", trex_running);
  
  if(score>highscore){
    highscore = score;
  }
  if(ShowBestHighscore == true){
    var chosen = false;
    if(BestHighscores1 == false && chosen == false){
      BestHighscores1 = highscore;
      updateBestHighscore(1);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 == false && chosen == false){
      BestHighscores2 = highscore;
      updateBestHighscore(2);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 == false && chosen == false){
      BestHighscores3 = highscore;
      updateBestHighscore(3);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 !== false
      && BestHighscores4 == false && chosen == false){
      BestHighscores4 = highscore;
      updateBestHighscore(4);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 !== false
      && BestHighscores4 !== false && BestHighscores5 == false && chosen == false){
      BestHighscores5 = highscore;
      updateBestHighscore(5);
      chosen = true;
    }
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

function setBirdColor(){
  if(birdcolor == "notselected" && TrexColorido == true && gamestate !== SELECT){
    var randomcolor = Math.round(random(1, 3));
    if(randomcolor == 1){
      birdcolor = "Cinza";
      //trex.addAnimation("running", trex_running);
      //trex.addAnimation("collided", trex_collided);
      //trex.addAnimation("crouching", trex_crouching);
      bird.changeAnimation("birdright", birdanmright);
      //trex.scale = 0.5;
    }
    if(randomcolor == 2){
      birdcolor = "Verde";
      //trex.addAnimation("running_green", trex_runninggreen);
      //trex.addAnimation("collided_green", trex_collidedgreen);
      //trex.addAnimation("crouching_green", trex_crouchinggreen);
      bird.changeAnimation("greenbirdright", greenbirdanmright);
      //trex.scale = 0.5;
    }
    if(randomcolor == 3){
      birdcolor = "Marrom";
      //trex.addAnimation("running_brown", trex_runningbrown);
      //trex.addAnimation("collided_brown", trex_collidedbrown);
      //trex.addAnimation("crouching_brown", trex_crouchingbrown);
      bird.changeAnimation("brownbirdright", brownbirdanmright);
      //trex.scale = 0.5;
    }
    bird.visible = true;
  }if(birdcolor == "notselected" && TrexColorido == false){
    birdcolor = "Cinza";
    //trex.addAnimation("running", trex_running);
    //trex.addAnimation("collided", trex_collided);
    //trex.addAnimation("crouching", trex_crouching);
    bird.changeAnimation("birdright", birdanmright);
    //trex.scale = 0.5;
    bird.visible = true;
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
  gameover.changeImage("gameovercolored", gameover_coloredimg);
  highscoreS.visible = true;
  ground.changeImage("groundcolored", ground_colored_image);
  if(game == "Corrida Infinita"){
    crouchbutton.visible = true;
    ground.visible = true;
    //sand.visible = true;
    //coloridobutton.visible = false;
    sand.visible = true;
    //sand.visible = true;
    //groundvisibility = true;
    //leftbutton.visible = false;
    //rightbutton.visible = false;
    //selectbutton.visible = false;
    trex.depth = sand.depth;
    sand.depth = sand.depth+1;
  }
  if(game == "Voo Infinito"){
    bird.visible = true;
    ground.visible = true;
    sand.visible = false;
  }
  coloridobutton.position(-1250, height / 2 - 30);
  normalbutton.position(-1250, height / 2 - 30);
}

function turnNormal(){
  TrexColorido = false;
  gamestate = PLAY;
  gameover.changeImage("gameover", gameoverimg);
  highscoreS.visible = true;
  ground.changeImage("ground", ground_image);
  if(game == "Corrida Infinita"){
    crouchbutton.visible = true;
    ground.visible = true;
    //coloridobutton.visible = false;
    
    //groundvisibility = true;
    //leftbutton.visible = false;
    //rightbutton.visible = false;
    //selectbutton.visible = false;
  }
  if(game == "Voo Infinito"){
    bird.visible = true;
    ground.visible = true;
    sand.visible = false;
  }
  coloridobutton.position(-1250, height / 2 - 30);
  normalbutton.position(-1250, height / 2 - 30);
}

function turnCorridaInfinita(){
  game = "Corrida Infinita";
  trex.y = 160;
  ground.y = 180;
  gameover.x = width / 2;
  gameover.y = 100;
  restart.x = width / 2;
  restart.y = 140;
}

function turnVooInfinito(){
  //if(!isMobile || isMobile && PcFeaturesOnMobile == true){
    game = "Voo Infinito";
    bird.y = 160;
    bird.velocityY = 0;
    ground.y = height - 5;
    restart.y = height / 2 + 40;
    gameover.y = height / 2;
  //}
}

function resetBestHighscore(number){
  if(number == 1 && BestHighscores1 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore1: false
    });
  }

  if(number == 2 && BestHighscores2 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: false
    });
  }

  if(number == 3 && BestHighscores3 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: false
    });
  }

  if(number == 4 && BestHighscores4 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: false
    });
  }

  if(number == 5 && BestHighscores5 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: false
    });
  }
  
}

function updateBestHighscore(number){
  if(number == 1){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore1: BestHighscores1
    });
  }

  if(number == 2){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: BestHighscores2
    });
  }

  if(number == 3){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: BestHighscores3
    });
  }

  if(number == 4){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: BestHighscores4
    });
  }

  if(number == 5){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: BestHighscores5
    });
  }
  
}

function resetBestHighscoreOne(){
  if(BestHighscores1 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore1: false
    });
  }
}

function resetBestHighscoreTwo(){
  if(BestHighscores2 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: false
    });
  }
}

function resetBestHighscoreThree(){
  if(BestHighscores3 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: false
    });
  }
}

function resetBestHighscoreFour(){
  if(BestHighscores4 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: false
    });
  }
}

function resetBestHighscoreFive(){
  if(BestHighscores5 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: false
    });
  }
}

function handleBestHighscores(){
  var changed = false;
  if(ShowBestHighscoreActive == false && changed == false){
    ShowBestHighscoreActive = true;
    changed = true;
  }
  if(ShowBestHighscoreActive == true && changed == false){
    ShowBestHighscoreActive = false;
    changed = true;
  }
}

function getState() {
  if(database !== null){
    if(getStateOrNot == true || gotStateOneTime == false){
      var PcFeaturesOnMobileRef = database.ref("/Trex/PcFeaturesOnMobile/");
      PcFeaturesOnMobileRef.on("value", function (data) {
        PcFeaturesOnMobile = data.val();
      });
      var trexIsInvencibleBirdsRef = database.ref("/Trex/trexIsInvencibleBirds/");
      trexIsInvencibleBirdsRef.on("value", function (data) {
        trexIsInvencibleBirds = data.val();
      });
      var trexIsInvencibleCactusRef = database.ref("/Trex/trexIsInvencibleCactus/");
      trexIsInvencibleCactusRef.on("value", function (data) {
        trexIsInvencibleCactus = data.val();
      });
      var birdIsInvencibleBirdsRef = database.ref("/Trex/birdIsInvencibleBirds/");
      birdIsInvencibleBirdsRef.on("value", function (data) {
        birdIsInvencibleBirds = data.val();
      });
      var birdIsInvencibleGroundRef = database.ref("/Trex/birdIsInvencibleGround/");
      birdIsInvencibleGroundRef.on("value", function (data) {
        birdIsInvencibleGround = data.val();
      });
      var ShowBestHighscoreRef = database.ref("/Trex/ShowBestHighscore/");
      ShowBestHighscoreRef.on("value", function (data) {
        ShowBestHighscore = data.val();
      });
      var BestHighscore1Ref = database.ref("/Trex/BestHighscores/BestHighscore1/");
      BestHighscore1Ref.on("value", function (data) {
        BestHighscores1 = data.val();
      });
      var BestHighscore2Ref = database.ref("/Trex/BestHighscores/BestHighscore2/");
      BestHighscore2Ref.on("value", function (data) {
        BestHighscores2 = data.val();
      });
      var BestHighscore3Ref = database.ref("/Trex/BestHighscores/BestHighscore3/");
      BestHighscore3Ref.on("value", function (data) {
        BestHighscores3 = data.val();
      });
      var BestHighscore4Ref = database.ref("/Trex/BestHighscores/BestHighscore4/");
      BestHighscore4Ref.on("value", function (data) {
        BestHighscores4 = data.val();
      });
      var BestHighscore5Ref = database.ref("/Trex/BestHighscores/BestHighscore5/");
      BestHighscore5Ref.on("value", function (data) {
        BestHighscores5 = data.val();
      });
    }
    var getStateOrNotRef = database.ref("/Trex/getStateOrNot/");
    getStateOrNotRef.on("value", function (data) {
      getStateOrNot = data.val();
    });
    var mostRecentVersionRef = database.ref("/Trex/mostRecentVersion/");
    mostRecentVersionRef.on("value", function (data) {
      mostRecentVersion = data.val();
    });
  }
}

function windowResized() {
  //if(gamestate == PLAY){
    /*if(!isMobile && windowWidth < width){
      resizeCanvas(width, windowHeight - 2.5);
    }else if(!isMobile && windowWidth > width){
      resizeCanvas(windowWidth - 2.3, windowHeight - 2.5);
    }
    else *//*if(!isMobile && height !== windowHeight){
      resizeCanvas(width, windowHeight - 2.5);
    }
    else if(isMobile){
      resizeCanvas(windowWidth - 2.3, windowHeight - 2.5);
    }
    else{

    }
    if(newHeight == undefined){
      newHeight = height - initialHeight + height;
    }
    
    if(TrexColorido == true && Isday == true){
      background('cyan');
    }else if(TrexColorido == false && Isday == true){
      background('white');
    }else if(TrexColorido !== false && TrexColorido !== true && Isday == true){
      background('white');
    }


  }*/
}

function reload(){
  location.reload();
}
