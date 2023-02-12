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

var version = 1.222993, mostRecentVersion = null, reloadButton,
  LatestUpdatePlatformsAimed = ""/* PC, Mobile, Android, iPhone, iPad, iPhoneXR, All */;//1.222991

var infiniteflightbutton, infiniteracebutton;

var gotStateOneTime = false;

var initialHeight, newHeightAdded = 0, initialWidth, newWidthAdded = 0, newHeight;

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

var player, playerCount, MultiplayerCircleColor = "blue", database, MaxOfPlayers = 6, allPlayers;

var players = [], playersText = [], playersInfo = [];
//player2, player3, player4, player5, player6, player7, player8, player9, player10,
//player2text, player3text,
//player2color = "Cinza", player3color = "Cinza",
//player2isCrouching = false, player3isCrouching = false,
//player2isGameover = false, player3isGameover = false,
//player2gamePlaying, player3gamePlaying,
//player2hitGround, player3hitGround;

var multiplayerToggle, multiplayerToggleValue = false, nameInput;

var allMultiplayerClientsReload = false;

var backButton, backButtonOnPC = false;

var allPlayerIndexsAvailable = "";

var canPlayMultiplayer = true;

var invisibleGroundPositionOfTheScreen = "bottom", invisibleGroundPosY;

var hearts = [], fullHeartImg, halfHeartImg, emptyHeartImg, heartsSprite, heartsNumber = 1, heartsLeft = 0,
  canSurpassHeartsSpriteArea = false, showTheOnlyOneHeart = false, showHearts = true, invencible = false,
  invencibleDuration = 0650, heart1button, heart2button, heart3button;

var lobbyCodeInput, lobbyCodeButton, lobbyIndex;

var mobileSize, responsiveFontSize;

var texts = [], textsNames = [];

var joystick, itemSelected = "infiniteracebutton", showItemSelectedGui = false, pastItemsSelected = [
  "normalbutton", "heart1button", "infiniteracebutton"
], endToStartX = true, endToStartY = true, axesValue = [/*0, 1, 2, 3 */], lastButtonType = "",
  bolinhatoselect = "both"/* left, right, both */, buttonsValue = [/* axesDown, redButton */],
  PSXButtonImg, PSCircleButtonImg, PSSquareButtonImg, PSTriangleButtonImg,
  PSUpArrowImg, PSDownArrowImg, PSLeftArrowImg, PSRightArrowImg,
  controlsOrientations = [], controlsOrientationsTexts = [], calibrating = false,
  calibrateButton;

var lobbyIndex = null, customLobbyConfig = [{
  "TrexColorido": true,
  "MaxPlayers": 3,
  "heartsNumber": 3,
  "game": "Voo Infinito",
}];

var accountPhoto;

var maxOfBirds;

//517.7
//372.7

//text("Selecio")

function preload() {
  soundFormats('mp3');

  //Carregar imagens em variáveis auxiliares.
  trex_running = loadAnimation("./assets/trex/trex1-blink.png", "./assets/trex/trex3.png",
    "./assets/trex/trex4.png",
    "./assets/trex/trex1.png", "./assets/trex/trex3.png", "./assets/trex/trex4.png");
  trex_runningnb = loadAnimation("./assets/trex/trex1-blink(no borders).png",
    "./assets/trex/trex3(no borders).png", "./assets/trex/trex4(no borders).png",
    "./assets/trex/trex1(no borders).png", "./assets/trex/trex3(no borders).png",
    "./assets/trex/trex4(no borders).png");
  trex_runninggreen = loadAnimation("./assets/trex/green/greentrex1-blink(no borders).png",
    "./assets/trex/green/greentrex3(no borders).png",
    "./assets/trex/green/greentrex4(no borders).png", "./assets/trex/green/greentrex1(no borders).png",
    "./assets/trex/green/greentrex3(no borders).png", "./assets/trex/green/greentrex4(no borders).png");
  trex_runningbrown = loadAnimation("./assets/trex/brown/browntrex1-blink(no borders).png",
    "./assets/trex/brown/browntrex3(no borders).png",
    "./assets/trex/brown/browntrex4(no borders).png", "./assets/trex/brown/browntrex1(no borders).png",
    "./assets/trex/brown/browntrex3(no borders).png", "./assets/trex/brown/browntrex4(no borders).png");
  trex_collided = loadAnimation("./assets/trex/trex_collided.png");
  trex_collidednb = loadAnimation("./assets/trex/trex_collided(no borders).png");
  trex_collidedgreen = loadAnimation("./assets/trex/green/trex_collidedgreen(no borders).png");
  trex_collidedbrown = loadAnimation("./assets/trex/brown/trex_collidedbrown(no borders).png");
  ground_image = loadImage("./assets/ground2.png");
  ground_colored_image = loadImage("./assets/ground2(colored).png");
  cloud_image = loadImage("./assets/imagens-de-fundo/cloud.png");
  cloud_filled_img = loadImage("./assets/imagens-de-fundo/cloud(filled).png");
  trex_crouching = loadAnimation("./assets/trex/trex_low1-blink.png", "./assets/trex/trex_low2(eye fixed).png",
    "./assets/trex/trex_low1(eye fixed).png", "./assets/trex/trex_low2(eye fixed).png",
    "./assets/trex/trex_low1(eye fixed).png", "./assets/trex/trex_low2(eye fixed).png");
  trex_crouchingnb = loadAnimation("./assets/trex/trex_low1-blink(no borders).png",
    "./assets/trex/trex_low2(eye fixed)(no borders).png", "./assets/trex/trex_low1(eye fixed)(no borders).png",
    "./assets/trex/trex_low2(eye fixed)(no borders).png",
    "./assets/trex/trex_low1(eye fixed)(no borders).png", "./assets/trex/trex_low2(eye fixed)(no borders).png");
  trex_crouchinggreen = loadAnimation("./assets/trex/green/greentrex_low1-blink(no borders).png",
    "./assets/trex/green/greentrex_low2(eye fixed)(no borders).png",
    "./assets/trex/green/greentrex_low1(eye fixed)(no borders).png",
    "./assets/trex/green/greentrex_low2(eye fixed)(no borders).png",
    "./assets/trex/green/greentrex_low1(eye fixed)(no borders).png",
    "./assets/trex/green/greentrex_low2(eye fixed)(no borders).png");
  trex_crouchingbrown = loadAnimation("./assets/trex/brown/browntrex_low1-blink(no borders).png",
    "./assets/trex/brown/browntrex_low2(eye fixed)(no borders).png",
    "./assets/trex/brown/browntrex_low1(eye fixed)(no borders).png",
    "./assets/trex/brown/browntrex_low2(eye fixed)(no borders).png",
    "./assets/trex/brown/browntrex_low1(eye fixed)(no borders).png",
    "./assets/trex/brown/browntrex_low2(eye fixed)(no borders).png");
  cactu1nb = loadImage("./assets/inimigos-obstaculos/obstacle1(colored)(no borders).png");
  cactu2nb = loadImage("./assets/inimigos-obstaculos/obstacle2(colored)(no borders).png");
  cactu3nb = loadImage("./assets/inimigos-obstaculos/obstacle3(colored)(no borders).png");
  cactu4nb = loadImage("./assets/inimigos-obstaculos/obstacle4(colored)(no borders).png");
  cactu5nb = loadImage("./assets/inimigos-obstaculos/obstacle5(colored)(no borders).png");
  cactu6nb = loadImage("./assets/inimigos-obstaculos/obstacle6(colored)(no borders).png");
  cactu1 = loadImage("./assets/inimigos-obstaculos/obstacle1.png");
  cactu2 = loadImage("./assets/inimigos-obstaculos/obstacle2.png");
  cactu3 = loadImage("./assets/inimigos-obstaculos/obstacle3.png");
  cactu4 = loadImage("./assets/inimigos-obstaculos/obstacle4.png");
  cactu5 = loadImage("./assets/inimigos-obstaculos/obstacle5.png");
  cactu6 = loadImage("./assets/inimigos-obstaculos/obstacle6.png");
  gameoverimg = loadImage("./assets/gameOver.png");
  gameover_coloredimg = loadImage("./assets/gameOver(colored).png");
  restartimg = loadImage("./assets/restart.png");
  normalbuttonimg = loadImage("./assets/normal.png");
  coloridobuttonimg = loadImage("./assets/Colorido.png");
  leftbuttonimg = loadImage("./assets/left_arrow.png");
  rightbuttonimg = loadImage("./assets/right_arrow.png");
  selectbuttonimg = loadImage("./assets/select.png");
  birdanmleft = loadAnimation("./assets/inimigos-obstaculos/birds/bird1(no borders)-left.png",
    "./assets/inimigos-obstaculos/birds/bird2(no borders)-left.png");
  greenbirdanmleft = loadAnimation("./assets/inimigos-obstaculos/birds/greenbird1(no borders)-left.png",
    "./assets/inimigos-obstaculos/birds/greenbird2(no borders)-left.png");
  brownbirdanmleft = loadAnimation("./assets/inimigos-obstaculos/birds/brownbird1(no borders)-left.png",
    "./assets/inimigos-obstaculos/birds/brownbird2(no borders)-left.png");
  birdanmright = loadAnimation("./assets/inimigos-obstaculos/birds/bird1(no borders)-right.png",
    "./assets/inimigos-obstaculos/birds/bird2(no borders)-right.png");
  greenbirdanmright = loadAnimation("./assets/inimigos-obstaculos/birds/greenbird1(no borders)-right.png",
    "./assets/inimigos-obstaculos/birds/greenbird2(no borders)-right.png");
  brownbirdanmright = loadAnimation("./assets/inimigos-obstaculos/birds/brownbird1(no borders)-right.png",
    "./assets/inimigos-obstaculos/birds/brownbird2(no borders)-right.png");
  birdimgleft = loadAnimation("./assets/inimigos-obstaculos/birds/bird1(no borders)-left.png");
  greenbirdimgleft = loadAnimation("./assets/inimigos-obstaculos/birds/greenbird1(no borders)-left.png");
  brownbirdimgleft = loadAnimation("./assets/inimigos-obstaculos/birds/brownbird1(no borders)-left.png");
  birdimgright = loadAnimation("./assets/inimigos-obstaculos/birds/bird1(no borders)-right.png");
  greenbirdimgright = loadAnimation("./assets/inimigos-obstaculos/birds/greenbird1(no borders)-right.png");
  brownbirdimgright = loadAnimation("./assets/inimigos-obstaculos/birds/brownbird1(no borders)-right.png");
  highscoreimg = loadImage("./assets/imagens-de-pontuacao/highscore.png");
  //crouchbuttonimg = loadImage("./assets/down_arrow.png");
  staranim = loadAnimation("./assets/imagens-de-fundo/star1.png",
    "./assets/imagens-de-fundo/star2.png", "./assets/imagens-de-fundo/star3.png");

  emptyHeartImg = loadImage("./assets/hearts/emptyHeart.png");
  halfHeartImg = loadImage("./assets/hearts/halfHeart.png");
  fullHeartImg = loadImage("./assets/hearts/fullHeart.png");

  PSXButtonImg = loadImage("./assets/consolebuttons/psXbutton.png");
  PSCircleButtonImg = loadImage("./assets/consolebuttons/psCirclebutton.png");
  PSSquareButtonImg = loadImage("./assets/consolebuttons/psSquarebutton.png");
  PSTriangleButtonImg = loadImage("./assets/consolebuttons/psTrianglebutton.png");

  PSUpArrowImg = loadImage("./assets/consolebuttons/psUpArrow2.png");
  PSDownArrowImg = loadImage("./assets/consolebuttons/psDownArrow2.png");
  PSLeftArrowImg = loadImage("./assets/consolebuttons/psLeftArrow2.png");
  PSRightArrowImg = loadImage("./assets/consolebuttons/psRightArrow2.png");

  trexfont = loadFont("./assets/Trex.ttf");

  //Sounds
  jumpsound = loadSound("./assets/jump.mp3");
  failsound = loadSound("./assets/fail.mp3");
  checkpointsound = loadSound("./assets/checkPoint.mp3");

  jumpsound.setVolume(1);
  checkpointsound.setVolume(2.5);
  failsound.setVolume(2.5);
}

