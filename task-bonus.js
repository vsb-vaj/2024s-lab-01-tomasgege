// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {
    // ... write code ...
    let fet = "";
    for(let i = 1; i <= length; i++){
      for(let j = 1; j <= i; j++){
        fet += "* ";
      }
      fet += "\n";
    }
    console.log(fet);
};
drawTriangle();

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...
  let fet = "";
  for(let i = 0; i < word.length; i++){
    for(let j = 0; j < word.length - i - 1; j++){
      fet += "* ";
    }
    for(let j = word.length - i - 1; j < word.length; j++){
      fet += word[j].toUpperCase() + ((j < word.length - 1) ? " " : "");
    }
    fet += "\n";
  }
  console.log(fet);

};
drawJavascriptWord();


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
  let topSpeedVehicles = [];
  for(let i = 0; i < vehicles.length; i++){
    let vehicle = vehicles[i];
    let topSpeed = Math.max(...vehicle.measuredSpeeds);
    topSpeedVehicles.push({ name: vehicle.name, topSpeed: topSpeed});
  }
  console.log(topSpeedVehicles);
};
const vehicles = [
     { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
     { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
     { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
   ];
getVehiclesAndTopSpeed(vehicles);