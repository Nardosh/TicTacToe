console.log("Welcome to Tic Tac Toe");
// let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
// console.log(isgameover);


// Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for win 

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach(e => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            document.querySelector(".info").innerHTML = boxtext[e[0]].innerHTML + "  WON";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            disable();
            gameover.play();
        }

    });

    // Check for Draw Match.... 

    let count = 0;
    Array.from(boxtext).forEach(element => {
        if (element.innerHTML !== "") {
            count++;
        }
    });
    if (count === 9 && !isgameover) {
        document.querySelector(".info").innerHTML = "Draw Match";
        isgameover = true;
    };
};




// Game logic.......

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", boxClick);
});



function boxClick() {
    let boxtext = this.querySelector(".boxtext");
    if (boxtext.innerText === "") {
        boxtext.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if (!isgameover) {
            document.querySelector(".info").innerHTML = "Turn for " + turn;
        }
    }
}


function disable() {
    let boxes = document.querySelectorAll(".box");
    Array.from(boxes).forEach(element => {
        element.removeEventListener("click", boxClick);
    });

}


// Add onclick listener to reset button 

reset.addEventListener("click", () => {

    let boxtexts = document.querySelectorAll(".boxtext");
    console.log(boxtexts);
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";


    Array.from(boxes).forEach(element => {
        element.addEventListener("click", boxClick);
    });

});