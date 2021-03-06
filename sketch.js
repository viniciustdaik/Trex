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
var crouchbutton, crouchbuttonclass = "crouchbutton", crouchbuttonOnPC = false, 
crouchbuttonimg, crouchbuttonHitbox, crouchbuttonbackgroundimage;//, crouchbuttonbackground;
var staranim;
var dinosaurcolor = "notselected", birdcolor = "notselected";
var TrexColorido = "notselected", sand;
var coloridobuttonover = false, normalbuttonover = true;
var trexfont;

var ShowBestHighscore = false, ShowBestHighscoresButton, 
ShowBestHighscoreActive = false, BestHighscores, ShowBestHighscoresButtonShadow, 
ShowBestHighscoresButtonHitbox;

var BestHighscores1 = false, BestHighscores2 = false, BestHighscores3 = false, BestHighscores4 = false, 
BestHighscores5 = false;

var BestHighscores1DeleteButton, BestHighscores2DeleteButton, BestHighscores3DeleteButton, 
BestHighscores4DeleteButton, BestHighscores5DeleteButton;

var game = "notselected";

var version = 1.2228997, mostRecentVersion = null, reloadButton;

var gotStateOneTime = false;

var initialHeight;//, newHeight;

var PcFeaturesOnMobile = false;

var getStateOrNot = false;

var cactuhitboxG;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);//iPad

var isiPhone = /iPhone/i.test(navigator.userAgent);

var isiPad = /iPad/i.test(navigator.userAgent);

var isAndroid = /Android/i.test(navigator.userAgent);

var isiPod = /iPod/i.test(navigator.userAgent);

let isiPhoneXR = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio &&
window.devicePixelRatio === 2 && window.screen.width === 414 &&
window.screen.height === 896

var browserName;

var mostOfTheScreen;

//var isTablet = /iPad/i.test(navigator.userAgent);

