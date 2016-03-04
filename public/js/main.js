/* eslint-disable */
;(function () {
    'use strict';

    // Variables to handle the form inputs
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

    // Listening for the socket connection
    ws.on('connect', (socket) => {
        console.log('socket connected', socket);
    });

    // Receives the passed array/object for the socket from server.js, then calls function to display the current result
    ws.on('receiveTurn', array => {
        displayGrid(array);
    });

    // Receives the win notice from server.js, then alerts the players to the winner
    ws.on('winNotice', status => {
        alert(status);
    });

    // Form that handles the inputs, sends the inputs to the server.js to have sent over socket, then checks for winner and prevents the from doing the default features
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
        ws.emit('playTurn', gameArray);
        winCheck(gameArray);
        event.preventDefault();
    });

    // Checks to see if the game has a winner
    function winCheck (game) {
        console.log("wincheck");
        for (let i = 0; i < game.length; i++) {
            if (game[0] === `${player}` && game[1] === `${player}` && game[2] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[3] === `${player}` & game[4] === `${player}` & game[5] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[6] === `${player}` & game[7] === `${player}` & game[8] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[0] === `${player}` & game[3] === `${player}` & game[6] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[1] === `${player}` & game[4] === `${player}` & game[7] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[2] === `${player}` & game[5] === `${player}` & game[8] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[0] === `${player}` & game[3] === `${player}` & game[6] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[0] === `${player}` & game[4] === `${player}` & game[8] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else if (game[2] === `${player}` & game[4] === `${player}` & game[6] === `${player}`) {
                ws.emit('gameWin', `${player} is the winner`);
                break;
            } else {
                gameArray = [];
            }
        };
    };

    // Function that displays the grid as the different players play
    function displayGrid (array) {
        for (let i = 0; i < array[0].length; i++) {
            document.querySelector('input[name="' + i +'"]').value = array[0][i];
        };
    };

}());
