<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta name="viewport" content="width=device-width, height=device-height, 
  user-scalable=yes, initial-scale=1, maximum-scale=1" />

  <link rel="shortcut icon" href="./trex/trex_idle(eye fixed).png" type="image/x-png">
  <title>Trex</title>
  <script src="./Lib/p5.min.js"></script>
  <script src="./Lib/p5.sound.min.js"></script>
  <script src="./Lib/p5.play.js"></script>
  <script src="./Lib/p5.gif.min.js"></script>

  <link rel="stylesheet" type="text/css" href="style.css">

  <meta charset="utf-8">

  <!-- Sweet Alert -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="./Lib/sweetalert.min.js"></script>
  <link rel="stylesheet" type="text/css" href="./Lib/sweetalert.css" />

  <!--firebase-app 
    <script src="./Lib/firebase-app.js"></script>-->
  <!-- firebase-database 
    <script src="./Lib/firebase-database.js"></script>-->
  <!---->
  <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-database.js"></script>


  </location>
  <script>
    //const firebaseConfig = "https://viniciustdaik.github.io/Data.html";
    //const firebaseConfig = "https://viniciustdaik.github.io/Data/Data.json";
    const firebaseConfig = {
      apiKey: "AIzaSyC65b4j9TWiCmB1Wda8--ger5XsTJ_ggC8",
      authDomain: "tudo-83af8.firebaseapp.com",
      projectId: "tudo-83af8",
      storageBucket: "tudo-83af8.appspot.com",
      messagingSenderId: "121784743717",
      appId: "1:121784743717:web:4b1b9cade60f3e6c30cccc",
      measurementId: "G-EZ31WP3783"
    };
    //console.log(firebaseConfig);

    firebase.initializeApp(firebaseConfig);
  </script>

</head>

<body>
  <script src="./js/Player.js"></script>
  <script src="sketch.js"></script>

</body>

</html>