function preload() {
  //Carregar imagens em vari??veis auxiliares.
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
  //Cria????o da ??rea do jogo.
  createCanvas(windowWidth - 2.3, windowHeight - 2.5);//600, 200

  database = firebase.database();

  initialHeight = height;

  let userAgent = navigator.userAgent;

  if(width > height){
    mostOfTheScreen = "width";
  }else{
    mostOfTheScreen = "height";
  }
  
  if(userAgent.match(/chrome|chromium|crios/i)){
    //browserName = "chrome";
  }else if(userAgent.match(/firefox|fxios/i)){
    browserName = "firefox";
  }else if(userAgent.match(/safari/i)){
    browserName = "safari";
  }else if(userAgent.match(/opr\//i)){
    browserName = "opera";
  }else if(userAgent.match(/edg/i)){
    browserName = "edge";
  }else{
    browserName = "NoBrowser";
  }

  reloadButton = createButton("Recarregar");
  reloadButton.position(width - width - width, height - 25);
  if(isMobile == false && isiPhoneXR == false){
    reloadButton.size(80, 35);
  }else if(isMobile == true && mostOfTheScreen == "width" 
  || isiPhoneXR == true && mostOfTheScreen == "width"){
    reloadButton.size(80, 25);
  }else if(isMobile == true && mostOfTheScreen == "height"){

  }
  reloadButton.class("reloadButton");
  reloadButton.mousePressed(reload);

  BestHighscores = createSprite(width - width - width, -350);
  BestHighscores.visible = false;

  ShowBestHighscoresButtonShadow = createSprite(width - width - width, -350, 50, 50);

  ShowBestHighscoresButtonHitbox = createSprite(width - width - width, -350, 50, 50);
  ShowBestHighscoresButtonHitbox.visible = false;

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
  coloridobutton.position(width - width - width, height / 2 - 70);
  coloridobutton.mousePressed(turnColored);
  
  infiniteflightbutton = createButton("");
  infiniteflightbutton.class("squarebuttonIF");
  infiniteflightbutton.position(width / 2 + 255-15, height / 2 - 70);
  infiniteflightbutton.mousePressed(turnVooInfinito);

  //oldnormalbutton
  //normalbutton = createSprite(width/2-255, height/2);
  ////normalbutton.addImage("colorido", coloridobuttonimg);
  ////normalbutton.scale = 0.6;
  //normalbutton.visible = false;
  
  normalbutton = createButton("");
  normalbutton.class("largebuttonN");
  normalbutton.position(width - width - width, height / 2 - 70);
  normalbutton.mousePressed(turnNormal);

  infiniteracebutton = createButton("");
  infiniteracebutton.class("squarebuttonIR");
  infiniteracebutton.position(width / 2 -415+15, height / 2 - 70);
  infiniteracebutton.mousePressed(turnCorridaInfinita);

  if(//browserName == "safari" && isMobile == true ||
  //browserName == "safari" && isiPhoneXR == true
  isMobile == true || isiPhoneXR == true){
    //infiniteracebutton.size(100, 100);
    //infiniteflightbutton.size(100, 100);
    infiniteracebutton.position(width/2-415+55+125, infiniteracebutton.y);
    infiniteflightbutton.position(width / 2 + 255-65-85, infiniteflightbutton.y);
  }

  if(mostOfTheScreen == "height" && isMobile == true){
    infiniteracebutton.position(width / 2 - 80, 70);
    infiniteflightbutton.position(width / 2 - 80 , infiniteracebutton.y + 190);
  }
  
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

  //crouchbuttonbackground = createButton("");
  //crouchbuttonbackground.position(width-width-width, -350);
  //crouchbuttonbackground.class("crouchbuttonBackground");

  crouchbutton = createButton("");
  crouchbutton.position(width / 2-35, -350);
  crouchbutton.class("crouchbutton");
  crouchbutton.mousePressed(crouch);

  //crouchbutton.position(width/2-35,height/2);
  crouchbuttonHitbox = createSprite(crouchbutton.x + 34, crouchbutton.y + 35, 72, 75);
  crouchbuttonHitbox.visible = false;
  crouchbuttonHitbox.x = width / 2-35 + 34;

  if(mostOfTheScreen == "width"){
    crouchbuttonHitbox.y = 5 + 35;
  }
  //A condi????o if abaixo est?? depois do invisibleground
  //if(mostOfTheScreen == "height"){
  //  crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
  //}

  crouchbuttonbackgroundimage = createImg("nothing.png");
  crouchbuttonbackgroundimage.class("crouchbuttonBackgroundIMG");
  crouchbuttonbackgroundimage.position(width / 2-35 , -350);

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

  if(mostOfTheScreen == "height"){
    crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
  }
  //A condi????o if abaixo est?? depois da cria????o do crouchbuttonHitbox
  //if(mostOfTheScreen == "width"){
  //  crouchbuttonHitbox.y = 5 + 35;
  //}
  //O console.log abaixo est?? no come??o da fun????o draw
  //console.log("x:"+crouchbuttonHitbox.x+" y:"+crouchbuttonHitbox.y);

  /*var teste = Math.round(random(1, 100));
  console.log(teste);*/
  //trex.setCollider("rectangle", 0, 0, 400, trex.height);
  trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
  //trex.debug=true;

  getState();
}

function draw() {
  //console.log("x:"+crouchbuttonHitbox.x+" y:"+crouchbuttonHitbox.y);
  if(birdG.isTouching(cactuG) || birdG.isTouching(cactuhitboxG)){
    birdG.destroyEach();
    //console.log("Birds touching cactuG | cactuhitboxG destroyed!");
  }else{birdG.setVisibleEach(true);}
  /*if(crouchbuttonbackground.x !== crouchbutton.x && crouchbutton.x >= 0 && crouchbutton.y >= 0
  && gamestate == PLAY
  ||crouchbuttonbackground.y !== crouchbutton.y && crouchbutton.x >= 0 && crouchbutton.y >= 0
  && gamestate == PLAY){
    //crouchbuttonbackground.position(crouchbutton.x, crouchbutton.y);
    crouchbutton.class("crouchbuttonBackground");
  }else if(gamestate !== PLAY && crouchbuttonbackground.y !== crouchbutton.y
  ||gamestate !== PLAY && crouchbuttonbackground.x !== crouchbutton.x){
    //crouchbuttonbackground.position(crouchbutton.x, crouchbutton.y);
    crouchbutton.class("crouchbutton");
  }*/
  if(ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x
  ||ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y){
    ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25;
    ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25;
  }
  if(ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x
  ||ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y){
    ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24;
    ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24;
  }
  //if(crouchbuttonHitbox.x !== crouchbutton.x + 34
  //||crouchbuttonHitbox.y !== crouchbutton.y + 35){
  //  crouchbuttonHitbox.x = crouchbutton.x + 34;
  //  crouchbuttonHitbox.y = crouchbutton.y + 35;
  //}
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
    if(isMobile == false || isMobile == true && mostOfTheScreen == "width"){
      if(normalbutton.position.x !== width / 2 -415){
        normalbutton.position(width / 2 -415 + 30, normalbutton.y);//width / 2 -415, height / 2 - 30
      }
      if(coloridobutton.position.x !== width / 2 + 135 - 35){//width / 2 + 135
        coloridobutton.position(width / 2 + 135 - 105, coloridobutton.y);//width / 2 + 135, height / 2 - 30
      }
    }else if(isMobile == true && mostOfTheScreen == "height"){
      if(normalbutton.position.x !== width / 2 -415){
        normalbutton.position(width / 2 - 185, 70);//width / 2 -415, height / 2 - 30
      }
      if(coloridobutton.position.x !== width / 2 + 135 - 35){//width / 2 + 135
        coloridobutton.position(width / 2 - 185, 160);//width / 2 + 135, height / 2 - 30
      }
    }

    if(infiniteflightbutton.position.x !== width - width - width){
      infiniteflightbutton.position(width - width - width, infiniteflightbutton.y);
    }
    if(infiniteracebutton.position.x !== width - width - width){
      infiniteracebutton.position(width - width - width, infiniteracebutton.y);
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
    var reloadbuttonX = null;
    var reloadbuttonY = null;
    var reloadbuttonYSubtract = null;
    if(isMobile == false && isiPhoneXR == false && reloadbuttonX == null){
      reloadbuttonX = width/2+265-25;
      reloadButton.size(reloadButton.width, 35);
    }else if(isMobile == true && reloadbuttonX == null && mostOfTheScreen == "width"
      || isiPhoneXR == true && reloadbuttonX == null && mostOfTheScreen == "width"){
      reloadbuttonX = width/2+190-25;
      reloadButton.size(reloadButton.width, 25);
      reloadbuttonYSubtract = +5;
    }else if(isMobile == true && mostOfTheScreen == "height" && reloadbuttonX == null){
      reloadbuttonX = width/2+113;
      reloadbuttonYSubtract = +10;
    }
    //if(game == "Corrida Infinita" && TrexColorido !== true && reloadbuttonY == null
    //|| game !== "Corrida Infinita" && reloadbuttonY == null){
      reloadbuttonY = height - 50;
    //}
    /*else if(game == "Corrida Infinita" && TrexColorido == true && reloadbuttonY == null){
      reloadbuttonY = 140;
      if(isMobile == true && mostOfTheScreen == "height"){
        reloadbuttonYSubtract = +15;
      }
      if(isMobile == true && mostOfTheScreen == "width"){
        reloadbuttonYSubtract = +8;
      }
      
    }*/
    reloadbuttonY = reloadbuttonY + reloadbuttonYSubtract;
    console.log('This is not the most Recent Version.');
    push();
    if(isMobile == false && isiPhoneXR == false){
      textSize(35);
    }else if(isMobile == true && mostOfTheScreen == "width" 
    || isiPhoneXR == true && mostOfTheScreen == "width"){
      textSize(25);
    }else if(isMobile == true && mostOfTheScreen == "height"){
      textSize(18);
    }
    
    fill('red');
    textAlign("center");
    stroke('darkred');
    //The text is after drawSprites()
    //if(game == "Corrida Infinita" && TrexColorido !== true
    //|| game !== "Corrida Infinita"){
      //text("Esta vers??o n??o ?? a mais recente.", width/2-25, height - 25);
    //}else if(game == "Corrida Infinita" && TrexColorido == true){
      //text("Esta vers??o n??o ?? a mais recente.", width/2-25, 170);
    //}
    //if(game == "Corrida Infinita" && TrexColorido !== true
    //|| game !== "Corrida Infinita"){
      if(isMobile == false && isiPhoneXR == false){
        if(reloadButton.x !== reloadbuttonX|| reloadButton.y !== reloadbuttonY){
          reloadButton.position(reloadbuttonX, reloadbuttonY);//width/2 + 265, height - 50
        }
      }else if(isMobile == true || isiPhoneXR == true){
        if(reloadButton.x !== reloadbuttonX|| reloadButton.y !== reloadbuttonY){
          reloadButton.position(reloadbuttonX, reloadbuttonY);//width/2 + 190, height - 50
        }
      }
    /*}*//*else if(game == "Corrida Infinita" && TrexColorido == true){
      if(isMobile == false && isiPhoneXR == false){
        if(reloadButton.x !== reloadbuttonX|| reloadButton.y !== reloadbuttonY){
          reloadButton.position(reloadbuttonX, reloadbuttonY);//width/2 + 265, 140
        }
      }else if(isMobile == true || isiPhoneXR == true){
        if(reloadButton.x !== reloadbuttonX|| reloadButton.y !== reloadbuttonY){
          reloadButton.position(reloadbuttonX, reloadbuttonY);//width/2 + 190, 140
        }
      }
    }*/
    pop();
  }else{
    if(reloadButton.x !== width - width - width || reloadButton.y !== height - 25){
      reloadButton.position(width - width - width, height - 25);
    }
  }
  if(game == "notselected"){
    if(isMobile == false && isiPhoneXR == false){
      textSize(30);
    }else if(isMobile == true || isiPhoneXR == true){
      textSize(22.5);
    }
    
    fill('gold');
    stroke('green');
    textFont(trexfont);
    textAlign("center");
    //if(initialHeight == height){
      if(isMobile == false && isiPhoneXR == false){
        text("Voo Infinito", infiniteflightbutton.x + 85, infiniteflightbutton.y + 185);
      }else if(isMobile == true || isiPhoneXR == true){
        text("Voo Infinito", infiniteflightbutton.x + 85, infiniteflightbutton.y + 175);
      }
      
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
      text("N??o Dispon??vel Em Celular", infiniteflightbutton.x + 85, infiniteflightbutton.y + 230);
      pop();
    }*/
    if(isMobile == false && isiPhoneXR == false){
      text("Corrida Infinita", infiniteracebutton.x + 85, infiniteracebutton.y + 185);
    }else if(isMobile == true || isiPhoneXR == true){
      text("Corrida Infinita", infiniteracebutton.x + 85, infiniteracebutton.y + 175);
    }
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
        infiniteflightbutton.position(width / 2 + 255-15, infiniteflightbutton.y);
      }
      if(infiniteracebutton.x !== width / 2 -415){
        infiniteracebutton.position(width / 2 -415+15, infiniteracebutton.y);
        
      }
      if(//browserName == "safari" && isMobile == true ||
      //browserName == "safari" && isiPhoneXR == true
      isMobile == true || isiPhoneXR == true){
        //infiniteracebutton.size(100, 100);
        //infiniteflightbutton.size(100, 100);
        infiniteracebutton.position(width/2-415+55+125, infiniteracebutton.y);
        infiniteflightbutton.position(width / 2 + 255-65-85, infiniteflightbutton.y);
      }
      
    }
    text(highscore, highscoreS.x+25, 42);
    textAlign("center");
    text("PONTUA????O: "+score, highscoreS.x+45, 20);//500
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
    if(isMobile == false && isiPhoneXR == false){
      textSize(32);
    }else if(isMobile == true || isiPhoneXR == true){
      textSize(21);
    }
    if(mostOfTheScreen == "width" && isMobile == true || isMobile == false){
      if(game !== "notselected"){
        text("Selecione Um Modo De Jogo.", width / 2, height/2-95);
      }else{
        text("Selecione Um Jogo.", width / 2, height/2-95);
      }
    }else if(mostOfTheScreen == "height" && isMobile == true){
      if(game !== "notselected"){
        push();
        fill('cyan');
        stroke('green');
        textAlign('center');
        textSize(15.5);
        text("Selecione Um Modo De Jogo.", width / 2, 50);
        pop();
      }else{
        text("Selecione Um Jogo.", width / 2, 50);
      }
    }
    
    
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
      if(crouchbutton.x !== width / 2-35 && trexIsJumping == false && !isMobile && mostOfTheScreen == "width"
      ||crouchbutton.y !== 5 && trexIsJumping == false && !isMobile && mostOfTheScreen == "width"
      ||crouchbutton.x !== width / 2-35 && trexIsJumping == false && isMobile && mostOfTheScreen == "width"
      ||crouchbutton.y !== 5 && trexIsJumping == false && isMobile && mostOfTheScreen == "width"){
        if(isMobile || !isMobile && crouchbuttonOnPC == true){
          crouchbuttonHitbox.x = width / 2-35 + 34;
          crouchbuttonHitbox.y = 5 + 35;
          crouchbutton.position(width / 2-35, 5);
          if(crouchbuttonHitbox.x !== crouchbutton.x + 34 || crouchbuttonHitbox.y !== crouchbutton.y + 35){
            crouchbuttonHitbox.x = crouchbutton.x + 34;
            crouchbuttonHitbox.y = crouchbutton.y + 35;
          }
          /*if(crouchbuttonclass == "crouchbuttonbackground"){
            crouchbuttonclass = "crouchbutton";
            if(dinosaurcolor == "Cinza"){
              crouchbutton.class("crouchbutton");
            }else if(dinosaurcolor == "Verde"){
              crouchbutton.class("crouchbuttongreentrex");
            } else if(dinosaurcolor == "Marrom"){
              crouchbutton.class("crouchbuttonbrowntrex");
            }
          }*/
        }
      }else if(crouchbutton.x !== invisibleground.y + 50 && trexIsJumping == false
      && isMobile == true && mostOfTheScreen == "height" //isIPhoneXR
      ||crouchbutton.x !== width / 2-35 && trexIsJumping == false && isMobile == true
      && mostOfTheScreen == "height" //isIPhoneXR
      ||crouchbutton.x !== width / 2-35 && !isMobile && crouchbuttonOnPC == true
      && mostOfTheScreen == "height"
      ||crouchbutton.y !== invisibleground.y + 50 && !isMobile && crouchbuttonOnPC == true
      && mostOfTheScreen == "height"){
        crouchbuttonHitbox.x = width / 2-35 + 34;
        crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
        crouchbutton.position(width / 2-35, invisibleground.y + 50);
        if(crouchbuttonHitbox.x !== crouchbutton.x + 34 || crouchbuttonHitbox.y !== crouchbutton.y + 35){
          crouchbuttonHitbox.x = crouchbutton.x + 34;
          crouchbuttonHitbox.y = crouchbutton.y + 35;
        }
        /*if(crouchbuttonclass == "crouchbuttonbackground"){
          crouchbuttonclass = "crouchbutton";
          if(dinosaurcolor == "Cinza"){
            crouchbutton.class("crouchbutton");
          }else if(dinosaurcolor == "Verde"){
            crouchbutton.class("crouchbuttongreentrex");
          }else if(dinosaurcolor == "Marrom"){
            crouchbutton.class("crouchbuttonbrowntrex");
          }
        }*/
      }
      if(trexIsJumping == true && crouchbuttonOnPC == true && !isMobile
      || isMobile && trexIsJumping == true){//crouchbutton.x !== width / 2-35 && trexIsJumping == true
      //||crouchbutton.y !== -350 && trexIsJumping == true){
        crouchbutton.position(width / 2-35, -350);
        if(crouchbuttonbackgroundimage.y !== invisibleground.y + 50
        && isMobile == true && mostOfTheScreen == "height" //isIPhoneXR
        ||crouchbuttonbackgroundimage.x !== width / 2-35 && isMobile == true
        && mostOfTheScreen == "height"
        ||crouchbuttonbackgroundimage.x !== width / 2-35 && !isMobile && crouchbuttonOnPC == true
        && mostOfTheScreen == "height"
        ||crouchbuttonbackgroundimage.y !== invisibleground.y + 50 && !isMobile && crouchbuttonOnPC == true
        && mostOfTheScreen == "height"){
          crouchbuttonbackgroundimage.position(width / 2-35, invisibleground.y + 50);
        }
        if(crouchbuttonbackgroundimage.x !== width / 2-35 && !isMobile && mostOfTheScreen == "width"
        && crouchbuttonOnPC == true
        ||crouchbuttonbackgroundimage.y !== 5 && !isMobile && mostOfTheScreen == "width"
        && crouchbuttonOnPC == true
        ||crouchbuttonbackgroundimage.x !== width / 2-35 && isMobile
        && mostOfTheScreen == "width"
        ||crouchbuttonbackgroundimage.y !== 5 && isMobile 
        && mostOfTheScreen == "width"){
          crouchbuttonbackgroundimage.position(width / 2-35, 5);
        }
        if(crouchbuttonclass == "crouchbutton"){
          //crouchbutton.class("crouchbuttonBackground");
          //crouchbuttonclass = "crouchbuttonbackground";
        }
      }else if(trexIsJumping == false && crouchbuttonclass == "crouchbuttonbackground"
      ||crouchbuttonclass == "crouchbutton" && dinosaurcolor !== "Cinza"
      ||crouchbuttonclass == "crouchbuttongreentrex" && dinosaurcolor !== "Verde"
      ||crouchbuttonclass == "crouchbuttonbrowntrex" && dinosaurcolor !== "Marrom"
      ||trexIsJumping == false && crouchbuttonbackgroundimage.y !== -350
      ||trexIsJumping == false && crouchbuttonbackgroundimage.x !== width /2-35){
        if(dinosaurcolor == "Cinza"){
          crouchbutton.class("crouchbutton");
          crouchbuttonclass = "crouchbutton";
        }else if(dinosaurcolor == "Verde"){
          crouchbutton.class("crouchbuttongreentrex");
          crouchbuttonclass = "crouchbuttongreentrex";
        }else if(dinosaurcolor == "Marrom"){
          crouchbutton.class("crouchbuttonbrowntrex");
          crouchbuttonclass = "crouchbuttonbrowntrex";
        }
        //crouchbuttonclass = "crouchbutton";
        if(trexIsJumping == false){
          crouchbuttonbackgroundimage.position(width /2-35, -350);
        }
      }else if(!isMobile && crouchbuttonOnPC == false && crouchbutton.x >= 0
      ||!isMobile && crouchbuttonOnPC == false && crouchbutton.y >= 0){
        crouchbutton.position(width / 2-35, -350);
        crouchbuttonbackgroundimage.position(width /2-35, -350);
      }

      //if(crouchbuttonHitbox.x !== crouchbutton.x + 34
      //||crouchbuttonHitbox.y !== crouchbutton.y + 35){
      //  crouchbuttonHitbox.x = crouchbutton.x + 34;
      //  crouchbuttonHitbox.y = crouchbutton.y + 35;
      //}

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
      && !mouseIsOver(ShowBestHighscoresButtonHitbox)
      && !mouseIsOver(crouchbuttonHitbox)){
      //&& !mousePressedOver(crouchbuttonbackground)){
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
      }if(keyWentUp("S") && !keyDown(DOWN_ARROW)
      ||keyWentUp(DOWN_ARROW) && !keyDown("S")){
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
      if(trex.velocityY < 0 && trexIsCrouching == true){
        trex.velocityY = 1;
        if(trexIsJumping == true && trexIsCrouching == true){
          trexIsJumping = false;
        }
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
      crouchbutton.position(width / 2-35, -350);
      crouchbuttonbackgroundimage.position(width / 2-35, -350);
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
    //pular quando a tecla de espa??o for pressionada
    
    
    
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

  if(ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x
  ||ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y){
    ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25;
    ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25;
  }
  if(ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x
  ||ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y){
    ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24;
    ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24;
  }
  //if(crouchbuttonHitbox.x !== crouchbutton.x + 34
  //||crouchbuttonHitbox.y !== crouchbutton.y + 35){
  //  crouchbuttonHitbox.x = crouchbutton.x + 34;
  //  crouchbuttonHitbox.y = crouchbutton.y + 35;
  //}

  drawSprites();

  if(mostRecentVersion !== null && mostRecentVersion > version){
    push();
   
    if(isMobile == false && isiPhoneXR == false){
      textSize(35);
    }else if(isMobile == true && mostOfTheScreen == "width" 
    || isiPhoneXR == true && mostOfTheScreen == "width"){
      textSize(25);
    }else if(isMobile == true && mostOfTheScreen == "height"){
      textSize(18);
    }
    textFont("default");

    fill('red');
    textAlign("center");
    stroke('darkred');
    text("Esta vers??o n??o ?? a mais recente.", width/2-25, height - 25);
    pop();
  }

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
      var enemybird = createSprite(width+15/*width+10*/, 100, 10, 10);//610, 100
      enemybird.visible = false;
      enemybird.y = Math.round(random(130, 130));
      if(upperbirdenabled == true){
        var upperbird = createSprite(enemybird.x, 100-30, 10, 80);
        upperbird.visible = false;
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
    if(BestHighscores1 == false && chosen == false && highscore !== BestHighscores2
    && highscore !== BestHighscores3 && highscore !== BestHighscores4 && highscore !== BestHighscores5){
      BestHighscores1 = highscore;
      updateBestHighscore(1);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 == false && chosen == false && highscore !== BestHighscores1
    && highscore !== BestHighscores3 && highscore !== BestHighscores4 && highscore !== BestHighscores5){
      BestHighscores2 = highscore;
      updateBestHighscore(2);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 == false && chosen == false
    && highscore !== BestHighscores1 && highscore !== BestHighscores2 && highscore !== BestHighscores4
    && highscore !== BestHighscores5){
      BestHighscores3 = highscore;
      updateBestHighscore(3);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 !== false
    && BestHighscores4 == false && chosen == false && highscore !== BestHighscores1
    && highscore !== BestHighscores2 && highscore !== BestHighscores3 && highscore !== BestHighscores5){
      BestHighscores4 = highscore;
      updateBestHighscore(4);
      chosen = true;
    }
    if(BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 !== false
    && BestHighscores4 !== false && BestHighscores5 == false && chosen == false
    && highscore !== BestHighscores1 && highscore !== BestHighscores2 && highscore !== BestHighscores3
    && highscore !== BestHighscores4){
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
      crouchbuttonclass = "crouchbutton";
      crouchbutton.class("crouchbutton");
      //trex.scale = 0.5;
    }
    if(randomcolor == 2){
      dinosaurcolor = "Verde";
      //trex.addAnimation("running_green", trex_runninggreen);
      //trex.addAnimation("collided_green", trex_collidedgreen);
      //trex.addAnimation("crouching_green", trex_crouchinggreen);
      trex.changeAnimation("running_green", trex_runninggreen);
      crouchbuttonclass = "crouchbuttongreentrex";
      crouchbutton.class("crouchbuttongreentrex");
      //trex.scale = 0.5;
    }
    if(randomcolor == 3){
      dinosaurcolor = "Marrom";
      //trex.addAnimation("running_brown", trex_runningbrown);
      //trex.addAnimation("collided_brown", trex_collidedbrown);
      //trex.addAnimation("crouching_brown", trex_crouchingbrown);
      trex.changeAnimation("running_brown", trex_runningbrown);
      crouchbuttonclass = "crouchbuttonbrowntrex";
      crouchbutton.class("crouchbuttonbrowntrex");
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
  touches = [];
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
  coloridobutton.position(-1250, coloridobutton.y);
  normalbutton.position(-1250, normalbutton.y);
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
  coloridobutton.position(-1250, coloridobutton.y);
  normalbutton.position(-1250, normalbutton.y);
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
  touches = [];
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
  touches = [];
}

function resetBestHighscoreTwo(){
  if(BestHighscores2 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: false
    });
  }
  touches = [];
}

function resetBestHighscoreThree(){
  if(BestHighscores3 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: false
    });
  }
  touches = [];
}

function resetBestHighscoreFour(){
  if(BestHighscores4 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: false
    });
  }
  touches = [];
}

function resetBestHighscoreFive(){
  if(BestHighscores5 !== false){
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: false
    });
  }
  touches = [];
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
  touches = [];
}

function getState(){
  if(navigator.onLine == true){
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

