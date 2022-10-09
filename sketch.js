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
var onlyDayOrNight = false;
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

var windowResizeX = true, windowResizeY = false;

var version = 1.22296, mostRecentVersion = null, reloadButton,
  LatestUpdatePlatformsAimed = ""/* PC, Mobile, Android, iPhone, iPad, iPhoneXR, All */;//1.22295

var infiniteflightbutton, infiniteracebutton;

var gotStateOneTime = false;

var initialHeight, newHeightAdded, initialWidth, newWidthAdded, newHeight;

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
  window.screen.height === 896;

var browserName;

var mostOfTheScreen;

var AutoCrouchTime = 0750, MobileUnCrouchMode = "press"/* press, automatic */, crouchAfterJumping = false,
  MobileCrouchMode = "ifPressed"/* ifNotJumpingAndPressed, ifPressed */;

//var isTablet = /iPad/i.test(navigator.userAgent);

var scoreText, highscoreText;

var player, playerCount, database, MaxOfPlayers = 3, allPlayers;

var player2, player3, player4, player5, player6, player7, player8, player9, player10,
  player2text, player3text,
  player2color = "Cinza", player3color = "Cinza",
  player2isCrouching = false, player3isCrouching = false,
  player2isGameover = false, player3isGameover = false,
  player2gamePlaying, player3gamePlaying;

var multiplayerToggle, multiplayerToggleValue = false, nameInput;

var allMultiplayerClientsReload = false;

var backButton, backButtonOnPC = false;

var allPlayerIndexsAvailable = "";

var canPlayMultiplayer = true;

var invisibleGroundPositionOfTheScreen = "bottom", invisibleGroundPosY;

