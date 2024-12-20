function imgReload(n){
    if (n==1){
        return "./images/dice1.png";
    } else if (n==2){
        return "./images/dice2.png";
    } else if (n==3){
        return "./images/dice3.png";
    } else if (n==4){
        return "./images/dice4.png";
    } else if (n==5){
        return "./images/dice5.png";
    } else if (n==6){
        return "./images/dice6.png";
    }
}

function onReload(){
    let player1 = Math.floor(Math.random()*6)+1;
    let player2 = Math.floor(Math.random()*6)+1;

    document.getElementById("player").style.visibility = "visible";
    document.querySelector(".img1").setAttribute("src",imgReload(player1));
    document.querySelector(".img2").setAttribute("src",imgReload(player2));
    

    if (player1<player2){
        document.querySelector("#player").innerHTML = "Player 2 WON the game🥳🚩";
    }
    else if (player1>player2){
        document.querySelector("#player").innerHTML = "🚩🥳Player 1 WON the game";
    } else {
        document.querySelector("#player").innerHTML = "It's a DRAW";
    }
}

function onFirstLoad() {
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}

if (localStorage.getItem("hasLoadedBefore")) {
    onReload();
} else {
    localStorage.setItem("hasLoadedBefore", "true");
    onFirstLoad();
}