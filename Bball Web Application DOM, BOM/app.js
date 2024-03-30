let startingFive = {
    pointGuard: {
        NAME:'',
        PPG:'',
        APG:'',
        RPG:''
    },
    shootingGuard: {
        NAME:'',
        PPG:'',
        APG:'',
        RPG:''
    },smallForward: {
        NAME:'',
        PPG:'',
        APG:'',
        RPG:''
    },powerFoward: {
        NAME:'',
        PPG:'',
        APG:'',
        RPG:''
    },center: {
        NAME:'',
        PPG:'',
        APG:'',
        RPG:''
    }
};


let players = ['Abdul Waggeh', 'Mark Bishop', 'Jarret Smith', 'Quincy Watts', 'Hakeem Neals', 'James Green', 'Brandon Smith'];


let body = document.querySelector("body");
//Create Parent
let firstParent = document.createElement("div")
firstParent.setAttribute("class", "playerContainer")
body.append(firstParent);
//----------------------------------------------


//create Name
let playerName = document.createElement("div")
playerName.setAttribute("class", "playerName")
playerName.innerHTML = "";


//create PPG
let pPG = document.createElement("div")
pPG.setAttribute("class", "pointsPerGame")
pPG.innerHTML = "";
//create APG
let aPG = document.createElement("div")
aPG.setAttribute("class", "assistPerGame")
aPG.innerHTML = "";


//create RPG
let rPG = document.createElement("div")
rPG.setAttribute("class", "reboundsPerGame")
rPG.innerHTML = "";


//Create a button and put created elements in
const viewStatsBTN = () => {
    players.forEach((player) => {
       


        let firstParent = document.createElement("div")
        firstParent.setAttribute("class", "playerContainer")
        body.append(firstParent);
       
        let playerName = document.createElement("div")
        playerName.setAttribute("class", "playerName")
        playerName.innerHTML = `Name: ${player}`;
       
        let pPG = document.createElement("div")
        pPG.setAttribute("class", "pointsPerGame")
        pPG.innerHTML = "PPG: ";
       
        let aPG = document.createElement("div")
        aPG.setAttribute("class", "assistPerGame")
        aPG.innerHTML = "AAG: ";
       
        let rPG = document.createElement("div")
        rPG.setAttribute("class", "reboundsPerGame")
        rPG.innerHTML = "RPG: ";




//Add button in divs to update stats


let secondBtn = document.createElement("button");
secondBtn.setAttribute('type', 'button');
secondBtn.setAttribute('class', 'StatBtn');
secondBtn.style.backgroundColor = "#12092B";
secondBtn.innerHTML='Update Players Stats';


// addEventListener to click target that brings a prompt and enter stats
secondBtn.addEventListener("click", function() {
let points = prompt('Points Per Game:');
let assist = prompt('Assist Per Game:');
let rebounds = prompt('Rebounds Per Game:');


//DOM event Based validation for only numeric prompt answers
if (points === null || points.trim() === "") {
    return;
  };
  if (assist === null || assist.trim() === "") {
    return;
  };
  if (rebounds === null || rebounds.trim() === "") {
    return;
  };


  let pointOnly = points.replace(/[^0-9]/g,"");
  let assistOnly = assist.replace(/[^0-9]/g,"");
  let reboundsOnly = rebounds.replace(/[^0-9]/g,"");


  if (isNaN(pointOnly) || pointOnly.trim() === "") {
    alert("Invalid input. Please enter a valid number.");
    return;
  };
  if (isNaN(assistOnly) || assistOnly.trim() === "") {
    alert("Invalid input. Please enter a valid number.");
    return;
  };
  if (isNaN(reboundsOnly) || reboundsOnly.trim() === "") {
    alert("Invalid input. Please enter a valid number.");
    return;
  };
  //--------------------------------------------------------
//Append eventListeners variables
pPG.append(points)
aPG.append(assist)
rPG.append(rebounds)
        });


        //Append children--------------------------
        firstParent.append(playerName)
        firstParent.append(pPG)
        firstParent.append(aPG)
        firstParent.append(rPG)
        body.append(firstParent)
        firstParent.append(secondBtn)
       


        })
}


//--Using BOM to link to Comments page with a open and close button------------------------------------------
let myWindow;


let newWindow = () => {
  myWindow = window.open(
    "http:http://127.0.0.1:5500/Bball%20Web%20APP%20DOM%20and%20BOM/",
    "KnightsComments",
    "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
  );
  myWindow.focus();
 
}


let closeWindow = () => {
    myWindow.close();
  }
 


let windowBtn = document.querySelector("#openWindowBtn");
windowBtn.addEventListener("click", newWindow)
   
  let closeWIndow = document.getElementById("closeWindowBtn");
  closeWIndow.addEventListener("click", closeWindow);








//--cloneNode don't want to cooperate------------------------
let firstLogo = document.getElementById('original');
let secondLogo = document.getElementsByClassName('nodeclone');


firstLogo.addEventListener('click', function() {
let secondLogo = firstLogo.cloneNode(false);
document.body.appendChild(secondLogo);
})


