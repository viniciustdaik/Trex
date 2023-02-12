class Player {
    constructor() {
        this.playerAlreadyStarted = false;

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
        this.isGameover = false;
        this.hitGround = false;
        this.color = "Cinza";
        this.gamePlaying = game;
        this.hearts = heartsLeft;

        this.changedPlayerCountVerified = null;

        Player.getPlayersInfo();

        playerCount = this.getCount();

        console.log("Player Created!");
    }

    addPlayer() {
        if (this.index <= MaxOfPlayers && this.index !== null) {
            var playerIndex;
            if (this.index !== null) {
                playerIndex = "/Trex/players/player" + this.index;
                console.log("from addPlayer(), this.index: " + this.index);
            } else {
                console.log("Index = null, can't add player.");
            }

            //if (this.index === 1) {
            ///  this.positionX = width / 2 - 100;
            //} else {
            //  this.positionX = width / 2 + 100;
            //}

            if (playerIndex !== undefined) {
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
                    color: this.color,
                    isGameover: this.isGameover,
                    hitGround: this.hitGround,
                    gamePlaying: this.gamePlaying,
                    hearts: this.hearts,
                });

                console.log("Player Added!");

                Player.checkAllPlayersAndPlayerCount();
                Player.availablePlayerIndexs();
            }
        } else if (!this.index <= MaxOfPlayers) {
            console.log("The Max(" + MaxOfPlayers + ") Of Players Was Reached.");
        } else if (!this.index !== null) {
            console.log("Index = null, can't add player.");
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
            console.log("playerCount:" + playerCount);

            if (this.playerAlreadyStarted === false) {
                this.startPlayer();
            }
        });
    }

    updateCount(count) {
        database.ref("/Trex/").update({
            playerCount: count
        });
    }

    startPlayer() {
        if (this.playerAlreadyStarted === false && playerCount !== undefined) {
            Player.availablePlayerIndexs();
            if (playerCount === 1) {
                for (var plr in allPlayers) {
                    plr = "player2";
                    console.log(plr);
                    console.log(allPlayers[plr]);
                    if (/*playerCount === 1 && */allPlayers[plr] !== undefined) {
                        this.playerAlreadyStarted = true;
                        //playerCount = 1;

                        //this.index = playerCount;
                        this.givePlayerIndex();
                        playerCount += 1;
                        console.log(playerCount);
                        this.addPlayer();
                        //this.updateCount(playerCount);
                        if (nameInput.value() === "") {
                            this.name = "Player" + this.index;
                        } else {
                            this.name = nameInput.value();
                        }
                        this.changedPlayerCountVerified = playerCount;
                    } else {
                        this.playerAlreadyStarted = true;
                        playerCount += 1;
                        console.log(playerCount);

                        //this.index = playerCount;
                        this.givePlayerIndex();
                        this.addPlayer();
                        //this.updateCount(playerCount);
                        if (nameInput.value() === "") {
                            this.name = "Player" + this.index;
                        } else {
                            this.name = nameInput.value();
                        }
                        this.changedPlayerCountVerified = playerCount;
                    }
                }
            } else if (playerCount !== 1 && this.playerAlreadyStarted === false) {
                this.playerAlreadyStarted = true;
                playerCount += 1;
                console.log(playerCount);

                //this.index = playerCount;
                this.givePlayerIndex();
                this.addPlayer();
                //this.updateCount(playerCount);
                if (nameInput.value() === "") {
                    this.name = "Player" + this.index;
                } else {
                    this.name = nameInput.value();
                }
                this.changedPlayerCountVerified = playerCount;
            }
        }
    }

    update() {
        var playerIndex = "/Trex/players/player" + this.index;
        database.ref(playerIndex).update({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            rank: this.rank,
            rotation: this.rotation,
            score: this.score,
            highscore: this.highscore,
            isCrouching: this.isCrouching,
            isPlaying: this.isPlaying,
            color: this.color,
            isGameover: this.isGameover,
            hitGround: this.hitGround,
            gamePlaying: this.gamePlaying,
            hearts: this.hearts,
        });
    }

    static getPlayersInfo() {
        var playerInfoRef = database.ref("/Trex/players");
        playerInfoRef.on("value", data => {
            allPlayers = data.val();
            //console.log(data.val());
        });
        Player.checkAllPlayersAndPlayerCount();
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

    removeThisPlayer(reload, playerCountMinus1) {
        if (playerCountMinus1 === true) {
            database.ref("/Trex/").update({
                playerCount: playerCount - 1
            });
            console.log(playerCount, this.index);
        } else {
            console.log("playerCountMinus1 Not Done.")
        }
        database.ref("/Trex/players/player" + this.index).remove();

        console.log("Jogador Removido.");

        if (reload === true) {
            window.location.reload();
        } else if (reload === false) {
            for (var playerNum = 2; playerNum <= MaxOfPlayers; playerNum = playerNum + 1) {
                var otherPlayer, otherPlayerText;
                //if (playerNum === 2) {
                otherPlayer = players[playerNum - 2];//player2;
                otherPlayerText = playersText[playerNum - 2];//player2text;
                //} else if (playerNum === 3) {
                //    otherPlayer = player3;
                //    otherPlayerText = player3text;
                //}
                otherPlayerText.position(-1000, -350);
                otherPlayer.visible = false;
                otherPlayer.y = 160;
                otherPlayer.rotation = 0;
                otherPlayer.changeAnimation("birdright", birdanmright);
                console.log("Tchau Jogador.");
            }

            players = [];
            playersInfo = [];

            /*for (var playerNum = 0; playerNum < players.length; playerNum = playerNum + 1) {
                players[playerNum].visible = false;
                playersText[playerNum].position(-1000, -350);
                playersInfo[playerNum].color = "Cinza";
                //players[playerNum] = undefined;
            }*/
            /*player2.visible = false;
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
            player10 = undefined;*/

            player = undefined;

            allPlayers = undefined;
            playerCount = undefined;
        }
    }

    removeAllPlayers() {
        //var playerCountRef = playerCount;
        for (var i = 1; i <= playerCount; i = i + 1) {
            //var indexRef = i;
            database.ref("/Trex/players/player" + i).remove();
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

    static checkAllPlayersAndPlayerCount() {
        var thingToWorkVerification;
        if (playerCount !== undefined) {
            thingToWorkVerification = player;
        } else {
            thingToWorkVerification = this;
        }
        if (player !== undefined && playerCount !== undefined) {
            //if(playerCount > MaxOfPlayers
            //|| playerCount < 0){
            console.log("Checking Players...");
            for (var playeri = 1; playeri <= playerCount; playeri = playeri + 1) {
                if (playeri > MaxOfPlayers && allPlayers["player" + playeri] !== undefined) {
                    database.ref("/Trex/players/player" + playeri).remove();
                    console.log("Found Extra Player 'player" + playeri + "', Removed!");
                }
            }
            if (allPlayers !== undefined && allPlayers !== null && allPlayers["playernull"] !== undefined) {
                allPlayers["playernull"] = undefined;
                database.ref("/Trex/players/playernull").remove();
                //Player.getPlayersInfo();
                //console.log(allPlayers["playernull"]);
                console.log("Found playernull, Removed!");
            }
            if (player !== undefined && player.index > MaxOfPlayers
                || player !== undefined && player.index === null) {
                player.removeThisPlayer(false, false);
            }
            //}else{
            //  console.log("No Players To Check At The Moment.");
            //}
            if (playerCount > MaxOfPlayers
                || playerCount < 0 || playerCount <= MaxOfPlayers) {
                var newPlayerCount = MaxOfPlayers;
          /*if(MaxOfPlayers === 2 && playerCount > MaxOfPlayers){
            playerCount = MaxOfPlayers;
            thingToWorkVerification.updateCount(playerCount);
            console.log(playerCount);
          }else */if (/*MaxOfPlayers > 2 &&*/ playerCount <= MaxOfPlayers
                    || /*MaxOfPlayers > 2 &&*/ playerCount > MaxOfPlayers
                    || this.changedPlayerCountVerified !== playerCount) {
                    for (var playeri = 1; playeri <= MaxOfPlayers; playeri = playeri + 1) {
                        //console.log(allPlayers["player" + playeri]);
                        //console.log("playeri: " + playeri);
                        if (allPlayers["player" + playeri] === undefined) {
                            newPlayerCount = newPlayerCount - 1;
                        }
                        if (playeri === MaxOfPlayers) {
                            thingToWorkVerification.updateCount(newPlayerCount);
                            playerCount = newPlayerCount;
                            console.log(playerCount);
                        }
                    }
                }
            }

            if (player !== undefined && thingToWorkVerification.changedPlayerCountVerified !== playerCount) {
                thingToWorkVerification.changedPlayerCountVerified = playerCount;
                thingToWorkVerification.hideRemovedPlayers();
            }
        }
    }

    static availablePlayerIndexs() {
        allPlayerIndexsAvailable = "";
        console.log("allPlayers from availablePlayerIndexs: " + allPlayers);
        if (allPlayers === null) {
            console.log("allPlayers = null, no other players. Getting AvailablePlayerIndexs...");
            for (var plrindex = 1; plrindex <= MaxOfPlayers; plrindex = plrindex + 1) {
                //console.log(allPlayers["player"+plrindex]);
                console.log("playeri: " + plrindex);
                if (plrindex < 10) {
                    allPlayerIndexsAvailable = allPlayerIndexsAvailable + "0" + plrindex;
                } else {
                    allPlayerIndexsAvailable = allPlayerIndexsAvailable + "" + plrindex;
                }
                console.log("allPlayersIndexsAvailable: " + allPlayerIndexsAvailable);
            }
        }

        if (allPlayers !== undefined && allPlayers !== null) {
            console.log("Getting AvailablePlayerIndexs...");
            for (var plrindex = 1; plrindex <= MaxOfPlayers; plrindex = plrindex + 1) {
                //console.log(allPlayers["player"+plrindex]);
                console.log("playeri: " + plrindex);
                if (allPlayers["player" + plrindex] === undefined || allPlayers["player" + plrindex] === null) {
                    if (plrindex < 10) {
                        allPlayerIndexsAvailable = allPlayerIndexsAvailable + "0" + plrindex;
                    } else {
                        allPlayerIndexsAvailable = allPlayerIndexsAvailable + "" + plrindex;
                    }
                    console.log("allPlayersIndexsAvailable: " + allPlayerIndexsAvailable);
                }
            }
        } else {
            console.log("allPlayerIndexsAvailable: " + allPlayerIndexsAvailable)
            if (allPlayerIndexsAvailable === "") {
                console.log("allPlayers = undefined, can't define available player indexs.");
            }
        }
    }

    givePlayerIndex() {
        if (allPlayerIndexsAvailable !== "") {
            for (var plrindex = 1; plrindex <= MaxOfPlayers; plrindex = plrindex + 1) {
                if (allPlayerIndexsAvailable.includes("0" + plrindex) && this.index === null
                    && plrindex < 10
                    || allPlayerIndexsAvailable.includes(plrindex) && this.index === null
                    && plrindex >= 10) {
                    this.index = plrindex;
                    if (this.index <= MaxOfPlayers && this.index !== null) {
                        this.updateCount(playerCount);
                    }
                }
            }
        } else {
            console.log("allPlayerIndexsAvailable = '', can't give player index");
        }
    }

    changePlayerIndex() {
        console.log("changePlayerIndex called!");
        var changedIndex = false;
        if (playerCount < player.index) {//playerCount === 2 && player.index === 3
            //var plrindex = 1; plrindex <= MaxOfPlayers; plrindex = plrindex + 1
            for (var plrindex = 0; plrindex < MaxOfPlayers; plrindex = plrindex + 1) {
                if (allPlayers["player" + (plrindex + 1)] === undefined
                    && plrindex !== this.index && changedIndex === false) {
                    changedIndex = true;
                    database.ref("/Trex/").update({
                        playerCount: playerCount - 1
                    });
                    console.log(playerCount, this.index);
                    database.ref("/Trex/players/player" + this.index).remove();

                    this.index = plrindex + 1;
                    console.log("changed player index to: " + this.index);
                    this.playerAlreadyStarted = false;

                    this.startPlayer();

                    players[plrindex].visible = false;//player3
                    players[plrindex].y = 160;//player3
                    players[plrindex].rotation = 0;//player3
                    players[plrindex].changeAnimation("birdright", birdanmright);//player3
                    playersText[plrindex].position(-1000, -350);//player3text

                    console.log("Changed Player Index.");
                }
            }
        }
    }

    hideRemovedPlayers() {
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
        //console.log("hideRemovedPlayers called!");
        for (var plr = MaxOfPlayers - 1; plr >= playerCount - 1; plr = plr - 1) {
            //var plr = 0; plr < MaxOfPlayers; plr = plr + 1
            //var plr = 0; plr < playerCount - 1; plr = plr + 1
            var objectWithPlayersInfo = allPlayersWithoutThisPlayer;
            if (objectWithPlayersInfo["player" + (plr + 2)] === undefined
                && plr + 2 <= MaxOfPlayers) {
                var otherPlayer, otherPlayerText, otherPlayerInfo;
                //console.log("players[plr]: " + players[plr]);
                //console.log("plr: " + plr);
                if (players[plr] !== undefined
                    && players[plr].visible === true) {
                    console.log("Removing Removed Player...")
                    otherPlayer = players[plr];//player2;
                    otherPlayerText = playersText[plr];//player2text;
                    otherPlayerInfo = playersInfo[plr];

                    console.log("otherPlayer: " + otherPlayer, "otherPlayerText: " + otherPlayerText);
                    otherPlayerText.position(-1000, -350);
                    otherPlayer.visible = false;
                    otherPlayer.y = 160;
                    otherPlayer.rotation = 0;
                    //otherPlayer.changeAnimation("birdright", birdanmright);
                    otherPlayer = undefined;
                    otherPlayerText = undefined;
                    otherPlayerInfo = undefined;

                    console.log("Tchau Jogador.");

                    this.changePlayerIndex();
                }// else if (plr === 3 && this.index === 1 && players[1].visible === true
                //    || plr === 3 && this.index === 2 && players[1].visible === true) {
                //    otherPlayer = players[1];//player3;
                //    otherPlayerText = playersText[1];//player3text;
                //}
            }
        }
    }

}
