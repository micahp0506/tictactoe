/* eslint-disable */
;(function () {
    'use strict';


    let p0;
    let p1;
    let p2;
    let p3;
    let p4;
    let p5;
    let p6;
    let p7;
    let p8;
    let gameArray = [];
    let player = "";
    const ws = io.connect();
    const form = document.querySelector('form');

    ws.on('connect', (socket) => {
        console.log('socket connected');
    });

    form.addEventListener('submit', () => {

        if (player === "") {
            player = "X";
        } else if (player === "O") {
            player = "X";
        } else {
            player = "O";
        };

        console.log("player", player);
        p0 = document.querySelector('input[name="0"]').value;
        gameArray.push(p0);
        p1 = document.querySelector('input[name="1"]').value;
        gameArray.push(p1);
        p2 = document.querySelector('input[name="2"]').value;
        gameArray.push(p2);
        p3 = document.querySelector('input[name="3"]').value;
        gameArray.push(p3);
        p4 = document.querySelector('input[name="4"]').value;
        gameArray.push(p4);
        p5 = document.querySelector('input[name="5"]').value
        gameArray.push(p5);
        p6 = document.querySelector('input[name="6"]').value;
        gameArray.push(p6);
        p7 = document.querySelector('input[name="7"]').value;
        gameArray.push(p7);
        p8 = document.querySelector('input[name="8"]').value;
        gameArray.push(p8);
        console.log("p0", p0);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("p3", p3);
        console.log("p4", p4);
        console.log("p5", p5);
        console.log("p6", p6);
        console.log("p7", p7);
        console.log("p8", p8);
        console.log("gameArray", gameArray);
        winCheck(gameArray);
        event.preventDefault();
    });

    function winCheck (game) {
        for (let i = 0; i < game.length; i++) {
            if (game[0] === `${player}` && game[1] === `${player}` && game[2] === `${player}`) {
                alert( `${player} is the winner`);
                break;
            } else if (game[3] === `${player}` & game[4] === `${player}` & game[5] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[6] === `${player}` & game[7] === `${player}` & game[8] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[0] === `${player}` & game[3] === `${player}` & game[6] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[1] === `${player}` & game[4] === `${player}` & game[7] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[2] === `${player}` & game[5] === `${player}` & game[8] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[0] === `${player}` & game[3] === `${player}` & game[6] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[0] === `${player}` & game[4] === `${player}` & game[8] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else if (game[2] === `${player}` & game[4] === `${player}` & game[6] === `${player}`) {
                alert(`${player} is the winner`);
                break;
            } else {
                gameArray = [];
            }
        };
    };


}());
