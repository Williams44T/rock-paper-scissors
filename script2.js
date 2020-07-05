// GLOBAL VARIABLES
let playerAvatar = "";
let playerName = "";
let npcAvatar = "";
let battlefield = "";
let rounds = "";
let stageOne = document.getElementById("stage1");
let stageTwo = document.getElementById("stage2");
let stageThree = document.getElementById("stage3");
let stageFour = document.getElementById("stage4");
let playerAvatarOptions = document.getElementsByName("playerAvatarOptions");
let npcAvatarOptions = document.getElementsByName("npcAvatarOptions");
let battlefieldOptions = document.getElementsByName("battlefieldOptions");

// GENERAL FLOW
(function enterSite() {
    prepForReveal(stageTwo, stageOne);
    revealElement(stageOne, 350);
})();

let submitStageOne = document.getElementById("submitPlayerAvatar");
submitStageOne.onclick = function() {completeStageOne()};

function completeStageOne() {
    // to detect which avatar the player chose
    playerAvatar = findRadioSelection(playerAvatarOptions);
    playerName = document.getElementById("playerName").value;
    // to make sure an avatar and name was chosen before moving to stage two
    if(playerAvatar === "" || playerName === "") {
        alert("You must give your name and select your Champion before submitting.");
    } else {
        hideElement(stageOne, 300);
        setTimeout(revealStageTwo, 1500);
    }
}

function revealStageTwo() {
    prepForReveal(stageOne, stageTwo);
    // to disable the player chosen avatar from being selected in stage two
    let chosenPlayer = getArrayPosition(npcAvatarOptions, playerAvatar);
    chosenPlayer.id = "playerAvatar";
    revealElement(stageTwo, 300);
}

let submitStageTwo = document.getElementById("submitNpcAvatar");
submitStageTwo.onclick = function() {completeStageTwo()};

function completeStageTwo() {
    // to detect which avatar the player chose
    npcAvatar = findRadioSelection(npcAvatarOptions);
    // to make sure an avatar was chosen before moving to stage three
    if(npcAvatar === "") {
        alert("You must select your opponent before submitting.");
    } else {
        hideElement(stageTwo, 300);
        setTimeout(revealStageThree, 1500);
    }
}

function revealStageThree() {
    prepForReveal(stageTwo, stageThree);
    revealElement(stageThree, 300);
}

let submitStageThree = document.getElementById("submitRoundCount");
submitStageThree.onclick = function() {completeStageThree()};

function completeStageThree() {
    // to detect which battlefield the player chose
    battlefield = findRadioSelection(battlefieldOptions);
    rounds = document.getElementById("roundCount").value;
    // to make sure a battlefield and round count was chosen, and
    // that the round count is an actual number, before moving to stage four
    if(battlefield === "" || rounds === "" || isNaN(rounds)) {
        alert("You must select a battlefield and round count before submitting.\nThe round count must be a number.");
    } else {
        hideElement(stageThree, 300);
        setTimeout(revealStageFour, 1500);
    }
}   

function revealStageFour() {
    prepForReveal(stageThree, stageFour);
    // also prepping the background battlefield to be revealed
    document.body.style.opacity = 0;
    let chosenBattlefield = getArrayPosition(battlefieldOptions, battlefield);
    let background = window.getComputedStyle(chosenBattlefield.nextElementSibling).getPropertyValue("background-image");
    document.body.style.backgroundImage = background;
    revealElement(stageFour, 300);
    revealElement(document.body, 300);
}

// FUNCTIONS DEFINED
function prepForReveal(outgoingElement, incomingElement) {
    outgoingElement.style.visibility = "hidden";
    outgoingElement.style.position = "absolute";
    incomingElement.style.visibility = "visible";  
    incomingElement.style.position = "relative";
    console.log("prepped " + incomingElement + " for reveal");
}

function revealElement(element, time) {
    let i = 0;
    let j = time;
    let interval = setInterval(reveal,1);
    function reveal() {
        if (i == j) {
            clearInterval(interval);
        } else {
            i++;
            element.style.opacity = i/j;
        }
        console.log(`revealing ${element}`);
    }
}

function hideElement(element, time) {
    let j = time;
    let i = j;
    let interval = setInterval(hide,1);
    function hide() {
        if (i == 0) {
            clearInterval(interval);
        } else {
            i--;
            element.style.opacity = i/j;
        }
        console.log(`hiding ${element}`);
    }
}

function findRadioSelection(array) {
    let i = 0;
    while (i < array.length) {
        if (array[i].checked) {
            let selection = array[i].value;
            return selection;
        } else {
            i++;
        }
    }
}

function getArrayPosition(array, searchkey) {
    let i = 0;
    while (i < array.length) {
        if (searchkey === array[i].value) {
            let position = array[i];
            return position;
        } else {
            i++;
        }
    }
}