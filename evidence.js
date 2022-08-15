function checkAddress(checkbox)
{
    if (checkbox.checked)
    {
        alert("a");
    }
}


function updateEvidence() {
    // Get the checkbox
    var emfBox = document.getElementById("emf-box");
    // Get the output text (This is from the sample)
     var wraithText = document.getElementById("wraithtext");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      wraithText.style.color = "blue";
    } else {
        wraithText.style.color = "red";
    }
  }
