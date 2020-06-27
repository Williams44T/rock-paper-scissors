// Set global variables

let playerAvatar = "";
let playerName = "";
let npcAvatar = "";
let stageOne = document.getElementById("stage1");
let stageTwo = document.getElementById("stage2");
let stageThree = document.getElementById("stage3");
let stageFour = document.getElementById("stage4");

// Stage one will be revealed by increasing opacity upon entering the webpage
(function() {
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
    checkPlayerName(playerName);
}

function checkPlayerName() {
    if (playerName === "") {
        alert("You must choose your champion\nand offer a name before hitting submit.");
    } else {
         hideStage(stageOne);
    }
}

function hideStage(stage) {
    let j = 200;
    let i = j;
    let hideStageInterval = setInterval(forStageOne,1);
    function forStageOne() {
        if (i == 0) {
            clearInterval(hideStageInterval);
        } else {
            i--;
            stage.style.opacity = i/j;
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
    let i = 1000;
    // let i = stageTwo.style.left;
    stageTwo.style.left = i;
    let revealStageInterval = setInterval(reveal,10);
    function reveal() {
        if (i==0) {
            clearInterval(revealStageInterval);
        } else{
            i -= 10;
            stageTwo.style.left= i +"px";
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

function setNpcAvatar () {
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
        revealStageThree();
    }
}

function revealStageThree() {
    document.getElementById("stage2").style.visibility = "hidden";
    document.getElementById("stage2").style.position = "absolute";
    document.getElementById("stage3").style.visibility = "visible";
    document.getElementById("stage3").style.position = "relative";
}