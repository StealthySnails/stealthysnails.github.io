// $(".btn").click(function() {
  
//     var lable = $(".btn").text().trim();
 
//     if(lable == "Hide") {
//       $(".btn").text("Show");
//       $(".myText").hide();
//     }
//     else {
//       $(".btn").text("Hide");
//       $(".myText").show();
//     }
     
//    });


   var currentState = 0;

   function toggleStates() {    
    button1 = document.getElementById("buttonTest");
    currentState += 1;
    if (currentState % 3 == 0) {
        // Undefined
        button1.style.textDecoration = "none";
        button1.innerHTML = "State " + currentState;
        button1.style.backgroundColor = "#ffffffe0";
        //button1.toggleClass("circle");
    }
    else if (currentState % 3 == 1) {
        // This is the evidence
        button1.style.textDecoration = "none";
        button1.innerHTML = "State " + currentState;
        button1.style.backgroundColor = "#03c04a";
        //button1.toggleClass("circle");
    }
    else if (currentState % 3 == 2) {
        // This isn't the evidence
        button1.style.textDecoration = "line-through";
        button1.innerHTML = "State " + currentState;
        button1.style.backgroundColor = "#ffffffe0";
        //button1.toggleClass("circle");
    }
    else {
        alert("currentState = " + currentState);
    }
   }




// All states start at zero. If state % 3 == 1 is neutral; == 2 is the evidence; == 3 is not the evidence. 
// var emf5State = 0;
// var fingerprintsState = 0;
// var spiritBoxState = 0;
// var dotsState = 0;
// var ghostWritingState = 0;
// var ghostOrbsState = 0;
// var freezingTempsState = 0;

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
//var btnEvidence; not used

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


    // switch (evidenceChanging) {
    //     case evidenceList[0]:
    //         //What to do if EMF
    //         btnID = document.getElementById("emf5Button");
    //         btnState = emf5State;
    //         break;
    //     case evidenceList[1]:
    //         // what to do if DOTS
    //         btnID = document.getElementById("dotsButton");
    //         btnState = dotsState;
    //         break;
    //     case evidenceList[2]:
    //         // what to do if fingerprints
    //         btnID = document.getElementById("fingerprintsButton");
    //         btnState = fingerprintsState;
    //         break;
    //     case evidenceList[3]:
    //         // what to do if ghost orbs
    //         btnID = document.getElementById("ghostOrbsButton");
    //         btnState = ghostOrbsState;
    //         break;
    //     case evidenceList[4]:
    //         // what to do if ghost writing
    //         btnID = document.getElementById("ghostWritingButton");
    //         btnState = ghostWritingState;
    //         break;
    //     case evidenceList[5]:
    //         // what to do if spirit box
    //         btnID = document.getElementById("spiritBoxButton");
    //         btnState = spiritBoxState;
    //         break;
    //     case evidenceList[6]:
    //         // what to do if freezing
    //         btnID = document.getElementById("freezingTempsButton");
    //         btnState = freezingTempsState;
    //         break;
    // }
    // btnState += 1;
    // updateEvidence();
    // switch (evidenceChanging) { // Updates the evidenceState to the buttonState value. 
    //     case evidenceList[0][0]:
    //         // what to do if fingerprints
    //         emf5State = btnState;
    //         break;
    //     case evidenceList[1][0]:
    //         // what to do if DOTS
    //         dotsState = btnState;
    //         break;
    //     case evidenceList[2][0]:
    //         // what to do if fingerprints
    //         fingerprintsState = btnState;
    //         break;
    //     case evidenceList[3][0]:
    //         // what to do if ghost orbs
    //         ghostOrbsState = btnState;
    //         break;
    //     case evidenceList[4][0]:
    //         // what to do if ghost writing
    //         ghostWritingState = btnState;
    //         break;
    //     case evidenceList[5][0]:
    //         // what to do if spirit box
    //         spiritBoxState = btnState;
    //         break;
    //     case evidenceList[6][0]:
    //         // what to do if freezing
    //         freezingTempsState = btnState;
    //         break;
    // }
    // updateGhosts();

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
   // Change the function to work with a parameter tied to each button instead of a function for each different button. So what would need to change for each button? have a parameter for each
   // Have a circle element that is added and removed for each thing