function preload() {
  soundFormats('mp3');

  //Carregar imagens em variáveis auxiliares.
  trex_running = loadAnimation("./trex/trex1-blink.png", "./trex/trex3.png", "./trex/trex4.png",
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

  //Sounds
  jumpsound = loadSound("jump.mp3");
  failsound = loadSound("fail.mp3");
  checkpointsound = loadSound("checkPoint.mp3");

  jumpsound.setVolume(1);
  checkpointsound.setVolume(2.5);
  failsound.setVolume(2.5);
}

function setup() {
  //Criação da área do jogo.
  createCanvas(windowWidth - 2.3, windowHeight - 2.5);//600, 200

  database = firebase.database();

  initialWidth = width;
  initialHeight = height;

  let userAgent = navigator.userAgent;

  if (width > height) {
    mostOfTheScreen = "width";
  } else {
    mostOfTheScreen = "height";
  }

  if (invisibleGroundPositionOfTheScreen === "top") {
    invisibleGroundPosY = 190;
  } else if (invisibleGroundPositionOfTheScreen === "bottom") {
    invisibleGroundPosY = height - 5 + 10 - 25;//height - 5 + 10
  }

  console.log("invisibleGroundPosY: " + invisibleGroundPosY);

  if (userAgent.match(/chrome|chromium|crios/i)) {
    //browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "NoBrowser";
  }

  reloadButton = createButton("Recarregar");
  reloadButton.position(width - width - width, height - 25);
  if (isMobile == false && isiPhoneXR == false) {
    reloadButton.size(80, 35);
  } else if (isMobile == true && mostOfTheScreen == "width"
    || isiPhoneXR == true && mostOfTheScreen == "width") {
    reloadButton.size(80, 25);
  } else if (isMobile == true && mostOfTheScreen == "height") {

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
  BestHighscores1DeleteButton.position(width - width - width, height / 2);
  BestHighscores1DeleteButton.mousePressed(resetBestHighscoreOne);

  BestHighscores2DeleteButton = createButton("");
  BestHighscores2DeleteButton.size(20, 20);
  BestHighscores2DeleteButton.class("TrashButton");
  BestHighscores2DeleteButton.position(width - width - width, height / 2);
  BestHighscores2DeleteButton.mousePressed(resetBestHighscoreTwo);

  BestHighscores3DeleteButton = createButton("");
  BestHighscores3DeleteButton.size(20, 20);
  BestHighscores3DeleteButton.class("TrashButton");
  BestHighscores3DeleteButton.position(width - width - width, height / 2);
  BestHighscores3DeleteButton.mousePressed(resetBestHighscoreThree);

  BestHighscores4DeleteButton = createButton("");
  BestHighscores4DeleteButton.size(20, 20);
  BestHighscores4DeleteButton.class("TrashButton");
  BestHighscores4DeleteButton.position(width - width - width, height / 2);
  BestHighscores4DeleteButton.mousePressed(resetBestHighscoreFour);

  BestHighscores5DeleteButton = createButton("");
  BestHighscores5DeleteButton.size(20, 20);
  BestHighscores5DeleteButton.class("TrashButton");
  BestHighscores5DeleteButton.position(width - width - width, height / 2);
  BestHighscores5DeleteButton.mousePressed(resetBestHighscoreFive);

  var trexImg = createImg('./trex/trex_idle(eye fixed).png');
  trexImg.position(width - width - width - width, height - height - height, height);
  trexImg.size(150, 150);

  //invisibleGroundPosY - 10 //180
  ground = createSprite(width / 2, invisibleGroundPosY - 10, 400, 20);
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
  coloridobutton.position(width - width - width - 1000, height / 2 - 70);
  coloridobutton.mousePressed(turnColored);

  infiniteflightbutton = createButton("");
  infiniteflightbutton.class("squarebuttonIF");
  infiniteflightbutton.position(width / 2 + 255 - 15, height / 2 - 70);
  infiniteflightbutton.mousePressed(turnVooInfinito);

  //oldnormalbutton
  //normalbutton = createSprite(width/2-255, height/2);
  ////normalbutton.addImage("colorido", coloridobuttonimg);
  ////normalbutton.scale = 0.6;
  //normalbutton.visible = false;

  normalbutton = createButton("");
  normalbutton.class("largebuttonN");
  normalbutton.position(width - width - width - 1000, height / 2 - 70);
  normalbutton.mousePressed(turnNormal);

  infiniteracebutton = createButton("");
  infiniteracebutton.class("squarebuttonIR");
  infiniteracebutton.position(width / 2 - 415 + 15, height / 2 - 70);
  infiniteracebutton.mousePressed(turnCorridaInfinita);

  if (//browserName == "safari" && isMobile == true ||
    //browserName == "safari" && isiPhoneXR == true
    mostOfTheScreen == "width" && isMobile == true
    || mostOfTheScreen == "width" && isiPhoneXR == true) {
    //infiniteracebutton.size(100, 100);
    //infiniteflightbutton.size(100, 100);
    infiniteracebutton.position(width / 2 - 415 + 55 + 125, infiniteracebutton.y);
    infiniteflightbutton.position(width / 2 + 255 - 65 - 85, infiniteflightbutton.y);
  }

  if (mostOfTheScreen == "height" && isMobile == true) {
    infiniteracebutton.position(width / 2 - 80, 70);
    infiniteflightbutton.position(width / 2 - 80, infiniteracebutton.y + 190);
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

  //highscoreS x: 100
  highscoreS = createSprite(50, 33, 10, 10);//windowWidth-80, 33
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
  crouchbutton.position(width / 2 - 35, -350);
  crouchbutton.class("crouchbutton");
  crouchbutton.mousePressed(crouch);

  //crouchbutton.position(width/2-35,height/2);
  crouchbuttonHitbox = createSprite(crouchbutton.x + 34, crouchbutton.y + 35, 72, 75);
  crouchbuttonHitbox.visible = false;
  crouchbuttonHitbox.x = width / 2 - 35 + 34;

  if (mostOfTheScreen == "width") {
    crouchbuttonHitbox.y = 5 + 35;
  }
  //A condição if abaixo está depois do invisibleground
  //if(mostOfTheScreen == "height"){
  //  crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
  //}

  crouchbuttonbackgroundimage = createImg("nothing.png");
  crouchbuttonbackgroundimage.class("crouchbuttonBackgroundIMG");
  crouchbuttonbackgroundimage.position(width / 2 - 35, -350);

  /*cloud1 = createSprite(160, 100, 30, 30);
  cloud1.addImage("cloud", cloud_image);
  cloud1.scale = 0.5;
  cloud2 = createSprite(460, 60, 30, 30);
  cloud2.addImage("cloud", cloud_image);
  cloud2.scale = 0.5;*/

  //criando o trex
  //y:160
  trex = createSprite(50, invisibleGroundPosY - 30, 20, 50);
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
  if (TrexColorido == false) {
    trex.changeAnimation("running", trex_running);
  }
  trex.scale = 0.5;
  trex.visible = false;

  //height / 2 + 180
  sand = createSprite(width / 2, height / 2 + invisibleGroundPosY - 10, width, height - 12);
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
  //edges = createEdgeSprites();
  //edges.setVisibleEach(false);

  cloudG = new Group();
  cactuG = new Group();
  birdG = new Group();
  cactuhitboxG = new Group();

  //gameover y: 100
  gameover = createSprite(width / 2, invisibleGroundPosY - 90);//300, 100
  gameover.addImage("gameovercolored", gameover_coloredimg);
  gameover.addImage("gameover", gameoverimg);
  gameover.visible = false;

  //restart y: 140
  restart = createSprite(width / 2, invisibleGroundPosY - 50);//300, 140
  restart.addImage("restart", restartimg)
  restart.visible = false;
  restart.scale = 0.6;

  //190
  invisibleground = createSprite(200, invisibleGroundPosY, 400, 10);
  invisibleground.visible = false;

  //text test
  //scoreText = createElement("h2");
  //scoreText.position(highscoreS.x-45, -12.5);
  //scoreText.html("PONTUAÇÃO: "+score);
  //scoreText.style('@font-face', "font-family", "Trex", "src:url", "./Trex.ttf");
  //scoreText.style('text-align', 'center');
  //scoreText.style('font-size', '20px');

  //fill('gold');
  //stroke('green');
  //textSize(15);
  //textFont(trexfont);
  //text("PONTUAÇÃO: "+score, highscoreS.x+45, 20);//500

  if (mostOfTheScreen == "height") {
    crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
  }
  //A condição if abaixo está depois da criação do crouchbuttonHitbox
  //if(mostOfTheScreen == "width"){
  //  crouchbuttonHitbox.y = 5 + 35;
  //}
  //O console.log abaixo está no começo da função draw
  //console.log("x:"+crouchbuttonHitbox.x+" y:"+crouchbuttonHitbox.y);

  /*var teste = Math.round(random(1, 100));
  console.log(teste);*/
  //trex.setCollider("rectangle", 0, 0, 400, trex.height);
  trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
  //trex.debug=true;

  backButton = createButton("");
  backButton.position(width - width - width - 1000, -500);
  backButton.class("backButton");
  backButton.size(50, 50);
  backButton.mousePressed(handleBack);

  getState();

  if (allMultiplayerClientsReload === true) {
    desactivateMultiplayerReload();
  }

  multiplayerToggle = createButton("");
  multiplayerToggle.position(width - width - width - 1000, -500);
  multiplayerToggle.class("multiplayerToggle");//multiplayerToggleFalse
  multiplayerToggle.style("background-color", "darkred");
  multiplayerToggle.mousePressed(handleMultiplayerToggle);

  nameInput = createInput("").attribute("placeholder", "Nome");
  nameInput.position(width - width - width - 1000, -500);
  /* nameInput.height - 7 if using javascript style*/

  //javascript style
  /*nameInput.style('width', '353px');
  nameInput.style('height', '30px');
  nameInput.style('font-size', '20px');
  nameInput.style('background', 'lavender');
  nameInput.style('border-radius', '13px');*/
  nameInput.class("nameInput");

  player2text = createElement("h2");
  player2text.style("font-size", '15px');
  player2text.style("color", 'darkgray');//gold
  player2text.position(-1000, -350);

  player3text = createElement("h2");
  player3text.style("font-size", '15px');
  player3text.style("color", 'darkgray');//gold
  player3text.position(-1000, -350);
}

function draw() {
  if (player !== undefined && player.playerAlreadyStarted === false) {
    player.startPlayer();
  }

  if (player !== undefined && playerCount === 2 && player.index === 3) {
    player.changePlayerIndex();
  }

  if (backButtonOnPC === true && !isMobile && backButton.x !== width - 55 && gamestate !== SELECT) {
    backButton.position(width - 55, height - 55);
  }

  if (playerCount > MaxOfPlayers && player !== undefined
    || player !== undefined && player.changedPlayerCountVerified !== playerCount
    && player.changedPlayerCountVerified !== null
    || playerCount < 0) {
    /*console.log("Checking Players...");
    for(var playeri = 1; playeri <= playerCount; playeri = playeri+1){
      if(playeri > MaxOfPlayers && allPlayers["player"+playeri] !== undefined){
          database.ref("/Trex/players/player"+playeri).remove();
          console.log("Found Extra Player 'player"+playeri+"', Removed!");
        }
    }
    if(allPlayers["playernull"] !== undefined){
      database.ref("/Trex/players/playernull").remove();
      console.log("Found playernull, Removed!");
    }
    if(playerCount > MaxOfPlayers){
      playerCount = MaxOfPlayers;
      player.updateCount(playerCount);
    }*/
    Player.checkAllPlayersAndPlayerCount();
  }
  if (allMultiplayerClientsReload === true && player !== undefined) {
    window.location.reload();
  }

  if (allMultiplayerClientsReload === true && player === undefined) {
    desactivateMultiplayerReload();
  }

  if (playerCount === undefined && player !== undefined) {
    player.getCount();
  }

  if (player !== undefined && game == "Voo Infinito") {
    if (player.positionY !== bird.y) {
      player.positionY = bird.y;
      player.update();
    }
    if (player.rotation !== bird.rotation) {
      player.rotation = bird.rotation;
      player.update();
    }
    for (var playerNum = 2; playerNum <= playerCount; playerNum = playerNum + 1) {
      var otherPlayer;
      var otherPlayerColor;
      var otherPlayerIsGameover;
      if (playerNum === 2) {
        otherPlayer = player2;
        otherPlayerColor = player2color;
        otherPlayerIsGameover = player2isGameover;
      } else if (playerNum === 3) {
        otherPlayer = player3;
        otherPlayerColor = player3color;
        otherPlayerIsGameover = player3isGameover;
      }
      if (otherPlayer.scale !== 0.51 / 2 / 2 + 0.8) {
        otherPlayer.scale = 0.51 / 2 / 2 + 0.8;
      }
      if (otherPlayerColor === "Cinza" && player !== undefined) {
        if (otherPlayerIsGameover === false) {
          otherPlayer.changeAnimation("birdright", birdanmright);
          //trex.changeAnimation("running", trex_running);
          /*playernum.addAnimation("birdright", birdanmright);
            playernum.addAnimation("greenbirdright", greenbirdanmright);
            playernum.addAnimation("brownbirdright", brownbirdanmright);
            playernum.addAnimation("birdimgright", birdimgright);
            playernum.addAnimation("greenbirdimgright", greenbirdimgright);
            playernum.addAnimation("brownbirdimgright", brownbirdimgright);*/
        } else {
          otherPlayer.changeAnimation("birdimgright", birdimgright);
        }
      } else if (otherPlayerColor === "Verde" && player !== undefined && TrexColorido === true) {
        if (otherPlayerIsGameover === false) {
          otherPlayer.changeAnimation("greenbirdright", greenbirdanmright);
        } else {
          otherPlayer.changeAnimation("greenbirdimgright", greenbirdimgright);
        }
      } else if (otherPlayerColor === "Marrom" && player !== undefined && TrexColorido === true) {
        if (otherPlayerIsGameover === false) {
          otherPlayer.changeAnimation("brownbirdright", brownbirdanmright);
        } else {
          otherPlayer.changeAnimation("brownbirdimgright", brownbirdimgright);
        }
      }
    }

    //Isso está na função setBirdColor
    //if(player.color !== birdcolor){
    //  player.color = birdcolor;
    //  player.update();
    //}
  }
  if (player !== undefined && game == "Corrida Infinita") {
    if (player.positionY !== trex.y) {
      player.positionY = trex.y;
      player.update();
    }
    if (player.isCrouching !== trexIsCrouching) {
      player.isCrouching = trexIsCrouching;
      player.update();
    }
    if (player.index === 1) {
      trex.x = 75;
      player.positionX = trex.x;
      player.update();
    } else if (player.index === 2) {
      trex.x = 30;
      player.positionX = trex.x;
      player.update();
    } else if (player.index === 3) {
      trex.x = 75 + 45;
      player.positionX = trex.x;
      player.update();
    }
    for (var playerNum = 2; playerNum <= playerCount; playerNum = playerNum + 1) {
      var otherPlayer;
      var otherPlayerColor;
      var otherPlayerIsGameover;
      var otherPlayerIsCrouching;
      if (playerNum === 2) {
        otherPlayer = player2;
        otherPlayerColor = player2color;
        otherPlayerIsGameover = player2isGameover;
        otherPlayerIsCrouching = player2isCrouching;
      } else if (playerNum === 3) {
        otherPlayer = player3;
        otherPlayerColor = player3color;
        otherPlayerIsGameover = player3isGameover;
        otherPlayerIsCrouching = player3isCrouching;
      }
      if (otherPlayer.scale !== 0.5) {
        otherPlayer.scale = 0.5;
      }
      if (otherPlayerColor === "Cinza" && player !== undefined) {
        if (TrexColorido === false) {
          if (otherPlayerIsGameover === false) {
            if (otherPlayerIsCrouching === false) {
              otherPlayer.changeAnimation("running", trex_running);
            } else {
              otherPlayer.changeAnimation("crouching", trex_crouching);
            }
          } else {
            otherPlayer.changeAnimation("collided", trex_collided);
          }
        } else {
          if (otherPlayerIsGameover === false) {
            if (otherPlayerIsCrouching === false) {
              otherPlayer.changeAnimation("runningnb", trex_runningnb);
            } else {
              otherPlayer.changeAnimation("crouchingnb", trex_crouchingnb);
            }
          } else {
            otherPlayer.changeAnimation("collidednb", trex_collidednb);
          }
        }
        //trex.changeAnimation("running", trex_running);
        /*trex.addAnimation("running", trex_running);
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
          trex.addAnimation("crouching_brown", trex_crouchingbrown);*/
      } else if (otherPlayerColor === "Verde" && player !== undefined && TrexColorido === true) {
        if (otherPlayerIsGameover === false) {
          if (otherPlayerIsCrouching === false) {
            otherPlayer.changeAnimation("running_green", trex_runninggreen);
          } else {
            otherPlayer.changeAnimation("crouching_green", trex_crouchinggreen);
          }
        } else {
          otherPlayer.changeAnimation("collided_green", trex_collidedgreen);
        }
      } else if (otherPlayerColor === "Marrom" && player !== undefined && TrexColorido === true) {
        if (otherPlayerIsGameover === false) {
          if (otherPlayerIsCrouching === false) {
            otherPlayer.changeAnimation("running_brown", trex_runningbrown);
          } else {
            otherPlayer.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
        } else {
          otherPlayer.changeAnimation("collided_brown", trex_collidedbrown);
        }
      }
    }
    //Isso está na função setBirdColor
    //if(player.color !== dinosaurcolor){
    //  player.color = dinosaurcolor;
    //  player.update();
    //}
  }
  if (player !== undefined && game !== "notselected") {
    if (player.score !== score) {
      player.score = score;
      player.update();
    }
    if (player.highscore !== highscore) {
      player.highscore = highscore;
      player.update();
    }
    if (gamestate === END && player.isGameover !== true) {
      player.isGameover = true;
      player.update();
    } else if (gamestate === PLAY && player.isGameover !== false) {
      player.isGameover = false;
      player.update();
    }
  }

  if (player !== undefined && player.gamePlaying !== game) {
    player.gamePlaying = game;
    player.update();
  }

  /*if(playerCount === 2 && player !== undefined && player3.visible !== true){
    player3text.position(-1000, -350);
    player3.visible = false;
    player3.y = 160;
    player3.rotation = 0;
    player3.changeAnimation("birdright", birdanmright);
    console.log("Tchau Jogador.");
  }*/

  if (playerCount > 1/* && playerCount === 2 */ && player !== undefined) {
    if (playerCount === 2 || playerCount === 3) {
      for (var plr in allPlayers) {
        var otherPlayer = player2;
        if (player.index === 2
          || player.index === 3) {
          plr = "player1";
        } else if (player.index === 1) {
          plr = "player2";
        }
        //console.log("plr:"+plr);

        if (allPlayers[plr] !== undefined) {
          var x = allPlayers[plr].positionX;
          var y = allPlayers[plr].positionY;

          player2isCrouching = allPlayers[plr].isCrouching;
          player2isGameover = allPlayers[plr].isGameover;
          player2color = allPlayers[plr].color;
          player2gamePlaying = allPlayers[plr].gamePlaying;

          otherPlayer.y = y;
          if (initialWidth == width) {
            otherPlayer.x = x;
          } else {
            otherPlayer.x = x - newWidthAdded / 2;
          }
          otherPlayer.rotation = allPlayers[plr].rotation;
          //console.log("player2.y:"+otherPlayer.y, ", player2.rotation:"+otherPlayer.rotation);
          if (gamestate !== SELECT && player2gamePlaying === game) {
            otherPlayer.visible = true;
            if (game === "Voo Infinito") {
              player2text.position(x - 25, y - 30);
            } else if (game === "Corrida Infinita") {
              player2text.position(x - 20, y - 35);
            }
            player2text.html(allPlayers[plr].name + "<br>" + allPlayers[plr].score + "<br>HI "
              + allPlayers[plr].highscore);
          }
        }
      }
    }
    if (playerCount === 3) {
      for (var plr in allPlayers) {
        var otherPlayer = player3;
        if (player.index === 1
          || player.index === 2) {
          plr = "player3";
        } else if (player.index === 3) {
          plr = "player2";
        }
        //console.log("plr:"+plr);

        if (allPlayers[plr] !== undefined) {
          var x = allPlayers[plr].positionX;
          var y = allPlayers[plr].positionY;

          player3isCrouching = allPlayers[plr].isCrouching;
          player3isGameover = allPlayers[plr].isGameover;
          player3color = allPlayers[plr].color;
          player3gamePlaying = allPlayers[plr].gamePlaying;

          otherPlayer.y = y;
          if (initialWidth == width) {
            otherPlayer.x = x;
          } else {
            otherPlayer.x = x - newWidthAdded / 2;
          }
          otherPlayer.rotation = allPlayers[plr].rotation;
          //console.log("player3.y:"+otherPlayer.y, ", player3.rotation:"+otherPlayer.rotation);
          if (gamestate !== SELECT && player3gamePlaying === game) {
            otherPlayer.visible = true;
            if (game === "Voo Infinito") {
              player3text.position(x - 25, y - 30);
            } else if (game === "Corrida Infinita") {
              player3text.position(x - 20, y - 35);
            }
            player3text.html(allPlayers[plr].name + "<br>" + allPlayers[plr].score + "<br>HI "
              + allPlayers[plr].highscore);
          }
        }
      }
    }
  }

  //console.log("x:"+crouchbuttonHitbox.x+" y:"+crouchbuttonHitbox.y);
  if (birdG.isTouching(cactuG) || birdG.isTouching(cactuhitboxG)) {
    birdG.destroyEach();
    //console.log("Birds touching cactuG | cactuhitboxG destroyed!");
  } else { birdG.setVisibleEach(true); }
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

  if (initialWidth == width) {
    if (initialHeight == height) {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24;
      }
    } else {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25 - newHeightAdded / 2) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25 - newHeightAdded / 2;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24 - newHeightAdded / 2) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24 - newHeightAdded / 2;
      }
    }
  } else {
    if (initialHeight == height) {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25 - newWidthAdded / 2
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25 - newWidthAdded / 2;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24 - newWidthAdded / 2
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24 - newWidthAdded / 2;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24;
      }
    } else {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25 - newWidthAdded / 2
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25 - newHeightAdded / 2) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25 - newWidthAdded / 2;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25 - newHeightAdded / 2;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24 - newWidthAdded / 2
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24 - newHeightAdded / 2) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24 - newWidthAdded / 2;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24 - newHeightAdded / 2;
      }
    }
  }

  //if(crouchbuttonHitbox.x !== crouchbutton.x + 34
  //||crouchbuttonHitbox.y !== crouchbutton.y + 35){
  //  crouchbuttonHitbox.x = crouchbutton.x + 34;
  //  crouchbuttonHitbox.y = crouchbutton.y + 35;
  //}
  if (gamestate == PLAY) {
    score = score + Math.round(getFrameRate() / 30);
    cloudG.setVelocityXEach(-(4 + 3 * score / 100));//-(5+score/100)
    cactuG.setVelocityXEach(-(5 + score / 100));//-(5+score/100)
    cactuhitboxG.setVelocityXEach(-(5 + score / 100));//-(5+score/100)
    birdG.setVelocityXEach(-(5 + score / 100));//-(5+score/100)
    //ground.velocityX = -2;
    ground.velocityX = -(4 + 3 * score / 100);//-(4+3*score/100)
    if (ground.x < 350) {//< 0
      if (initialWidth == width) {
        ground.x = ground.width / 2;
      } else {
        ground.x = ground.width / 2 - newWidthAdded / 2;
      }

    }
  }
  if (game == "notselected") {
    var infiniteracebuttonX, infiniteracebuttonY, infiniteflightbuttonX, infiniteflightbuttonY;

    if (isMobile == false) {
      infiniteracebuttonX = width / 2 - 415 + 15;
      infiniteflightbuttonX = width / 2 + 255 - 15;
      infiniteracebuttonY = height / 2 - 70;
      infiniteflightbuttonY = height / 2 - 70;
    } else if (mostOfTheScreen == "height" && isMobile == true) {
      infiniteracebuttonX = width / 2 - 80;
      infiniteflightbuttonX = width / 2 - 80;
      infiniteracebuttonY = 70;
      infiniteflightbuttonY = infiniteracebutton.y + 190;
    } else if (mostOfTheScreen == "width" && isMobile == true) {
      infiniteracebuttonX = width / 2 - 415 + 55 + 125;
      infiniteflightbuttonX = width / 2 + 255 - 65 - 85;
      infiniteracebuttonY = height / 2 - 70;
      infiniteflightbuttonY = height / 2 - 70;
    }

    /*if(isMobile == false){
      if(infiniteracebutton.position.x !== width / 2 -415+15){
        infiniteracebutton.position(width / 2 -415+15, height / 2 - 70);
      }
      if(infiniteflightbutton.position.x !== width / 2 + 255-15){
        infiniteflightbutton.position(width / 2 + 255-15, height / 2 - 70);
      }
    }else if(isMobile == true && mostOfTheScreen == "height"){
      if(infiniteracebutton.position.x !== width / 2 - 80){
        infiniteracebutton.position(width / 2 - 80, 70);
      }
      if(infiniteflightbutton.position.x !== width / 2 - 80 - 35){
        infiniteflightbutton.position(width / 2 - 80, infiniteracebutton.y + 190);
      }
    }else if(//browserName == "safari" && isMobile == true ||
    //browserName == "safari" && isiPhoneXR == true
    mostOfTheScreen == "width" && isMobile == true 
    || mostOfTheScreen == "width" && isiPhoneXR == true){
      infiniteracebutton.position(width/2-415+55+125, infiniteracebutton.y);
      infiniteflightbutton.position(width / 2 + 255-65-85, infiniteflightbutton.y);
    }*/

    if (infiniteracebutton.position.x !== infiniteracebuttonX) {
      infiniteracebutton.position(infiniteracebuttonX, infiniteracebuttonY);
    }
    if (infiniteflightbutton.position.x !== infiniteflightbuttonX) {
      infiniteflightbutton.position(infiniteflightbuttonX, infiniteflightbuttonY);
    }


    if (initialWidth !== width) {
      gameover.x = width / 2 - newWidthAdded / 2;
      restart.x = width / 2 - newWidthAdded / 2;
    }
    if (initialHeight == height) {
      gameover.y = 100;
      restart.y = 140;
    } else {
      gameover.y = 100 - newHeightAdded / 2;
      restart.y = 140 - newHeightAdded / 2;
    }
  }
  if (game !== "notselected" && TrexColorido == "notselected") {
    if (isMobile == false || isMobile == true && mostOfTheScreen == "width") {
      if (normalbutton.x !== width / 2 - 415) {
        normalbutton.position(width / 2 - 415 + 30, height / 2 - 70);//width / 2 -415, height / 2 - 30
      }
      if (coloridobutton.x !== width / 2 + 135 - 35) {//width / 2 + 135
        coloridobutton.position(width / 2 + 135 - 105, height / 2 - 70);//width / 2 + 135, height / 2 - 30
      }
      if (canPlayMultiplayer === true) {
        if (multiplayerToggle.x !== width / 2 - 170) {
          multiplayerToggle.position(width / 2 - 170, coloridobutton.y + 120);
        }
        if (nameInput.x !== width / 2 - 170) {
          nameInput.position(width / 2 - 170, multiplayerToggle.y - 44);
        }
      }
    } else if (isMobile == true && mostOfTheScreen == "height") {
      if (normalbutton.x !== width / 2 - 415) {
        normalbutton.position(width / 2 - 185, 70);//width / 2 -415, height / 2 - 30
      }
      if (coloridobutton.x !== width / 2 + 135 - 35) {//width / 2 + 135
        coloridobutton.position(width / 2 - 185, 160);//width / 2 + 135, height / 2 - 30
      }
      if (canPlayMultiplayer === true) {
        if (multiplayerToggle.x !== width / 2 - 185) {
          multiplayerToggle.position(width / 2 - 185, coloridobutton.y + 120);
        }
        if (nameInput.x !== width / 2 - 185) {
          nameInput.position(width / 2 - 185, multiplayerToggle.y - 44);
        }
      }
    }

    if (infiniteflightbutton.x !== width - width - width) {
      infiniteflightbutton.position(width - width - width, infiniteflightbutton.y);
    }
    if (infiniteracebutton.x !== width - width - width) {
      infiniteracebutton.position(width - width - width, infiniteracebutton.y);
    }

    if (initialWidth !== width) {
      gameover.x = width / 2 - newWidthAdded / 2;
      restart.x = width / 2 - newWidthAdded / 2;
    }
    if (initialHeight == height) {
      gameover.y = invisibleGroundPosY - 90;//100
      restart.y = invisibleGroundPosY - 50;//140
    } else {
      gameover.y = invisibleGroundPosY - 90 - newHeightAdded / 2;//100 - newHeightAdded / 2
      restart.y = invisibleGroundPosY - 50 - newHeightAdded / 2;//140 - newHeightAdded / 2
    }
  }
  if (TrexColorido == true && Isday == true) {
    background('cyan');
  } else if (TrexColorido == false && Isday == true) {
    background('white');
  } else if (TrexColorido !== false && TrexColorido !== true && Isday == true) {
    background('white');
  }
  if (mostRecentVersion !== null && mostRecentVersion > version) {
    console.log('This is not the most Recent Version.');
  }
  if (mostRecentVersion !== null && mostRecentVersion > version && LatestUpdatePlatformsAimed === "All"
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("PC") && isMobile === false
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("Mobile") && isMobile === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("iPhone") && isiPhone === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("iPhoneXR") && isiPhoneXR === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("Android") && isAndroid === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("iPad") && isiPad === true) {
    var reloadbuttonX = null;
    var reloadbuttonY = null;
    var reloadbuttonYSubtract = null;
    if (isMobile == false && isiPhoneXR == false && reloadbuttonX == null) {
      reloadbuttonX = width / 2 + 265 - 25;
      reloadButton.size(reloadButton.width, 35);
    } else if (isMobile == true && reloadbuttonX == null && mostOfTheScreen == "width"
      || isiPhoneXR == true && reloadbuttonX == null && mostOfTheScreen == "width") {
      reloadbuttonX = width / 2 + 190 - 25;
      reloadButton.size(reloadButton.width, 25);
      reloadbuttonYSubtract = +5;
    } else if (isMobile == true && mostOfTheScreen == "height" && reloadbuttonX == null) {
      reloadbuttonX = width / 2 + 113;
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
    push();
    if (isMobile == false && isiPhoneXR == false) {
      textSize(35);
    } else if (isMobile == true && mostOfTheScreen == "width"
      || isiPhoneXR == true && mostOfTheScreen == "width") {
      textSize(25);
    } else if (isMobile == true && mostOfTheScreen == "height") {
      textSize(18);
    }

    fill('red');
    textAlign("center");
    stroke('darkred');
    //The text is after drawSprites()
    //if(game == "Corrida Infinita" && TrexColorido !== true
    //|| game !== "Corrida Infinita"){
    //text("Esta versão não é a mais recente.", width/2-25, height - 25);
    //}else if(game == "Corrida Infinita" && TrexColorido == true){
    //text("Esta versão não é a mais recente.", width/2-25, 170);
    //}
    //if(game == "Corrida Infinita" && TrexColorido !== true
    //|| game !== "Corrida Infinita"){
    if (isMobile == false && isiPhoneXR == false) {
      if (reloadButton.x !== reloadbuttonX || reloadButton.y !== reloadbuttonY) {
        reloadButton.position(reloadbuttonX, reloadbuttonY);//width/2 + 265, height - 50
      }
    } else if (isMobile == true || isiPhoneXR == true) {
      if (reloadButton.x !== reloadbuttonX || reloadButton.y !== reloadbuttonY) {
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
  } else {
    if (reloadButton.x !== width - width - width || reloadButton.y !== height - 25) {
      reloadButton.position(width - width - width, height - 25);
    }
  }
  if (game == "notselected") {
    if (isMobile == false && isiPhoneXR == false) {
      textSize(30);
    } else if (isMobile == true || isiPhoneXR == true) {
      textSize(22.5);
    }

    fill('gold');
    stroke('green');
    textFont(trexfont);
    textAlign("center");
    if (initialWidth == width) {
      if (isMobile == false && isiPhoneXR == false) {
        text("Voo Infinito", infiniteflightbutton.x + 85, infiniteflightbutton.y + 185);
      } else if (isMobile == true || isiPhoneXR == true) {
        text("Voo Infinito", infiniteflightbutton.x + 85, infiniteflightbutton.y + 175);
      }
    } else {
      if (isMobile == false && isiPhoneXR == false) {
        text("Voo Infinito", infiniteflightbutton.x + 85 - newWidthAdded / 2, infiniteflightbutton.y + 185);
      } else if (isMobile == true || isiPhoneXR == true) {
        text("Voo Infinito", infiniteflightbutton.x + 85 - newWidthAdded / 2, infiniteflightbutton.y + 175);
      }
    }


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

    if (initialWidth == width) {
      if (isMobile == false && isiPhoneXR == false) {
        text("Corrida Infinita", infiniteracebutton.x + 85, infiniteracebutton.y + 185);
      } else if (isMobile == true || isiPhoneXR == true) {
        text("Corrida Infinita", infiniteracebutton.x + 85, infiniteracebutton.y + 175);
      }
    } else {
      if (isMobile == false && isiPhoneXR == false) {
        text("Corrida Infinita", infiniteracebutton.x + 85 - newWidthAdded / 2, infiniteracebutton.y + 185);
      } else if (isMobile == true || isiPhoneXR == true) {
        text("Corrida Infinita", infiniteracebutton.x + 85 - newWidthAdded / 2, infiniteracebutton.y + 175);
      }
    }


  }
  fill('gold');
  stroke('green');
  textSize(15);
  textFont(trexfont);
  if (gamestate !== SELECT) {
    var BestHighscoresY = 25 - 35;
    var BestHighscoresX;
    if (initialWidth == width) {
      if (/*width >= 1533 && */!isMobile) {
        //BestHighscoresX = width/2 - 410; //356.85 é a posição que ficava(pc)
        BestHighscoresX = highscoreS.x + 256.85;
      }
    } else {
      if (/*width >= 1533 && */!isMobile) {
        //BestHighscoresX = width/2 - 410 - newWidthAdded/2;
        BestHighscoresX = highscoreS.x + 256.85 + newWidthAdded / 2;
      }
    }
    if (isMobile) {
      BestHighscoresX = ShowBestHighscoresButton.x - 110;
    }

    if (ShowBestHighscore == true) {
      if (ShowBestHighscoreActive == true) {
        var textX;
        if (initialWidth == width) {
          textX = BestHighscores.x;
        } else {
          textX = BestHighscores.x - newWidthAdded / 2;
        }
        push();
        textAlign("center");
        if (BestHighscores1 !== false) {
          text("HI 1:" + BestHighscores1, textX, BestHighscores.y);
        } else {
          text("HI 1:Nenhum", textX, BestHighscores.y);
        }

        if (BestHighscores2 !== false) {
          text("HI 2:" + BestHighscores2, textX, BestHighscores.y + 25);
        } else {
          text("HI 2:Nenhum", textX, BestHighscores.y + 25);
        }

        if (BestHighscores3 !== false) {
          text("HI 3:" + BestHighscores3, textX, BestHighscores.y + 50);
        } else {
          text("HI 3:Nenhum", textX, BestHighscores.y + 50);
        }

        if (BestHighscores4 !== false) {
          text("HI 4:" + BestHighscores4, textX, BestHighscores.y + 75);
        } else {
          text("HI 4:Nenhum", textX, BestHighscores.y + 75);
        }

        if (BestHighscores5 !== false) {
          text("HI 5:" + BestHighscores5, textX, BestHighscores.y + 100);
        } else {
          text("HI 5:Nenhum", textX, BestHighscores.y + 100);
        }
        pop();
      }
      if (ShowBestHighscoresButton.x !== width - 55
        || ShowBestHighscoresButton.y !== 5) {
        ShowBestHighscoresButton.position(width - 55, 5);
      }
      if (ShowBestHighscoreActive == true && BestHighscores.x !== width / 2
        || ShowBestHighscoreActive == true && BestHighscores.y !== height / 2 - height / 2 / 2 + 35) {
        BestHighscores.x = BestHighscoresX;
        //BestHighscores1DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 20);
        //BestHighscores2DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 45);
        //BestHighscores3DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 68);
        //BestHighscores4DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 92);
        //BestHighscores5DeleteButton.position(width/2 + 100 - 15, BestHighscoresY + 118);
        BestHighscores.y = BestHighscoresY + 35;
      }
      if (ShowBestHighscoreActive == false && BestHighscores.x !== width - width - width
        || ShowBestHighscoreActive == false && BestHighscores.y !== -350) {
        BestHighscores.x = width - width - width;
        BestHighscores1DeleteButton.position(width - width - width, -350);
        BestHighscores2DeleteButton.position(width - width - width, -350);
        BestHighscores3DeleteButton.position(width - width - width, -350);
        BestHighscores4DeleteButton.position(width - width - width, -350);
        BestHighscores5DeleteButton.position(width - width - width, -350);
        BestHighscores.y = -350;
      }
      if (ShowBestHighscoreActive == true) {
        if (BestHighscores1 !== false && BestHighscores1DeleteButton.x !== BestHighscoresX + 100 - 15) {
          BestHighscores1DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 20);
        }
        if (BestHighscores2 !== false && BestHighscores2DeleteButton.x !== BestHighscoresX + 100 - 15) {
          BestHighscores2DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 45);
        }
        if (BestHighscores3 !== false && BestHighscores3DeleteButton.x !== BestHighscoresX + 100 - 15) {
          BestHighscores3DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 68);
        }
        if (BestHighscores4 !== false && BestHighscores4DeleteButton.x !== BestHighscoresX + 100 - 15) {
          BestHighscores4DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 92);
        }
        if (BestHighscores5 !== false && BestHighscores5DeleteButton.x !== BestHighscoresX + 100 - 15) {
          BestHighscores5DeleteButton.position(BestHighscoresX + 100 - 15, BestHighscoresY + 118);
        }
        if (BestHighscores1 == false && BestHighscores1DeleteButton.x !== width - width - width
          || BestHighscores1 == false && BestHighscores1DeleteButton.y !== -350) {
          BestHighscores1DeleteButton.position(width - width - width, -350);
        }
        if (BestHighscores2 == false && BestHighscores2DeleteButton.x !== width - width - width
          || BestHighscores2 == false && BestHighscores2DeleteButton.y !== -350) {
          BestHighscores2DeleteButton.position(width - width - width, -350);
        }
        if (BestHighscores3 == false && BestHighscores3DeleteButton.x !== width - width - width
          || BestHighscores3 == false && BestHighscores3DeleteButton.y !== -350) {
          BestHighscores3DeleteButton.position(width - width - width, -350);
        }
        if (BestHighscores4 == false && BestHighscores4DeleteButton.x !== width - width - width
          || BestHighscores4 == false && BestHighscores4DeleteButton.y !== -350) {
          BestHighscores4DeleteButton.position(width - width - width, -350);
        }
        if (BestHighscores5 == false && BestHighscores5DeleteButton.x !== width - width - width
          || BestHighscores5 == false && BestHighscores5DeleteButton.y !== -350) {
          BestHighscores5DeleteButton.position(width - width - width, -350);
        }
      }
    }
    if (key == "Escape") {
      key = null;
      keyCode = null;
      handleBack();
    }
    if (game == "Corrida Infinita") {
      if (initialHeight == height) {
        gameover.y = invisibleGroundPosY - 90;//100
        restart.y = invisibleGroundPosY - 50;//140
      } else {
        gameover.y = invisibleGroundPosY - 90 - newHeightAdded / 2;//100 - newHeightAdded / 2
        restart.y = invisibleGroundPosY - 50 - newHeightAdded / 2;//140 - newHeightAdded / 2
      }
    } else if (game == "Voo Infinito") {
      if (initialHeight == height) {
        restart.y = height / 2 + 40;
        gameover.y = height / 2;
      } else {
        restart.y = height / 2 + 40 - newHeightAdded / 2;
        gameover.y = height / 2 - newHeightAdded / 2;
      }
    }

    if (initialWidth !== width) {
      highscoreS.x = 50 - newWidthAdded / 2;//100 - newWidthAdded / 2;
      if (player === undefined) {
        trex.x = 50 - newWidthAdded / 2;
      } else {
        if (player.index === 1) {
          trex.x = 75 - newWidthAdded / 2;
        } else if (player.index === 2) {
          trex.x = 30 - newWidthAdded / 2;
        }
      }

    }
    if (initialHeight == height) {
      highscoreS.y = 33;
    } else {
      highscoreS.y = 33 - newHeightAdded / 2;
    }
    if (initialHeight == height) {
      text(highscore, highscoreS.x + 25, 42);
    } else {
      text(highscore, highscoreS.x + 25, 42 - newHeightAdded / 2);
    }
    textAlign("center");
    if (initialHeight == height) {
      //text("PONTUAÇÃO: "+score)
      text("PONTOS: " + score, highscoreS.x + 45, 20);//500
    } else {
      //text("PONTUAÇÃO: "+score)
      text("PONTOS: " + score, highscoreS.x + 45, 20 - newHeightAdded / 2);
    }
  }
  textAlign("center");
  //if(Isnight == false){
  //  background('white'); //nao testei
  //}
  if (dinosaurcolor == "notselected" && game == "Corrida Infinita") {
    setDinosaurColor();
  }
  if (gamestate == SELECT) {
    if (key !== null || keyCode == 27) {
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
    if (isMobile == false && isiPhoneXR == false) {
      textSize(32);
    } else if (isMobile == true || isiPhoneXR == true) {
      textSize(21);
    }
    if (mostOfTheScreen == "width" && isMobile == true || isMobile == false) {
      if (game !== "notselected") {
        if (initialWidth == width) {
          text("Selecione Um Modo De Jogo.", width / 2, height / 2 - 95);
        } else {
          text("Selecione Um Modo De Jogo.", width / 2 - newWidthAdded / 2, height / 2 - 95);
        }

      } else {
        if (initialWidth == width) {
          text("Selecione Um Jogo.", width / 2, height / 2 - 95);
        } else {
          text("Selecione Um Jogo.", width / 2 - newWidthAdded / 2, height / 2 - 95);
        }
      }
    } else if (mostOfTheScreen == "height" && isMobile == true) {
      if (game !== "notselected") {
        push();
        fill('cyan');
        stroke('green');
        textAlign('center');
        textSize(15.5);
        text("Selecione Um Modo De Jogo.", width / 2, 50);
        pop();
      } else {
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
  if (game == "Corrida Infinita") {
    /*if(cloud1.x < -20){
      cloud1.x = 645;
    }
    if(cloud2.x > 670){
      cloud2.x = -10;
    }*/
    //console.log(trex.y);
    if (gamestate == PLAY) {
      if (crouchbutton.x !== width / 2 - 35 && trexIsJumping == false && !isMobile// && mostOfTheScreen == "width"
        || crouchbutton.y !== 5 && trexIsJumping == false && !isMobile// && mostOfTheScreen == "width"
        || crouchbutton.x !== width / 2 - 35 && trexIsJumping == false && isMobile// && mostOfTheScreen == "width"
        || crouchbutton.y !== 5 && trexIsJumping == false && isMobile) {// && mostOfTheScreen == "width") {
        if (isMobile || !isMobile && crouchbuttonOnPC == true) {
          crouchbuttonHitbox.x = width / 2 - 35 + 34;
          crouchbuttonHitbox.y = 5 + 35;
          crouchbutton.position(width / 2 - 35, 5);
          if (crouchbuttonHitbox.x !== crouchbutton.x + 34 || crouchbuttonHitbox.y !== crouchbutton.y + 35) {
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
        }//below was the code that made the crouch button go under the invisibleground when mostofthescreen
        // === "height"
      } /*else if (crouchbutton.x !== invisibleground.y + 50 && trexIsJumping == false
        && isMobile == true && mostOfTheScreen == "height" //isIPhoneXR
        || crouchbutton.x !== width / 2 - 35 && trexIsJumping == false && isMobile == true
        && mostOfTheScreen == "height" //isIPhoneXR
        || crouchbutton.x !== width / 2 - 35 && !isMobile && crouchbuttonOnPC == true
        && mostOfTheScreen == "height"
        || crouchbutton.y !== invisibleground.y + 50 && !isMobile && crouchbuttonOnPC == true
        && mostOfTheScreen == "height") {
        crouchbuttonHitbox.x = width / 2 - 35 + 34;
        crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
        crouchbutton.position(width / 2 - 35, invisibleground.y + 50);
        if (crouchbuttonHitbox.x !== crouchbutton.x + 34 || crouchbuttonHitbox.y !== crouchbutton.y + 35) {
          crouchbuttonHitbox.x = crouchbutton.x + 34;
          crouchbuttonHitbox.y = crouchbutton.y + 35;
        }*/



      //this was already commented
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
      //}

      if (trexIsJumping == true && crouchbuttonOnPC == true && !isMobile
        && MobileCrouchMode == "ifNotJumpingAndPressed"
        || isMobile && trexIsJumping == true
        && MobileCrouchMode == "ifNotJumpingAndPressed") {//crouchbutton.x !== width / 2-35 && trexIsJumping == true
        //||crouchbutton.y !== -350 && trexIsJumping == true){
        crouchbutton.position(width / 2 - 35, -350);
        if (crouchbuttonbackgroundimage.y !== invisibleground.y + 50
          && isMobile == true && mostOfTheScreen == "height" //isIPhoneXR
          || crouchbuttonbackgroundimage.x !== width / 2 - 35 && isMobile == true
          && mostOfTheScreen == "height"
          || crouchbuttonbackgroundimage.x !== width / 2 - 35 && !isMobile && crouchbuttonOnPC == true
          && mostOfTheScreen == "height"
          || crouchbuttonbackgroundimage.y !== invisibleground.y + 50 && !isMobile && crouchbuttonOnPC == true
          && mostOfTheScreen == "height") {
          crouchbuttonbackgroundimage.position(width / 2 - 35, invisibleground.y + 50);
        }
        if (crouchbuttonbackgroundimage.x !== width / 2 - 35 && !isMobile && mostOfTheScreen == "width"
          && crouchbuttonOnPC == true
          || crouchbuttonbackgroundimage.y !== 5 && !isMobile && mostOfTheScreen == "width"
          && crouchbuttonOnPC == true
          || crouchbuttonbackgroundimage.x !== width / 2 - 35 && isMobile
          && mostOfTheScreen == "width"
          || crouchbuttonbackgroundimage.y !== 5 && isMobile
          && mostOfTheScreen == "width") {
          crouchbuttonbackgroundimage.position(width / 2 - 35, 5);
        }
        if (crouchbuttonclass == "crouchbutton") {
          //crouchbutton.class("crouchbuttonBackground");
          //crouchbuttonclass = "crouchbuttonbackground";
        }
      } else if (trexIsJumping == false && crouchbuttonclass == "crouchbuttonbackground"
        || crouchbuttonclass == "crouchbutton" && dinosaurcolor !== "Cinza"
        || crouchbuttonclass == "crouchbuttongreentrex" && dinosaurcolor !== "Verde"
        || crouchbuttonclass == "crouchbuttonbrowntrex" && dinosaurcolor !== "Marrom"
        || trexIsJumping == false && crouchbuttonbackgroundimage.y !== -350
        || trexIsJumping == false && crouchbuttonbackgroundimage.x !== width / 2 - 35) {
        if (dinosaurcolor == "Cinza") {
          crouchbutton.class("crouchbutton");
          crouchbuttonclass = "crouchbutton";
        } else if (dinosaurcolor == "Verde") {
          crouchbutton.class("crouchbuttongreentrex");
          crouchbuttonclass = "crouchbuttongreentrex";
        } else if (dinosaurcolor == "Marrom") {
          crouchbutton.class("crouchbuttonbrowntrex");
          crouchbuttonclass = "crouchbuttonbrowntrex";
        }
        //crouchbuttonclass = "crouchbutton";
        if (trexIsJumping == false) {
          crouchbuttonbackgroundimage.position(width / 2 - 35, -350);
        }
      } else if (!isMobile && crouchbuttonOnPC == false
        || !isMobile && crouchbuttonOnPC == false) {
        crouchbutton.position(width / 2 - 35, -350);
        crouchbuttonbackgroundimage.position(width / 2 - 35, -350);
      }

      //if(crouchbuttonHitbox.x !== crouchbutton.x + 34
      //||crouchbuttonHitbox.y !== crouchbutton.y + 35){
      //  crouchbuttonHitbox.x = crouchbutton.x + 34;
      //  crouchbuttonHitbox.y = crouchbutton.y + 35;
      //}

      if (TrexColorido == false) {
        trex.visible = true;
      }
      /*if(score%700==0){
        if(Isnight == false&&dayMost == true){
          //turnnight();
        }
        if(Isday == false&&nightMost == true){
          //turnday();
        }
      }*/
      if (score > 0 && score % 100 == 0) {
        checkpointsound.play();
      }

      //Outra verificação igual essa após o pulo
      //console.log(trexIsJumping);
      if (initialHeight == height) {
        if (crouchAfterJumping == true && trex.y >= invisibleGroundPosY - 40 /* trex.y >= 150 */
          && trexIsJumping == true) {
          crouchAfterJumping = false;
          trexIsJumping = false;

          trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
          if (TrexColorido == true && dinosaurcolor == "Cinza") {
            trex.changeAnimation("crouchingnb", trex_crouchingnb);
          }
          if (TrexColorido == false) {
            trex.changeAnimation("crouching", trex_crouching);
          }
          if (TrexColorido == true && dinosaurcolor == "Marrom") {
            trex.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
          if (TrexColorido == true && dinosaurcolor == "Verde") {
            trex.changeAnimation("crouching_green", trex_crouchinggreen);
          }
          trexIsCrouching = true;

          console.log("crouch after jumping done");

          if (MobileUnCrouchMode === "automatic") {
            setTimeout(() => {
              trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
              if (TrexColorido == true || dinosaurcolor == "Cinza") {
                trex.changeAnimation("runningnb", trex_runningnb);
              }
              if (TrexColorido == false) {
                trex.changeAnimation("running", trex_running);
              }
              if (TrexColorido == true && dinosaurcolor == "Marrom") {
                trex.changeAnimation("running_brown", trex_runningbrown);
              }
              if (TrexColorido == true && dinosaurcolor == "Verde") {
                trex.changeAnimation("running_green", trex_runninggreen);
              }
              trexIsCrouching = false;
            }, AutoCrouchTime);
          }
        }
        if (trex.y >= invisibleGroundPosY - 40 /* trex.y >= 150 */ || trex.collide(invisibleground)) {
          trexIsJumping = false;
        }
        if (trex.y < invisibleGroundPosY - 40 /* trex.y >= 150 */) {
          trexIsJumping = true;
        }
      } else {
        if (crouchAfterJumping == true && trex.y >= invisibleGroundPosY - 40 - newHeightAdded / 2 /* trex.y >= 150 - 
        newHeightAdded / 2 */ && trexIsJumping == true) {
          crouchAfterJumping = false;
          trexIsJumping = false;

          trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
          if (TrexColorido == true && dinosaurcolor == "Cinza") {
            trex.changeAnimation("crouchingnb", trex_crouchingnb);
          }
          if (TrexColorido == false) {
            trex.changeAnimation("crouching", trex_crouching);
          }
          if (TrexColorido == true && dinosaurcolor == "Marrom") {
            trex.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
          if (TrexColorido == true && dinosaurcolor == "Verde") {
            trex.changeAnimation("crouching_green", trex_crouchinggreen);
          }
          trexIsCrouching = true;

          console.log("crouch after jumping done");

          if (MobileUnCrouchMode === "automatic") {
            setTimeout(() => {
              trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
              if (TrexColorido == true || dinosaurcolor == "Cinza") {
                trex.changeAnimation("runningnb", trex_runningnb);
              }
              if (TrexColorido == false) {
                trex.changeAnimation("running", trex_running);
              }
              if (TrexColorido == true && dinosaurcolor == "Marrom") {
                trex.changeAnimation("running_brown", trex_runningbrown);
              }
              if (TrexColorido == true && dinosaurcolor == "Verde") {
                trex.changeAnimation("running_green", trex_runninggreen);
              }
              trexIsCrouching = false;
            }, AutoCrouchTime);
          }
        }
        if (trex.y >= invisibleGroundPosY - 40 - newHeightAdded / 2 /* trex.y >= 150 - newHeightAdded / 2 */
          || trex.collide(invisibleground)) {
          trexIsJumping = false;
        }
        if (trex.y < invisibleGroundPosY - 40 - newHeightAdded / 2/* trex.y < 150 - newHeightAdded / 2 */) {
          trexIsJumping = true;
        }
      }

      if (initialHeight == height) {
        if (keyDown("space") && trex.y >= invisibleground.y - 40/*trex.y >= 150*/
          && trexIsCrouching == false ||//&&!mousePressedOver(crouchbutton)||
          keyDown('W') && trex.y >= invisibleground.y - 40/*trex.y >= 150*/
          && trexIsCrouching == false ||//&&!mousePressedOver(crouchbutton)||
          keyDown("UP_ARROW") && trex.y >= invisibleground.y - 40/*trex.y >= 150*/
          && trexIsCrouching == false ||//&&!mousePressedOver(crouchbutton)||
          touches.length > 0 && trex.y >= invisibleground.y - 40/*trex.y >= 150*/
          && trexIsCrouching == false
          && !mouseIsOver(ShowBestHighscoresButtonHitbox)
          && !mouseIsOver(crouchbuttonHitbox)) {
          //&& !mousePressedOver(crouchbuttonbackground)){
          //&& !mouseIsOver(crouchbutton)){
          if (trex.y >= invisibleground.y - 40 /* trex.y >= 150 */ && trexIsCrouching == false
            || isMobile == true && !mouseIsOver(ShowBestHighscoresButtonHitbox)
            && !mouseIsOver(crouchbuttonHitbox)) {
            touches = [];
            trex.velocityY = -10;
            //jumpsound.stop();
            jumpsound.play();
            //trexIsJumping = true;
          }
        }
      } else {
        if (keyDown("space") && trex.y - newHeightAdded >= invisibleground.y - 40 - newHeightAdded / 2 ||
          /*150 - newHeightAdded / 2*/
          keyDown('W') && trex.y - newHeightAdded >= invisibleground.y - 40 - newHeightAdded / 2 ||
          /*150 - newHeightAdded / 2*/
          keyDown("UP_ARROW") && trex.y - newHeightAdded >= invisibleground.y - 40 - newHeightAdded / 2 ||
          /*150 - newHeightAdded / 2*/
          touches.length > 0 && trex.y - newHeightAdded >= invisibleground.y - 40 - newHeightAdded / 2
          /*150 - newHeightAdded / 2*/
          && trexIsCrouching == false
          && !mouseIsOver(ShowBestHighscoresButtonHitbox)
          && !mouseIsOver(crouchbuttonHitbox)) {
          //&& !mousePressedOver(crouchbuttonbackground)){
          //&& !mouseIsOver(crouchbutton)){
          if (trex.y >= invisibleground.y - 40 - newHeightAdded / 2/* trex.y >= 150  - newHeightAdded / 2*/
            && trexIsCrouching == false
            || isMobile == true && !mouseIsOver(ShowBestHighscoresButtonHitbox)
            && !mouseIsOver(crouchbuttonHitbox)) {
            touches = [];
            trex.velocityY = -10;
            //jumpsound.stop();
            jumpsound.play();
            //trexIsJumping = true;
          }
        }
      }

      //Outra verificação igual essa antes do pulo
      console.log(trexIsJumping);
      if (initialHeight == height) {
        if (crouchAfterJumping == true && trex.y >= invisibleGroundPosY - 40 /* trex.y >= 150 */
          && trexIsJumping == true) {
          crouchAfterJumping = false;
          trexIsJumping = false;

          trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
          if (TrexColorido == true && dinosaurcolor == "Cinza") {
            trex.changeAnimation("crouchingnb", trex_crouchingnb);
          }
          if (TrexColorido == false) {
            trex.changeAnimation("crouching", trex_crouching);
          }
          if (TrexColorido == true && dinosaurcolor == "Marrom") {
            trex.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
          if (TrexColorido == true && dinosaurcolor == "Verde") {
            trex.changeAnimation("crouching_green", trex_crouchinggreen);
          }
          trexIsCrouching = true;

          console.log("crouch after jumping done");

          if (MobileUnCrouchMode === "automatic") {
            setTimeout(() => {
              trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
              if (TrexColorido == true || dinosaurcolor == "Cinza") {
                trex.changeAnimation("runningnb", trex_runningnb);
              }
              if (TrexColorido == false) {
                trex.changeAnimation("running", trex_running);
              }
              if (TrexColorido == true && dinosaurcolor == "Marrom") {
                trex.changeAnimation("running_brown", trex_runningbrown);
              }
              if (TrexColorido == true && dinosaurcolor == "Verde") {
                trex.changeAnimation("running_green", trex_runninggreen);
              }
              trexIsCrouching = false;
            }, AutoCrouchTime);
          }
        }
        if (trex.y >= invisibleGroundPosY - 40 /* trex.y >= 150 */ || trex.collide(invisibleground)) {
          trexIsJumping = false;
        }
        if (trex.y < invisibleGroundPosY - 40 /* trex.y >= 150 */) {
          trexIsJumping = true;
        }
      } else {
        if (crouchAfterJumping == true && trex.y >= invisibleGroundPosY - 40 - newHeightAdded / 2 /* trex.y >= 150 - 
        newHeightAdded / 2 */ && trexIsJumping == true) {
          crouchAfterJumping = false;
          trexIsJumping = false;

          trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
          if (TrexColorido == true && dinosaurcolor == "Cinza") {
            trex.changeAnimation("crouchingnb", trex_crouchingnb);
          }
          if (TrexColorido == false) {
            trex.changeAnimation("crouching", trex_crouching);
          }
          if (TrexColorido == true && dinosaurcolor == "Marrom") {
            trex.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
          if (TrexColorido == true && dinosaurcolor == "Verde") {
            trex.changeAnimation("crouching_green", trex_crouchinggreen);
          }
          trexIsCrouching = true;

          console.log("crouch after jumping done");

          if (MobileUnCrouchMode === "automatic") {
            setTimeout(() => {
              trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
              if (TrexColorido == true || dinosaurcolor == "Cinza") {
                trex.changeAnimation("runningnb", trex_runningnb);
              }
              if (TrexColorido == false) {
                trex.changeAnimation("running", trex_running);
              }
              if (TrexColorido == true && dinosaurcolor == "Marrom") {
                trex.changeAnimation("running_brown", trex_runningbrown);
              }
              if (TrexColorido == true && dinosaurcolor == "Verde") {
                trex.changeAnimation("running_green", trex_runninggreen);
              }
              trexIsCrouching = false;
            }, AutoCrouchTime);
          }
        }
        if (trex.y >= invisibleGroundPosY - 40 - newHeightAdded / 2 /* trex.y >= 150 - newHeightAdded / 2 */
          || trex.collide(invisibleground)) {
          trexIsJumping = false;
        }
        if (trex.y < invisibleGroundPosY - 40 - newHeightAdded / 2/* trex.y < 150 - newHeightAdded / 2 */) {
          trexIsJumping = true;
        }
      }

      //console.log(trexIsJumping);
      //console.log(trex.y);
      if (initialHeight == height) {
        if (keyWentDown("S") && trex.y >= invisibleGroundPosY - 40 /* trex.y >= 150 */
          // && trexIsJumping == false
          || keyWentDown(DOWN_ARROW) && trex.y >= invisibleGroundPosY - 40) { /* trex.y >= 150 */
          // && trexIsJumping == false){
          //||mouseIsOver(crouchbutton) && trexIsJumping==false){

          //crouch();
          //trex.addAnimation("crouching", trex_crouching);

          trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
          if (TrexColorido == true && dinosaurcolor == "Cinza") {
            trex.changeAnimation("crouchingnb", trex_crouchingnb);
          }
          if (TrexColorido == false) {
            trex.changeAnimation("crouching", trex_crouching);
          }
          if (TrexColorido == true && dinosaurcolor == "Marrom") {
            trex.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
          if (TrexColorido == true && dinosaurcolor == "Verde") {
            trex.changeAnimation("crouching_green", trex_crouchinggreen);
          }
          trexIsCrouching = true;

          //trex.velocityX = 2;
        }
      } else {
        if (keyWentDown("S") && trex.y >= invisibleGroundPosY - 40 - newHeightAdded / 2
          /* 150 - newHeightAdded / 2 */ // && trexIsJumping == false
          || keyWentDown(DOWN_ARROW) && trex.y >= invisibleGroundPosY - 40 - newHeightAdded / 2) {
          /* 150 - newHeightAdded / 2 */ // && trexIsJumping == false
          // && trexIsJumping == false){
          //||mouseIsOver(crouchbutton) && trexIsJumping==false){

          //crouch();
          //trex.addAnimation("crouching", trex_crouching);

          trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
          if (TrexColorido == true && dinosaurcolor == "Cinza") {
            trex.changeAnimation("crouchingnb", trex_crouchingnb);
          }
          if (TrexColorido == false) {
            trex.changeAnimation("crouching", trex_crouching);
          }
          if (TrexColorido == true && dinosaurcolor == "Marrom") {
            trex.changeAnimation("crouching_brown", trex_crouchingbrown);
          }
          if (TrexColorido == true && dinosaurcolor == "Verde") {
            trex.changeAnimation("crouching_green", trex_crouchinggreen);
          }
          trexIsCrouching = true;

          //trex.velocityX = 2;
        }
      }
      /*if (keyWentDown("S") && trex.y >= 150// && trexIsJumping == false
        || keyWentDown(DOWN_ARROW) && trex.y >= 150) {// && trexIsJumping == false){
        //||mouseIsOver(crouchbutton) && trexIsJumping==false){
        //crouch();
        //trex.addAnimation("crouching", trex_crouching);
        trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
        if (TrexColorido == true && dinosaurcolor == "Cinza") {
          trex.changeAnimation("crouchingnb", trex_crouchingnb);
        }
        if (TrexColorido == false) {
          trex.changeAnimation("crouching", trex_crouching);
        }
        if (TrexColorido == true && dinosaurcolor == "Marrom") {
          trex.changeAnimation("crouching_brown", trex_crouchingbrown);
        }
        if (TrexColorido == true && dinosaurcolor == "Verde") {
          trex.changeAnimation("crouching_green", trex_crouchinggreen);
        }
        trexIsCrouching = true;

        //trex.velocityX = 2;
      } */
      if (keyWentUp("S") && !keyDown(DOWN_ARROW)
        || keyWentUp(DOWN_ARROW) && !keyDown("S")) {
        //||!keyIsDown(DOWN_ARROW) && !mouseIsOver(crouchbutton)){
        //||!keyIsDown("S")&&!mouseIsOver(crouchbutton)){

        //crouch();
        //trex.addAnimation("running", trex_running);

        trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
        if (TrexColorido == true || dinosaurcolor == "Cinza") {
          trex.changeAnimation("runningnb", trex_runningnb);
        }
        if (TrexColorido == false) {
          trex.changeAnimation("running", trex_running);
        }
        if (TrexColorido == true && dinosaurcolor == "Marrom") {
          trex.changeAnimation("running_brown", trex_runningbrown);
        }
        if (TrexColorido == true && dinosaurcolor == "Verde") {
          trex.changeAnimation("running_green", trex_runninggreen);
        }
        trexIsCrouching = false;
        //trex.velocityX = 0;
      }//else if(!keyDown(DOWN_ARROW)&&!mouseIsOver(crouchbutton)&&!keyDown("S")){

      //}*/
      if (trex.velocityY < 0 && trexIsCrouching == true) {
        trex.velocityY = 3;
        if (trexIsJumping == true && trexIsCrouching == true) {
          trexIsJumping = false;
        }
      }
      trex.velocityY = trex.velocityY + 0.5;
      createcactu();
      createclouds();
      createbird();
      if (cactuG.isTouching(trex) && trexIsInvencibleCactus == false
        || birdG.isTouching(trex) && trexIsInvencibleBirds == false) {
        //trex.velocityY = -10;
        //jumpsound.play();
        gamestate = END;
        failsound.play();
      }
    }
    else if (gamestate == END) {
      cactuhitboxG.setVelocityXEach(0);
      cactuG.setLifetimeEach(-1);
      birdG.setLifetimeEach(-1);
      cloudG.setLifetimeEach(-1);
      cactuG.setVelocityXEach(0);
      cloudG.setVelocityXEach(0);
      birdG.setVelocityXEach(0);
      //birdG.addAnimation("bird", birdimg);
      //birdG.changeAnimation("bird", birdimg);

      crouchAfterJumping = false;

      crouchbutton.position(width / 2 - 35, -350);
      crouchbuttonbackgroundimage.position(width / 2 - 35, -350);
      trexIsCrouching = false;
      trexIsJumping = false;
      if (TrexColorido == false) {
        //birdG.setAnimationEach("birdimgleft", birdimgleft);
      }
      ground.velocityX = 0;
      if (TrexColorido == true && dinosaurcolor == "Cinza") {
        trex.changeAnimation("collidednb", trex_collidednb);
      }
      if (TrexColorido == false) {
        trex.changeAnimation("collided", trex_collided);
      }
      if (TrexColorido == true && dinosaurcolor == "Marrom") {
        trex.changeAnimation("collided_brown", trex_collidedbrown);
      }
      if (TrexColorido == true && dinosaurcolor == "Verde") {
        trex.changeAnimation("collided_green", trex_collidedgreen);
      }
      trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
      trex.velocityY = 0;

      restart.visible = true;
      gameover.visible = true;
      if (mousePressedOver(restart)
        || touches.length > 0) {
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

  if (game == "Voo Infinito" && gamestate == PLAY) {
    createclouds();
    createbird();
    if (dinosaurcolor == "notselected" && game == "Voo Infinito") {
      setBirdColor();
    }
    if (keyDown("space") ||//&&!mouseIsOver(crouchbutton)||
      keyDown('W') ||//&&!mouseIsOver(crouchbutton)||
      keyDown("UP_ARROW") ||//&&!mouseIsOver(crouchbutton)||
      touches.length > 0) {
      //&& !mouseIsOver(crouchbutton)){
      touches = [];
      bird.velocityY = -10;
      //trexIsJumping = true;
    }
    bird.velocityY = bird.velocityY + 0.8;
    if (birdIsFalling == false && bird.velocityY > 0) {
      birdIsFalling = true;
      birdIsFlying = false;
    }
    if (birdIsFalling == true && bird.velocityY <= 0) {
      birdIsFalling = false;
    }
    if (birdIsFlying == false && bird.velocityY < 0) {
      birdIsFlying = true;
    }
    if (birdIsFalling == true && bird.rotation !== 15) {
      bird.rotation = bird.rotation + 1;
    }
    if (birdIsFalling == false && birdIsFlying == false && bird.rotation !== 0) {
      bird.rotation = bird.rotation - 1;
    }
    if (birdIsFlying == true && bird.rotation !== -15) {
      bird.rotation = bird.rotation - 1;
    }
    console.log("Falling: " + birdIsFalling, "Flying: " + birdIsFlying);
    //console.log("Flying: "+birdIsFlying);
    if (bird.isTouching(birdG) && birdIsInvencibleBirds == false || bird.y < -10) {
      failsound.play();
      //if(birdcolor !== "Cinza"){//!== "Cinza"
      //bird.y = bird.y + 11;
      //}//else{
      //bird.y = bird.y + 7.5;
      //}
      gamestate = END;
      if (TrexColorido == true) {
        if (birdcolor == "Cinza") {
          bird.changeAnimation("birdimgright", birdimgright);
        }
        if (birdcolor == "Verde") {
          bird.changeAnimation("greenbirdimgright", greenbirdimgright);
        }
        if (birdcolor == "Marrom") {
          bird.changeAnimation("brownbirdimgright", brownbirdimgright);
        }
      } else {
        bird.changeAnimation("birdimgright", birdimgright);
      }
    }
    else if (bird.collide(invisibleground) && birdIsInvencibleGround == false) {
      hitGround = true;
      failsound.play();
      gamestate = END;
      bird.y = ground.y - 35;
      if (birdcolor !== "Cinza") {
        bird.y = bird.y + 11;
      } else {
        bird.y = bird.y + 7.5;
      }
      if (TrexColorido == true) {
        if (birdcolor == "Cinza") {
          bird.changeAnimation("birdimgright", birdimgright);
        }
        if (birdcolor == "Verde") {
          bird.changeAnimation("greenbirdimgright", greenbirdimgright);
        }
        if (birdcolor == "Marrom") {
          bird.changeAnimation("brownbirdimgright", brownbirdimgright);
        }
      } else {
        bird.changeAnimation("birdimgright", birdimgright);
      }
    }
  } else if (game == "Voo Infinito" && gamestate == END) {
    if (hitGround == true) {
      bird.rotation = 0;
      hitGround = false;
    }
    if (TrexColorido == false) {
      //birdG.setAnimationEach("birdimgleft", birdimgleft);
    }
    if (TrexColorido == true) {
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
    if (mousePressedOver(restart)
      || touches.length > 0) {
      //console.log("Reinicia.");
      reset();
      touches = [];
    }
    //if(bird.y > height + 160){
    //  bird.velocityY = 0;
    //}
  }

  if (initialWidth == width) {
    if (initialHeight == height) {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24;
      }
    } else {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25 - newHeightAdded / 2) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25 - newHeightAdded / 2;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24 - newHeightAdded / 2) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24 - newHeightAdded / 2;
      }
    }
  } else {
    if (initialHeight == height) {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25 - newWidthAdded / 2
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25 - newWidthAdded / 2;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24 - newWidthAdded / 2
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24 - newWidthAdded / 2;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24;
      }
    } else {
      if (ShowBestHighscoresButtonShadow.x !== ShowBestHighscoresButton.x + 25 - newWidthAdded / 2
        || ShowBestHighscoresButtonShadow.y !== ShowBestHighscoresButton.y + 25 - newHeightAdded / 2) {
        ShowBestHighscoresButtonShadow.x = ShowBestHighscoresButton.x + 25 - newWidthAdded / 2;
        ShowBestHighscoresButtonShadow.y = ShowBestHighscoresButton.y + 25 - newHeightAdded / 2;
      }

      if (ShowBestHighscoresButtonHitbox.x !== ShowBestHighscoresButton.x + 24 - newWidthAdded / 2
        || ShowBestHighscoresButtonHitbox.y !== ShowBestHighscoresButton.y + 24 - newHeightAdded / 2) {
        ShowBestHighscoresButtonHitbox.x = ShowBestHighscoresButton.x + 24 - newWidthAdded / 2;
        ShowBestHighscoresButtonHitbox.y = ShowBestHighscoresButton.y + 24 - newHeightAdded / 2;
      }
    }
  }

  //if(crouchbuttonHitbox.x !== crouchbutton.x + 34
  //||crouchbuttonHitbox.y !== crouchbutton.y + 35){
  //  crouchbuttonHitbox.x = crouchbutton.x + 34;
  //  crouchbuttonHitbox.y = crouchbutton.y + 35;
  //}

  drawSprites();

  //stroke('white');
  //textSize(45);
  //textAlign("center");
  //text("N O R M A L")
  /*var plusnum = 100;
  textFont(trexfont);
  fill("gray");
  text("MULTI", 200, 125);
  fill("red");
  text("P", 260+plusnum, 125);
  fill("orange");
  text("L", 275+plusnum+22, 125);
  fill("yellow");
  text("A", 292+plusnum+48, 125);
  fill("lime");
  text("Y", 307+plusnum+72, 125);
  fill("lightblue");  
  text("E", 323+plusnum+100, 125);
  fill("purple");
  text("R", 339+plusnum+128, 125);*/

  if (mostRecentVersion !== null && mostRecentVersion > version && LatestUpdatePlatformsAimed === "All"
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("PC") && isMobile === false
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("Mobile") && isMobile === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("iPhone") && isiPhone === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("iPhoneXR") && isiPhoneXR === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("Android") && isAndroid === true
    || mostRecentVersion !== null && mostRecentVersion > version
    && LatestUpdatePlatformsAimed.includes("iPad") && isiPad === true) {
    push();
    var mostRecentVersionTextX;
    if (initialWidth == width) {
      mostRecentVersionTextX = width / 2 - 25;
    } else if (initialWidth !== width) {
      mostRecentVersionTextX = width / 2 - 25 - newWidthAdded / 2;
    }
    if (isMobile == false && isiPhoneXR == false) {
      textSize(35);
    } else if (isMobile == true && mostOfTheScreen == "width"
      || isiPhoneXR == true && mostOfTheScreen == "width") {
      textSize(25);
    } else if (isMobile == true && mostOfTheScreen == "height") {
      textSize(18);
    }
    textFont("default");

    fill('red');
    textAlign("center");
    stroke('darkred');
    text("Esta versão não é a mais recente.", mostRecentVersionTextX, height - 25);
    pop();
  }

}

function createclouds() {
  var cloudspawntime;
  if (game == "Corrida Infinita") {
    cloudspawntime = 80;
  }
  if (game == "Voo Infinito") {
    cloudspawntime = 30;
  }
  if (frameCount % cloudspawntime == 0) {//frameCount%60==0
    cloud = createSprite(width + 10, 100, 10, 10);//610, 100
    //cloud.velocityX = -(4+3*score/100);//-(5+score/100)
    if (TrexColorido == true) {
      cloud.addImage("cloudfilled", cloud_filled_img);
    } else {
      cloud.addImage("cloud", cloud_image);
    }
    cloud.lifetime = 415;//215
    if (game == "Corrida Infinita") {
      cloud.scale = 0.5;
    }
    if (game == "Voo Infinito") {
      cloud.scale = 0.5 / 2 / 2 + 0.8;
    }
    cloud.depth = trex.depth;
    bird.depth = trex.depth;
    if (player2 !== undefined && player !== undefined) {
      player2.depth = trex.depth;
    }
    if (player2 !== undefined && player !== undefined) {
      player2.depth = player2.depth + 1;
    }
    restart.depth = trex.depth;
    trex.depth = trex.depth + 1;
    bird.depth = bird.depth + 1;
    restart.depth = restart.depth + 1;
    cloud.depth = crouchbutton.depth;
    crouchbutton.depth = crouchbutton.depth + 1;
    crouchbutton.depth = gameover.depth;
    cloud.depth = gameover.depth;
    gameover.depth = gameover.depth + 1;
    trex.depth = gameover.depth;
    gameover.depth = gameover.depth + 1;
    cloudG.add(cloud);
    if (game == "Corrida Infinita") {
      //cloud.y = Math.round(random(50, 100));
      cloud.y = Math.round(random(invisibleGroundPosY - 140, invisibleGroundPosY - 90));//windowHeight-100
      //(windowHeight update soon(maybe))
    }
    if (game == "Voo Infinito") {
      cloud.y = Math.round(random(50, height - 100));//windowHeight-100(windowHeight update soon(maybe))
    }
  }
}

function createcactu() {
  var debughitbox = false;
  if (game == "Corrida Infinita") {
    if (frameCount % 70 == 0) {//frameCount%60==0
      //cactu y: 165
      var cactu = createSprite(width + 10, invisibleGroundPosY - 25, 10, 40);//610, 165
      var hitbox = createSprite(cactu.x, cactu.y, 75, 200);
      hitbox.visible = false;
      //cactu.velocityX = -(5+score/100);//-(5+score/100)
      var aleatorio = Math.round(random(1, 6));
      if (TrexColorido == false) {
        switch (aleatorio) {
          case 1: cactu.addImage(cactu1);
            break;
          case 2: cactu.addImage(cactu2);
            break;
          case 3: cactu.addImage(cactu3);
            break;
          case 4: cactu.addImage(cactu4);
            break;
          case 5: cactu.addImage(cactu5);
            break;
          case 6: cactu.addImage(cactu6);
            break;
          default: break;
        }
      } else {
        switch (aleatorio) {
          case 1: cactu.addImage(cactu1nb);
            break;
          case 2: cactu.addImage(cactu2nb);
            break;
          case 3: cactu.addImage(cactu3nb);
            break;
          case 4: cactu.addImage(cactu4nb);
            break;
          case 5: cactu.addImage(cactu5nb);
            break;
          case 6: cactu.addImage(cactu6nb);
            break;
          default: break;
        }
      }
      if (debughitbox == true) {
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

function createbird() {
  var debughitbox = false;
  var upperbirdenabled = true;
  if (game == "Corrida Infinita") {
    if (frameCount % 245 == 0 && score >= 300) {//frameCount%230==0 //225 //frameCount%245==0
      var enemybird = createSprite(width + 15/*width+10*/, 100, 10, 10);//610, 100
      enemybird.visible = false;
      enemybird.y = invisibleGroundPosY - 60;//Math.round(random(130, 130));
      if (upperbirdenabled == true) {
        //upperbird y: 100 - 30
        var upperbird = createSprite(enemybird.x, enemybird.y - 60, 10, 80);
        upperbird.visible = false;
        //upperbird.visible = false;
        upperbird.lifetime = 315;
      }
      enemybird.lifetime = 315;//215
      //enemybird.velocityX = -(5+score/100);//-(5+score/100)
      if (TrexColorido == true) {
        var randombird = Math.round(random(1, 3));
        if (randombird == 1) {
          enemybird.addAnimation("birdleft", birdanmleft);
          enemybird.addAnimation("birdimgleft", birdimgleft);
          enemybird.changeAnimation("birdleft", birdanmleft);
          if (upperbirdenabled == true) {
            upperbird.addAnimation("birdleft", birdanmleft);
            upperbird.addAnimation("birdimgleft", birdimgleft);
            upperbird.changeAnimation("birdleft", birdanmleft);
          }
        }
        if (randombird == 2) {
          enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
          enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
          enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
          if (upperbirdenabled == true) {
            upperbird.addAnimation("greenbirdleft", greenbirdanmleft);
            upperbird.addAnimation("greenbirdimgleft", greenbirdimgleft);
            upperbird.changeAnimation("greenbirdleft", greenbirdanmleft);
          }
        }
        if (randombird == 3) {
          enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
          enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
          enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
          if (upperbirdenabled == true) {
            upperbird.addAnimation("brownbirdleft", brownbirdanmleft);
            upperbird.addAnimation("brownbirdimgleft", brownbirdimgleft);
            upperbird.changeAnimation("brownbirdleft", brownbirdanmleft);
          }
        }
      } else if (TrexColorido == false) {
        enemybird.addAnimation("birdleft", birdanmleft);
        enemybird.addAnimation("birdimgleft", birdimgleft);
        enemybird.changeAnimation("birdleft", birdanmleft);
        if (upperbirdenabled == true) {
          upperbird.addAnimation("birdleft", birdanmleft);
          upperbird.addAnimation("birdimgleft", birdimgleft);
          upperbird.changeAnimation("birdleft", birdanmleft);
        }
      } else { }
      enemybird.scale = 0.51;
      if (upperbirdenabled == true) {
        upperbird.scale = 0.51;
      }
      if (debughitbox == true) {
        enemybird.debug = true;
        if (upperbirdenabled == true) {
          upperbird.debug = true;
        }
      }
      birdG.add(enemybird);
      if (upperbirdenabled == true) {
        birdG.add(upperbird);
      }
    }
  }
  if (game == "Voo Infinito") {
    if (frameCount % 125 == 0 && score > 100) {
      var maxb;
      if (!isMobile) {
        var randomform = Math.round(random(1, 3));
        maxb = 14;
      } else if (isMobile) {
        var randomform = Math.round(random(1, 2));
        maxb = 20;
      }
      for (var b = 1; b <= maxb; b = b + 1) {
        if (b !== 3 && b !== 4 && randomform == 1 && isMobile
          || b !== 2 && b !== 3 && randomform == 2 && isMobile
          || b !== 5 && b !== 6 && randomform == 1 && !isMobile
          || b !== 2 && b !== 3 && randomform == 2 && !isMobile
          || b !== 7 && b !== 8 && randomform == 3 && !isMobile) {
          var enemybird = createSprite(width + 10, 80 * b, 10, 10);//+10, 10, 10);
          enemybird.lifetime = 315;
          if (b == maxb && isMobile) {
            enemybird.y = 20;
          } else if (b == maxb && !isMobile) {
            enemybird.y = 0;
          }
          enemybird.setCollider("rectangle", 0, 0, 50, 50);
          if (enemybird.y > height) {
            enemybird.destroy();
          } else {
            if (TrexColorido == true) {
              var randombird = Math.round(random(1, 3));
              if (randombird == 1) {
                enemybird.addAnimation("birdleft", birdanmleft);
                enemybird.addAnimation("birdimgleft", birdimgleft);
                enemybird.changeAnimation("birdleft", birdanmleft);
              }
              if (randombird == 2) {
                enemybird.addAnimation("greenbirdleft", greenbirdanmleft);
                enemybird.addAnimation("greenbirdimgleft", greenbirdimgleft);
                enemybird.changeAnimation("greenbirdleft", greenbirdanmleft);
              }
              if (randombird == 3) {
                enemybird.addAnimation("brownbirdleft", brownbirdanmleft);
                enemybird.addAnimation("brownbirdimgleft", brownbirdimgleft);
                enemybird.changeAnimation("brownbirdleft", brownbirdanmleft);
              }
            } else if (TrexColorido == false) {
              enemybird.addAnimation("birdleft", birdanmleft);
              enemybird.addAnimation("birdimgleft", birdimgleft);
              enemybird.changeAnimation("birdleft", birdanmleft);
            } else { }
            enemybird.scale = 0.51 / 2 / 2 + 0.8;
            if (debughitbox == true) {
              enemybird.debug = true;
            }
            birdG.add(enemybird);
          }
        }
      }
    }
  }
}

function reset() {
  //if(getStateOrNot == true){
  getState();
  //}
  bird.rotation = 0;
  crouchAfterJumping = false;
  gamestate = PLAY;
  //setDinosaurColor();
  if (game == "Corrida Infinita") {
    if (TrexColorido == true) {
      dinosaurcolor = "notselected";
    }
    trex.visible = false;
    //gameover.x = width / 2;
    //gameover.y = 100;
    //restart.x = width / 2;
    //restart.y = 140;
    trexIsCrouching = false;
    trexIsJumping = false;
  }
  if (game == "Voo Infinito") {
    birdIsFalling = false;
    birdIsFlying = false;
    if (TrexColorido == true) {
      bird.visible = false;
      birdcolor = "notselected";
    } else {
      bird.changeAnimation("birdright", birdanmright);
    }
    bird.y = 160;
    //restart.y = height / 2 + 40;
    //gameover.y = height / 2;
  }
  restart.visible = false;
  gameover.visible = false;
  cactuG.destroyEach();
  cloudG.destroyEach();
  birdG.destroyEach();
  trex.changeAnimation("running", trex_running);

  if (score > highscore) {
    highscore = score;
  }
  if (ShowBestHighscore == true) {
    var chosen = false;
    if (BestHighscores1 == false && chosen == false && highscore !== BestHighscores2
      && highscore !== BestHighscores3 && highscore !== BestHighscores4 && highscore !== BestHighscores5) {
      BestHighscores1 = highscore;
      updateBestHighscore(1);
      chosen = true;
    }
    if (BestHighscores1 !== false && BestHighscores2 == false && chosen == false && highscore !== BestHighscores1
      && highscore !== BestHighscores3 && highscore !== BestHighscores4 && highscore !== BestHighscores5) {
      BestHighscores2 = highscore;
      updateBestHighscore(2);
      chosen = true;
    }
    if (BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 == false && chosen == false
      && highscore !== BestHighscores1 && highscore !== BestHighscores2 && highscore !== BestHighscores4
      && highscore !== BestHighscores5) {
      BestHighscores3 = highscore;
      updateBestHighscore(3);
      chosen = true;
    }
    if (BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 !== false
      && BestHighscores4 == false && chosen == false && highscore !== BestHighscores1
      && highscore !== BestHighscores2 && highscore !== BestHighscores3 && highscore !== BestHighscores5) {
      BestHighscores4 = highscore;
      updateBestHighscore(4);
      chosen = true;
    }
    if (BestHighscores1 !== false && BestHighscores2 !== false && BestHighscores3 !== false
      && BestHighscores4 !== false && BestHighscores5 == false && chosen == false
      && highscore !== BestHighscores1 && highscore !== BestHighscores2 && highscore !== BestHighscores3
      && highscore !== BestHighscores4) {
      BestHighscores5 = highscore;
      updateBestHighscore(5);
      chosen = true;
    }
  }
  score = 0;

}

function turnnight() {
  Isnight = true;
  Isday = false;
}

function turnday() {
  if (onlyDayOrNight !== false && Isday == false && Isnight == true) {
    Isnight = false;
    Isday = true;
  }
}

function inverseColor(r, g, b) {

  r = 255 - r; //get the mathmatical inverse
  g = 255 - g; //get the mathmatical inverse
  b = 255 - b; //get the mathmatical inverse

  return color(r, g, b); //return a p5 color function containing our inverse color!
}

function setDinosaurColor() {
  if (dinosaurcolor == "notselected" && TrexColorido == true && gamestate !== SELECT) {
    var randomcolor = Math.round(random(1, 3));
    if (randomcolor == 1) {
      dinosaurcolor = "Cinza";
      //trex.addAnimation("running", trex_running);
      //trex.addAnimation("collided", trex_collided);
      //trex.addAnimation("crouching", trex_crouching);
      trex.changeAnimation("runningnb", trex_runningnb);
      crouchbuttonclass = "crouchbutton";
      crouchbutton.class("crouchbutton");
      //trex.scale = 0.5;
    }
    if (randomcolor == 2) {
      dinosaurcolor = "Verde";
      //trex.addAnimation("running_green", trex_runninggreen);
      //trex.addAnimation("collided_green", trex_collidedgreen);
      //trex.addAnimation("crouching_green", trex_crouchinggreen);
      trex.changeAnimation("running_green", trex_runninggreen);
      crouchbuttonclass = "crouchbuttongreentrex";
      crouchbutton.class("crouchbuttongreentrex");
      //trex.scale = 0.5;
    }
    if (randomcolor == 3) {
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
  } if (dinosaurcolor == "notselected" && TrexColorido == false) {
    dinosaurcolor = "Cinza";
    //trex.addAnimation("running", trex_running);
    //trex.addAnimation("collided", trex_collided);
    //trex.addAnimation("crouching", trex_crouching);
    trex.changeAnimation("running", trex_running);
    //trex.scale = 0.5;
    trex.visible = true;
  }

  if (player !== undefined) {
    if (player.color !== dinosaurcolor) {
      player.color = dinosaurcolor;
      player.update();
    }
  }
}

function setBirdColor() {
  if (birdcolor == "notselected" && TrexColorido == true && gamestate !== SELECT) {
    var randomcolor = Math.round(random(1, 3));
    if (randomcolor == 1) {
      birdcolor = "Cinza";
      //trex.addAnimation("running", trex_running);
      //trex.addAnimation("collided", trex_collided);
      //trex.addAnimation("crouching", trex_crouching);
      bird.changeAnimation("birdright", birdanmright);
      //trex.scale = 0.5;
    }
    if (randomcolor == 2) {
      birdcolor = "Verde";
      //trex.addAnimation("running_green", trex_runninggreen);
      //trex.addAnimation("collided_green", trex_collidedgreen);
      //trex.addAnimation("crouching_green", trex_crouchinggreen);
      bird.changeAnimation("greenbirdright", greenbirdanmright);
      //trex.scale = 0.5;
    }
    if (randomcolor == 3) {
      birdcolor = "Marrom";
      //trex.addAnimation("running_brown", trex_runningbrown);
      //trex.addAnimation("collided_brown", trex_collidedbrown);
      //trex.addAnimation("crouching_brown", trex_crouchingbrown);
      bird.changeAnimation("brownbirdright", brownbirdanmright);
      //trex.scale = 0.5;
    }
    bird.visible = true;
  } if (birdcolor == "notselected" && TrexColorido == false) {
    birdcolor = "Cinza";
    //trex.addAnimation("running", trex_running);
    //trex.addAnimation("collided", trex_collided);
    //trex.addAnimation("crouching", trex_crouching);
    bird.changeAnimation("birdright", birdanmright);
    //trex.scale = 0.5;
    bird.visible = true;
  }

  if (player !== undefined) {
    if (player.color !== birdcolor) {
      player.color = birdcolor;
      player.update();
    }
  }
}

function crouch() {
  touches = [];
  if (/*MobileUnCrouchMode === "press" &&*/ trexIsJumping == true && trexIsCrouching == false) {
    crouchAfterJumping = true;
  }
  if (trexIsCrouching == false && gamestate == PLAY && trexIsJumping == false) {
    //trex.addAnimation("crouching", trex_crouching);
    trexIsCrouching = true;
    trex.setCollider("rectangle", 0, 0, 35, 25);//crouching collider
    if (TrexColorido == true && dinosaurcolor == "Cinza") {
      trex.changeAnimation("crouchingnb", trex_crouchingnb);
    }
    if (TrexColorido == false) {
      trex.changeAnimation("crouching", trex_crouching);
    }
    if (TrexColorido == true && dinosaurcolor == "Marrom") {
      trex.changeAnimation("crouching_brown", trex_crouchingbrown);
    }
    if (TrexColorido == true && dinosaurcolor == "Verde") {
      trex.changeAnimation("crouching_green", trex_crouchinggreen);
    }
    //trex.velocityX = 2;
  } else if (trexIsCrouching == true && gamestate == PLAY) {
    trex.setCollider("rectangle", -5, 0, 35, 80);//main collider
    trexIsCrouching = false;
    if (TrexColorido == true || dinosaurcolor == "Cinza") {
      trex.changeAnimation("runningnb", trex_runningnb);
    }
    if (TrexColorido == false) {
      trex.changeAnimation("running", trex_running);
    }
    if (TrexColorido == true && dinosaurcolor == "Marrom") {
      trex.changeAnimation("running_brown", trex_runningbrown);
    }
    if (TrexColorido == true && dinosaurcolor == "Verde") {
      trex.changeAnimation("running_green", trex_runninggreen);
    }
    //trex.velocityX = 0;
  } else {

  }
}

function turnColored() {
  TrexColorido = true;
  gamestate = PLAY;
  gameover.changeImage("gameovercolored", gameover_coloredimg);
  highscoreS.visible = true;
  ground.changeImage("groundcolored", ground_colored_image);
  if (game == "Corrida Infinita") {
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
    sand.depth = sand.depth + 1;
  }
  if (game == "Voo Infinito") {
    bird.visible = true;
    ground.visible = true;
    sand.visible = false;
  }
  coloridobutton.position(-1250, coloridobutton.y);
  normalbutton.position(-1250, normalbutton.y);

  multiplayerToggle.position(-1250, multiplayerToggle.y);
  nameInput.position(-1250, nameInput.y);
  if (player === undefined && multiplayerToggleValue === true) {
    Multiplayer();
  }
  if (isMobile || !isMobile && backButtonOnPC === true) {
    backButton.position(width - 55, height - 55);
  }
}

function turnNormal() {
  TrexColorido = false;
  gamestate = PLAY;
  gameover.changeImage("gameover", gameoverimg);
  highscoreS.visible = true;
  ground.changeImage("ground", ground_image);
  if (game == "Corrida Infinita") {
    crouchbutton.visible = true;
    ground.visible = true;
    //coloridobutton.visible = false;

    //groundvisibility = true;
    //leftbutton.visible = false;
    //rightbutton.visible = false;
    //selectbutton.visible = false;
  }
  if (game == "Voo Infinito") {
    bird.visible = true;
    ground.visible = true;
    sand.visible = false;
  }
  coloridobutton.position(-1250, coloridobutton.y);
  normalbutton.position(-1250, normalbutton.y);

  multiplayerToggle.position(-1250, multiplayerToggle.y);
  nameInput.position(-1250, nameInput.y);
  if (player === undefined && multiplayerToggleValue === true) {
    Multiplayer();
  }
  if (isMobile || !isMobile && backButtonOnPC === true) {
    backButton.position(width - 55, height - 55);
  }
}

function turnCorridaInfinita() {
  game = "Corrida Infinita";
  trex.y = invisibleGroundPosY - 30;//160
  ground.y = invisibleGroundPosY - 10;//180
  invisibleground.y = invisibleGroundPosY;//190
  restart.y = invisibleGroundPosY - 50;//140
  gameover.y = invisibleGroundPosY - 90;//100
  gameover.x = width / 2;
  restart.x = width / 2;
}

function turnVooInfinito() {
  //if(!isMobile || isMobile && PcFeaturesOnMobile == true){
  game = "Voo Infinito";
  bird.y = 160;
  bird.velocityY = 0;
  ground.y = height - 5;
  invisibleground.y = height - 5 + 10;
  restart.y = height / 2 + 40;
  gameover.y = height / 2;
  //}
}

function resetBestHighscore(number) {
  if (number == 1 && BestHighscores1 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore1: false
    });
  }

  if (number == 2 && BestHighscores2 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: false
    });
  }

  if (number == 3 && BestHighscores3 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: false
    });
  }

  if (number == 4 && BestHighscores4 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: false
    });
  }

  if (number == 5 && BestHighscores5 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: false
    });
  }
  touches = [];
}

function updateBestHighscore(number) {
  if (number == 1) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore1: BestHighscores1
    });
  }

  if (number == 2) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: BestHighscores2
    });
  }

  if (number == 3) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: BestHighscores3
    });
  }

  if (number == 4) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: BestHighscores4
    });
  }

  if (number == 5) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: BestHighscores5
    });
  }
}

