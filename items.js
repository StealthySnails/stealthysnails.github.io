var equipment = [
    {
      name: "Spirit Box",
      price: 50,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 2,
      disp: "spiritBoxDisplay"
    },
    {
      name: "Ghost Writing Book",
      price: 40,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 2,
      disp: "ghostWritingDisplay"
    },
    {
      name: "EMF Reader",
      price: 45,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 2,
      disp: "emfDisplay"
    },
    {
      name: "UV Flashlight",
      price: 35,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 2,
      disp: "uvLightDisplay"
    },
    {
      name: "Video Camera",
      price: 50,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 6,
      disp: "videoCameraDisplay"
    },
    {
      name: "Photo Camera",
      price: 40,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 3,
      disp: "photoCameraDisplay"
    },
    {
      name: "D.O.T.S. Projector",
      price: 65,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 2,
      disp: "dotsDisplay"
    },
    {
      name: "Flashlight",
      price: 30,
      number: 1,
      pricetotal: 0,
      min: 1,
      max: 4,
      disp: "flashlightDisplay"
    },
    {
      name: "Candle",
      price: 15,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "candleDisplay"
    },
    {
      name: "Crucifix",
      price: 30,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 2,
      disp: "crucifixDisplay"
    },
    {
      name: "Glowstick",
      price: 20,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 2,
      disp: "glowstickDisplay"
    },
    {
      name: "Head Mounted Camera",
      price: 60,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "headCamDisplay"
    },
    {
      name: "Lighter",
      price: 10,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 2,
      disp: "lighterDisplay"
    },
    {
      name: "Motion Sensor",
      price: 100,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "motionSensorDisplay"
    },
    {
      name: "Parabolic Microphone",
      price: 50,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 2,
      disp: "paraMicDisplay"
    },
    {
      name: "Salt Shaker",
      price: 15,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 2,
      disp: "saltDisplay"
    },
    {
      name: "Sanity Pills",
      price: 45,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "sanityPillsDisplay"
    },
    {
      name: "Smudge Sticks",
      price: 15,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "smudgeSticksDisplay"
    },
    {
      name: "Sound Sensor",
      price: 80,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "soundSensorDisplay"
    },
    {
      name: "Strong Flashlight",
      price: 50,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 4,
      disp: "strongFlashlightDisplay"
    },
    {
      name: "Thermometer",
      price: 30,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 3,
      disp: "thermoDisplay"
    },
    {
      name: "Tripod",
      price: 15,
      number: 0,
      pricetotal: 0,
      min: 0,
      max: 5,
      disp: "tripodDisplay"
    }
  ];
  var totalPrice = 0;
  
  /* Tried to avoid using an update function
  
  // Loop through and see if input from onclick matches equipment[i][0]. If does, then do something
  
  var spiritBoxValue = document.getElementById("spiritBoxDisplay");
  var ghostWritingValue = document.getElementById("ghostWritingDisplay");
  
  function add(item) {
    for (var i = 0; i < equipment.length; i++) {
      if (equipment[i].name == item) {
        if (equipment[i].number < equipment[i].max) {
          equipment[i].number++;
          equipment[i].id.innerHTML = equipment[i].name + ": " + equipment[i].number;
        }
      }
    }
  }
  
  function subtract(item) {
    for (var i = 0; i < equipment.length; i++) {
      if (equipment[i].name == item) {
        if (equipment[i].number > equipment[i].min) {
          equipment[i].number--;
          equipment[i].id.innerHTML = equipment[i].name + ": " + equipment[i].number;
        }
      }
    }
  }
  */
  
  // Updates the display when called.
  function updateDisplay() {
    // Updates the number of each item
    spiritBoxDisplay.innerHTML = equipment[0].number;
    ghostWritingDisplay.innerHTML = equipment[1].number;
    emfDisplay.innerHTML = equipment[2].number;
    uvLightDisplay.innerHTML = equipment[3].number;
    videoCameraDisplay.innerHTML = equipment[4].number;
    photoCameraDisplay.innerHTML = equipment[5].number;
    dotsDisplay.innerHTML = equipment[6].number;
    flashlightDisplay.innerHTML = equipment[7].number;
    candleDisplay.innerHTML = equipment[8].number;
    crucifixDisplay.innerHTML = equipment[9].number;
    glowstickDisplay.innerHTML = equipment[10].number;
    headCamDisplay.innerHTML = equipment[11].number;
    lighterDisplay.innerHTML = equipment[12].number;
    motionSensorDisplay.innerHTML = equipment[13].number;
    paraMicDisplay.innerHTML = equipment[14].number;
    saltDisplay.innerHTML = equipment[15].number;
    sanityPillsDisplay.innerHTML = equipment[16].number;
    smudgeSticksDisplay.innerHTML = equipment[17].number;
    soundSensorDisplay.innerHTML = equipment[18].number;
    strongFlashlightDisplay.innerHTML = equipment[19].number;
    thermoDisplay.innerHTML = equipment[20].number;
    tripodDisplay.innerHTML = equipment[21].number;
  
    // Calculates the money spent on each item
    for (let i = 0; i < equipment.length; i++) {
      equipment[i].pricetotal = equipment[i].number * equipment[i].price - equipment[i].min * equipment[i].price;
    }
    // Update the display of the money spent on each item
    spiritBoxPriceDisplay.innerHTML         = "Total: $" + equipment[0].pricetotal;
    ghostWritingPriceDisplay.innerHTML      = "Total: $" + equipment[1].pricetotal;
    emfPriceDisplay.innerHTML               = "Total: $" + equipment[2].pricetotal;
    uvLightPriceDisplay.innerHTML           = "Total: $" + equipment[3].pricetotal;
    videoCameraPriceDisplay.innerHTML       = "Total: $" + equipment[4].pricetotal;
    photoCameraPriceDisplay.innerHTML       = "Total: $" + equipment[5].pricetotal;
    dotsPriceDisplay.innerHTML              = "Total: $" + equipment[6].pricetotal;
    flashlightPriceDisplay.innerHTML        = "Total: $" + equipment[7].pricetotal;
    candlePriceDisplay.innerHTML            = "Total: $" + equipment[8].pricetotal;
    crucifixPriceDisplay.innerHTML          = "Total: $" + equipment[9].pricetotal;
    glowstickPriceDisplay.innerHTML         = "Total: $" + equipment[10].pricetotal;
    headCamPriceDisplay.innerHTML           = "Total: $" + equipment[11].pricetotal;
    lighterPriceDisplay.innerHTML           = "Total: $" + equipment[12].pricetotal;
    motionSensorPriceDisplay.innerHTML      = "Total: $" + equipment[13].pricetotal;
    paraMicPriceDisplay.innerHTML           = "Total: $" + equipment[14].pricetotal;
    saltPriceDisplay.innerHTML              = "Total: $" + equipment[15].pricetotal;
    sanityPillsPriceDisplay.innerHTML       = "Total: $" + equipment[16].pricetotal;
    smudgeSticksPriceDisplay.innerHTML      = "Total: $" + equipment[17].pricetotal;
    soundSensorPriceDisplay.innerHTML       = "Total: $" + equipment[18].pricetotal;
    strongFlashlightPriceDisplay.innerHTML  = "Total: $" + equipment[19].pricetotal;
    thermoPriceDisplay.innerHTML            = "Total: $" + equipment[20].pricetotal;
    tripodPriceDisplay.innerHTML            = "Total: $" + equipment[21].pricetotal;
  
    // Display Total Price
    calculateTotalPrice();
    totalPriceDisplay.innerHTML = "Grand Total: $" + totalPrice;
  }
  
  // Increase item by one
  function add(item) {
    for (let i = 0; i < equipment.length; i++) {
      if (equipment[i].name == item) {
        if (equipment[i].number < equipment[i].max) {
          equipment[i].number++;
          updateDisplay();
          //alert("Add Function works!");
        }
        //alert("part of Add Function works!");
      }
      //alert(equipment[i].name);
    }
  }
  
  // Reduce item by one
  function subtract(item) {
    for (let i = 0; i < equipment.length; i++) {
      if (equipment[i].name == item) {
        if (equipment[i].number > equipment[i].min) {
          equipment[i].number--;
          updateDisplay();
          //alert("Subtract Function works!");
        }
        //alert("part of suibtract Function works!");
      }
      //alert(equipment[i].name);
    }
  }
  
  // Increases the item to the max when added. 
  function addAll(item) {
    for (let i = 0; i < equipment.length; i++) {
      if (equipment[i].name == item) {
        if (equipment[i].number < equipment[i].max) {
          equipment[i].number = equipment[i].max;
          updateDisplay();
          //alert("Add Function works!");
        }
        //alert("part of Add Function works!");
      }
      //alert(equipment[i].name);
    }
  }
  
  // Grand Total Price Calculator
  function calculateTotalPrice() {
    totalPrice = 0;
    for (var i = 0; i < equipment.length; i++) {
      itemPrice = equipment[i].number * equipment[i].price - equipment[i].min * equipment[i].price;
      totalPrice += itemPrice;
    }
  }
  
  // Generates a random equipment and adds to the cart.
  function randomEquipment() {
    // Initilize the item.
    var item;
    let canAdd = false;
  
    do {
      // Randomize the equipment
      item = Math.floor(Math.random() * equipment.length);
      // alert(item)
  
      // Check to see if that item can be added.
      if (equipment[item].number < equipment[item].max) {
        equipment[item].number++;
        updateDisplay();
  
        // Tell the user what item was added.
        alert("You got the " + equipment[item].name + ".");
        canAdd = true;
      }
    }
    // If an item wasn't added, it runs again.
    while (canAdd == false);
  }
  
  function randomEquipmentAll() {
    var item;
    let canAdd = false;
  
    do {
      // Randomize the equipment
      item = Math.floor(Math.random() * equipment.length);
      // alert(item)
  
      // Check to see if that item can be added.
      if (equipment[item].number < equipment[item].max) {
        equipment[item].number = equipment[item].max;
        updateDisplay();
  
        // Tell the user what item was added.
        alert("You got the " + equipment[item].name + ".");
  
        canAdd = true;
      }
    }
    // If an item wasn't added, it runs again.
    while (canAdd == false);
  }