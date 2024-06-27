var buttonEl=document.querySelectorAll("button");
var winEl=document.querySelector(".win-status");
var playerEl=document.querySelector(".player");
var compEl=document.querySelector(".comp");
var restartEl=document.querySelector(".restart");

var playerPoints=0;
var compPoints=0;
compEl.innerHTML=compPoints;
playerEl.innerHTML=playerPoints;


restartEl.addEventListener("click",function(){
    playerPoints=0;
    compPoints=0;
    compEl.innerHTML=compPoints;
    playerEl.innerHTML=playerPoints;
    winEl.innerHTML="";
})


buttonEl.forEach(button=>{
    button.addEventListener("click",function(){
        var computerChoice=compChoice();
        var playerChoice=button.id;
        if(playerChoice==="rock" && computerChoice==="scissor"){
            winEl.innerHTML="You won🥳";
            playerPoints++;
            playerEl.innerHTML=playerPoints;
        }
        else if(playerChoice==="rock" && computerChoice==="paper"){
            winEl.innerHTML="You lost😔";
            compPoints++;
            compEl.innerHTML=compPoints;
        }
        else if(playerChoice==="rock" && computerChoice==="rock"){
            winEl.innerHTML="Its a tie!😀";
            compPoints++;
            playerPoints++;
            compEl.innerHTML=compPoints;
            playerEl.innerHTML=playerPoints;
        }
        if(playerChoice==="paper" && computerChoice==="rock"){
            winEl.innerHTML="You won";
            playerPoints++;
            playerEl.innerHTML=playerPoints;
        }
        else if(playerChoice==="paper" && computerChoice==="scissor"){
            winEl.innerHTML="You lost";
            compPoints++;
            compEl.innerHTML=compPoints;
        }
        else if(playerChoice==="paper" && computerChoice==="paper"){
            winEl.innerHTML="Its a tie!";
            compPoints++;
            playerPoints++;
            compEl.innerHTML=compPoints;
            playerEl.innerHTML=playerPoints;
        }

        if(playerChoice==="scissor" && computerChoice==="paper"){
            winEl.innerHTML="You won";
            playerPoints++;
            playerEl.innerHTML=playerPoints;
        }
        else if(playerChoice==="scissor" && computerChoice==="rock"){
            winEl.innerHTML="You lost";
            compPoints++;
            compEl.innerHTML=compPoints;
        }
        else if(playerChoice==="scissor" && computerChoice==="scissor"){
            winEl.innerHTML="Its a tie!";
            compPoints++;
            playerPoints++;
            compEl.innerHTML=compPoints;
            playerEl.innerHTML=playerPoints;
        }
    })
})

function compChoice(){
    var choices=["rock","paper","scissor"];
    var randomChoice=Math.floor(Math.random()*choices.length)
    return choices[randomChoice];
}