function resetBestHighscoreOne() {
  if (BestHighscores1 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore1: false
    });
  }
  touches = [];
}

function resetBestHighscoreTwo() {
  if (BestHighscores2 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore2: false
    });
  }
  touches = [];
}

function resetBestHighscoreThree() {
  if (BestHighscores3 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore3: false
    });
  }
  touches = [];
}

function resetBestHighscoreFour() {
  if (BestHighscores4 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore4: false
    });
  }
  touches = [];
}

function resetBestHighscoreFive() {
  if (BestHighscores5 !== false) {
    database.ref('/Trex/BestHighscores/').update({
      BestHighscore5: false
    });
  }
  touches = [];
}

function handleBestHighscores() {
  if (ShowBestHighscoreActive == false) {
    ShowBestHighscoreActive = true;
  } else if (ShowBestHighscoreActive == true) {
    ShowBestHighscoreActive = false;
  }
  touches = [];
}

function getState() {
  if (navigator.onLine == true) {
    if (database !== null) {
      if (getStateOrNot == true || gotStateOneTime == false) {
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
      //if(allMultiplayerClientsReload === true && player === undefined||allMultiplayerClientsReload === false){
      var allMultiplayerClientsReloadRef = database.ref("/Trex/allMultiplayerClientsReload/");
      allMultiplayerClientsReloadRef.on("value", function (data) {
        allMultiplayerClientsReload = data.val();
      });
      //}
      var LatestUpdatePlatformsAimedRef = database.ref("/Trex/LatestUpdatePlatformsAimed/");
      LatestUpdatePlatformsAimedRef.on("value", function (data) {
        LatestUpdatePlatformsAimed = data.val();
      });
      gotStateOneTime = true;
    }
  }

}

function windowResized() {
  //if(windowResize == false){
  if (!isMobile && windowWidth < width) {
    if (windowResizeY == true) {
      if (windowHeight - 2.5 !== height) {
        resizeCanvas(width, windowHeight - 2.5);
        newHeight = height;

        if (initialHeight !== height) {
          newHeightAdded = height - initialHeight;

          if (game == "Corrida Infinita") {
            ground.y = 180 - newHeightAdded / 2;
            invisibleground.y = 190 - newHeightAdded / 2;
          } else if (game == "Voo Infinito") {
            ground.y = height - 5 - newHeightAdded / 2;
            invisibleground.y = height - 5 + 10 - newHeightAdded / 2;
            if (gamestate == PLAY) {
              //bird.y = bird.y;
            } else if (gamestate == END) {
              /*if(initialHeight > newHeight){
                if(birdcolor !== "Cinza"){
                  bird.y = ground.y - 35+ 11-newHeightAdded/2;
                }else{
                  bird.y = ground.y - 35+ 7.5-newHeightAdded/2;
                }
              }else if(newHeight < initialHeight){
                if(birdcolor !== "Cinza"){
                  bird.y = ground.y - 35+ 11+newHeightAdded*12;
                }else{
                  bird.y = ground.y - 35+ 7.5+newHeightAdded*12;
                }
              }*/
              //console.log(ground.y);
              //if(birdcolor !== "Cinza"){
              //  bird.y = ground.y - 35 + 11;
              //}else{
              //  bird.y = ground.y - 35 + 7.5;
              //}

            }
          }

          //if(trex.y  - newHeightAdded/2 > 160 
          //&& trex.y - newHeightAdded/2 < 140){
          //&& trexIsCrouching == false){
          //trex.y = 160;
          //trex.y = 160 - newHeightAdded/2;
          //var e1 = 140-newHeightAdded/2;
          //var e2 = 160-newHeightAdded/2;
          //console.log(trex.y-newHeightAdded/2);
          //console.log("140"+e1);
          //console.log("160"+e2);
          trex.y = trex.y - newHeightAdded / 2;
          //}

          if (TrexColorido == true) {
            sand.y = sand.y - newHeightAdded / 2;
          }
        } else {
          //if(trex.y > 160 && trexIsCrouching == false && trex.y < 140){
          //||trexIsCrouching == true && trex.y > 180 && trex.y < 160){
          //trex.y = 179;
          trex.y = trex.y + newHeightAdded / 2;
          //}
          if (game == "Corrida Infinita") {
            invisibleground.y = invisibleGroundPosY;//190;
            ground.y = invisibleGroundPosY - 10;//180;
          } else if (game == "Voo Infinito") {
            ground.y = height - 5;
            invisibleground.y = height - 5 + 10;
            if (gamestate == PLAY) {
              //bird.y = bird.y - newHeightAdded/2;
            } else if (gamestate == END) {
              if (birdcolor !== "Cinza") {
                //bird.y = ground.y - 35 + 11;
              } else {
                //bird.y = ground.y - 35 + 7.5;
              }
            }
          }
          if (TrexColorido == true) {
            sand.y = height / 2 + 180;
          }
        }

        if (game == "Voo Infinito") {
          if (gamestate == END) {
            //console.log(ground.y);
            if (initialHeight > newHeight) {
              bird.y = bird.y + newHeightAdded / 2;

            } else {
              bird.y = bird.y - newHeightAdded / 2;
            }
            /*if(birdcolor !== "Cinza"){
              //bird.y = ground.y - 35 + 11;
              
            }else{
              //bird.y = ground.y - 35 + 7.5;
            }*/
          }
        }

      }
    }
  } else if (!isMobile && windowWidth > width) {
    if (windowResizeX == true) {
      resizeCanvas(windowWidth - 2.3, height)//, windowHeight - 2.5);
      if (initialWidth !== width) {
        newWidthAdded = width - initialWidth;
        invisibleground.x = 200 - newWidthAdded / 2;
        ground.x = ground.x - newWidthAdded / 2;
        bird.x = 50 - newWidthAdded / 2;
        if (game == "Voo Infinito") {
          if (player !== undefined && playerCount === 2) {
            if (game === "Voo Infinito") {
              player2.x = 50 - newWidthAdded / 2;
            } else if (game === "Corrida Infinita") {

            }

          }
        }
      }
    }
  } else if (!isMobile && windowHeight > height
    || !isMobile && windowHeight < height) {
    //soon
  }
  else if (isMobile) {
    //resizeCanvas(windowWidth - 2.3, windowHeight - 2.5);
  }
  else {

  }
  //if(newHeight == undefined){
  //  newHeight = height - initialHeight + height;
  //} 

  /*if(TrexColorido == true && Isday == true){
    background('cyan');
  }else if(TrexColorido == false && Isday == true){
    background('white');
  }else if(TrexColorido !== false && TrexColorido !== true && Isday == true){
    background('white');
  }else if(gamestate == SELECTED){
    background('white');
  }*/

  sand.width = width;

  //}
}

function reload() {
  if (player !== undefined) {
    player.removeThisPlayer(true, true);
  } else if (player === undefined) {
    location.reload();
  }
}

function Multiplayer() {
  if (player === undefined) {
    player = new Player();

    player2 = createSprite(50, 160, 20, 50);
    player3 = createSprite(50, 160, 20, 50);
    player4 = createSprite(50, 160, 20, 50);
    player5 = createSprite(50, 160, 20, 50);
    player6 = createSprite(50, 160, 20, 50);
    player7 = createSprite(50, 160, 20, 50);
    player8 = createSprite(50, 160, 20, 50);
    player9 = createSprite(50, 160, 20, 50);
    player10 = createSprite(50, 160, 20, 50);

    for (p = 2; p <= 10; p = p + 1) {
      var playernum;
      if (p == 2) {
        playernum = player2;
      } else if (p == 3) {
        playernum = player3;
      } else if (p == 4) {
        playernum = player4;
      } else if (p == 5) {
        playernum = player5;
      } else if (p == 6) {
        playernum = player6;
      } else if (p == 7) {
        playernum = player7;
      } else if (p == 8) {
        playernum = player8;
      } else if (p == 9) {
        playernum = player9;
      } else if (p == 10) {
        playernum = player10;
      }
      if (playernum !== undefined) {
        //playernum = createSprite(50, 160, 20, 50);
        playernum.addAnimation("birdright", birdanmright);
        playernum.addAnimation("greenbirdright", greenbirdanmright);
        playernum.addAnimation("brownbirdright", brownbirdanmright);
        playernum.addAnimation("birdimgright", birdimgright);
        playernum.addAnimation("greenbirdimgright", greenbirdimgright);
        playernum.addAnimation("brownbirdimgright", brownbirdimgright);
        playernum.addAnimation("running", trex_running);
        playernum.addAnimation("runningnb", trex_runningnb);
        playernum.addAnimation("collidednb", trex_collidednb);
        playernum.addAnimation("collided", trex_collided);
        playernum.addAnimation("crouching", trex_crouching);
        playernum.addAnimation("crouchingnb", trex_crouchingnb);
        playernum.addAnimation("running_green", trex_runninggreen);
        playernum.addAnimation("collided_green", trex_collidedgreen);
        playernum.addAnimation("crouching_green", trex_crouchinggreen);
        playernum.addAnimation("running_brown", trex_runningbrown);
        playernum.addAnimation("collided_brown", trex_collidedbrown);
        playernum.addAnimation("crouching_brown", trex_crouchingbrown);
        playernum.setCollider("rectangle", 0, 0, 50, 50);
        if (game === "Voo Infinito") {
          playernum.scale = 0.51 / 2 / 2 + 0.8;
        } else if (game === "Corrida Infinita") {
          playernum.scale = 0.5;
        }

        playernum.visible = false;

        console.log("player" + p + " Created!");
      }

    }

    Player.getPlayersInfo();
  } else {
    console.log("Você Já está no Multiplayer.");
  }

}

function handleMultiplayerToggle() {
  if (multiplayerToggleValue === false) {
    multiplayerToggleValue = true;
    multiplayerToggle.style("background-color", "blue");
  } else if (multiplayerToggleValue === true) {
    multiplayerToggleValue = false;
    multiplayerToggle.style("background-color", "darkred");
  }
  console.log("MultiplayerToggleValue: " + multiplayerToggleValue);
}

function desactivateMultiplayerReload() {
  database.ref("/Trex/").update({
    allMultiplayerClientsReload: false
  });
}

function handleBack() {
  if (gamestate !== SELECT) {
    console.log("function handleBack called.");
    key = null;
    keyCode = null;
    if (player !== undefined) {
      player.removeThisPlayer(false, true);
    }
    ShowBestHighscoresButton.position(width - width - width, 5);
    BestHighscores.x = width - width - width;
    BestHighscores1DeleteButton.position(width - width - width, -350);
    BestHighscores2DeleteButton.position(width - width - width, -350);
    BestHighscores3DeleteButton.position(width - width - width, -350);
    BestHighscores4DeleteButton.position(width - width - width, -350);
    BestHighscores5DeleteButton.position(width - width - width, -350);
    crouchAfterJumping = false;
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
    trex.y = invisibleGroundPosY - 30;//160
    trex.x = 50;
    multiplayerToggleValue = false;
    multiplayerToggle.style("background-color", "darkred");
    backButton.position(width - width - width - 1000, -500);
    if (crouchbutton.y !== -350) {
      crouchbutton.position(width / 2 - 35, -350);
    }
    if (infiniteflightbutton.x !== width / 2 + 255) {
      infiniteflightbutton.position(width / 2 + 255 - 15, infiniteflightbutton.y);
    }
    if (infiniteracebutton.x !== width / 2 - 415) {
      infiniteracebutton.position(width / 2 - 415 + 15, infiniteracebutton.y);
    }
    if (//browserName == "safari" && isMobile == true ||
      //browserName == "safari" && isiPhoneXR == true
      isMobile == true || isiPhoneXR == true) {
      //infiniteracebutton.size(100, 100);
      //infiniteflightbutton.size(100, 100);
      infiniteracebutton.position(width / 2 - 415 + 55 + 125, infiniteracebutton.y);
      infiniteflightbutton.position(width / 2 + 255 - 65 - 85, infiniteflightbutton.y);
    }
  }
}
