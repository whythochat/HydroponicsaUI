var opts = {
  angle: 0.01, // The span of the gauge arc
  lineWidth: 0.28, // The line thickness
  radiusScale: 0.5, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: true, // If false, max value increases automatically if value > maxValue
  limitMin: true, // If true, the min value of the gauge will be fixed
  colorStart: '#6F6EA0', // Colors
  colorStop: '#C0C0DB', // just experiment with them
  strokeColor: '#EEEEEE', // to see which ones work best for you
  //generateGradient: true,
  highDpiSupport: true, // High resolution support
  // renderTicks is Optional
  renderTicks: {
    divisions: 6,
    divWidth: 1.1,
    divLength: 0.7,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: '#666666'
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 0, max: 10 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 10, max: 20 }, // Yellow
    { strokeStyle: "#30B32D", min: 20, max: 32 }, // Green
    { strokeStyle: "#FFDD00", min: 32, max: 40 }, // Yellow
    { strokeStyle: "#F03E3E", min: 40, max: 50 }  // Red
  ],

};

var opts1 = {
  angle: 0.01, // The span of the gauge arc
  lineWidth: 0.28, // The line thickness
  radiusScale: 0.5, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: true, // If false, max value increases automatically if value > maxValue
  limitMin: true, // If true, the min value of the gauge will be fixed
  colorStart: '#6F6EA0', // Colors
  colorStop: '#C0C0DB', // just experiment with them
  strokeColor: '#EEEEEE', // to see which ones work best for you
  //generateGradient: true,
  highDpiSupport: true, // High resolution support
  // renderTicks is Optional
  renderTicks: {
    divisions: 6,
    divWidth: 1.1,
    divLength: 0.7,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 10, 20, 32, 40, 50],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 0, max: 10 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 10, max: 20 }, // Yellow
    { strokeStyle: "#30B32D", min: 20, max: 32 }, // Green
    { strokeStyle: "#FFDD00", min: 32, max: 40 }, // Yellow
    { strokeStyle: "#F03E3E", min: 40, max: 50 }  // Red
  ],

};


var target1 = document.getElementById('temp'); // your canvas element
var gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
gauge1.maxValue = 50; // set max gauge value
gauge1.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 60;

var target2 = document.getElementById('tds'); // your canvas element
var gauge2 = new Gauge(target2).setOptions(opts); // create sexy gauge!
gauge2.maxValue = 60; // set max gauge value
gauge2.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge2.animationSpeed = 60;

var target3 = document.getElementById('hum'); // your canvas element
var gauge3 = new Gauge(target3).setOptions(opts); // create sexy gauge!
gauge3.maxValue = 60; // set max gauge value
gauge3.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge3.animationSpeed = 60;

var target4 = document.getElementById('wt'); // your canvas element
var gauge4 = new Gauge(target4).setOptions(opts); // create sexy gauge!
gauge4.maxValue = 60; // set max gauge value
gauge4.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge4.animationSpeed = 60;

var target5 = document.getElementById('ph'); // your canvas element
var gauge5 = new Gauge(target5).setOptions(opts); // create sexy gauge!
gauge5.maxValue = 60; // set max gauge value
gauge5.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge5.animationSpeed = 60;

var target6 = document.getElementById('co2'); // your canvas element
var gauge6 = new Gauge(target6).setOptions(opts); // create sexy gauge!
gauge6.maxValue = 60; // set max gauge value
gauge6.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge6.animationSpeed = 60;

var fm = new FluidMeter();
fm.init({
  targetContainer: document.getElementById("fluid-meter"),
  fillPercentage: 15,
  options: {
    fontSize: "30px",
    fontFamily: "Arial",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 200,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#3D91C5",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "blue",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150
    }
  }
});

function setFlow(value) {
  document.getElementById('wf').innerHTML = value + " ml/s";
}

function setPc(value) {
  document.getElementById('pc').innerHTML = value + " W/h";
}

function daysBetweenCurrentDateAndDate(date) {
  // Get the current date
  const currentDate = new Date();

  console.log(currentDate)
  console.log(date)

  // Convert both dates to milliseconds
  const currentDateMs = currentDate.getTime();
  const providedDateMs = date.getTime();

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(providedDateMs - currentDateMs);

  // Convert the difference back to days
  const daysDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  return daysDifference;
}

function GetAndShow() {
  fetch('./setup.json')
    .then(response => response.json())
    .then(data => {
      days = daysBetweenCurrentDateAndDate(new Date(data.date))
      document.getElementById("daycount").innerHTML = "Day " + days
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  console.log("Fetched config")
  fetch('./info.json')
    .then(response => response.json())
    .then(data => {
      gauge1.set(data.ETc);
      gauge2.set(data.H);
      gauge3.set(data.WTc);
      gauge4.set(data.TDS);
      gauge5.set(data.pH);
      gauge6.set(data.CO2);
      fm.setPercentage(data.wl);
      setPc(data.P);
      impUpdates();
      // Update gauge value boxes
      document.getElementById('temp-value').innerText = data.ETc;
      document.getElementById('tds-value').innerText = data.TDS;
      document.getElementById('hum-value').innerText = data.H;
      document.getElementById('wt-value').innerText = data.WTc;
      document.getElementById('ph-value').innerText = data.pH;
      document.getElementById('co2-value').innerText = data.CO2;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    window.electronAPI.writeserial([3,
      {
        "status": 0
    }
    ]);
}

function restoresys() {
  window.electronAPI.saveconfig(0);
  window.location.href = "setup.html";
}

const button = document.getElementById('myButton');
button.addEventListener('click', restoresys);

GetAndShow();

setInterval(GetAndShow, 1000);