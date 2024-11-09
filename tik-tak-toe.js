let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-button");
let newButton = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = () => {
    turn = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    });
}); 

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `${winner} Wins`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

function checkWinner() {
    for (let Pattern of winPattern) {
        let pos1 = boxes[Pattern[0]].innerText;
        let pos2 = boxes[Pattern[1]].innerText;
        let pos3 = boxes[Pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

newButton.addEventListener("click", resetgame);
resetButton.addEventListener("click", resetgame);



