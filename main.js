let hangman = document.getElementById("hangman");
let paper = new Raphael(hangman);
let pWidth = paper.canvas.clientWidth;
let pHeight = paper.canvas.clientHeight;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//initializing the on-screen keyboard
var myButtons = document.getElementById('buttons');
var letters = document.createElement('ul');
var guess;
let transitionString = "";

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
};

for (let i=0; i<alphabet.length; i++) {
    letters.id = 'alphabet';
    list = [];
    list[i] = document.createElement('li');
    list[i].classList.add("keys");
    list[i].innerHTML = alphabet[i].toUpperCase();
    myButtons.appendChild(letters);
    letters.appendChild(list[i]);

    list[i].onclick = function() {
        var correct = 0;
        guess = this.innerHTML;
        for (let i=0; i<animal.length; i++){
            if (guess === animal[i]) {
                correct = 1;
                blanks.innerHTML = blanks.innerHTML.replaceAt(i*2, guess);
            };
        };

        if (correct === 0){
            draw();
        } else {
            setTimeout(function(){
                if (!(blanks.innerHTML.includes("_"))){
                    if (alert('Great job! Keep going!')){
                    } else {
                        if (blanks.innerHTML) {
                            blanks.innerHTML = "";
                        };

                        animal = animals[Math.floor( Math.random()*animals.length )].toUpperCase();
                        console.log(`the word is now "${animal}"`);

                        for (let i=0; i<animal.length; i++) {
                            blanks.innerHTML += "_ ";
                        };

                        drawState = 0;
                        paper.clear();
                    };
                };
            }, 100);
        };
    };
};

//add a category for hangman words
var animals = ['aardvark', 'armadillo', 'anteater', 'antelope', 'baboon', 'badger', 'bandicoot', 'bat', 'bear', 'beaver', 'bison', 'bull', 'bunny', 'camel', 'caribou', 'cat', 'chipmunk', 'cheetah', 'chicken', 'chimpanzee', 'chinchilla', 'cougar', 'cow', 'coyote', 'deer', 'dingo', 'dog', 'dolphin', 'donkey', 'duck', 'dugong', 'eagle', 'elephant', 'emu', 'ferret', 'fox', 'gibbon', 'giraffe', 'goat', 'gorilla', 'groundhog', 'hamster', 'hedgehog', 'hippopotamus', 'horse', 'hyena', 'impala', 'jackal', 'jaguar', 'kangaroo', 'kiwi', 'lemur', 'leopard', 'liger', 'lion', 'llama', 'manatee', 'molerat', 'meerkat', 'mongoose', 'monkey', 'moose', 'mouse', 'narwhal', 'octopus', 'opossum', 'orangutan', 'orca', 'osprey', 'ostrich', 'otter', 'panda', 'pangolin', 'panther', 'peacock', 'penguin', 'pig', 'platypus', 'porcupine', 'porpoise', 'rabbit', 'raccoon', 'tiger', 'tortoise', 'turkey', 'turtle', 'walrus', 'whale', 'wolf', 'wombat', 'yak', 'zebra'];

//creating the start button's functions. 
//1 -- change button text when it's clicked for the first time
//2 -- randomly select a word from the animals array, and generate (or reset, if existing) the blanks
var startBtn = document.getElementById("startbtn");
var blanks = document.getElementById("blanks");
var animal;

startBtn.addEventListener("click", function(){
    if (blanks.innerHTML) {
        blanks.innerHTML = "";
    };
    animal = animals[Math.floor( Math.random()*animals.length )].toUpperCase();
    console.log(`the word is now "${animal}"`);
    for (let i=0; i<animal.length; i++) {
        blanks.innerHTML += "_ ";
    };

    document.getElementById("play").removeChild(startBtn);
});

//draw functions
let drawState = 0;

function draw1(){
    paper.path(`M${pWidth/4},${pHeight - 40} L${(pWidth/4)*3}, ${pHeight - 40}`);
    drawState += 1;
};

function draw2(){
    paper.path(`M${pWidth/4},${pHeight - 40} L${pWidth/4}, 40`);
    drawState += 1;
};

function draw3(){
    paper.path(`M${pWidth/4},40 L${(pWidth/4)*3},40}`);
    drawState += 1;
};

function draw4(){
    paper.path(`M${pWidth/2},40 L${pWidth/2},60}`);
    drawState += 1;
};

function draw5(){
    paper.circle(pWidth/2,80,20);
    drawState += 1;
};

function draw6(){
    paper.path(`M${pWidth/2},100 L${pWidth/2},160}`);
    drawState += 1;
};

function draw7(){
    paper.path(`M${pWidth/2},100 L${pWidth/2+30},130}`);
    drawState += 1;
};

function draw8(){
    paper.path(`M${pWidth/2},100 L${pWidth/2-30},130}`);
    drawState += 1;
};

function draw9(){
    paper.path(`M${pWidth/2},160 L${pWidth/2-30},190}`);
    drawState += 1;
};

function draw10(){
    paper.path(`M${pWidth/2},160 L${pWidth/2+30},190}`);
    drawState += 1;
};

function draw() {
    if (drawState === 0){
        draw1();
    } else if (drawState === 1){
        draw2();
    } else if (drawState === 2){
        draw3();
    } else if (drawState === 3){
        draw4();
    } else if (drawState === 4){
        draw5();
    } else if (drawState === 5){
        draw6();
    } else if (drawState === 6){
        draw7();
    } else if (drawState === 7){
        draw8();
    } else if (drawState === 8){
        draw9();
    } else if (drawState === 9){
        draw10();
    };

    if (drawState === 10){
        blanks.innerHTML = animal;
        setTimeout(function(){
            if (alert('Better luck next time! Click OK to restart.')){
            } else {
                window.location.reload();
            };
        }, 100);
    };
};

//tracker variable to record how many words the player has guessed
var trackerDiv = document.getElementById("tracker");

