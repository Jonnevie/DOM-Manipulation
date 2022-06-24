
//Activity 1
let button1 
= document.getElementById('btnName')

let nameInputBox
= document.getElementById('myName')

function displayName(){
    nameInputBox.value = "Jonnevie";
}

button1.addEventListener('click', displayName);



//Activity 2
let lightImage
=document.getElementById('imageOff');

function mouseOverLight() {
    lightImage.src = "lighton.png"
}

lightImage.addEventListener('mouseover', mouseOverLight);



//Activity 3 

let yellowButton
= document.getElementById('btndbName');

let paragraph
= document.getElementById('displayPara');

function showPara(){
    paragraph.style.display = 'contents';
}
yellowButton.addEventListener('dblclick', showPara)

//Activity 4

let redLight
= document.getElementById('stopDiv');

let yellowLight
=document.getElementById('readyDiv');

let greenLight
=document.getElementById('goDiv')

let stopButton 
=document.getElementById('btnStop');

let readyButton
= document.getElementById('btnReady');

let goButton
=document.getElementById('btnGo');

function changeStop() {
redLight.style.backgroundColor = 'red';
};
function changeReady() {
    yellowLight.style.backgroundColor = 'yellow';
};
function changeGo() {
    greenLight.style.backgroundColor = 'green';
}

stopButton.addEventListener('click', changeStop);
readyButton.addEventListener('click', changeReady);
goButton.addEventListener('click', changeGo);

//Activity 5 

let firstTextBox
= document.getElementById('firstName');

let secondTextBox
= document.getElementById('lastName');

let clickMeButton
= document.getElementById('btn2Name');

function changeBorderColors() {
    firstTextBox.style.borderColor ='pink';
    secondTextBox.style.borderColor ='yellow';
}

clickMeButton.addEventListener('click',changeBorderColors);

//Activity 6

let validateBox
= document.getElementById('myName2');

let validateButton
= document.getElementById('btnSub2');

function validateMee() {
    if(validateBox.value.length > 9 ) {
        alert('Great...')
    }else {
        alert('Cant have less than 8 characters!!!')
    }
}

validateButton.addEventListener('click', validateMee);

//Activity 7

let lastButton
= document.getElementById('btnHobbies');

let liHobbies
= document.getElementById('listHere');

 

function listHobbies() {

    let createLi
    = document.createElement("li");

    let promptInput = prompt('Write your hobbies here!');
    console.log(promptInput);

    createLi.innerHTML = promptInput;
    console.log(createLi);
    liHobbies.appendChild(createLi);
}


lastButton.addEventListener('click', listHobbies);