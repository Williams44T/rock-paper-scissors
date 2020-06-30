// Set global variables

let playerAvatar = "";
let playerName = "";
let npcAvatar = "";
let battlefield = "";
let rounds = "";
let stageOne = document.getElementById("stage1");
let stageTwo = document.getElementById("stage2");
let stageThree = document.getElementById("stage3");
let stageFour = document.getElementById("stage4");

// Stage one will be revealed by increasing opacity upon entering the webpage
(function() {
    stageOne.style.visibility = "visible";
    stageOne.style.position = "relative";
    let i = 0;
    let j = 500;
    let revealStageInterval = setInterval(forStageOne,1);
    function forStageOne() {
        if (i == j) {
            clearInterval(revealStageInterval);
        } else {
            i++;
            stageOne.style.opacity = i/j;
        }
        console.log("revealing stage one");
    }
})();

function setPlayerAvatar() {
    let playerAvatars = document.getElementsByName("playerAvatarOptions");
    let i = 0;
    while (i < playerAvatars.length) {
        if (playerAvatars[i].checked) {
            playerAvatar = playerAvatars[i].value;
            break;
        } else {
            i++;
        }
    }
    checkPlayerAvatar();
}

function checkPlayerAvatar() {
    if (playerAvatar === "") {
        alert("You must choose your champion\nand offer a name before hitting submit.");
    } else {
        setPlayerName();
    }
}

function setPlayerName() {
    playerName = document.getElementById("playerName").value;
    checkPlayerName();
}

function checkPlayerName() {
    if (playerName === "") {
        alert("You must choose your champion\nand offer a name before hitting submit.");
    } else {
        console.log(`Player Avatar is ${playerAvatar}`);
        console.log(`Player Name is ${playerName}`);
        hideStageOne();
    }
}

function hideStageOne() {
    let j = 200;
    let i = j;
    let hideStageInterval = setInterval(forStageOne,1);
    function forStageOne() {
        if (i == 0) {
            clearInterval(hideStageInterval);
        } else {
            i--;
            stageOne.style.opacity = i/j;
        }
        console.log("hiding stage one");
    }
    let stageRevealInterval = setTimeout(revealStageTwo,1000);
}

function revealStageTwo() {
    stageOne.style.visibility = "hidden";
    stageOne.style.position = "absolute";
    stageTwo.style.visibility = "visible";  
    stageTwo.style.position = "relative";
    let i = 0;
    let j = 200;
    let revealStageInterval = setInterval(reveal,1);
    function reveal() {
        if (i == j) {
            clearInterval(revealStageInterval);
        } else {
            i++;
            stageTwo.style.opacity = i/j;
        }
        console.log("revealing stage two");
    }
    disablePlayerAvatar();
}

// disabling the player chosen avatar so it can't be chosen as the NPC
function disablePlayerAvatar() {
    let npcAvatars = document.getElementsByName("npcAvatarOptions");
    let i = 0;
    while (i < npcAvatars.length) {
        if (playerAvatar === npcAvatars[i].value) {
            npcAvatars[i].id = "playerAvatar";
            break;
        } else {
            i++;
        }
    }
}

function setNpcAvatar() {
    let npcAvatars = document.getElementsByName("npcAvatarOptions");
    let i = 0;
    while (i < npcAvatars.length) {
        if (npcAvatars[i].checked) {
            npcAvatar = npcAvatars[i].value;
            break;
        } else {
            i++
        }
    }
    checkNpcAvatar();
}

function checkNpcAvatar() {
    if (npcAvatar === "") {
        alert("You must choose your rival before hitting submit.\nIt cannot be the same as your champion.");
    } else {
        console.log(`Opponent is ${npcAvatar}`);
        hideStageTwo();
    }
}

function hideStageTwo() {
    let j = 200;
    let i = j;
    let hideStageInterval = setInterval(hide,1);
    function hide() {
        if (i == 0) {
            clearInterval(hideStageInterval);
        } else {
            i--;
            stageTwo.style.opacity = i/j;
        }
        console.log("hiding stage two");
    }
    let stageRevealInterval = setTimeout(revealStageThree,1000);
}

function revealStageThree() {
    stageTwo.style.visibility = "hidden";
    stageTwo.style.position = "absolute";
    stageThree.style.visibility = "visible";  
    stageThree.style.position = "relative";
    let i = 0;
    let j = 200;
    let revealStageInterval = setInterval(reveal,1);
    function reveal() {
        if (i == j) {
            clearInterval(revealStageInterval);
        } else {
            i++;
            stageThree.style.opacity = i/j;
        }
        console.log("revealing stage three");
    }
}

function setBattlefield() {
    let battlefields = document.getElementsByName("battlefieldOptions");
    let i = 0;
    while (i < battlefields.length) {
        if (battlefields[i].checked) {
            battlefield = battlefields[i].value;
            break;
        } else {
            i++
        }
    }
    checkBattlefield();
}

function checkBattlefield() {
    if (battlefield === "") {
        alert("You must choose your battlefield\nand the number of rounds before hitting submit.");
    } else {
    setRoundCount();
    }
}

function setRoundCount() {
    rounds = document.getElementById("roundCount").value;
    checkRoundCount();
}

function checkRoundCount() {
    if (rounds === "" || isNaN(rounds)) {
        alert("You must choose your battlefield\nand the number of rounds before hitting submit.");
    } else {
        console.log(`The battle will be fought at ${battlefield}`);
        console.log(`${rounds} rounds will be played`);
        hideStageThree();
    }
}

function hideStageThree() {
    let j = 200;
    let i = j;
    let hideStageInterval = setInterval(hide,1);
    function hide() {
        if (i == 0) {
            clearInterval(hideStageInterval);
        } else {
            i--;
            stageThree.style.opacity = i/j;
        }
        console.log("hiding stage three");
    }
    let battlefieldRevealInterval = setTimeout(applyBattlefield,1000);
    // let stageRevealInterval = setTimeout(revealStageFour,5000);
}

function revealStageFour() {
    stageThree.style.visibility = "hidden";
    stageThree.style.position = "absolute";
    stageFour.style.visibility = "visible";  
    stageFour.style.position = "relative";
    let i = 0;
    let j = 200;
    let revealStageInterval = setInterval(reveal,1);
    function reveal() {
        if (i == j) {
            clearInterval(revealStageInterval);
        } else {
            i++;
            stageFour.style.opacity = i/j;
        }
        console.log("revealing stage four");
    }
    applyBattlefield();
}

function applyBattlefield() {
    let html = document.getElementsByTagName("html");
    let battlefields = document.getElementsByName("battlefieldOptions");
    let i = 0;
    while (i < battlefields.length) {
        if (battlefield === battlefields[i].value) {
            let battlefieldLabel = battlefields[i].nextElementSibling;
            let labelStyles = window.getComputedStyle(battlefieldLabel);
            background = labelStyles.getPropertyValue("background-image");
            stageThree.style.visibility = "hidden";
            stageThree.style.position = "absolute";
            stageFour.style.visibility = "visible";  
            stageFour.style.position = "relative";
            document.body.style.opacity = 0;
            document.body.style.backgroundImage = background;
            revealBattlefield();
            break;
        } else {
            i++;
        }
    }
}

function revealBattlefield() {
    let i = 0;
    let j = 400;
    let revealBattlefieldInterval = setInterval(reveal,1);
    function reveal() {
        if (i == j) {
            clearInterval(revealBattlefieldInterval);
        } else {
            i++;
            document.body.style.opacity = i/j;
            stageFour.style.opacity = i/j;
        }
        console.log("revealing stage four");
    }
}