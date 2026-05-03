let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
const getCompChoise=()=>{
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    msg.textContent="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}
const playGame=(userChoice)=>{
    // generate computer choice
    const CompChoice=getCompChoise();
    if(userChoice===CompChoice){
        // draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin=CompChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            // rock, scissor
            userWin=CompChoice==="scissors"?false:true;
        }else{
            userWin=CompChoice==="rock"?false: true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};
const showWinner=(userWin, userChoice, CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.textContent=userScore;
        msg.textContent=`You won.Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.textContent=compScore;
        msg.textContent=`You lost.${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}