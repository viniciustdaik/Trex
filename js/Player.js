class Player {
  constructor() {
    playerCount = this.getCount();

    this.name = null;
    this.index = null;
    this.positionX = 50;
    this.positionY = 0;
    this.rank = 0;
    this.rotation = 0;
    this.score = 0;
    this.highscore = 0;
    this.isCrouching = false;
    this.isPlaying = true;
    this.color = "Cinza";

    this.playerAlreadyStarted = false;

    console.log("Player Created!");
  }

  addPlayer() {
    if(this.index <= MaxOfPlayers){
      var playerIndex = "/Trex/players/player" + this.index;

      //if (this.index === 1) {
      ///  this.positionX = width / 2 - 100;
      //} else {
      //  this.positionX = width / 2 + 100;
      //}

      database.ref(playerIndex).set({
        name: this.name, 
        positionX: this.positionX, 
        positionY: this.positionY, 
        rank: this.rank, 
        rotation: this.rotation, 
        score: this.score, 
        highscore: this.highscore, 
        isCrouching: this.isCrouching, 
        isPlaying: this.isPlaying, 
        color: this.color
      });

      console.log("Player Added!");
    }else{
      console.log("The Max("+MaxOfPlayers+") Of Players Was Reached.");
    }
    
  }

  getDistance() {
    var playerDistanceRef = database.ref("/Trex/players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

  getCount() {
    var playerCountRef = database.ref("/Trex/playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
      console.log("playerCount:"+playerCount);

      if(this.playerAlreadyStarted === false){
        this.startPlayer();
      }
      
    });
  }

  updateCount(count) {
    database.ref("/Trex/").update({
      playerCount: count
    });
  }

  startPlayer(){
    if(this.playerAlreadyStarted === false && playerCount !== undefined){
      this.playerAlreadyStarted = true;
      playerCount += 1;
      console.log(playerCount);
      this.index = playerCount;
      this.addPlayer();
      this.updateCount(playerCount);
      this.name = "Player" + this.index;
    }
  }

  update() {
    var playerIndex = "/Trex/players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank, 
      rotation: this.rotation, 
      score: this.score, 
      highscore: this.highscore, 
      isCrouching: this.isCrouching, 
      isPlaying: this.isPlaying, 
      color: this.color
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("/Trex/players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  //getCarsAtEnd() {
  //  database.ref("/Trex/carsAtEnd").on("value", data => {
  //    this.rank = data.val();
  //  });
  //}

  //static updateCarsAtEnd(rank) {
  //  database.ref("/Trex/").update({
  //    carsAtEnd: rank
  //  });
  //}

  removeThisPlayer(reload){
    database.ref("/Trex/").update({
      playerCount: playerCount-1
    });
    console.log(playerCount, this.index);
    database.ref("/Trex/players/player"+this.index).remove();

    console.log("Jogador Removido.");

    if(reload === true){
      window.location.reload();
    }else if(reload === false){
      player = undefined;
      player2.visible = false;
      player3.visible = false;
      player4.visible = false;
      player5.visible = false;
      player6.visible = false;
      player7.visible = false;
      player8.visible = false;
      player9.visible = false;
      player10.visible = false;
      player2text.position(-1000, -350);
      player2color = "Cinza";
      player2 = undefined;
      player3 = undefined;
      player4 = undefined;
      player5 = undefined;
      player6 = undefined;
      player7 = undefined;
      player8 = undefined;
      player9 = undefined;
      player10 = undefined;
    }
  }

  removeAllPlayers(){
    //var playerCountRef = playerCount;
    for(var i = 1; i <= playerCount; i = i+1){
      //var indexRef = i;
      database.ref("/Trex/players/player"+i).remove();
    }
    database.ref("/Trex/").update({
      playerCount: 0
    });
    console.log(playerCount, this.index);

    console.log("Todos Os Jogadores Removidos.");

    database.ref("/Trex/").update({
      allMultiplayerClientsReload: true
    });
    allMultiplayerClientsReload = true;

    window.location.reload();
  }

}