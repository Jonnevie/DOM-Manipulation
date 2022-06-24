
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
function mouseOffLight() {
    lightImage.src='lightoff.png';
}

lightImage.addEventListener('mouseover', mouseOverLight);
lightImage.addEventListener('mouseout', mouseOffLight);



//Activity 3 

let yellowButton
= document.getElementById('btndbName');

let paragraph
= document.getElementById('displayPara');

function showPara(){
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'contents'
    } else {
        paragraph.style.display = 'none'
    };
};

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
    if (redLight.style.backgroundColor === 'black') 
    { redLight.style.backgroundColor = 'red';
} else {
    redLight.style.backgroundColor = 'black'
}};
function changeReady() {
    if(yellowLight.style.backgroundColor === 'black')
    {yellowLight.style.backgroundColor = 'yellow';}
    else {
        yellowLight.style.backgroundColor = 'black';
    }
};

function changeGo() {
    if (greenLight.style.backgroundColor === 'black') 
    { greenLight.style.backgroundColor = 'green';
} else {
    greenLight.style.backgroundColor = 'black'
}};


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
    if(validateBox.value.length > 8 ) {
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
let count = 0
while(count<3) {

    let createLi
    = document.createElement("li");

    let promptInput = prompt('Write your hobbies here!');
    console.log(promptInput);

    createLi.innerHTML = promptInput;
    console.log(createLi);
    liHobbies.appendChild(createLi);

    count++
}

}


lastButton.addEventListener('click', listHobbies);