function setup() {
  //Criação da área do jogo.
  createCanvas(windowWidth - 2.3, windowHeight - 2.5);
  //600, 200 //windowWidth - 2.3, windowHeight - 2.5

  joystick = createJoystick();//true
  /*if (!joystick.calibrated()) {
    joystick.calibrate(true);

    //joystick.onButtonPressed(onJoystickPress);
    //joystick.onButtonReleased(onJoystickRelease);

    //joystick.onAxesPressed(onJoystickPress);
    //joystick.onAxesReleased(onJoystickRelease);

    console.log("Calibration Mode Activated.");
  }*/
  joystick.onButtonPressed(onJoystickPress);
  joystick.onButtonReleased(onJoystickRelease);

  joystick.onAxesPressed(onJoystickPress);
  joystick.onAxesReleased(onJoystickRelease);

  calibrateButton = createButton("");
  if (!joystick.calibrated()) {
    calibrateButton.html("Calibrar");
  } else {
    calibrateButton.html("Mudar");
  }
  calibrateButton.class("calibrateButton");
  calibrateButton.size(75);
  if (!isMobile) {
    calibrateButton.position(width - 235 - 22, 125);
  } else {
    calibrateButton.position(width - width - width - 1000, -500);
  }
  calibrateButton.mousePressed(handleCalibrate);

  if (width < 405) {
    mobileSize = "lessThanIPhoneXRSize";
  } else {
    mobileSize = "moreThanIPhoneXRSize";
  }

  database = firebase.database();

  initialWidth = width;
  initialHeight = height;

  if (width > height) {
    mostOfTheScreen = "width";
  } else {
    mostOfTheScreen = "height";
  }

  if (invisibleGroundPositionOfTheScreen === "top") {
    invisibleGroundPosY = 190;
  } else if (invisibleGroundPositionOfTheScreen === "bottom") {
    invisibleGroundPosY = height - 5 + 10 - 75;//height - 5 + 10 //height - 5 + 25
  }

  //console.log("invisibleGroundPosY: " + invisibleGroundPosY);

  /*let userAgent = navigator.userAgent;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
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
  }*/

  browserName = (function (agent) {
    switch (true) {
      case agent.indexOf("edge") > -1: return "MS Edge";
      case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
      case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
      case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
      case agent.indexOf("trident") > -1: return "MS IE";
      case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
      case agent.indexOf("safari") > -1: return "Safari";
      default: return "other";
    }
  })(window.navigator.userAgent.toLowerCase());

  reloadButton = createButton("Recarregar");
  reloadButton.position(width - width - width, height - 25);
  if (isMobile == false && isiPhoneXR == false) {
    reloadButton.size(80, 35);
  } else if (isMobile == true && mostOfTheScreen == "width"
    || isiPhoneXR == true && mostOfTheScreen == "width") {
    reloadButton.size(80, 25);
  } else if (isMobile == true && mostOfTheScreen == "height") {
    if (mobileSize === "lessThanIPhoneXRSize") {
      reloadButton.size(70);
    } else {
      reloadButton.size(80);
    }
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

  var trexImg = createImg('./assets/trex/trex_idle(eye fixed).png');
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

  crouchbuttonbackgroundimage = createImg("./assets/nothing.png");
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
  invisibleground = createSprite(width / 2, invisibleGroundPosY, width, 10);//200, , 400, 10
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

  //x: invisibleground.x //110
  heartsSprite = createSprite(invisibleground.x - 80, invisibleGroundPosY + 35, 200, 65);
  heartsSprite.visible = false;

  heart1button = createButton("");
  heart1button.style("background-image", "url('./assets/hearts/fullHeart.png')");
  heart1button.class("heartButton");
  heart1button.position(width - width - width - 1000, -500);
  heart1button.mousePressed(handleHeart1Button);

  heart2button = createButton("");
  if (heartsNumber >= 2) {
    heart2button.style("background-image", "url('./assets/hearts/fullHeart.png')");
  } else {
    heart2button.style("background-image", "url('./assets/hearts/emptyHeart.png')");
  }
  heart2button.class("heartButton");
  heart2button.position(width - width - width - 1000, -500);
  heart2button.mousePressed(handleHeart2Button);

  heart3button = createButton("");
  if (heartsNumber >= 3) {
    heart3button.style("background-image", "url('./assets/hearts/fullHeart.png')");
  } else {
    heart3button.style("background-image", "url('./assets/hearts/emptyHeart.png')");
  }
  heart3button.class("heartButton");
  heart3button.position(width - width - width - 1000, -500);
  heart3button.mousePressed(handleHeart3Button);

  handleHearts(/*3, */true);

  //not done.
  /*var selectAGameText = createElement("p");
  selectAGameText.style("line-break", 'auto');
  selectAGameText.style("font-family", "Trex");
  selectAGameText.style("color", 'cyan');
  selectAGameText.style("-webkit-text-stroke-width", '0.5px');
  selectAGameText.style("-webkit-text-stroke-color", 'green');
  selectAGameText.style("align-self", 'center');
  selectAGameText.style("text-align", 'center');
  selectAGameText.style("align-items", 'center');
  //selectAGameText.style("background-color", 'blue');
  if (isMobile) {
    if (mobileSize === "lessThanIPhoneXRSize") {
      selectAGameText.size(width / 1.2, 60);
    } else {
      if (mostOfTheScreen === "width") {
        selectAGameText.size(width / 1.2, 35);
      } else if (mostOfTheScreen === "width") {
        selectAGameText.size(width / 1.2, 20);
      }
      //selectAGameText.size(width / 1.2, 20);
    }
  } else {
    selectAGameText.size(width / 2, 70);
  }
  if (isMobile) {
    if (mobileSize === "lessThanIPhoneXRSize") {
      //if (mostOfTheScreen === "width") {
      //  selectAGameText.style("font-size", '15px');//32
      //} else if (mostOfTheScreen === "height") {
      selectAGameText.style("font-size", '18px');//32
      //}
    } else {
      if (mostOfTheScreen === "width") {
        selectAGameText.style("font-size", '32px');//32
      } else if (mostOfTheScreen === "height") {
        selectAGameText.style("font-size", '20px');//32
      }
    }
    //selectAGameText.style("font-size", '18px');//32
  } else {
    selectAGameText.style("font-size", '32.1px');//21
  }
  selectAGameText.html("Selecione Um Jogo.");
  if (isMobile && mostOfTheScreen === "height") {
    if (mobileSize === "lessThanIPhoneXRSize") {
      selectAGameText.position(width / 2 / 6.0, -15);//width / 2, 50
    } else {
      selectAGameText.position(width / 2 / 6.0, infiniteracebutton.y - 58);//width / 2, 50
    }
  } else if (!isMobile) {
    selectAGameText.position(width / 2 / 2/*- 288*//*, infiniteracebutton.y - 88);
//height / 2 - 158 && infiniteracebutton.y - 88 = 220.75;
/*} else if (isMobile && mostOfTheScreen === "width") {
if (mobileSize === "lessThanIPhoneXRSize") {
selectAGameText.position(width / 2 / 6.0, -15);//width / 2, 50
} else {
selectAGameText.position(width / 2 / 6.0, infiniteracebutton.y - 88);//width / 2, 50
}
}

//console.log(selectAGameText.y);

text("Sel")*/

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

  /*lobbyCodeInput = createInput("").attribute("placeholder", "Código");
  //lobbyCodeInput.position(width - width - width - 1000, -500);
  lobbyCodeInput.position(width / 2, height - 100);
  lobbyCodeInput.class("nameInput");

  lobbyCodeButton = createButton("Play");
  //lobbyCodeButton.position(width - width - width - 1000, -500);
  lobbyCodeButton.position(width / 2, height - 250);
  lobbyCodeButton.class("lobbyCodeButton");*/

  /*player2text = createElement("h2");
  player2text.style("font-size", '15px');
  player2text.style("color", 'darkgray');//gold
  player2text.position(-1000, -350);

  player3text = createElement("h2");
  player3text.style("font-size", '15px');
  player3text.style("color", 'darkgray');//gold
  player3text.position(-1000, -350);*/
}

function crouch() {
  touches = [];

  if (isMobile) {
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
    }
  }

  touches = [];
}

