
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
  // renderTicks: {
  //   divisions: 6,
  //   divWidth: 1.1,
  //   divLength: 0.7,
  //   divColor: '#333333',
  //   subDivisions: 5,
  //   subLength: 0.5,
  //   subWidth: 0.6,
  //   subColor: '#666666'
  // },
  renderTicks: {
    divisions: 7,
    divWidth: 1,
    divLength: 0.74,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.38,
    subWidth: 0.4,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 20, 32, 50],  // Print labels at these values
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

var opts2 = {
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
    divisions: 7,
    divWidth: 1,
    divLength: 0.74,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.38,
    subWidth: 0.4,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 350, 600, 1000],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 0, max: 250 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 250, max: 350 }, // Yellow
    { strokeStyle: "#30B32D", min: 350, max: 600 }, // Green
    { strokeStyle: "#FFDD00", min: 600, max: 800 }, // Yellow
    { strokeStyle: "#F03E3E", min: 800, max: 1000 }  // Red
  ],

};


var opts3 = {
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
    divisions: 7,
    divWidth: 1,
    divLength: 0.74,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.38,
    subWidth: 0.4,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 50, 90, 100],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0,  // Optional: Numerical precision. 0=round off.
    rotate: 90
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 0, max: 30 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 30, max: 50 }, // Yellow
    { strokeStyle: "#30B32D", min: 50, max: 90 }, // Green
    { strokeStyle: "#FFDD00", min: 90, max: 95 }, // Yellow
    { strokeStyle: "#F03E3E", min: 95, max: 100 }  // Red
  ],


};

var opts4 = {
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
    divisions: 7,
    divWidth: 1,
    divLength: 0.74,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.38,
    subWidth: 0.4,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 18, 28, 50],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 0, max: 10 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 10, max: 18 }, // Yellow
    { strokeStyle: "#30B32D", min: 18, max: 28 }, // Green
    { strokeStyle: "#FFDD00", min: 28, max: 33 }, // Yellow
    { strokeStyle: "#F03E3E", min: 33, max: 50 }  // Red
  ],

};


var opts5 = {
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
    divisions: 7,
    divWidth: 1,
    divLength: 0.74,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.38,
    subWidth: 0.4,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [1, 5.5, 6.5, 10],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 1, // Optional: Numerical precision. 0=round off.
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 1, max: 4.5 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 4.5, max: 5.5 }, // Yellow
    { strokeStyle: "#30B32D", min: 5.5, max: 6.5 }, // Green
    { strokeStyle: "#FFDD00", min: 6.5, max: 7.5 }, // Yellow
    { strokeStyle: "#F03E3E", min: 7.5, max: 10 }  // Red
  ],

};


var opts6 = {
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
    divisions: 7,
    divWidth: 1,
    divLength: 0.74,
    divColor: '#333333',
    subDivisions: 5,
    subLength: 0.38,
    subWidth: 0.4,
    subColor: '#666666'
  },
  staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [0, 500, 1500, 2000],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0,  // Optional: Numerical precision. 0=round off.
  },
  staticZones: [
    { strokeStyle: "#F03E3E", min: 0, max: 300 }, // Red from 100 to 130
    { strokeStyle: "#FFDD00", min: 300, max: 500 }, // Yellow
    { strokeStyle: "#30B32D", min: 500, max: 1500 }, // Green
    { strokeStyle: "#FFDD00", min: 1500, max: 1800 }, // Yellow
    { strokeStyle: "#F03E3E", min: 1800, max: 2000 }  // Red
  ],

};




var target1 = document.getElementById('temp'); // your canvas element
var gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
gauge1.maxValue = 50; // set max gauge value
gauge1.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 60;

var target2 = document.getElementById('tds'); // your canvas element
var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
gauge2.maxValue = 1000; // set max gauge value
gauge2.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge2.animationSpeed = 60;

var target3 = document.getElementById('hum'); // your canvas element
var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
gauge3.maxValue = 100; // set max gauge value
gauge3.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge3.animationSpeed = 60;

var target4 = document.getElementById('wt'); // your canvas element
var gauge4 = new Gauge(target4).setOptions(opts4); // create sexy gauge!
gauge4.maxValue = 50; // set max gauge value
gauge4.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge4.animationSpeed = 60;

var target5 = document.getElementById('ph'); // your canvas element
var gauge5 = new Gauge(target5).setOptions(opts5); // create sexy gauge!
gauge5.maxValue = 10; // set max gauge value
gauge5.setMinValue(1); // Prefer setter over gauge.minValue = 0
gauge5.animationSpeed = 60;

var target6 = document.getElementById('co2'); // your canvas element
var gauge6 = new Gauge(target6).setOptions(opts6); // create sexy gauge!
gauge6.maxValue = 2000; // set max gauge value
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
  fetch('info.json')
    .then(response => response.json())
    .then(data => {
      gauge1.set(data.ETc);
      gauge2.set(data.TDS);
      gauge3.set(data.H);
      gauge4.set(data.WTc);
      gauge5.set(data.pH);
      gauge6.set(data.CO2);
      fm.setPercentage(data.WP);
      setPc(data.P);
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

setInterval(GetAndShow, 500);