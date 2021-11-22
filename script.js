"use strict";
const svgNS = "http://www.w3.org/2000/svg";
// -------------------------------------global var-------------------------------------
var angle = 0;
var radius = 200;
var greenCenterX;
var greenCenterY;
var lineHour = document.createElementNS(svgNS, "line");
var lineMinute = document.createElementNS(svgNS, "line");
var lineSecond = document.createElementNS(svgNS, "line");

//     ------------------------- FUNCTION create svg element--------------------------------------
function drawSVGElements() {
  const svg = document.getElementById("svg");
  const w = parseFloat(svg.getAttributeNS(null, "width"));
  const h = parseFloat(svg.getAttributeNS(null, "height"));
  // var greenCenterX;
  // var greenCenterY;
  //    ----------------------------create big yellow circle--------------------------------
  var yellowCircle = document.createElementNS(svgNS, "circle");
  yellowCircle.setAttributeNS(null, "cx", w / 2);
  yellowCircle.setAttributeNS(null, "cy", h / 2);
  yellowCircle.setAttributeNS(null, "r", w > h ? h / 2 : w / 2);
  yellowCircle.setAttributeNS(null, "fill", "#fcca66");
  yellowCircle.setAttributeNS(null, "stroke", "none");
  svg.append(yellowCircle);

  var centerX = yellowCircle.getAttributeNS(null, "cx");
  var centerY = yellowCircle.getAttributeNS(null, "cy");
  // console.log(`centerX ${centerX}`);
  // console.log(`centerY ${centerY}`);

  //     -------------------------------create little green circles----------------------
  for (let i = 1; i < 13; i++) {
    let green = document.createElementNS(svgNS, "circle");
    green.setAttributeNS(null, "r", w > h ? h / 15 : w / 15);
    green.setAttributeNS(null, "fill", "#48b382");
    green.setAttributeNS(null, "stroke", "none");
    svg.append(green);
    // ==================== get radius & Radians======================================
    angle += 30;
    var angleRadians = (parseFloat(angle) / 180) * Math.PI;
    // console.log(`angleRadians ${angleRadians}`);

    //   =============================get coordinates=============================
    greenCenterX = +centerX + radius * Math.sin(angleRadians);
    greenCenterY = centerY - radius * Math.cos(angleRadians);
    // console.log(
    //   `radius*Math.sin(angleRadians) ${radius * Math.sin(angleRadians)}`
    // );
    // console.log(
    //   `radius*Math.cos(angleRadians) ${radius * Math.cos(angleRadians)}`
    // );
    // console.log(`greenCenterX ${greenCenterX}`);
    // console.log(`greenCenterY ${greenCenterY}`);

    //     set coordinate for green there ===============================================
    green.setAttributeNS(null, "cx", greenCenterX);
    green.setAttributeNS(null, "cy", greenCenterY);
    // console.log(
    //   `yellowCircle.getAttributeNS ${green.getAttributeNS(null, "cx")}`
    // );

    //         =============get numbers============================================
    var dataNumber = document.createTextNode(i);
    var textNum = document.createElementNS(svgNS, "text");
    textNum.setAttributeNS(null, "x", greenCenterX);
    textNum.setAttributeNS(null, "y", greenCenterY + 10);
    textNum.setAttributeNS(null, "font-size", "36");
    textNum.setAttributeNS(null, "font-weight", "700");
    textNum.setAttributeNS(null, "fill", "black");
    textNum.setAttributeNS(null, "text-anchor", "middle");
    textNum.appendChild(dataNumber);
    svg.append(textNum);
  }
  //      ============================== create lineHour===============================
  lineHour.setAttributeNS(null, "x1", centerX);
  lineHour.setAttributeNS(null, "x2", greenCenterX);
  lineHour.setAttributeNS(null, "y1", centerY);
  lineHour.setAttributeNS(null, "y2", greenCenterY);
  lineHour.setAttributeNS(null, "stroke", "red");
  lineHour.setAttributeNS(null, "stroke-width", 15);
  lineHour.setAttributeNS(null, "stroke-length", 100);
  lineHour.setAttributeNS(null, "stroke-linecap", "round");
  svg.append(lineHour);
  //      ============================== create lineMinute===============================
  lineMinute.setAttributeNS(null, "x1", centerX);
  lineMinute.setAttributeNS(null, "x2", greenCenterX);
  lineMinute.setAttributeNS(null, "y1", centerY);
  lineMinute.setAttributeNS(null, "y2", greenCenterY);
  lineMinute.setAttributeNS(null, "stroke", "cyan");
  lineMinute.setAttributeNS(null, "stroke-width", 7);
  lineMinute.setAttributeNS(null, "stroke-linecap", "round");
  svg.append(lineMinute);
  // ============================== create lineSecond===============================
  lineSecond.setAttributeNS(null, "x1", centerX);
  lineSecond.setAttributeNS(null, "x2", greenCenterX);
  lineSecond.setAttributeNS(null, "y1", centerY);
  lineSecond.setAttributeNS(null, "y2", greenCenterY);
  lineSecond.setAttributeNS(null, "stroke", "blue");
  lineSecond.setAttributeNS(null, "stroke-width", 2);
  lineSecond.setAttributeNS(null, "stroke-linecap", "round");
  svg.append(lineSecond);
}
drawSVGElements();
// ===============================ELECTRIC WATCHES=============================
var timeIsNow = new Date();
var hoursValue = timeIsNow.getHours();
var minutesValue = timeIsNow.getMinutes();
var secondsValue = timeIsNow.getSeconds();
var dataELClock;
// var elclock = 333;

var textElClock = document.createElementNS(svgNS, "text");
textElClock.setAttributeNS(null, "x", 250);
textElClock.setAttributeNS(null, "y", 200);
textElClock.setAttributeNS(null, "font-size", "30");
textElClock.setAttributeNS(null, "font-weight", "400");
textElClock.setAttributeNS(null, "fill", "black");
textElClock.setAttributeNS(null, "text-anchor", "middle");
textElClock.appendChild(dataELClock);
svg.append(textElClock);
// textElClock.append(dataELClock);
console.log(hoursValue);

let timerClockStart = setInterval(getLineStart, 1000);
function getLineStart() {
  timeIsNow = new Date();
  hoursValue = timeIsNow.getHours();
  minutesValue = timeIsNow.getMinutes();
  secondsValue = timeIsNow.getSeconds();
  var angleH = hoursValue * 30;
  var angleM = minutesValue * 6;
  var angleS = secondsValue * 6;
  //       ===================== ALARM ALARM ALARM одна ковычка перед rotate ЧИТАЙ КОНКАТЕНАЦИЮ !!!!!!!!!!!!!!!!
  lineHour.setAttributeNS(null, "transform", "rotate(" + angleH + " 250 250)");
  lineMinute.setAttributeNS(
    null,
    "transform",
    "rotate(" + angleM + " 250 250)"
  );
  lineSecond.setAttributeNS(
    null,
    "transform",
    "rotate(" + angleS + " 250 250)"
  );

  if (hoursValue < 10) {
    hoursValue = "0" + hoursValue;
  } else if (minutesValue < 10) {
    minutesValue = "0" + minutesValue;
  } else if (secondsValue < 10) {
    secondsValue = "0" + secondsValue;
  }
  dataELClock = document.createTextNode(
    hoursValue + ":" + minutesValue + ":" + secondsValue
  );
  // elclock = hoursValue + ":" + minutesValue + ":" + secondsValue;
  console.log(hoursValue);
}

//       ===========================   create electric watches HTML ==================================