function draw() {
  if (keyCode == "116" && player !== undefined
    || key == "F5" && player !== undefined) {
    player.removeThisPlayer(false, true);
    console.log("F5 pressed, removing player.");
    key = null;
    keyCode = null;
  }

  if (!isMobile || isMobile && mostOfTheScreen === "width"
    || isMobile && windowHeight < windowWidth) {
    normalbutton.style("width:360px");
    coloridobutton.style("width:360px");

    nameInput.style("width:338px");
    multiplayerToggle.style("width:360px");
  } else {
    normalbutton.style("width:90%");
    coloridobutton.style("width:90%");

    nameInput.style("width:85%");//90.5% //93.5%
    multiplayerToggle.style("width:90%");
  }

  if (initialWidth !== width) {
    if (game === "Corrida Infinita" && heartsSprite.x !== invisibleground.x - 80) {// - newWidthAdded / 2) {
      heartsSprite.x = invisibleground.x - 80;// - newWidthAdded / 2;
      if (hearts !== []) {
        for (var h = 0; h < hearts.length; h = h + 1) {
          hearts[h].x = hearts[h].x - newWidthAdded / 2;
        }
      }
    } else if (game === "Voo Infinito" && heartsSprite.x !== invisibleground.x + 20) {// - newWidthAdded / 2) {
      heartsSprite.x = invisibleground.x + 20;// - newWidthAdded / 2;
      if (hearts !== []) {
        for (var h = 0; h < hearts.length; h = h + 1) {
          hearts[h].x = hearts[h].x - newWidthAdded / 2;
        }
      }
    }

    if (/*heartsXFixed === false && */newWidthAdded !== undefined) {
      //handleHearts(false, true);
      //in windowResized function

      /*for (var h = 0; h < hearts.length; h = h + 1) {
        //heartsXFixed = true

        //if (game === "Corrida Infinita") {
        //  hearts[h].x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 1.45;// -
        //newWidthAdded / h * 7.5;
        //} else if (game === "Voo Infinito") {
        hearts[h].x = hearts[h].x - newWidthAdded / 2;// -
        //newWidthAdded * h / 5.2;
        //}
      }*/
    }
  }

  if (TrexColorido == true && Isday == true) {
    background('cyan');
  } else if (TrexColorido == false && Isday == true) {
    background('white');
  } else if (TrexColorido !== false && TrexColorido !== true && Isday == true) {
    background('#223'); //'white'
  }

  if (firebase.auth().currentUser !== null && gamestate === -1) {
    var textX = 0;
    if (accountPhoto === undefined && firebase.auth().currentUser.photoURL !== null) {
      accountPhoto = createImg(firebase.auth().currentUser.photoURL);
      accountPhoto.position(width - 55, height - 55);
      accountPhoto.style("content:contain");
      accountPhoto.style("border-radius:45px");
      accountPhoto.size(50, 50);
    }
    if (accountPhoto !== undefined) {
      textX = 50;
      accountPhoto.position(width - 55, height - 55);//width - 55, height - 65
      accountPhoto.show();
    }
    push();
    textAlign("right");
    textFont(trexfont);
    textWrap("CHAR");
    textSize(20);
    fill("gold");
    stroke("cyan");
    text(firebase.auth().currentUser.email, 0 - newWidthAdded / 2, height - 35, width - 10 - textX);
    pop();
  } else if (gamestate !== -1 && accountPhoto !== undefined) {
    accountPhoto.hide();
  } else if (firebase.auth().currentUser === null && accountPhoto !== undefined) {
    accountPhoto.hide();
    accountPhoto = undefined;
  }

  //cactu.lifetime

  //bird.lifetime

  if (!isMobile && gamestate === SELECT) {
    push();
    var yAdd;
    textFont(trexfont);//"Trex" if its trexfont then + 25 on y
    if (textFont() === trexfont) {
      yAdd = 25;
    } else if (textFont() === "Trex") {
      yAdd = 0;
    }
    fill("cyan");
    textSize(25);
    //textAlign("center");
    stroke("green");
    textWrap(WORD);

    if (calibrating === false && joystick.calibrated() === false) {
      text("Calibre Para Jogar Com Um Controle!", 10 - newWidthAdded / 2, 10 + yAdd, width - 235 - 100 - 10);
    } else if (calibrating === true) {
      text("Clique E Aperte O Botão No Controle!", 10 - newWidthAdded / 2, 10 + yAdd, width - 235 - 100 - 10);
    }

    if (calibrateButton.x !== width - 235 - 22 - newWidthAdded / 10000) {
      calibrateButton.position(width - 235 - 22 - newWidthAdded / 10000, calibrateButton.y);
    }


    fill("orange");//"black"
    stroke("gray");
    rect(width - 235 - 100 - newWidthAdded / 2, 0, 230, 120)
    pop();

    joystick.draw(width - 120 - 100 - newWidthAdded / 2, 0 + 60, 220, 100);
  } else if (isMobile && gamestate === SELECT && calibrateButton.x !== width - width - width - 1000) {
    calibrateButton.position(width - width - width - 1000, -500);
  }

  if (backButtonOnPC === true && !isMobile && backButton.x !== width - 55 && gamestate !== SELECT) {
    backButton.position(width - 55, height - 55);
  } else if (backButtonOnPC === false && !isMobile && backButton.x !== width - width - width - 1000) {
    backButton.position(width - width - width - 1000, -500);
  }

  if (player !== undefined && player.playerAlreadyStarted === false) {
    player.startPlayer();
  }

  if (player !== undefined && playerCount < player.index) {
    player.changePlayerIndex();
    if (allPlayers !== undefined) {
      player.hideRemovedPlayers();
    }
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
    if (players !== undefined
      && allPlayers !== undefined) {
      player.hideRemovedPlayers();
    }
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

  if (player !== undefined
    && allPlayers !== undefined
    && players.length === playerCount) {
    player.hideRemovedPlayers();
  }

  if (player !== undefined && player.gamePlaying !== game) {
    player.gamePlaying = game;
    player.update();
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
    if (player.hearts !== heartsLeft) {
      player.hearts = heartsLeft;
      player.update();
    }
  }

  if (player !== undefined && game == "Voo Infinito") {
    if (player.hitGround !== hitGround) {
      player.hitGround = hitGround;
      player.update();
    }
    if (player.positionY !== bird.y) {
      player.positionY = bird.y;
      player.update();
    }
    if (player.rotation !== bird.rotation) {
      player.rotation = bird.rotation;
      player.update();
    }
    for (var playerNum = 0; playerNum < playerCount; playerNum = playerNum + 1) {
      var otherPlayer, otherPlayerColor, otherPlayerIsGameover;
      //if (playerNum === 2) {
      otherPlayer = players[playerNum];//player2;
      if (otherPlayer !== undefined) {
        otherPlayerColor = playersInfo[playerNum].color;//player2color;
        otherPlayerIsGameover = playersInfo[playerNum].isGameover;//player2isGameover;
        //} else if (playerNum === 3) {
        //  otherPlayer = players[1];//player3;
        //  otherPlayerColor = playersInfo[1].color;//player3color;
        //  otherPlayerIsGameover = playersInfo[1].isGameover;//player3isGameover;
        //}
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
    }

    //Isso está na função setBirdColor
    //if(player.color !== birdcolor){
    //  player.color = birdcolor;
    //  player.update();
    //}
  }
  if (player !== undefined && game == "Corrida Infinita") {
    if (player.positionY !== trex.y) {
      //player.positionY = trex.y;
      player.positionY = invisibleground.y - trex.y;
      player.update();
    }
    if (player.isCrouching !== trexIsCrouching) {
      player.isCrouching = trexIsCrouching;
      player.update();
    }

    if (playerCount > 1) {
      var x = trex.x;
      x = trex.x * player.index;
      player.positionX = x;
      player.update();

      //fix this
      /*var addNum;//subtractNum
      if (player.index % 2 === 0) {
        //  addNum = 10 * player.index / 2;
        //  trex.x = trex.x - subtractNum;
        if (player.index === 2) {
          addNum = 0;
        } else {
          //var num = player.index - 2;
          var multiplyNum = player.index / 2;
          addNum = 10 * multiplyNum;
        }
      } else {
        //                3 - 2 = 1, 5 - 2 = 3
        //var multiplyNum = player.index - 2;// * 1.5;
        //addNum = 10;// * multiplyNum;//3: 10, 5: 10 * 2...

        //3 - 1 = 2, 5 - 1 = 4... 2 / 2 = 1, 4 / 2 = 2...
        var num = player.index - 1;
        var multiplyNum = num / 2;
        addNum = 10 * multiplyNum;

        //if player.index === 3
        if (multiplyNum % 2 === 0) {
          addNum = 10 * multiplyNum;//addNu = 10;
        } else {
          //10 * multiplyNum //15 * multiplyNum
          addNum = 15 * multiplyNum;
        }
      }

      *///if (player.index === 1 && player.positionX !== 30 * player.index/* + 5 * player.index * player.index / 1.5*/) {
      //  trex.x = 30 * player.index;// + 5 * player.index * player.index / 1.5;
      /*  player.positionX = trex.x;
        player.update();
      } else if (player.index > 1 && player.positionX !== 30 * player.index + 10 * player.index + addNum) {
        trex.x = 30 * player.index + 10 * player.index + addNum;
        player.positionX = trex.x;
        player.update();
      }*/


      /*if (player.index === 1) {
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
      }*/
    } else if (player.positionX !== 50) {
      trex.x = 50;
      player.positionX = trex.x;
      player.update();
    }

    for (var playerNum = 0; playerNum < playerCount; playerNum = playerNum + 1) {
      var otherPlayer, otherPlayerColor,
        otherPlayerIsGameover, otherPlayerIsCrouching;
      //if (playerNum === 2) {
      otherPlayer = players[playerNum];//player2;
      if (otherPlayer !== undefined) {
        otherPlayerColor = playersInfo[playerNum].color;//player2color;
        otherPlayerIsGameover = playersInfo[playerNum].isGameover;//player2isGameover;
        otherPlayerIsCrouching = playersInfo[playerNum].isCrouching;//player2isCrouching;
        //} else if (playerNum === 3) {
        //  otherPlayer = player3;
        //  otherPlayerColor = player3color;
        //  otherPlayerIsGameover = player3isGameover;
        //  otherPlayerIsCrouching = player3isCrouching;
        //}
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
    }
    //Isso está na função setBirdColor
    //if(player.color !== dinosaurcolor){
    //  player.color = dinosaurcolor;
    //  player.update();
    //}
  }

  if (player !== undefined && playerCount > 1 && game === "Voo Infinito") {
    push();
    fill(MultiplayerCircleColor);
    stroke("white");
    strokeWeight(1);
    ellipse(bird.x - 5, bird.y, 50, 50);
    pop();
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
    /*var plrTimes = 1;
    var allOtherPlayers = [player2, player3];
    for (var plr in allPlayers) {
      if (plrTimes !== player.index && plrTimes <= playerCount) {
        plr = "player" + plrTimes;
        console.log("plr: " + plr);
        if (allPlayers[plr] !== undefined) {
          var x = allPlayers[plr].positionX;
          var y = allPlayers[plr].positionY;

          player2isCrouching = allPlayers[plr].isCrouching;
          player2isGameover = allPlayers[plr].isGameover;
          player2color = allPlayers[plr].color;
          player2gamePlaying = allPlayers[plr].gamePlaying;
          player2hitGround = allPlayers[plr].hitGround;

          otherPlayer.y = y;
          if (initialWidth == width) {
            otherPlayer.x = x;
          } else {
            otherPlayer.x = x - newWidthAdded / 2;
          }

          if (player2hitGround === true && player2gamePlaying === "Voo Infinito" && isMobile) {
            if (player2color === "Cinza") {
              otherPlayer.y = ground.y - 35 + 11;
            } else {
              otherPlayer.y = ground.y - 35 + 7.5;
            }
          }

          otherPlayer.rotation = allPlayers[plr].rotation;
          //console.log("player2.y:"+otherPlayer.y, ", player2.rotation:"+otherPlayer.rotation);
          //console.log("player2gamePlaying: " + player2gamePlaying);
          if (gamestate !== SELECT && player2gamePlaying === game) {
            otherPlayer.visible = true;
            if (game === "Voo Infinito") {
              player2text.position(x - 25, otherPlayer.y - 30);
            } else if (game === "Corrida Infinita") {
              player2text.position(x - 20, otherPlayer.y - 35);
            }
            player2text.html(allPlayers[plr].name + "<br>" + allPlayers[plr].score + "<br>HI "
              + allPlayers[plr].highscore);
          } else if (player2gamePlaying !== game) {
            player2text.position(-1000, -350);
            otherPlayer.visible = false;
            otherPlayer.y = 160;
            otherPlayer.rotation = 0;
            otherPlayer.changeAnimation("birdright", birdanmright);
            console.log("Tchau Jogador.");
          }
        }
      }
      plrTimes = plrTimes + 1;
      if (plrTimes > MaxOfPlayers) { plrTimes = MaxOfPlayers; }
      console.log(plrTimes);
    }*/

    if (playerCount > 1) {
      var allPlayersWithoutThisPlayer = {};
      var playersWithoutThisPlayerArrayKeys = [],
        playersWithoutThisPlayerArrayValues = [];
      for (var plr = 1; plr <= playerCount; plr = plr + 1) {
        //console.log("plr from allPlayersWithoutThisPlayer: " + plr);

        if (plr !== player.index) {
          playersWithoutThisPlayerArrayKeys.push("player" + plr);
          playersWithoutThisPlayerArrayValues.push(allPlayers[playersWithoutThisPlayerArrayKeys
          [playersWithoutThisPlayerArrayKeys.length - 1]]);
          //console.log(playersWithoutThisPlayerArrayKeys[playersWithoutThisPlayerArrayKeys.length - 1]);
        }

        if (plr === playerCount) {
          for (var p = 0; p < playersWithoutThisPlayerArrayKeys.length; p = p + 1) {
            Object.assign(allPlayersWithoutThisPlayer,
              { ["player" + (p + 1)]: playersWithoutThisPlayerArrayValues[p] });
            if (p === playersWithoutThisPlayerArrayKeys.length - 1) {
              //console.table(allPlayersWithoutThisPlayer);
            }
            //"allPlayersWithoutThisPlayer: " + allPlayersWithoutThisPlayer);
          }
        }
      }
      var addToPlr = 0;
      for (var plr = 0; plr < playerCount - 1; plr = plr + 1) {//var plr in allPlayers
        //if (player.index === 2
        //  || player.index === 3) {
        //  plr = "player1";
        //} else if (player.index === 1) {
        //  plr = "player2";
        //}

        var plrInfo;

        /*if (plr + 1 === player.index
          && player.index === 1) {
          if (player.index === 1 && playerCount !== 2
            || playerCount !== 2) {
            addToPlr = addToPlr + 1;
          }
          plrInfo = "player" + (plr + 2 + addToPlr);
        } else {*/
        plrInfo = "player" + (plr + 1);
        //}

        var objectWithPlayersInfo = allPlayersWithoutThisPlayer[plrInfo];

        //console.log("allPlayersWithoutThisPlayer['player1']: " + allPlayersWithoutThisPlayer["player1"]);

        //console.log("plr: " + plr, " plrInfo: " + plrInfo);

        if (players[plr] !== undefined
          && objectWithPlayersInfo !== undefined) {
          var otherPlayer = players[plr];//player3;

          var x = objectWithPlayersInfo.positionX;
          var y = objectWithPlayersInfo.positionY;

          /*player2isCrouching = allPlayers[plr].isCrouching;
          player2isGameover = allPlayers[plr].isGameover;
          player2color = allPlayers[plr].color;
          player2gamePlaying = allPlayers[plr].gamePlaying;
          player2hitGround = allPlayers[plr].hitGround;*/

          playersInfo[plr].isCrouching = objectWithPlayersInfo.isCrouching;
          playersInfo[plr].isGameover = objectWithPlayersInfo.isGameover;
          playersInfo[plr].color = objectWithPlayersInfo.color;
          playersInfo[plr].gamePlaying = objectWithPlayersInfo.gamePlaying;
          playersInfo[plr].hitGround = objectWithPlayersInfo.hitGround;

          otherPlayer.y = y;
          if (initialWidth == width) {
            otherPlayer.x = x;
          } else {
            otherPlayer.x = x - newWidthAdded / 2;
          }

          //player2hitGround, player2gamePlaying
          if (playersInfo[plr].hitGround === true
            && playersInfo[plr].gamePlaying === "Voo Infinito") {
            if (playersInfo[plr].color === "Cinza") {//player2color
              otherPlayer.y = ground.y - 35 + 11;
            } else {
              otherPlayer.y = ground.y - 35 + 7.5;
            }
          } else if (playersInfo[plr].gamePlaying === "Corrida Infinita") {
            otherPlayer.y = invisibleground.y - y;
            if (plrInfo === "player1"
              && player.index !== 1) {
              otherPlayer.x = x + (trex.x * (player.index - 1));
            }
          }

          otherPlayer.rotation = objectWithPlayersInfo.rotation;
          //console.log("player"+plr+1+".y:"+otherPlayer.y, ", otherPlayer.rotation:"+otherPlayer.rotation);
          //console.log("player"+plr+1+"gamePlaying: " + playersInfo[plr].gamePlaying);//player2gamePlaying
          if (gamestate !== SELECT && playersInfo[plr].gamePlaying === game) {//player2gamePlaying
            otherPlayer.visible = true;
            if (game === "Voo Infinito") {
              playersText[plr].position(x - 25, otherPlayer.y - 30);//player2text
            } else if (game === "Corrida Infinita") {
              if (plrInfo === "player1"
                && player.index !== 1) {
                playersText[plr].position((x + (trex.x * (player.index - 1))) - 20,
                  otherPlayer.y - 85);//player2text //, otherPlayer.y - 35
              } else {
                playersText[plr].position(x - 20, otherPlayer.y - 85);//player2text //otherPlayer.y - 35
              }
            }
            playersText[plr].html(objectWithPlayersInfo.name + "<br>"
              + objectWithPlayersInfo.score + "<br>HI "
              + objectWithPlayersInfo.highscore);//player2text
          } else if (playersInfo[plr].gamePlaying !== game) {//player2gamePlaying
            playersText[plr].position(-1000, -350);//player2text
            otherPlayer.visible = false;
            otherPlayer.y = 160;
            otherPlayer.rotation = 0;
            //otherPlayer.changeAnimation("birdright", birdanmright);
            console.log("Tchau Jogador.");
          }
        }
      }
    }
    /*if (playerCount === 3) {
      for (var plr in allPlayers) {
        var otherPlayer = players[1];//player3;
        if (player.index === 1
          || player.index === 2) {
          plr = "player3";
        } else if (player.index === 3) {
          plr = "player2";
        }
        //console.log("plr:"+plr);

        if (allPlayers[plr] !== undefined) {
          var x = allPlayers[plr].positionX;
          var y = allPlayers[plr].positionY;*/

    /*player3isCrouching = allPlayers[plr].isCrouching;
    player3isGameover = allPlayers[plr].isGameover;
    player3color = allPlayers[plr].color;
    player3gamePlaying = allPlayers[plr].gamePlaying;
    player3hitGround = allPlayers[plr].hitGround;*/

    /*playersInfo[1].isCrouching = allPlayers[plr].isCrouching;
    playersInfo[1].isGameover = allPlayers[plr].isGameover;
    playersInfo[1].color = allPlayers[plr].color;
    playersInfo[1].gamePlaying = allPlayers[plr].gamePlaying;
    playersInfo[1].hitGround = allPlayers[plr].hitGround;

    otherPlayer.y = y;
    if (initialWidth === width) {
      otherPlayer.x = x;
    } else {
      otherPlayer.x = x - newWidthAdded / 2;
    }

    //player3hitGround, player3gamePlaying
    if (playersInfo[1].hitGround === true
      && playersInfo[1].gamePlaying === "Voo Infinito" && isMobile) {
      if (playersInfo[1].color === "Cinza") {//player3color
        otherPlayer.y = ground.y - 35 + 11;
      } else {
        otherPlayer.y = ground.y - 35 + 7.5;
      }
    }

    otherPlayer.rotation = allPlayers[plr].rotation;
    //console.log("player3.y:"+otherPlayer.y, ", player3.rotation:"+otherPlayer.rotation);
    //console.log("player2gamePlaying: " + playersInfo[1].gamePlaying);//player3gamePlaying
    if (gamestate !== SELECT && playersInfo[1].gamePlaying === game) {//player3gamePlaying
      otherPlayer.visible = true;
      if (game === "Voo Infinito") {
        playersText[1].position(x - 25, otherPlayer.y - 30);//player3text
      } else if (game === "Corrida Infinita") {
        playersText[1].position(x - 20, otherPlayer.y - 35);//player3text
      }
      playersText[1].html(allPlayers[plr].name + "<br>" + allPlayers[plr].score + "<br>HI "
        + allPlayers[plr].highscore);//player3text
    } else if (playersInfo[0].gamePlaying !== game) {//player2gamePlaying
      playersText[1].position(-1000, -350);//player3text
      otherPlayer.visible = false;
      otherPlayer.y = 160;
      otherPlayer.rotation = 0;
      otherPlayer.changeAnimation("birdright", birdanmright);
      console.log("Tchau Jogador.");
    }
  }
}
}*/
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

    push();
    fill("cyan");
    stroke("blue");
    if (itemSelected === "infiniteracebutton" && showItemSelectedGui) {
      ellipse(infiniteracebutton.x + 80 - 5.5 - newWidthAdded / 2, infiniteracebutton.y
        + infiniteracebutton.y / 4 - 3, 188, 188);
      //rect(infiniteracebutton.x - 5, infiniteracebutton.y - 5, 158, 158);
    } else if (itemSelected === "infiniteflightbutton" && showItemSelectedGui) {
      ellipse(infiniteflightbutton.x + 80 - 5.5 - newWidthAdded / 2, infiniteflightbutton.y
        + infiniteflightbutton.y / 4 - 3, 188, 188);
      //rect(infiniteflightbutton.x - 5, infiniteflightbutton.y - 5, 158, 158);
    }
    pop();

    //if (initialWidth !== width) {
    gameover.x = width / 2 - newWidthAdded / 2;
    restart.x = width / 2 - newWidthAdded / 2;
    //}
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
        if (multiplayerToggle.x !== width - 70 - 300 && isMobile
          || multiplayerToggle.x !== width / 2 - 170 && !isMobile) {
          if (isMobile) {
            //multiplayerToggle.position(width - 70 - 300, coloridobutton.y + 120);
            multiplayerToggle.position(width / 2 + 135 - 105, coloridobutton.y + 120);
          } else {
            multiplayerToggle.position(width / 2 - 170, coloridobutton.y + 120);
          }
          //multiplayerToggle.position(width - 70 - 300, coloridobutton.y + 120);
          //multiplayerToggle.position(width / 2 - 170, coloridobutton.y + 120);
        }
        if (nameInput.x !== width - 70 - 300 && isMobile
          || nameInput.x !== width / 2 - 170 && !isMobile) {
          if (isMobile) {
            //nameInput.position(width - 70 - 300, multiplayerToggle.y - 44);
            nameInput.position(width / 2 + 135 - 105, multiplayerToggle.y - 44);
          } else {
            nameInput.position(width / 2 - 170, multiplayerToggle.y - 44);
          }
          //nameInput.position(width - 70 - 300, multiplayerToggle.y - 44);
          //nameInput.position(width / 2 - 170, multiplayerToggle.y - 44);
        }
      }
      if (heart1button.x !== 85 - 75 && isMobile
        || heart1button.x !== width / 2 - 35 - 75 && !isMobile) {
        if (isMobile) {
          heart1button.position(85 - 75, coloridobutton.y + 80);
        } else {
          heart1button.position(width / 2 - 35 - 75, multiplayerToggle.y + 75);
        }
        //heart1button.position(85 - 75, coloridobutton.y + 80);
        //heart1button.position(width / 2 - 35 - 75, multiplayerToggle.y + 75);
      }
      if (heart2button.x !== 85 && !isMobile
        || heart2button.x !== width / 2 - 35 && isMobile) {
        if (isMobile) {
          heart2button.position(85, coloridobutton.y + 80);
        } else {
          heart2button.position(width / 2 - 35, multiplayerToggle.y + 75);
        }
        //heart2button.position(85, coloridobutton.y + 80);
        //heart2button.position(width / 2 - 35, multiplayerToggle.y + 75); 
      }
      if (heart3button.x !== 85 + 75 && !isMobile
        || heart3button.x !== width / 2 - 35 + 75 && isMobile) {
        if (isMobile) {
          heart3button.position(85 + 75, coloridobutton.y + 80);
        } else {
          heart3button.position(width / 2 - 35 + 75, multiplayerToggle.y + 75);
        }
        //heart3button.position(85 + 75, coloridobutton.y + 80);
        //heart3button.position(width / 2 - 35 + 75, multiplayerToggle.y + 75);
      }
    } else if (isMobile == true && mostOfTheScreen == "height") {
      if (normalbutton.x !== width / 2 - 415) {
        //normalbutton.position(width / 2 - 185, 70);//width / 2 -415, height / 2 - 30
        normalbutton.position(20, 70);
      }
      if (coloridobutton.x !== width / 2 + 135 - 35) {//width / 2 + 135
        //coloridobutton.position(width / 2 - 185, 160);//width / 2 + 135, height / 2 - 30
        coloridobutton.position(20, 160);
      }
      if (canPlayMultiplayer === true) {
        if (multiplayerToggle.x !== width / 2 - 185) {
          //multiplayerToggle.position(width / 2 - 185, coloridobutton.y + 120);
          multiplayerToggle.position(20, coloridobutton.y + 120);
        }
        if (nameInput.x !== width / 2 - 185) {
          //nameInput.position(width / 2 - 185, multiplayerToggle.y - 44);
          nameInput.position(20, multiplayerToggle.y - 44);
        }
      }
      if (heart1button.x !== width / 2 - 35 - 75) {
        heart1button.position(width / 2 - 35 - 75, multiplayerToggle.y + 75);
      }
      if (heart2button.x !== width / 2 - 35) {
        heart2button.position(width / 2 - 35, multiplayerToggle.y + 75);
      }
      if (heart3button.x !== width / 2 - 35 + 75) {
        heart3button.position(width / 2 - 35 + 75, multiplayerToggle.y + 75);
      }
    }

    if (infiniteflightbutton.x !== width - width - width) {
      infiniteflightbutton.position(width - width - width, infiniteflightbutton.y);
    }
    if (infiniteracebutton.x !== width - width - width) {
      infiniteracebutton.position(width - width - width, infiniteracebutton.y);
    }

    //if (initialWidth !== width) {
    gameover.x = width / 2 - newWidthAdded / 2;
    restart.x = width / 2 - newWidthAdded / 2;
    //}
    if (initialHeight == height) {
      gameover.y = invisibleGroundPosY - 90;//100
      restart.y = invisibleGroundPosY - 50;//140
    } else {
      gameover.y = invisibleGroundPosY - 90 - newHeightAdded / 2;//100 - newHeightAdded / 2
      restart.y = invisibleGroundPosY - 50 - newHeightAdded / 2;//140 - newHeightAdded / 2
    }

    push();
    fill("cyan");
    stroke("blue");
    if (itemSelected === "normalbutton" && showItemSelectedGui) {
      ellipse(normalbutton.x + 180 - 5.5 - newWidthAdded / 2, normalbutton.y + 35 - 1, 428, 120);
    } else if (itemSelected === "coloridobutton" && showItemSelectedGui) {
      ellipse(coloridobutton.x + 180 - 5.5 - newWidthAdded / 2, coloridobutton.y + 35 - 1, 428, 120);
    } else if (itemSelected === "multiplayerToggle" && showItemSelectedGui) {
      ellipse(multiplayerToggle.x + 180 - 5.5 - newWidthAdded / 2, multiplayerToggle.y + 35 - 1, 428, 120);
    } else if (itemSelected === "heart1button" && showItemSelectedGui) {
      ellipse(heart1button.x + 35 - newWidthAdded / 2, heart1button.y + 35 - 1, 100, 80);
    } else if (itemSelected === "heart2button" && showItemSelectedGui) {
      ellipse(heart2button.x + 35 - newWidthAdded / 2, heart2button.y + 35 - 1, 100, 80);
    } else if (itemSelected === "heart3button" && showItemSelectedGui) {
      ellipse(heart3button.x + 35 - newWidthAdded / 2, heart3button.y + 35 - 1, 100, 80);
    }
    pop();
  }

  /*if (TrexColorido == true && Isday == true) {
    background('cyan');
  } else if (TrexColorido == false && Isday == true) {
    background('white');
  } else if (TrexColorido !== false && TrexColorido !== true && Isday == true) {
    background('white');
  }*/

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
      //each 1 of textSize = - 10 in reloadbuttonX
      if (mobileSize === "lessThanIPhoneXRSize" && isMobile) {
        reloadbuttonX = width / 2 + 78;
      } else if (!isMobile || mobileSize === "moreThanIPhoneXRSize" && isMobile) {
        reloadbuttonX = width / 2 + 113;
      }
      //reloadbuttonX = width / 2 + 113;
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
    /*push();
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
    stroke('darkred');*/
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
    //pop();
  } else {
    if (reloadButton.x !== width - width - width || reloadButton.y !== height - 25) {
      reloadButton.position(width - width - width, height - 25);
    }
  }
  if (game == "notselected") {
    if (isMobile == false && isiPhoneXR == false) {
      textSize(30);
    } else if (isMobile == true || isiPhoneXR == true) {
      //textSize(22.5);
      if (mobileSize === "lessThanIPhoneXRSize") {
        textSize(18.5);
      } else {
        textSize(22.5);
      }
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
    handleHearts(false);

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
    } else if (game === "Voo Infinito") {
      if (initialHeight === height) {
        restart.y = height / 2 + 40;
        gameover.y = height / 2;
      } else {
        restart.y = height / 2 + 40 - newHeightAdded / 2;
        gameover.y = height / 2 - newHeightAdded / 2;
      }
    }

    if (initialWidth === width) {
      if (game === "Corrida Infinita") {
        highscoreS.x = 50;//100 - newWidthAdded / 2;
      } else if (game === "Voo Infinito") {
        highscoreS.x = width / 2 - 17;
      }

    } else {
      if (game === "Corrida Infinita") {
        highscoreS.x = 50 - newWidthAdded / 2;//100 - newWidthAdded / 2;
      } else if (game === "Voo Infinito") {
        highscoreS.x = width / 2 - newWidthAdded / 2 - 17;
      }

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

    //textAlign("center");
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

    push();
    textWrap(WORD);
    if (isMobile == false && isiPhoneXR == false) {
      textSize(32);
    } else if (isMobile == true && mostOfTheScreen === "width"
      | isiPhoneXR == true && mostOfTheScreen === "width") {
      textSize(21);
    } else if (isMobile === true && mostOfTheScreen === "height") {
      textSize(15.5);
    }
    var textY;
    if (!isMobile || isMobile && mostOfTheScreen === "width") {
      //textY = height / 2 - 125;
      if (game === "notselected") {
        textY = infiniteracebutton.y - 25
      } else {
        textY = normalbutton.y - 25
      }
    } else if (isMobile && mostOfTheScreen === "height") {
      textY = 30;
    }/* else if (isMobile && mostOfTheScreen === "width") {
      if (game === "notselected") {
        textY = infiniteracebutton.y - 25
      } else {
        textY = normalbutton.y - 25
      }
    }*/
    //if (mostOfTheScreen == "width" && isMobile == true || isMobile == false) {
    if (game !== "notselected") {
      //if (initialWidth == width) {
      text("Escolha Um Modo De Jogo.", 0 - newWidthAdded / 2, textY, width);
      //"Selecione Um Modo De Jogo.", x: width / 2, y:height / 2 - 95
      /*} else {
        text("Escolha Um Modo De Jogo.", 0 - newWidthAdded / 2, textY, width);
        //"Selecione Um Modo De Jogo.", x: width / 2, y:height / 2 - 95
      }*/
    } else {
      //if (initialWidth == width) {
      text("Escolha Um Jogo.", 0 - newWidthAdded / 2, textY, width);
      //"Selecione Um Jogo.", x: width / 2, y:height / 2 - 95
      /*} else {
        text("Escolha Um Jogo.", 0 - newWidthAdded / 2, height / 2 - 125, width);
        //"Selecione Um Jogo.", x: width / 2, y:height / 2 - 95
      }*/
    }
    /*} else if (mostOfTheScreen == "height" && isMobile == true) {
      if (game !== "notselected") {
        push();
        fill('cyan');
        stroke('green');
        textAlign('center');
        textSize(15.5);
        text("Escolha Um Modo De Jogo.", 0, 30, width);
        //"Selecione Um Modo De Jogo.", y:50
        pop();
      } else {
        text("Escolha Um Jogo.", 0, 30, width);
        //"Selecione Um Jogo.", y:50
      }
    }*/
    pop();

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

  if (gamestate !== SELECT) {
    if (initialHeight === height) {
      if (game === "Corrida Infinita") {
        highscoreS.y = 33;
      } else if (game === "Voo Infinito") {
        highscoreS.y = 33 + 40;
      }
    } else {
      if (game === "Corrida Infinita") {
        highscoreS.y = 33 - newHeightAdded / 2;;
      } else if (game === "Voo Infinito") {
        highscoreS.y = 33 + 40 - newHeightAdded / 2;
      }
    }
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
      if (lastButtonType === "axes" && axesValue[3] === 1 && trex.y >= invisibleground.y - 40
        || buttonsValue[0/*axesDown*/] === true && lastButtonType === "button"
        && trex.y >= invisibleground.y - 40
        || buttonsValue[1/*redButton*/] === true && lastButtonType === "button"
        && trex.y >= invisibleground.y - 40) {
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

        //console.log("Pressed!");
      } else if (/*lastButtonType === "axes" &&*/ axesValue[3] !== 1 && trex.y >= invisibleground.y - 40
        /*||*/ && buttonsValue[0/*axesDown*/] === false// && lastButtonType === "button"
        //&& trex.y >= invisibleground.y - 40
        /*||*/ && buttonsValue[1/*redButton*/] === false) {// && lastButtonType === "button"
        //&& trex.y >= invisibleground.y - 40) {
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

        //console.log("Released!");
      }

      var crouchButtonX;
      if (showHearts === false
        || showHearts === true && showTheOnlyOneHeart === true && heartsNumber === 1) {
        crouchButtonX = width / 2 - 35;
      } else if (showHearts === true && heartsNumber > 2 && mostOfTheScreen === "height"
        && hearts !== []) {
        if (hearts.length === 3) {
          crouchButtonX = width / 2 - 35 + 35;
        } else if (hearts.length > 3) {
          crouchButtonX = hearts[hearts.length - 1].x + 35;
        }
      }
      if (crouchbutton.x !== crouchButtonX && trexIsJumping == false && !isMobile && mostOfTheScreen === "width"
        || crouchbutton.y !== 5 && trexIsJumping == false && !isMobile && mostOfTheScreen === "width"
        || crouchbutton.x !== crouchButtonX && trexIsJumping == false && isMobile && mostOfTheScreen === "width"
        || crouchbutton.y !== 5 && trexIsJumping == false && isMobile && mostOfTheScreen === "width") {
        if (isMobile || !isMobile && crouchbuttonOnPC == true) {
          crouchbuttonHitbox.x = crouchButtonX + 34;
          crouchbuttonHitbox.y = 5 + 35;
          crouchbutton.position(crouchButtonX, 5);
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
      } else if (crouchbutton.x !== invisibleground.y + 50 && trexIsJumping == false
        && isMobile == true && mostOfTheScreen == "height" //isIPhoneXR
        || crouchbutton.x !== crouchButtonX && trexIsJumping == false && isMobile == true
        && mostOfTheScreen == "height" //isIPhoneXR
        || crouchbutton.x !== crouchButtonX && !isMobile && crouchbuttonOnPC == true
        && mostOfTheScreen == "height"
        || crouchbutton.y !== invisibleground.y + 0 /* invisibleground.y + 50 */
        && !isMobile && crouchbuttonOnPC == true
        && mostOfTheScreen == "height") {
        crouchbuttonHitbox.x = crouchButtonX + 34;
        crouchbuttonHitbox.y = invisibleground.y + 50 + 35;
        crouchbutton.position(crouchButtonX, invisibleground.y + 0);
        if (crouchbuttonHitbox.x !== crouchbutton.x + 34 || crouchbuttonHitbox.y !== crouchbutton.y + 35) {
          crouchbuttonHitbox.x = crouchbutton.x + 34;
          crouchbuttonHitbox.y = crouchbutton.y + 35;
        }



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
      }

      if (trexIsJumping == true && crouchbuttonOnPC == true && !isMobile
        && MobileCrouchMode == "ifNotJumpingAndPressed"
        || isMobile && trexIsJumping == true
        && MobileCrouchMode == "ifNotJumpingAndPressed") {//crouchbutton.x !== width / 2-35 && trexIsJumping == true
        //||crouchbutton.y !== -350 && trexIsJumping == true){
        crouchbutton.position(crouchButtonX, -350);
        if (crouchbuttonbackgroundimage.y !== invisibleground.y + 50
          && isMobile == true && mostOfTheScreen == "height" //isIPhoneXR
          || crouchbuttonbackgroundimage.x !== crouchButtonX && isMobile == true
          && mostOfTheScreen == "height"
          || crouchbuttonbackgroundimage.x !== crouchButtonX && !isMobile && crouchbuttonOnPC == true
          && mostOfTheScreen == "height"
          || crouchbuttonbackgroundimage.y !== invisibleground.y + 50 && !isMobile && crouchbuttonOnPC == true
          && mostOfTheScreen == "height") {
          crouchbuttonbackgroundimage.position(crouchButtonX, invisibleground.y + 50);
        }
        if (crouchbuttonbackgroundimage.x !== crouchButtonX && !isMobile && mostOfTheScreen == "width"
          && crouchbuttonOnPC == true
          || crouchbuttonbackgroundimage.y !== 5 && !isMobile && mostOfTheScreen == "width"
          && crouchbuttonOnPC == true
          || crouchbuttonbackgroundimage.x !== crouchButtonX && isMobile
          && mostOfTheScreen == "width"
          || crouchbuttonbackgroundimage.y !== 5 && isMobile
          && mostOfTheScreen == "width") {
          crouchbuttonbackgroundimage.position(crouchButtonX, 5);
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
        || trexIsJumping == false && crouchbuttonbackgroundimage.x !== crouchButtonX) {
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
          crouchbuttonbackgroundimage.position(crouchButtonX, -350);
        }
      } else if (!isMobile && crouchbuttonOnPC == false
        || !isMobile && crouchbuttonOnPC == false) {
        crouchbutton.position(crouchButtonX, -350);
        crouchbuttonbackgroundimage.position(crouchButtonX, -350);
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
          keyDown("UP_ARROW") && trex.y - newHeightAdded >= invisibleground.y - 40 - newHeightAdded / 2) {//||
          /*150 - newHeightAdded / 2*/
          //touches.length > 0 && trex.y - newHeightAdded >= invisibleground.y - 40 - newHeightAdded / 2
          /*150 - newHeightAdded / 2*/
          //&& trexIsCrouching == false
          //&& !mouseIsOver(ShowBestHighscoresButtonHitbox)
          //&& !mouseIsOver(crouchbuttonHitbox)) {
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
      if (!isMobile) {
        //console.log("trexIsJumping: " + trexIsJumping);
      }
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
      if (cactuG.isTouching(trex) && trexIsInvencibleCactus === false && invencible === false
        || birdG.isTouching(trex) && trexIsInvencibleBirds === false && invencible === false) {
        invencible = true;


        //trex.velocityY = -10;
        //jumpsound.play();

        heartsLeft = heartsLeft - 1;
        console.log("heartsLeft: " + heartsLeft);

        setTimeout(() => {
          if (invencible === true) {
            invencible = false;
          }
        }, invencibleDuration);

        if (heartsLeft <= 0) {
          gamestate = END;
          failsound.play();
        }
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
    if (birdG.length > 0) {
      for (var enemyBirdOfBirdG of birdG) {
        if (enemyBirdOfBirdG.x <= -50
          && initialWidth === width
          || initialWidth !== width
          && enemyBirdOfBirdG.x <= -50 - newWidthAdded / 2) {
          enemyBirdOfBirdG.destroy();
          if (!isMobile) {
            console.log("enemyBirdOfBirdG.x <= -50");
          }
        }
      }
    }

    if (cloudG.length > 0) {
      for (var cloudOfCloudG of cloudG) {
        if (cloudOfCloudG.x <= -50
          && initialWidth === width
          || initialWidth !== width
          && cloudOfCloudG.x <= -50 - newWidthAdded / 2) {
          cloudOfCloudG.destroy();
          if (!isMobile) {
            //console.log("cloudOfCloudG.x <= -50");
          }
        }
      }
    }

    createclouds();
    createbird();
    if (dinosaurcolor == "notselected" && game == "Voo Infinito") {
      setBirdColor();
    }
    if (keyDown("space") ||
      keyDown('W') ||
      keyDown("UP_ARROW") ||
      touches.length > 0) {
      touches = [];
      bird.velocityY = -10;
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
    if (!isMobile) {
      console.log("Falling: " + birdIsFalling, "Flying: " + birdIsFlying);
    }
    //console.log("Flying: "+birdIsFlying);
    if (bird.isTouching(birdG) && birdIsInvencibleBirds === false && invencible === false
      || bird.y < -10) {
      if (bird.y < -10 && heartsLeft >= 2) {
        bird.y = 160;
      }
      invencible = true;
      console.log("invencible: " + invencible);

      heartsLeft = heartsLeft - 1;
      console.log("heartsLeft: " + heartsLeft);

      setTimeout(() => {
        if (invencible === true) {
          invencible = false;
        }
      }, invencibleDuration);

      //if(birdcolor !== "Cinza"){//!== "Cinza"
      //bird.y = bird.y + 11;
      //}//else{
      //bird.y = bird.y + 7.5;
      //}

      if (heartsLeft <= 0) {
        failsound.play();
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
    }
    else if (bird.collide(invisibleground) && birdIsInvencibleGround === false && invencible === false) {
      invencible = true;
      bird.y = 160;
      console.log("invencible: " + invencible);

      heartsLeft = heartsLeft - 1;
      console.log("heartsLeft: " + heartsLeft);

      setTimeout(() => {
        if (invencible === true) {
          invencible = false;
        }
      }, invencibleDuration);

      if (heartsLeft <= 0) {
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
    }
  } else if (game == "Voo Infinito" && gamestate == END) {
    if (hitGround == true) {
      bird.rotation = 0;
      //hitGround = false;
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

  push();
  textSize(22);
  fill("black");
  stroke("white");
  textFont("sans-serif");
  textAlign("center");

  /*if (cactuG.length % 10 === 0
    && cactuG.length !== 0) {
    var numToMultiply = cactuG.length / 10;
    //console.log(numToMultiply);
    for (var add = 1; add <= numToMultiply; add = add + 1) {
      addStringCactusHitboxesNumber = addStringCactusHitboxesNumber + " ";
      addStringCloudsNumber = addStringCloudsNumber + " ";
      addStringBirdsNumber = addStringBirdsNumber + " ";
    }
  }*/

  /*text("numberOfCactus              : " + cactuG.length, width / 2, height / 2 - 125);//, height / 2 - 120

  text("numberOfCactusHitboxes: " + cactuhitboxG.length, width / 2, height / 2 - 105);//, height / 2 - 100

  text("numberOfBirds                 : " + birdG.length, width / 2, height / 2 - 145);//, height / 2 - 140

  text("numberOfClouds              : " + cloudG.length, width / 2, height / 2 - 165);//, height / 2 - 160
  */
  pop();

  if (gamestate !== SELECT) {
    if (initialHeight === height) {
      if (game === "Corrida Infinita") {
        highscoreS.y = 33;
      } else if (game === "Voo Infinito") {
        highscoreS.y = 33 + 40;
      }

      push();
      textAlign("LEFT, BASELINE");
      if (game === "Corrida Infinita") {
        text(highscore, highscoreS.x + 25, 42);
      } else if (game === "Voo Infinito") {
        text(highscore, highscoreS.x + 25, 42 + 40);
      }
      pop();

      //text("PONTUAÇÃO: "+score)
      if (game === "Corrida Infinita") {
        push();
        textAlign("center");
        text("PONTOS: " + score, highscoreS.x + 45, 20);//500
        pop();
      } else if (game === "Voo Infinito") {
        push();
        textAlign("center");
        textSize(45);
        text(score, highscoreS.x + 17, 50);
        pop();
      }
    } else {
      if (game === "Corrida Infinita") {
        highscoreS.y = 33 - newHeightAdded / 2;;
      } else if (game === "Voo Infinito") {
        highscoreS.y = 33 + 40 - newHeightAdded / 2;
      }

      push();
      textAlign("LEFT, BASELINE");
      if (game === "Corrida Infinita") {
        text(highscore, highscoreS.x + 25, 42 - newHeightAdded / 2);
      } else if (game === "Voo Infinito") {
        text(highscore, highscoreS.x + 25, 42 + 40 - newHeightAdded / 2);
      }
      pop();

      if (game === "Corrida Infinita") {
        push();
        textAlign("center");
        text("PONTOS: " + score, highscoreS.x + 45, 20 - newHeightAdded / 2);//500
        pop();
      } else if (game === "Voo Infinito") {
        push();
        textAlign("center");
        textSize(45);
        text(score, highscoreS.x + 17, 50 - newHeightAdded / 2);
        pop();
      }

      /*push();
      textAlign("center");
      //text("PONTUAÇÃO: "+score)
      text("PONTOS: " + score, highscoreS.x + 45, 20 - newHeightAdded / 2);
      pop();*/
    }
  }

  if (invencible === true && heartsNumber > 1 && heartsLeft > 0 && gamestate === PLAY) {
    var x, y, w, h;
    if (game === "Corrida Infinita") {
      x = trex.x - trex.x * 0.5;
      y = trex.y - trex.x * 0.5;
      w = 50;
      h = 50;
    } else if (game === "Voo Infinito") {
      x = bird.x - bird.x * 1;
      y = bird.y - bird.x * 1;
      w = 100;
      h = 100;
    }
    setTimeout(() => {
      if (invencible === true && heartsNumber > 1 && heartsLeft > 0 && gamestate === PLAY) {
        push();
        noStroke();
        fill("white");
        rect(x, y, w, h);
        pop();
        //setTimeout(() => {
        // if (trex.opacity !== 1) {
        //    trex.opacity = 1;
        //  }
        //}, 0750);
      }
    }, 0150);

    setTimeout(() => {
      if (invencible === true && heartsNumber > 1 && heartsLeft > 1 && gamestate === PLAY) {
        push();
        noStroke();
        fill("white");
        rect(x, y, w, h);
        pop();
        //setTimeout(() => {
        //  if (trex.opacity !== 0.65) {
        //    trex.opacity = 0.65;
        //  }
        //}, 0250);
      }
    }, 0800);
  }

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
    //TEST THIS: 
    /*if (initialWidth == width) {
      //mostRecentVersionTextX = width / 2 - 25;
      if (mobileSize === "lessThanIPhoneXRSize" && isMobile) {
        mostRecentVersionTextX = width / 2 - 25 - 10;
      } else if (!isMobile || mobileSize === "moreThanIPhoneXRSize" && isMobile) {
        mostRecentVersionTextX = width / 2 - 25;
      }
    } else if (initialWidth !== width) {*/
    if (mobileSize === "lessThanIPhoneXRSize" && isMobile) {
      mostRecentVersionTextX = width / 2 - 25 - 10 - newWidthAdded / 2;
    } else if (!isMobile || mobileSize === "moreThanIPhoneXRSize" && isMobile) {
      mostRecentVersionTextX = width / 2 - 25 - newWidthAdded / 2;
    }
    //mostRecentVersionTextX = width / 2 - 25 - newWidthAdded / 2;
    //}
    if (isMobile == false && isiPhoneXR == false) {
      textSize(35);
    } else if (isMobile == true && mostOfTheScreen == "width"
      || isiPhoneXR == true && mostOfTheScreen == "width") {
      textSize(25);
    } else if (isMobile == true && mostOfTheScreen == "height") {
      //textSize(18);
      if (mobileSize === "lessThanIPhoneXRSize") {
        textSize(15);
      } else {
        textSize(18);
      }
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
    if (player !== undefined) {
      for (var i = 0; i < players.length; i = i + 1) {
        if (players[i] !== undefined && player !== undefined) {
          players[i].depth = trex.depth;
          players[i].depth = players[i].depth + 1;
        }
      }
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
    bird.depth = gameover.depth;
    gameover.depth = gameover.depth + 1;
    //if(game === "Voo Infinito"){
    if (birdG.length !== 0) {
      for (var b = 0; b < birdG.length; b = b + 1) {
        birdG[b].depth = cloud.depth + 1;
      }
    } else {
      if (hearts !== [] && showHearts === true ||
        hearts !== [] && showHearts === true && heartsNumber === 1 && showTheOnlyOneHeart === true) {
        for (var h = 0; h < hearts.length; h = h + 1) {
          hearts[h].depth = cloud.depth + 1;
        }
      }
      highscoreS.depth = cloud.depth + 1;
    }
    gameover.depth = cloud.depth + 1;
    restart.depth = cloud.depth + 1;
    //}
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
      hitbox.lifetime = 315;
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
        maxb = 14;
      } else if (isMobile) {
        maxb = 20;
      }
      for (var b = 1; b <= maxb; b = b + 1) {
        var enemybird = createSprite(width + 10, 80 * b, 10, 10);//+10, 10, 10);
        enemybird.lifetime = 315;//315

        if (hearts !== [] && showHearts === true ||
          hearts !== [] && showHearts === true && heartsNumber === 1 && showTheOnlyOneHeart === true) {
          for (var h = 0; h < hearts.length; h = h + 1) {
            hearts[h].depth = enemybird.depth + 1;
          }
        }
        highscoreS.depth = enemybird.depth + 1;

        if (b == maxb && isMobile) {
          enemybird.y = 20;
        } else if (b == maxb && !isMobile) {
          enemybird.y = 0;
        }
        enemybird.setCollider("rectangle", 0, 0, 50, 50);
        if (enemybird.y > height) {
          enemybird.destroy();

          if (maxOfBirds === undefined) {
            maxOfBirds = birdG.length + 1;
          }
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

        if (b === maxb) {
          if (maxOfBirds === undefined) {
            maxOfBirds = birdG.length + 1;
          }

          //print("maxOfBirds: " + maxOfBirds);
          //print("birdG.length: " + birdG.length);

          var roll = Math.round(birdG.length / maxOfBirds);
          //print("roll: " + roll);

          var rollNum = roll !== 1 ? (maxOfBirds - (2 * roll)) * roll : 1;
          //print("rollNum: " + rollNum);

          var maxOfBirdsMinus2 = maxOfBirds - 2;

          //var minRandom = 2 + (maxOfBirdsMinus2 * (roll - 1)),
          //  maxRandom = birdG.length - 3;
          //console.log("minRandom: " + minRandom, " maxRandom: " + maxRandom);

          var randomNum = roll !== 1 ? Math.round(random(2 + (maxOfBirdsMinus2 * (roll - 1)),
            birdG.length - 3)) :
            Math.round(random(2, birdG.length - 3));
          //print("randomNum * rollNum: " + randomNum * rollNum);
          //console.log("randomNum: " + randomNum);
          birdG[randomNum].destroy();
          birdG[randomNum - 1].destroy();
          //print("birdG.length: " + birdG.length);
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
  hitGround = false;
  crouchAfterJumping = false;

  invencible = false;

  gamestate = PLAY;

  invencible = false;
  handleHearts(true);

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

function turnColored() {
  if (controlsOrientations.length > 0 || controlsOrientationsTexts.length > 0) {
    if (controlsOrientations.length > 0) {
      for (var o = controlsOrientations.length - 1; o >= 0; o = o - 1) {
        controlsOrientations[o].destroy();
        controlsOrientations.pop();
        var onum = o + 1;
        console.log("controlOrientation " + onum + "(" + o + ")" + " Destroyed!");
      }
    }
    if (controlsOrientationsTexts.length > 0) {
      for (var o = controlsOrientationsTexts.length - 1; o >= 0; o = o - 1) {
        controlsOrientationsTexts[o].remove();
        controlsOrientationsTexts.pop();
        var onum = o + 1;
        console.log("controlOrientationText " + onum + "(" + o + ")" + " Destroyed!");
      }
    }
  }

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

  heart1button.position(-1250, heart1button.y);
  heart2button.position(-1250, heart2button.y);
  heart3button.position(-1250, heart3button.y);

  calibrateButton.position(-1250, -500);

  /*if (lobbyIndex === null) {
    if (lobbyCodeInput.value() !== "") {
      var lobbyIndexRef = "/Trex/customLobbies/" + lobbyCodeInput.value() + "/";
      var lobbyConfigRef = database.ref("/Trex/customLobbies/" + lobbyCodeInput.value() + "/config");
      console.log("lobbyIndexRef: " + lobbyIndexRef);
 
      lobbyConfigRef.on("value", data => {
        var lobbyConfig = data.val();
        console.log("lobbyConfig: " + lobbyConfig);
        if (lobbyConfig !== undefined) {
          customLobbyConfig = lobbyConfig;
          MaxOfPlayers = customLobbyConfig.MaxPlayers;
          console.log("customLobbyConfig.MaxPlayers: " + customLobbyConfig.MaxPlayers);
          lobbyIndex = lobbyIndexRef;
          console.log("lobbyIndex: " + lobbyIndex);
        } else {
          console.log("lobby doesn't exist.");
          MaxOfPlayers = 3;
          lobbyIndex = "/Trex/publicLobby1/";
        }
      });
    } else {
      console.log("publicLobby1");
      MaxOfPlayers = 3;
      lobbyIndex = "/Trex/publicLobby1/";
    }
  }*/

  if (player === undefined && multiplayerToggleValue === true) {
    //setTimeout(() => {
    Multiplayer();
    //}, 0500);
  }
  if (isMobile || !isMobile && backButtonOnPC === true) {
    backButton.position(width - 55, height - 55);
  }

  handleHearts(true);
}

function turnNormal() {
  if (controlsOrientations.length > 0 || controlsOrientationsTexts.length > 0) {
    if (controlsOrientations.length > 0) {
      for (var o = controlsOrientations.length - 1; o >= 0; o = o - 1) {
        controlsOrientations[o].destroy();
        controlsOrientations.pop();
        var onum = o + 1;
        console.log("controlOrientation " + onum + "(" + o + ")" + " Destroyed!");
      }
    }
    if (controlsOrientationsTexts.length > 0) {
      for (var o = controlsOrientationsTexts.length - 1; o >= 0; o = o - 1) {
        controlsOrientationsTexts[o].remove();
        controlsOrientationsTexts.pop();
        var onum = o + 1;
        console.log("controlOrientationText " + onum + "(" + o + ")" + " Destroyed!");
      }
    }
  }

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

  heart1button.position(-1250, heart1button.y);
  heart2button.position(-1250, heart2button.y);
  heart3button.position(-1250, heart3button.y);

  calibrateButton.position(-1250, -500);

  /*if (lobbyIndex === null) {
    if (lobbyCodeInput.value() !== "") {
      var lobbyIndexRef = "/Trex/customLobbies/" + lobbyCodeInput.value() + "/";
      var lobbyConfigRef = database.ref("/Trex/customLobbies/" + lobbyCodeInput.value() + "/config");
      console.log("lobbyIndexRef: " + lobbyIndexRef);
 
      lobbyConfigRef.on("value", data => {
        var lobbyConfig = data.val();
        console.log("lobbyConfig: " + lobbyConfig);
        if (lobbyConfig !== undefined) {
          customLobbyConfig = lobbyConfig;
          MaxOfPlayers = customLobbyConfig.MaxPlayers;
          console.log("customLobbyConfig.MaxPlayers: " + customLobbyConfig.MaxPlayers);
          lobbyIndex = lobbyIndexRef;
          console.log("lobbyIndex: " + lobbyIndex);
        } else {
          console.log("lobby doesn't exist.");
          MaxOfPlayers = 3;
          lobbyIndex = "/Trex/publicLobby1/";
        }
      });
    } else {
      console.log("publicLobby1");
      MaxOfPlayers = 3;
      lobbyIndex = "/Trex/publicLobby1/";
    }
  }*/

  if (player === undefined && multiplayerToggleValue === true) {
    //setTimeout(() => {
    Multiplayer();
    //}, 0500);
  }
  if (isMobile || !isMobile && backButtonOnPC === true) {
    backButton.position(width - 55, height - 55);
  }

  handleHearts(true);
}

function turnCorridaInfinita() {
  game = "Corrida Infinita";
  heartsSprite.x = invisibleground.x - 80;
  heartsSprite.y = invisibleGroundPosY + 35;
  handleHearts(true);
  trex.y = invisibleGroundPosY - 30;//160
  ground.y = invisibleGroundPosY - 10;//180
  invisibleground.y = invisibleGroundPosY;//190
  restart.y = invisibleGroundPosY - 50;//140
  gameover.y = invisibleGroundPosY - 90;//100
  gameover.x = width / 2;
  restart.x = width / 2;
  itemSelected = pastItemsSelected[0];//"normalbutton"

  if (initialHeight === height) {
    highscoreS.y = 33;
  } else {
    highscoreS.y = 33 - newHeightAdded / 2;;
  }

  if (showItemSelectedGui) {
    handleConsoleOrientationControls();
  }
}

function turnVooInfinito() {
  //if(!isMobile || isMobile && PcFeaturesOnMobile == true){
  game = "Voo Infinito";
  heartsSprite.x = invisibleground.x + 20;
  heartsSprite.y = invisibleGroundPosY + 28.5;//35 //invisibleground.y + 32.5
  handleHearts(true);
  bird.y = 160;
  bird.velocityY = 0;
  ground.y = height - 5;
  invisibleground.y = height - 5 + 10;
  restart.y = height / 2 + 40;
  gameover.y = height / 2;
  itemSelected = pastItemsSelected[0];//"normalbutton"

  if (initialHeight === height) {
    highscoreS.y = 33 + 40;
  } else {
    highscoreS.y = 33 + 40 - newHeightAdded / 2;
  }

  if (showItemSelectedGui) {
    handleConsoleOrientationControls();
  }
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
  if (navigator.onLine == true && database !== null) {
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

    var MaxOfPlayersRef = database.ref("/Trex/MaxOfPlayers/");
    MaxOfPlayersRef.on("value", function (data) {
      //console.log("MaxOfPlayers before: " + MaxOfPlayers);
      MaxOfPlayers = data.val();
      //console.log("MaxOfPlayers after: " + MaxOfPlayers);

      if (player !== undefined
        && players.length >= MaxOfPlayers) {
        for (var i = players.length - 1; i >= MaxOfPlayers - 1; i = i - 1) {
          if (players[i] !== undefined) {
            players.pop();
            console.log("player" + i + " Removed!");
          }
        }
      } else if (player !== undefined
        && players.length !== MaxOfPlayers - 1) {
        for (var i = players.length; i <= MaxOfPlayers - 2; i = i + 1) {
          if (players[i] === undefined) {
            var newPlayer = createSprite(50, 160, 20, 50);

            newPlayer.addAnimation("birdright", birdanmright);
            newPlayer.addAnimation("greenbirdright", greenbirdanmright);
            newPlayer.addAnimation("brownbirdright", brownbirdanmright);
            newPlayer.addAnimation("birdimgright", birdimgright);
            newPlayer.addAnimation("greenbirdimgright", greenbirdimgright);
            newPlayer.addAnimation("brownbirdimgright", brownbirdimgright);
            newPlayer.addAnimation("running", trex_running);
            newPlayer.addAnimation("runningnb", trex_runningnb);
            newPlayer.addAnimation("collidednb", trex_collidednb);
            newPlayer.addAnimation("collided", trex_collided);
            newPlayer.addAnimation("crouching", trex_crouching);
            newPlayer.addAnimation("crouchingnb", trex_crouchingnb);
            newPlayer.addAnimation("running_green", trex_runninggreen);
            newPlayer.addAnimation("collided_green", trex_collidedgreen);
            newPlayer.addAnimation("crouching_green", trex_crouchinggreen);
            newPlayer.addAnimation("running_brown", trex_runningbrown);
            newPlayer.addAnimation("collided_brown", trex_collidedbrown);
            newPlayer.addAnimation("crouching_brown", trex_crouchingbrown);
            newPlayer.setCollider("rectangle", 0, 0, 50, 50);
            if (game === "Voo Infinito") {
              newPlayer.scale = 0.51 / 2 / 2 + 0.8;
            } else if (game === "Corrida Infinita") {
              newPlayer.scale = 0.5;
            }

            newPlayer.visible = false;

            console.log("player" + i + " Created!");

            players.push(newPlayer);

            playersInfo.push({
              color: "Cinza",
              isCrouching: false,
              isGameover: false,
              gamePlaying: undefined,
              hitGround: false,
            });

            var playerText = createElement("h2");
            playerText.style("font-size", '15px');
            playerText.style("color", 'darkgray');//gold
            playerText.position(-1000, -350);

            playersText.push(playerText);
          }
        }
      }
    });

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

function windowResized() {
  //if(windowResize == false){
  if (browserName !== "Opera") {
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
          invisibleground.x = width / 2 - newWidthAdded / 2;//200 - newWidthAdded / 2;
          invisibleground.width = width;
          ground.x = ground.x - newWidthAdded / 2;
          bird.x = 50 - newWidthAdded / 2;

          if (gamestate === SELECT && showItemSelectedGui) {
            handleConsoleOrientationControls();
          }

          //handleHearts(true);
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
  }
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
    ///if (lobbyIndex !== null) {

    for (var i = 2; i <= MaxOfPlayers; i = i + 1) {
      var newPlayer = createSprite(50, 160, 20, 50);

      newPlayer.addAnimation("birdright", birdanmright);
      newPlayer.addAnimation("greenbirdright", greenbirdanmright);
      newPlayer.addAnimation("brownbirdright", brownbirdanmright);
      newPlayer.addAnimation("birdimgright", birdimgright);
      newPlayer.addAnimation("greenbirdimgright", greenbirdimgright);
      newPlayer.addAnimation("brownbirdimgright", brownbirdimgright);
      newPlayer.addAnimation("running", trex_running);
      newPlayer.addAnimation("runningnb", trex_runningnb);
      newPlayer.addAnimation("collidednb", trex_collidednb);
      newPlayer.addAnimation("collided", trex_collided);
      newPlayer.addAnimation("crouching", trex_crouching);
      newPlayer.addAnimation("crouchingnb", trex_crouchingnb);
      newPlayer.addAnimation("running_green", trex_runninggreen);
      newPlayer.addAnimation("collided_green", trex_collidedgreen);
      newPlayer.addAnimation("crouching_green", trex_crouchinggreen);
      newPlayer.addAnimation("running_brown", trex_runningbrown);
      newPlayer.addAnimation("collided_brown", trex_collidedbrown);
      newPlayer.addAnimation("crouching_brown", trex_crouchingbrown);
      newPlayer.setCollider("rectangle", 0, 0, 50, 50);
      if (game === "Voo Infinito") {
        newPlayer.scale = 0.51 / 2 / 2 + 0.8;
      } else if (game === "Corrida Infinita") {
        newPlayer.scale = 0.5;
      }

      newPlayer.visible = false;

      console.log("player" + i + " Created!");

      players.push(newPlayer);

      playersInfo.push({
        color: "Cinza",
        isCrouching: false,
        isGameover: false,
        gamePlaying: undefined,
        hitGround: false,
      });

      var playerText = createElement("h2");
      playerText.style("font-size", '15px');
      playerText.style("color", 'darkgray');//gold
      playerText.position(-1000, -350);

      playersText.push(playerText);
    }

    player = new Player();

    /*player2 = createSprite(50, 160, 20, 50);
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
    }*/

    Player.getPlayersInfo();
    ///} else {
    ///  console.log("lobbyIndex === null");
    ///  setTimeout(() => {
    //Multiplayer();
    ///  }, 1000);
    ///}
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
    //background('#223');//"white"
    gamestate = -1;//SELECT
    itemSelected = pastItemsSelected[2];//"infiniteracebutton"
    handleHearts(false);

    maxOfBirds = undefined;

    if (!isMobile) {
      calibrateButton.position(width - 235 - 22 - newWidthAdded / 10000, 125);
    }

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
    trex.velocityY = 0;
    trex.y = invisibleGroundPosY - 30;//160
    trex.x = 50;
    multiplayerToggleValue = false;
    multiplayerToggle.style("background-color", "darkred");
    backButton.position(width - width - width - 1000, -500);
    if (showItemSelectedGui) {
      handleConsoleOrientationControls();
    }
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

function handleHearts(createHearts, newHeartsNumber) {
  if (newHeartsNumber !== undefined) {
    heartsNumber = newHeartsNumber;

    console.log("newHeartsNumber: " + newHeartsNumber);
    console.log("heartsNumber: " + heartsNumber);
  }

  //console.log("newHeartsNumber: " + newHeartsNumber);
  //console.log("heartsNumber: " + heartsNumber);

  if (showTheOnlyOneHeart === false && heartsNumber === 1 || showHearts === false) {
    if (createHearts === true) {
      heartsLeft = heartsNumber;
      console.log("heartsLeft: " + heartsLeft);
    }
  } else if (showTheOnlyOneHeart === true && showHearts === true
    || showTheOnlyOneHeart === false && heartsNumber > 1 && showHearts === true) {
    if (createHearts === true) {
      for (var h = hearts.length - 1; h >= 0; h = h - 1) {
        hearts[h].destroy();
        hearts.pop();
        var hnum = h + 1;
        console.log("heart " + hnum + "(" + h + ")" + " Destroyed!");
        heartsLeft = 0;
      }



      /*for (var h = 0; h < hearts.length; h = h + 1) {
        if (hearts[h] === undefined) {
          hearts.pop();
          console.log("undefined popped!");
        }
      }*/

      for (var h = 0; h < heartsNumber && h < 100; h = h + 1) {
        var heart = createSprite(heartsSprite.x, heartsSprite.y, 20, 20);
        heart.shapeColor = "red";
        heart.addImage("fullHeartImg", fullHeartImg);
        heart.addImage("emptyHeartImg", emptyHeartImg);
        heart.scale = 0.8;
        if (h === 0) {
          //heart.x = heartsSprite.x - heartsSprite.x / 3; + heartsSprite.x / 3 * h;
        } else if (h === 3) {
          //heart.x = heartsSprite.x + heartsSprite.x / 3;
        }

        if (initialWidth === width) {
          if (game === "Corrida Infinita") {
            heart.x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 1.5;
          } else if (game === "Voo Infinito") {
            heart.x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h / 1.2;
          }
        } else if (initialWidth !== width) {
          /*if (game === "Corrida Infinita") {
            heart.x = heartsSprite.x + 60 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 1.8;
          } else if (game === "Voo Infinito") {
            heart.x = heartsSprite.x + 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 190;
          }*/
          if (game === "Corrida Infinita") {
            heart.x = heartsSprite.x - 80 + newWidthAdded / 4.1 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 1.95
              ;
          } else if (game === "Voo Infinito") {
            heart.x = heartsSprite.x - 80 - newWidthAdded / 24.1 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 26.75
              ;
          }
        }

        //if (initialWidth !== width) {
        //  heart.x = heart.x + newWidthAdded / 10;
        //}

        /*if (game === "Corrida Infinita") {
          heart.x = heartsSprite.x - 80 + newWidthAdded / 75 - heartsSprite.x / 3 + heartsSprite.x / 3 *
            h * 1.5;
        } else if (game === "Voo Infinito") {
          heart.x = heartsSprite.x - 80 + newWidthAdded / 75 - heartsSprite.x / 3 + heartsSprite.x / 3 *
            h / 1.2;
        }
      }*/

        /*if (game === "Corrida Infinita") {
          heart.x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 1.5
            * 2;
        } else if (game === "Voo Infinito") {
          heart.x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h / 1.2
            * 2;
        }
      }*/

        /*if (initialWidth !== width) {
          if (game === "Corrida Infinita") {
            heart.x = heart.x + newWidthAdded / 6 + heartsSprite.x - 80 / 3 - heartsSprite.x / 3 +
              heartsSprite.x / 3 * h * 6.5;
          } else if (game === "Voo Infinito") {
            heart.x = heart.x + newWidthAdded / 6 + heartsSprite.x - 80 / 3 - heartsSprite.x / 3 +
              heartsSprite.x / 3 * h * 7.2;
          }
        }*/

        //if (initialWidth !== width) {
        // heart.x = heart.x - newWidthAdded / 2;
        //}

        if (heart.x > heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * 3
          && canSurpassHeartsSpriteArea === false && initialWidth === width) {
          //|| heart.x > heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * 3 + newWidthAdded
          //&& canSurpassHeartsSpriteArea === false && initialWidth !== width) {
          var value1 = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * 3;
          var value2 = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * 3 + newWidthAdded;
          heart.destroy();
          console.log("heart.x: " + heart.x);
          console.log("value1: " + value1);
          console.log("value2: " + value2);
          console.log("heart.x ultrapassou heartsSprite area!");
        } else {

          //console.log("heart.x: " + heart.x);

          //heartsLeft += h;
          //if (h === 0 && numberOfHearts === 1) {
          //  heartsLeft += 1;
          //}

          hearts.push(heart);

          heartsLeft = hearts.length;
          console.log("heartsLeft: " + heartsLeft);
        }
      }
    }

    if (heartsLeft < hearts.length && hearts !== [] && heartsLeft >= 0) {
      hearts[heartsLeft].changeImage("emptyHeartImg", emptyHeartImg);
    } else if (gamestate === END) {
      for (var h = 0; h < hearts.length; h = h + 1) {
        hearts[h].changeImage("emptyHeartImg", emptyHeartImg);
      }
    }

    for (var h = 0; h < hearts.length; h = h + 1) {
      if (gamestate !== SELECT) {
        hearts[h].visible = true;
      } else {
        hearts[h].visible = false
      }
    }

  }

  /*if (initialWidth !== width && hearts !== []) {
    for (var h = 0; h < hearts.length; h = h + 1) {
      if (game === "Corrida Infinita") {
        hearts[h].x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h * 0.68;// -
        //newWidthAdded / h * 7.5;
      } else if (game === "Voo Infinito") {
        hearts[h].x = heartsSprite.x - 80 / 3 - heartsSprite.x / 3 + heartsSprite.x / 3 * h / 0.95;// -
        //newWidthAdded * h / 5.2;
      }
    }
  }*/

  /*var fullHeartSprite = createSprite(heartsSprite.x - heartsSprite.x / 3, heartsSprite.y, 20, 20);
  fullHeartSprite.shapeColor = "red";
  fullHeartSprite.addImage("fullHeartImg", fullHeartImg);
  fullHeartSprite.scale = 0.8;
 
  var halfHeartSprite = createSprite(heartsSprite.x, heartsSprite.y, 20, 20);
  halfHeartSprite.shapeColor = "red";
  halfHeartSprite.addImage("halfHeartImg", halfHeartImg);
  halfHeartSprite.scale = 0.8;
 
  var emptyHeartSprite = createSprite(heartsSprite.x + heartsSprite.x / 3, heartsSprite.y, 20, 20);
  emptyHeartSprite.shapeColor = "red";
  emptyHeartSprite.addImage("emptyHeartImg", emptyHeartImg);
  emptyHeartSprite.scale = 0.8;*/
}

function handleHeart1Button() {
  if (heartsNumber !== 1) {
    heartsNumber = 1;
    heart2button.style("background-image", "url('./assets/hearts/emptyHeart.png')");
    heart3button.style("background-image", "url('./assets/hearts/emptyHeart.png')");
  }
}

function handleHeart2Button() {
  if (heartsNumber !== 2) {
    heartsNumber = 2;
    heart2button.style("background-image", "url('./assets/hearts/fullHeart.png')");
    heart3button.style("background-image", "url('./assets/hearts/emptyHeart.png')");
  }
}

function handleHeart3Button() {
  if (heartsNumber !== 3) {
    heartsNumber = 3;
    heart2button.style("background-image", "url('./assets/hearts/fullHeart.png')");
    heart3button.style("background-image", "url('./assets/hearts/fullHeart.png')");
  }
}

/*function Text(createText, hide, name, text, fontSize, textAlign, show, showX, showY, textWidth, textHeight, color,
  stroke, backgroundColor, fontFamily, borderRadius, lineBreak, contain, alignSelf, alignItems) {
  /*
  Text(true, false, "testText", "OI IIIIII II", 18, "center", true, width/2, height/2, 50, 50, "orange",
  "lime", "blue", trexfont, 5, "auto", "content", "center", "center");
  */
//if (name !== undefined) {
/*if (createText === true && name !== undefined) {
  var newText = createElement("h2");
 
  if (textWidth !== undefined && textWidth !== false
    && textHeight !== undefined && textHeight !== false) {
    newText.size(textWidth, textHeight);
  }
 
  if (textAlign !== undefined && textAlign !== false) {
    newText.style("text-align", textAlign);
  }
 
  if (fontSize !== undefined && fontSize !== false) {
    newText.style("font-size", fontSize + "px");
  }
 
  if (text !== undefined) {
    newText.html(text);
  } else {
    newText.html("No Text Given");
  }
 
  if (backgroundColor !== undefined && backgroundColor !== false) {
    newText.style("background-color", backgroundColor);
  }
 
  if (color !== undefined && color !== false) {
    newText.style("color", color);
  }
 
  if (stroke !== undefined && stroke !== false) {
    newText.style("stroke-width", "100%");
    newText.style("stroke", stroke);
    newText.style("-webkit-text-stroke-color", stroke);
    newText.style("-webkit-text-stroke", stroke);
  }
 
  if (fontFamily !== undefined && fontFamily !== false) {
    newText.style("font-family", fontFamily);
  }
 
  if (borderRadius !== undefined && borderRadius !== false) {
    newText.style("border-radius", borderRadius + "px");
  }
 
  if (lineBreak !== undefined && lineBreak !== false) {
    newText.style("line-break", lineBreak);
  }
 
  if (contain !== undefined && contain !== false) {
    newText.style("contain", contain);
  }
 
  if (alignSelf !== undefined && alignSelf !== false) {
    newText.style("align-self", alignSelf);
  }
 
  if (alignItems !== undefined && alignItems !== false) {
    newText.style("align-items", alignItems);
  }
 
  if (show === true && showX !== undefined && showY !== undefined
    && showX !== false && showY !== false) {
    newText.position(showX, showY);
  }
 
  textsNames.push(name);
 
  texts.push(newText);
} else {
  /*if (hide === true) {
    for (var t = 0; t < texts.length; t = t + 1) {
      //texts[t].position(-1000, -500);
      texts[t].remove();
    }
  }*/

/*if (hide === true && name !== undefined) {
  if (name !== "all") {
    for (var t = 0; t < texts.length; t = t + 1) {
      if (textsNames[t] === name) {
        texts[t].position(-1250, texts[t].y);
      }
    }
  } else {
    for (var t = 0; t < texts.length; t = t + 1) {
      texts[t].position(-1250, texts[t].y);
    }
  }
} else if (hide === "remove" && name !== undefined) {
  if (name !== "all") {
    for (var t = 0; t < texts.length; t = t + 1) {
      if (textsNames[t] === name) {
        texts[t].remove();
      }
    }
  } else {
    for (var t = 0; t < texts.length; t = t + 1) {
      texts[t].remove();
    }
  }
}
 
 
if (show === true && showX !== undefined
  && showY !== undefined && name !== undefined) {
  if (name !== "all") {
    for (var t = 0; t < texts.length; t = t + 1) {
      if (textsNames[t] === name) {
        texts[t].position(showX, showY);
      }
    }
  } else {
    for (var t = 0; t < texts.length; t = t + 1) {
      texts[t].position(showX, showY);
    }
  }
}
 
}
 
//}
}*/

function onJoystickPress(e) {
  if (calibrating === false && joystick.calibrated() === true) {
    console.log(e);

    var buttonGreenPressed = joystick.getButtonPressedByName("buttonGreen"); //index =0 
    var axesUpPressed = joystick.getButtonPressedByName("axesUp"); //index =12

    var redButtonPressed = joystick.getButtonPressedByName("buttonRed"); //index =1
    var axesDownPressed = joystick.getButtonPressedByName("axesDown"); //index =13

    console.log("buttonGreenPressed: " + buttonGreenPressed);
    console.log("axesUpPressed: " + axesUpPressed);

    console.log("redButtonPressed: " + redButtonPressed);
    console.log("axesDownPressed: " + axesDownPressed);

    //var axesUp = joystick.getAxesValueByIndex(0, 3);
    //console.log("axesUp: " + axesUp);

    /*if (e.index === 3 && e.type === "axes" && e.value === -1) {
      console.log("index: " + e.index, ", type: " + e.type, ", value: " + e.value);
      console.log("if worked!");
    }*/

    //horizontal = esquerda direita, vertical = cima baixo
    if (e.index === 0/* bolinha da esquerda, horizontal */ && e.type === "axes" && axesValue[0] !== e.value) {
      axesValue[0] = e.value;
    } else if (e.index === 1/* bolinha da esquerda, vertical */ && e.type === "axes" && axesValue[1] !== e.value) {
      axesValue[1] = e.value;
    } else if (e.index === 2/* bolinha da esquerda, horizontal */ && e.type === "axes" && axesValue[2] !== e.value) {
      axesValue[2] = e.value;
    } else if (e.index === 3/* bolinha da esquerda, vertical */ && e.type === "axes" && axesValue[3] !== e.value) {
      axesValue[3] = e.value;
    }

    if (lastButtonType !== e.type) {
      lastButtonType = e.type;
    }

    buttonsValue[0] = axesDownPressed;
    buttonsValue[1] = redButtonPressed;

    if (buttonGreenPressed === true && gamestate === PLAY && trexIsCrouching === false
      && trex.y >= invisibleground.y - 40 && game === "Corrida Infinita"
      || axesUpPressed === true && gamestate === PLAY && trexIsCrouching === false
      && trex.y >= invisibleground.y - 40 && game === "Corrida Infinita"
      || e.index === 3 && e.type === "axes" && e.value === -1 && trexIsCrouching === false
      && trex.y >= invisibleground.y - 40 && gamestate === PLAY && game === "Corrida Infinita") {
      if (trex.y >= invisibleground.y - 40 /* trex.y >= 150 */ && trexIsCrouching == false) {
        touches = [];
        trex.velocityY = -10;
        //jumpsound.stop();
        jumpsound.play();
        //trexIsJumping = true;
      }
      console.log("Pressed!");
    } else if (buttonGreenPressed === true && gamestate === PLAY && game === "Voo Infinito"
      || axesUpPressed === true && gamestate === PLAY && game === "Voo Infinito"
      || e.index === 3 && e.type === "axes" && e.value === -1 && gamestate === PLAY
      && game === "Voo Infinito") {
      touches = [];
      bird.velocityY = -10;
    }

    if (redButtonPressed === true && gamestate === PLAY && trex.y >= invisibleGroundPosY - 40
      && game === "Corrida Infinita"
      || axesDownPressed === true && gamestate === PLAY && trex.y >= invisibleGroundPosY - 40
      && game === "Corrida Infinita"
      || e.index === 3 && e.type === "axes" && e.value === 1 && trex.y >= invisibleground.y - 40
      && gamestate === PLAY && game === "Corrida Infinita") {
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

      console.log("Pressed!");
    }

    if (showItemSelectedGui) {
      if (joystick.getButtonPressedByName("buttonRed") && gamestate === SELECT
        || joystick.getButtonPressedByName("axesRight") && gamestate === SELECT
        || joystick.getButtonPressedByName("sholderRight") && gamestate === SELECT
        || e.index === 0 && e.type === "axes" && e.value === 1 && gamestate === SELECT
        && bolinhatoselect !== "right"
        || e.index === 2 && e.type === "axes" && e.value === 1 && gamestate === SELECT
        && bolinhatoselect !== "left") {
        if (game === "notselected") {
          if (itemSelected === "infiniteracebutton") {
            itemSelected = "infiniteflightbutton";
            pastItemsSelected[2] = "infiniteflightbutton";
          } else if (itemSelected === "infiniteflightbutton" && endToStartX) {
            itemSelected = "infiniteracebutton";
            pastItemsSelected[2] = "infiniteracebutton";
          }
        } else {
          if (itemSelected === "normalbutton") {
            itemSelected = "coloridobutton";
            pastItemsSelected[0] = "coloridobutton";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "coloridobutton") {
                pastItemsSelected[i] = "normalbutton";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "coloridobutton" && endToStartX) {
            itemSelected = "normalbutton";
            pastItemsSelected[0] = "normalbutton";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "normalbutton") {
                pastItemsSelected[i] = "coloridobutton";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "heart1button") {
            itemSelected = "heart2button";
            pastItemsSelected[1] = "heart2button";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "heart1button" || pastItemsSelected[i] === "heart3button") {
                pastItemsSelected[i] = "heart2button";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "heart2button") {
            itemSelected = "heart3button";
            pastItemsSelected[1] = "heart3button";
            /*or (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "heart1button" || pastItemsSelected[i] === "heart2button") {
                pastItemsSelected[i] = "heart3button";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "heart3button" && endToStartX) {
            itemSelected = "heart1button";
            pastItemsSelected[1] = "heart1button";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "heart3button" || pastItemsSelected[i] === "heart2button") {
                pastItemsSelected[i] = "heart1button";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          }
        }
      } else if (joystick.getButtonPressedByName("buttonBlue") && gamestate === SELECT
        || joystick.getButtonPressedByName("axesLeft") && gamestate === SELECT
        || joystick.getButtonPressedByName("sholderLeft") && gamestate === SELECT
        || e.index === 0 && e.type === "axes" && e.value === -1 && gamestate === SELECT
        && bolinhatoselect !== "right"
        || e.index === 2 && e.type === "axes" && e.value === -1 && gamestate === SELECT
        && bolinhatoselect !== "left") {
        if (game === "notselected") {
          if (itemSelected === "infiniteflightbutton") {
            itemSelected = "infiniteracebutton";
            pastItemsSelected[2] = "infiniteracebutton";
          } else if (itemSelected === "infiniteracebutton" && endToStartX) {
            itemSelected = "infiniteflightbutton";
            pastItemsSelected[2] = "infiniteflightbutton";
          }
        } else {
          if (itemSelected === "coloridobutton") {
            itemSelected = "normalbutton";
            pastItemsSelected[0] = "normalbutton";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "coloridobutton") {
                pastItemsSelected[i] = "normalbutton";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "normalbutton" && endToStartX) {
            itemSelected = "coloridobutton";
            pastItemsSelected[0] = "coloridobutton";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "normalbutton") {
                pastItemsSelected[i] = "coloridobutton";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "heart1button" && endToStartX) {
            itemSelected = "heart3button";
            pastItemsSelected[1] = "heart3button";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "heart1button" || pastItemsSelected[i] === "heart2button") {
                pastItemsSelected[i] = "heart3button";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "heart2button") {
            itemSelected = "heart1button";
            pastItemsSelected[1] = "heart1button";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "heart3button" || pastItemsSelected[i] === "heart2button") {
                pastItemsSelected[i] = "heart1button";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          } else if (itemSelected === "heart3button") {
            itemSelected = "heart2button";
            pastItemsSelected[1] = "heart2button";
            /*for (var i = 0; i < pastItemsSelected.length; i = i + 1) {
              if (pastItemsSelected[i] === "heart1button" || pastItemsSelected[i] === "heart3button") {
                pastItemsSelected[i] = "heart2button";
                console.log("pastItemsSelected[" + i + "]: " + pastItemsSelected[i]);
              }
            }*/
          }
        }
      } else if (//joystick.getButtonPressedByName("buttonGreen") && gamestate === SELECT && game !== "notselected"
      /*||*/ joystick.getButtonPressedByName("axesDown") && gamestate === SELECT && game !== "notselected"
        || e.index === 1 && e.type === "axes" && e.value === 1 && gamestate === SELECT
        && bolinhatoselect !== "right"
        || e.index === 3 && e.type === "axes" && e.value === 1 && gamestate === SELECT
        && bolinhatoselect !== "left") {
        if (itemSelected === "coloridobutton" || itemSelected === "normalbutton") {
          itemSelected = "multiplayerToggle";
        } else if (itemSelected === "multiplayerToggle") {
          if (pastItemsSelected[1] === "heart1button") {
            itemSelected = "heart1button";
          } else if (pastItemsSelected[1] === "heart2button") {
            itemSelected = "heart2button";
          } else if (pastItemsSelected[1] === "heart3button") {
            itemSelected = "heart3button";
          }
        } else if (itemSelected === "heart1button" && endToStartY
          || itemSelected === "heart2button" && endToStartY
          || itemSelected === "heart3button" && endToStartY) {
          if (pastItemsSelected[0] === "normalbutton") {
            itemSelected = "normalbutton";
          } else if (pastItemsSelected[0] === "coloridobutton") {
            itemSelected = "coloridobutton";
          }
        }
      } else if (joystick.getButtonPressedByName("buttonYellow") && gamestate === SELECT && game !== "notselected"
        || joystick.getButtonPressedByName("axesUp") && gamestate === SELECT && game !== "notselected"
        || e.index === 1 && e.type === "axes" && e.value === -1 && gamestate === SELECT
        && bolinhatoselect !== "right"
        || e.index === 3 && e.type === "axes" && e.value === -1 && gamestate === SELECT
        && bolinhatoselect !== "left") {
        if (itemSelected === "multiplayerToggle") {
          if (pastItemsSelected[0] === "normalbutton") {
            itemSelected = "normalbutton";
          } else if (pastItemsSelected[0] === "coloridobutton") {
            itemSelected = "coloridobutton";
          }
        } else if (itemSelected === "heart1button" || itemSelected === "heart2button"
          || itemSelected === "heart3button") {
          itemSelected = "multiplayerToggle";
        } else if (itemSelected === "coloridobutton" && endToStartY
          || itemSelected === "normalbutton" && endToStartY) {
          if (pastItemsSelected[1] === "heart1button") {
            itemSelected = "heart1button";
          } else if (pastItemsSelected[1] === "heart2button") {
            itemSelected = "heart2button";
          } else if (pastItemsSelected[1] === "heart3button") {
            itemSelected = "heart3button";
          }
        }
      } else if (joystick.getButtonPressedByName("buttonGreen") && gamestate === SELECT) {
        if (game === "notselected") {
          if (itemSelected === "infiniteracebutton") {
            turnCorridaInfinita();
          } else if (itemSelected === "infiniteflightbutton") {
            turnVooInfinito();
          }
        } else {
          if (itemSelected === "normalbutton") {
            turnNormal();
          } else if (itemSelected === "coloridobutton") {
            turnColored();
          } else if (itemSelected === "multiplayerToggle") {
            handleMultiplayerToggle();
          } else if (itemSelected === "heart1button") {
            handleHeart1Button();
          } else if (itemSelected === "heart2button") {
            handleHeart2Button();
          } else if (itemSelected === "heart3button") {
            handleHeart3Button();
          }
        }
      }
    }

    if (joystick.getButtonPressedByName("buttonGreen") && gamestate === END) {
      reset();
    }

    console.log("itemSelected: " + itemSelected);

    if (joystick.getButtonPressedByName("select") && gamestate !== SELECT) {
      handleBack();
    }

    if (showItemSelectedGui === false) {
      showItemSelectedGui = true;
      handleConsoleOrientationControls(true);
      console.log("showItemSelectedGui: " + showItemSelectedGui);
    }

  }
}

function onJoystickRelease(e) {
  if (calibrating === false && joystick.calibrated() === true) {
    console.log(e);

    var redButtonReleased = joystick.getButtonPressedByName("buttonRed"); //index =1
    var axesDownReleased = joystick.getButtonPressedByName("axesDown"); //index =13

    //var axeDownValue = joystick.getAxesValueByIndex(0, 3);

    console.log("redButtonReleased: " + redButtonReleased);
    console.log("axesDownReleased: " + axesDownReleased);
    //console.log("axeDownValue: " + axeDownValue);

    var axeDownReleased;

    buttonsValue[0] = axesDownReleased;
    buttonsValue[1] = redButtonReleased;

    if (e.type === "axes" && e.index === 3 && e.value === -0
      || e.type === "axes" && e.index === 3 && e.pressed === false) {
      axeDownReleased = false;
    }

    if (axeDownReleased === false) {
      axesValue[3] = "";
    }

    console.log("axeDownReleased: " + axeDownReleased + ", note: if it's undefined, that's normal.");

    /*if (lastButtonType === "axes" && axesValue[3] === 1) {
      axesValue[3] === "";
    }*/

    if (!redButtonReleased && gamestate === PLAY && trex.y >= invisibleGroundPosY - 40
      && !axesDownReleased && axeDownReleased === false /*&&  trexIsJumping === false*/) {
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

      console.log("Released!");
    }

  }
}

function handleConsoleOrientationControls() {//create, fixX
  //if (showItemSelectedGui) {
  //if (create === true) {
  if (controlsOrientations.length > 0) {
    for (var o = controlsOrientations.length - 1; o >= 0; o = o - 1) {
      controlsOrientations[o].destroy();
      controlsOrientations.pop();
      var onum = o + 1;
      console.log("controlOrientation " + onum + "(" + o + ")" + " Destroyed!");
    }
  }
  if (controlsOrientationsTexts.length > 0) {
    for (var o = controlsOrientationsTexts.length - 1; o >= 0; o = o - 1) {
      controlsOrientationsTexts[o].remove();
      controlsOrientationsTexts.pop();
      var onum = o + 1;
      console.log("controlOrientationText " + onum + "(" + o + ")" + " Destroyed!");
    }
  }

  var totalOrientations;
  if (game === "notselected") {
    totalOrientations = 5;
  } else if (game !== "notselected" && TrexColorido === "notselected") {
    totalOrientations = 5;
  }
  for (var o = 1; o <= totalOrientations; o = o + 1) {
    var controlOrientationText = createElement("h2");
    controlOrientationText.style("font-family", "Trex");
    controlOrientationText.style("-webkit-text-fill-color:lime");
    controlOrientationText.style("color:gray");
    controlOrientationText.style("-webkit-text-stroke-width:0.025px");
    controlOrientationText.style("stroke-width:0.025px");
    controlOrientationText.style("letter-spacing: -0.15ch");
    if (o === 3) {
      controlOrientationText.style("font-size", "15.25px");
    } else if (o === 2) {
      controlOrientationText.style("font-size", "16.25px");
    } else if (o === 1) {
      controlOrientationText.style("font-size", "17px");
    } else if (o === 4 || o === 5) {
      controlOrientationText.style("font-size", "30.25px");
    }

    if (o !== 1) {
      controlOrientationText.position(25 + 25 + 25, height - 44);//y: height - 58 //height - 38
    } else {
      controlOrientationText.position(25 + 25, height - 44);//y: height - 58 //height - 38
    }

    if (o === 4 || o === 5) {
      controlOrientationText.position(controlOrientationText.x, height - 64);
    }

    var controlOrientation1 = createSprite(controlOrientationText.x - 25, height - 25);
    if (o === 5) {
      controlOrientation1.scale = 0.45;
    } else {
      controlOrientation1.scale = 0.8;
    }

    if (o !== 1 && o !== 5) {
      var controlOrientation2 = createSprite(25 + 25, height - 25);
      if (o === 4) {
        controlOrientation2.scale = 0.45;
      } else {
        controlOrientation2.scale = 0.5;
      }
    }

    if (o !== 1) {
      if (o < 3) {
        controlOrientationText.position(controlOrientationText.x + 65 +
          controlsOrientationsTexts[o - 2].x + controlsOrientationsTexts[o - 2].x
          /* * o * 2.1*/, controlOrientationText.y);
      } else {
        if (o === 3) {
          controlOrientationText.position(controlOrientationText.x + 65 +
            controlsOrientationsTexts[o - 2].x + controlsOrientationsTexts[o - 2].x / 6
          /* * o * 2.1*/, controlOrientationText.y);
        } else if (o > 3) {
          controlOrientationText.position(controlOrientationText.x + 65 +
            controlsOrientationsTexts[o - 2].x + controlsOrientationsTexts[o - 2].x / 5 / o
            /* * o * 2.1*/, controlOrientationText.y);
        }
      }

      if (o !== 5) {
        //controlOrientation1.x = controlOrientationText.x - 50;//controlOrientation.x + controlsOrientations[o - 2].x * o;
        // * o * 3.7;

        //controlOrientation2.x = controlOrientationText.x - 0;

        controlOrientationText.position(controlOrientationText.x + 30, controlOrientationText.y);
      } else {
        //controlOrientation1.x = controlOrientationText.x - 25;
      }
    }

    var minusNumber1, minusNumber2;

    if (o === 1 || o === 5) {
      minusNumber1 = 25;
    } else {
      minusNumber1 = 80;
    }

    console.log("minusNumber1: " + minusNumber1);

    controlOrientation1.x = controlOrientationText.x - minusNumber1 - newWidthAdded / 2;

    if (o !== 1 && o !== 5) {
      if (o === 1 || o === 5) {
        minusNumber2 = 25;
      } else if (o === 2 || o === 3 || o === 4) {
        minusNumber2 = 30;
      }

      console.log("minusNumber2: " + minusNumber2)

      controlOrientation2.x = controlOrientationText.x - minusNumber2 - newWidthAdded / 2;
    }

    if (o === 1) {
      controlOrientation1.addImage("psxbuttonimg", PSXButtonImg);
      controlOrientationText.html("Escolher");//Selecionar
    } else if (o === 2) {
      controlOrientation1.addImage("pssquarebuttonimg", PSSquareButtonImg);
      controlOrientation2.addImage("psleftarrowimg", PSLeftArrowImg);
      controlOrientationText.html("Esquerda");
    } else if (o === 3) {
      controlOrientation1.addImage("pscirclebuttonimg", PSCircleButtonImg);
      controlOrientation2.addImage("psrightarrowimg", PSRightArrowImg);
      controlOrientationText.html("Direita");
    } else if (o === 4) {
      controlOrientation1.addImage("pstrianglebuttonimg", PSTriangleButtonImg);
      controlOrientation2.addImage("psuparrowimg", PSUpArrowImg);
      controlOrientationText.html("Cima");
    } else if (o === 5) {
      controlOrientation1.addImage("psdownarrowimg", PSDownArrowImg);
      controlOrientationText.html("Baixo");
    }

    controlsOrientations.push(controlOrientation1);
    if (o !== 1 && o !== 5) {
      controlsOrientations.push(controlOrientation2);
    }
    controlsOrientationsTexts.push(controlOrientationText);

    /*if (o === totalOrientations && initialWidth !== width) {
      handleConsoleOrientationControls(false, true);
    }*/
  }
  /*} else if (create === false && fixX === true && initialWidth !== width) {
    if (controlsOrientations.length > 0 && controlsOrientationsTexts.length > 0) {
      for (var o = 0; o < controlsOrientations.length; o = o + 1) {
        var minusNumber, indexOT;
        if (o === 0 || o === 7) {
          minusNumber = 25;
        } else if (o === 4 || o === 2 || o === 6) {
          minusNumber = 30;
        } else {
          minusNumber = 80;
        }
 
        if (o === 0) {
          indexOT = 0;
        } else if (o === 1 || o === 2) {
          indexOT = 1;
        } else if (o === 3 || o === 4) {
          indexOT = 2;
        } else if (o === 5 || o === 6) {
          indexOT = 3;
        } else if (o === 7) {
          indexOT = 4;
        }
        controlsOrientations[o].x = controlsOrientationsTexts[indexOT].x - minusNumber - newWidthAdded / 2;
        console.log("o: " + o, "indexOT: " + indexOT, "minusNumber: " + minusNumber);
      }
    }
  }*/
  //}
}

function handleCalibrate() {
  if (calibrating === false) {
    calibrating = true;
    joystick.calibrate(true);
    calibrateButton.html("Confirmar");
  } else {
    calibrating = false;
    joystick.calibrate(false);
    if (!joystick.calibrated()) {
      calibrateButton.html("Calibrar");
    } else {
      calibrateButton.html("Mudar");
    }
  }
}

