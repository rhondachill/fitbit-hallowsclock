import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";


// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time & date

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];
let months = ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sept",  "Oct",  "Nov", "Dec"];

clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  
  myDate.text  =  days[evt.date.getDay()] + ", "
                    + months[evt.date.getMonth()]
                    + " " + evt.date.getDate();

  
}
                                                                            
//Handle the <Text> element, and the line
const powerLabel = document.getElementById("powerLabel");

//Refresh the battery, so that everything will work
function refresh_myPower() {
  //Show the current charge 
  var power = battery.chargeLevel
    powerLabel.text = power + "%"  
         
  }
;

setInterval(refresh_myPower, 1000);


//HR sensor
import { HeartRateSensor } from "heart-rate";
//Activity
import { today } from 'user-activity';
//Styles
import document from "document";
//Clock
import clock from "clock";
//Battery
import { battery } from "power";
import { charger } from "power";
//Time and Date
import * as util from "../common/utils";
import { preferences } from "user-settings";
import * as battery from "battery"

//Text Elements
let myHR = document.getElementById("myHR");
let mySteps = document.getElementById("mySteps");
let myCalories = document.getElementById("myCalories");
let myAzm = document.getElementById("myAzm")
let myFloors = document.getElementById("myFloors")
let myTime = document.getElementById("myTime")
let myDate = document.getElementById("myDate")
let powerLabel = document.getElementById("powerLabel")

//Cycle View JS
import document from "document";

// Get a handle on the cycleview
const statsCyle = document.getElementById("statsCyle");

// Get an array of cycle-items
const items = statsCyle.getElementsByClassName("cycle-item");

// How many items
console.log(items.length);

// Select a specific item by index
statsCyle.value = 3;

// Get the current selected item index
console.log(statsCyle.value);

// Hide a specific item by index
items[2].style.display = "none";


//--- Add step monitor
function refresh_mySteps() {
mySteps.text = "Steps: " + today.adjusted.steps
  
};

setInterval(refresh_mySteps, 100); 

// Add calories
function refresh_myCalories() {
  myCalories.text = "Calories: " + today.adjusted.calories 
}; 

setInterval(refresh_myCalories, 100);


//Add floors
function refresh_myelevationGain() {
  myFloors.text = "Floors: " + today.adjusted.elevationGain 
};

setInterval(refresh_myelevationGain, 20);


//Add HR-------------------
var hrm = new HeartRateSensor();

hrm.start();

function refresh_myHR() {
    myHR.text = hrm.heartRate ? hrm.heartRate : "--" ;
  
};

setInterval(refresh_myHR, 50);


//ACTIVE ZONE REQUEST PERMISSIONS
import { me as appbit } from "appbit";
import { primaryGoal } from "user-activity";

if (appbit.permissions.granted("access_activity")) {
   console.log(`User's primary activity goal is ${primaryGoal}`);
}

//AZM
import { goals, today } from "user-activity";
console.log(`${goals.activeZoneMinutes.total} activeZoneMinutes Goal`);

goals.addEventListener("reachgoal", (evt) => {
   if (today.adjusted.activeZoneMinutes.total >= goals.activeZoneMinutes.total)
   {
     // AZM Goal has been met
  }
});

console.log(`${today.local.activeZoneMinutes.fatBurn}`);
console.log(`${today.local.activeZoneMinutes.cardio}`);
console.log(`${today.local.activeZoneMinutes.peak}`);
console.log(`${today.adjusted.activeZoneMinutes.total}`);

// REFRESH AZM
function refresh_myAzm() {
  myAzm.text = "Active: " + today.adjusted.activeZoneMinutes.total 
};
  setInterval(refresh_myAzm, 1000);
