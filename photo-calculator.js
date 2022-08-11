var photoScoreTotal = 0;
var moneyTotal = 0;

var photoTypes = [
    {
        name: "blankPhoto",
        increments: 0,
        twoStar: 0
    },
    {
        name: "ghostPhoto",
        increments: 10,
        twoStar: 90
    },
    {
        name: "bonePhoto",
        increments: 10,
        twoStar: 60
    },
    {
        name: "cursedObjectPhoto",
        increments: 15,
        twoStar: 45
    },
    {
        name: "fingerPhoto",
        increments: 15,
        twoStar: 35
    },
    {
        name: "footprintPhoto",
        increments: 10,
        twoStar: 30
    },
    {
        name: "interactionPhoto",
        increments: 10,
        twoStar: 30
    },
    {
        name: "deadBodyPhoto",
        increments: 10,
        twoStar: 20
    },
    {
        name: "dirtyWaterPhoto",
        increments: 10,
        twoStar: 25
    }]

function updateDisplay() {
    if (photoScoreTotal == 0) {
        moneyTotal = 0;
    }
    else if (0 < photoScoreTotal < 50) {
        moneyTotal = 10;
    }
    else if (50 <= photoScoreTotal < 100) {
        moneyTotal = 15;
    }
    else if (100 <= photoScoreTotal < 200) {
        moneyTotal = 20;
    }
    else if (200 <= photoScoreTotal < 300) {
        moneyTotal = 25;
    }
    else if (300 <= photoScoreTotal < 400) {
        moneyTotal = 30;
    }
    else if (400 <= photoScoreTotal < 500) {
        moneyTotal = 35;
    }
    else if (500 <= photoScoreTotal <= 580) {
        moneyTotal = 40;
    }

    photoMoney.innerHTML = "Photo Money: $" + moneyTotal;
}

function calcPhoto(photoType, photoStar) {
    // document.getElementById(photoType).value;
    // alert(photo1Value + "photo1 Value");
    // alert(photoType + "photo Type");
    alert(1);
    // updateDisplay();
}

// Test

var albania = ["Tirana","Durres","Vlore","Shkoder"];
var kosovo = ["Prishtina","Mitrovica","Peje","Gjakove"];
var germany = ["Berlin","Frankfurt","Hannover","Bonn"];


document.getElementById("1").addEventListener("change", function(e){
        var select2 = document.getElementById("2");
        select2.innerHTML = "";
        var aItems = [];
    if(this.value == "2"){
        aItems = kosovo;
    } else if (this.value == "3") {
        aItems = germany;
    } else if(this.value == "1") {
        aItems = albania;
    }
    for(var i=0,len=aItems.length; i<len;i++) {
        var option = document.createElement("option");
        option.value= (i+1);
        var textNode = document.createTextNode(aItems[i]);
        option.appendChild(textNode);
        select2.appendChild(option);
    }

}, false);
