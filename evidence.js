const evidenceList = [
    ["EMF 5",           "emf5Button",           emf5State = 0],
    ["DOTS",            "dotsButton",           dotsState = 0],
    ["Fingerprints",    "fingerprintsButton",   fingerprintsState = 0],
    ["Ghost Orbs",      "ghostOrbsButton",      ghostOrbsState = 0],
    ["Ghost Writing",   "ghostWritingButton",   ghostWritingState = 0],
    ["Spirit Box",      "spiritBoxButton",      spiritBoxState = 0],
    ["Freezing Temps",  "freezingTempsButton",  freezingTempsState = 0]
]
const ghostList = [ 
    ["Spirit",      "spiritButton",         evidenceList[0][0], evidenceList[4][0], evidenceList[5][0]],
    ["Wraith",      "wraithButton",         evidenceList[0][0], evidenceList[1][0], evidenceList[5][0]],
    ["Phantom",     "phantomButton",        evidenceList[0][0], evidenceList[2][0], evidenceList[5][0]],
    ["Poltergeist", "poltergeistButton",    evidenceList[2][0], evidenceList[4][0], evidenceList[5][0]],
    ["Banshee",     "bansheeButton",        evidenceList[1][0], evidenceList[2][0], evidenceList[3][0]],
    ["Jinn",        "jinnButton",           evidenceList[0][0], evidenceList[2][0], evidenceList[6][0]],
    ["Mare",        "mareButton",           evidenceList[3][0], evidenceList[4][0], evidenceList[5][0]],
    ["Revenant",    "revenantButton",       evidenceList[3][0], evidenceList[4][0], evidenceList[6][0]],
    ["Shade",       "shadeButton",          evidenceList[0][0], evidenceList[4][0], evidenceList[6][0]],
    ["Demon",       "demonButton",          evidenceList[2][0], evidenceList[4][0], evidenceList[6][0]],
    ["Yurei",       "yureiButton",          evidenceList[1][0], evidenceList[3][0], evidenceList[6][0]],
    ["Oni",         "oniButton",            evidenceList[0][0], evidenceList[1][0], evidenceList[6][0]],
    ["Yokai",       "yokaiButton",          evidenceList[1][0], evidenceList[3][0], evidenceList[5][0]],
    ["Hantu",       "hantuButton",          evidenceList[2][0], evidenceList[3][0], evidenceList[6][0]],
    ["Goryo",       "goryoButton",          evidenceList[0][0], evidenceList[1][0], evidenceList[2][0]],
    ["Myling",      "mylingButton",         evidenceList[0][0], evidenceList[2][0], evidenceList[4][0]],
    ["Onryo",       "onyroButton",          evidenceList[3][0], evidenceList[5][0], evidenceList[6][0]],
    ["The Twins",   "twinsButton",          evidenceList[0][0], evidenceList[5][0], evidenceList[6][0]],
    ["Raiju",       "raijuButton",          evidenceList[0][0], evidenceList[1][0], evidenceList[3][0]],
    ["Obake",       "obakeButton",          evidenceList[0][0], evidenceList[2][0], evidenceList[3][0]],
    ["The Mimic",   "mimicButton",          evidenceList[2][0], evidenceList[5][0], evidenceList[6][0], evidenceList[3][0]],    
    ["Moroi",       "moroiButton",          evidenceList[4][0], evidenceList[5][0], evidenceList[6][0]],
    ["Deogen",      "deogenButton",         evidenceList[1][0], evidenceList[4][0], evidenceList[5][0]],
    ["Thaye",       "thayeButton",          evidenceList[1][0], evidenceList[3][0], evidenceList[4][0]],
]

var evidenceChanging;
var btnState;
var btnID;

function evidenceState(evidenceChanging) {
    for (i = 0; i < evidenceList.length; i++) {
        if (evidenceChanging == evidenceList[i][0]) {
            btnID = document.getElementById(evidenceList[i][1]);
            btnState = evidenceList[i][2];
        }
    }
    btnState += 1;
    updateEvidence();
    for (i = 0; i < evidenceList.length; i++) {
        if (evidenceChanging == evidenceList[i][0]) {
            evidenceList[i][2] = btnState;
        }
    }
    updateGhosts(); 
}

function updateEvidence() {
    if (btnState % 3 == 0) { // Unknown if this is or is not the evidence
        btnID.style.textDecoration = "none";
        btnID.style.backgroundColor = "#ffffffe0";
        //btnID.toggleClass("circle");

        // For testing purposes
        // btnID.innerHTML = "State " + currentState;
    }
    else if (btnState % 3 == 1) { // This is the evidence
        btnID.style.textDecoration = "none";
        btnID.style.backgroundColor = "#03c04a";
        //btnID.toggleClass("circle");

        // For testing purposes
        //btnID.innerHTML = "State " + currentState;
    }
    else if (btnState % 3 == 2) { // This isn't the evidence
        btnID.style.textDecoration = "line-through";
        btnID.style.backgroundColor = "#ffffffe0";
        //btnID.toggleClass("circle");

        // For testing purposes
        // btnID.innerHTML = "State " + currentState;
    }
    else {
        // This shouldn't happen so this helps solve any problems if they were to occur. 
        alert("btnState = " + btnState);
    }
}

function updateGhosts() {
    // Lots of if statements with and clauses for each ghost to see if they should appear or be ruled out based on the evidence state value.
    
    //alert("Update Ghosts works");

    // Variable to track if a ghost does have an evidence.

    var btnSelected = 0;
    for (i = 0; i < evidenceList.length; i++) {
        if (evidenceList[i][2] % 3 == 1) {
            btnSelected += 1;
        }
    }
    //alert("btnSelected = " + btnSelected);

    var evidenceSelected = 0;
    var ghostButton;    
    for (i = 0; i < ghostList.length; i++) { // i cycles through all the ghosts
        //if (i == 0) {alert("i works");}
        ghostButton = document.getElementById(ghostList[i][1]);
        for (j = 2; j < ghostList[i].length; j++) { // j > 2 is the evidence to the ghosts
            //if (j == 3 && i == 0) {alert("j works");}
            for (k = 0; k < evidenceList.length; k++) { // k cycles through the evidences
                //if (k == 0 && j == 3 && i == 0) {alert("k works");}
                if (ghostList[i][j] == evidenceList[k][0] && evidenceList[k][2] % 3 == 1) { // If true, then there is that evidence in that ghost
                    evidenceSelected += 1;
                }
                if (ghostList[i][j] == evidenceList[k][0] && evidenceList[k][2] % 3 == 2) {
                    evidenceSelected -= 5;
                }
            }            
        }
        if (evidenceSelected >= btnSelected) {
            ghostButton.style.color = "#000000"; 
            //alert(ghostList[i][0] + " has an evidence selected.");
            //ghostList[i][1].style.backgroundColor = "#03c04a";
        }
        else if (evidenceSelected < btnSelected) { // This is where it fades the ghosts who don't have evidence selected. 
            //alert(ghostList[i][0] + " has no evidence selected.");
            ghostButton.style.color = "#ffffff75";
        }
        evidenceSelected = 0;
    }
}