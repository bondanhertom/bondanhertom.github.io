<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <title>COVID DETECTOR</title>
</head>
<body>
    <div class="container">
        <ul class="nav">
            <li>
                <p>COVID DETECTOR</p>
            </li>
        </ul>
    <div class="home" id="landingPage">
        <img src="icon1.png">
        <p>Mohon Masukan Nama Anda <i class="fas fa-smile"></i></p>
        <input type="text" id="name" class="search-input" placeholder="Masukan nama anda di sini ! ! !" style="font-style: italic;"><br>
        <input type="button" value="Submit" id="submitName" class = "submit-btn">
    </div>
    <div class="home"  id="secondPage" style="display: none">
        <p id="greeting">hello, name</p>
        <p style="text-align: center;">Selamat datang di web covid detector silahkan masukan keluhan anda</p>
        <div>
            <input class="search-input" type="text" id="initial" placeholder="Masukan keluhan anda di sini ! ! !" style="font-style: italic"><br>
            <strong><input class="submit-btn" type="button" name="" value ="Submit" id="submitInitial"></strong>
        </div>    
    </div>
    <div class="home" id="thirdPage" style="display: none;">
        <p>Average 8 glass of water equals to 2000ml</p>
        <div class="main" id="water">
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
            <div class="progress-bar"></div>
        </div>
        <div class="btnLR">
            <input class="submit-btn" type="button" value="Log" id="btnLog">
            <input class="submit-btn" type="button" value="Reset" id="btnReset">
        </div>
        <p>Your water intake today:</p>
        <ul id="list"></ul>
    </div>
    <div class="home" id="fourthPage" style="display: none;">
        <p id="finalMessage">
        <input class="submit-btn" type="button" value="Continue" id="continueBtn">
        <input class="submit-btn" type="button" value="Reset Count" id="btnStartOver">
    </div>
    </div>
    <script src="index.js"></script>
</body>
</html>