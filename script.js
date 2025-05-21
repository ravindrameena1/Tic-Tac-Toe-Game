let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let winnerr = document.querySelector(".winnerr");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno === true) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue";
            turno = true;
            
        }
        box.disabled = true;

        checkWinner();
    })
});
const showWinner = (winner) => {
    winnerr.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
     disabledgme();
}
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            
            showWinner(pos1val);
        }
        }
    }
}
const resetgame = () => {
    turno = true;
    enablegme();
      msg.classList.add("hide");
}
const disabledgme = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const enablegme = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);