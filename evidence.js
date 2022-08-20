function checkAddress(checkbox)
{
    if (checkbox.checked)
    {
        alert("a");
    }
}


function updateEvidence() {
    // Get the 7 evidence checkboxes
    var emfCheckBox = document.getElementById("emf-box");
    var fingerprintsCheckBox = document.getElementById("fingerprints-box");
    var writingCheckBox = document.getElementById("writing-box");
    var tempCheckBox = document.getElementById("temp-box");
    var dotsCheckBox = document.getElementById("dots-box");
    var orbCheckBox = document.getElementById("orb-box");
    var spiritCheckBox = document.getElementById("spirit-box");

    // Get ghost html containers
     var spiritText = document.getElementById("spirit-Text");
     var poltergeistText = document.getElementById("poltergeist-Text");
     var mareText = document.getElementById("mare-Text");
     var demonText = document.getElementById("demon-Text");
     var yokaiText = document.getElementById("yokai-Text");
  
    // If the checkbox is checked, display the output text
    if (emfCheckBox.checked == true){
        spiritText.style.color = "blue";
        poltergeistText.style.color = "blue";
        mareText.style.color = "lightgray";
        demonText.style.color = "lightgray";
        yokaiText.style.color = "lightgray";
    } else {
        spiritText.style.color = "lightgray";
        poltergeistText.style.color = "lightgray";
        mareText.style.color = "blue";
        demonText.style.color = "blue";
        yokaiText.style.color = "blue";
    }


    //Look into radio checkboxes for a yes, no and unknown state. Thus can have the properties and update each funciton
    
  }
