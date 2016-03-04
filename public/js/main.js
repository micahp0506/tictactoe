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

    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
        console.log("in");
        p0 = document.querySelector('input[name="0"]').value;
        p1 = document.querySelector('input[name="1"]').value;
        p2 = document.querySelector('input[name="2"]').value;
        p3 = document.querySelector('input[name="3"]').value;
        p4 = document.querySelector('input[name="4"]').value;
        p5 = document.querySelector('input[name="5"]').value;
        p6 = document.querySelector('input[name="6"]').value;
        p7 = document.querySelector('input[name="7"]').value;
        p8 = document.querySelector('input[name="8"]').value;
        console.log("p0", p0);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("p3", p3);
        console.log("p4", p4);
        console.log("p5", p5);
        console.log("p6", p6);
        console.log("p7", p7);
        console.log("p8", p8);
        event.preventDefault();
    });


}());
