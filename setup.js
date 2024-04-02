var capacity = 0;
var typeOfLights = '';
var pumpHour1 = 0;
var pumpHour2 = 0;
var timing = 0;
var lighton= 0;
var lightoff = 0; 

const tankh = document.getElementById('tank-capacity');
const pumpCycle = document.getElementById('water-pump-cycle');
const tankl = document.getElementById('tank-litres');
const keys = document.querySelectorAll('.key');
const keys2 = document.querySelectorAll('.key2');

keys.forEach(key => {
  key.addEventListener('click', () => {
    if (key.getAttribute('data-value') === '-1') {
      tankh.value = tankh.value.slice(0, -1);
    }
    else{
    const keyValue = key.getAttribute('data-value');
    tankh.value += keyValue;
  }
  });
});

function checkButton() {
  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');
  var checkbox3 = document.getElementById('checkbox3');
  var checkbox4 = document.getElementById('checkbox4');
  var checkbox5 = document.getElementById('checkbox5');
  var submitButton = document.getElementById('reqb');

  if (checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
    submitButton.classList.add('active');
    submitButton.disabled = false;
  } else {
    submitButton.classList.remove('active');
    submitButton.disabled = true;
  }
}

function updateValues() {
  var input = document.getElementById('water-pump-cycle').value;
  timing = input.split('/');
  if (timing.length === 2) {
    pumpHour1=timing[0]
    pumpHour2=timing[1]
  }
}

keys2.forEach(key => {
  key.addEventListener('click', () => {
    if (key.getAttribute('data-value') === '-1') {
      pumpCycle.value = pumpCycle.value.slice(0, -1);
    }
    else{
    const keyValue = key.getAttribute('data-value');
    pumpCycle.value += keyValue;
  }
  updateValues();
  });
});

let currentQuestion = 1;
const questions = document.querySelectorAll('.question');

function updateProgressBar(litres) {
  progressBarFill = document.getElementById('progress-bar-fill');
  progressBarFill.style.width = litres/document.getElementById('tank-capacity').value * 100 + '%';
}

document.getElementById('lights').addEventListener('change', () =>{
  var selectedOption = document.querySelector('input[name="option"]:checked').value;

  switch(selectedOption){
    case 'artificial':
      console.log('Artificial Lights Selected');
      typeOfLights = 'artificial';
      break;
    case 'natural':
      console.log('Natural Lights Selected');
      typeOfLights = 'natural';
      break;
  }
})

function showQuestion(questionNumber) {
  questions.forEach((question, index) => {
    if (index === questionNumber - 1) {
      question.style.display = 'block';
      setTimeout(() => {
        question.style.opacity = '1';
        question.style.transform = 'translateX(0)';
      }, 10); // Adding a small delay to ensure the slide effect works properly
    } else {
      setTimeout(() => {
        question.style.opacity = '0';
        question.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          question.style.display = 'none';
        }, 500); // Hiding after animation is complete
      }, 0); // No delay for hiding other questions
    }
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function skipQuestion(){
  if (currentQuestion < questions.length) {
    currentQuestion+=2;
    showQuestion(currentQuestion);
  }
}

function updateph(){ 
    setTimeout( () => {
    var newValue = 6 //Math.round(Math.random() * 14 * 10) / 10;
    document.getElementById('phval').innerHTML = newValue;
    if (newValue >= 5.5 && newValue <= 6.0) {
    document.getElementById('loading-icon').style.display = 'none';
    document.getElementById('tick-mark').style.display = 'block';
    document.getElementById('phch').disabled = false;
    updateph()
    }
    else{
      updateph()
      document.getElementById('phch').disabled = true;
      document.getElementById('loading-icon').style.display = 'block';
      document.getElementById('tick-mark').style.display = 'none';
    }
  }, 1000);
}

function tdschk(){ 
    setTimeout( () => {
    var newValue = 350 //Math.round(Math.random() * 14 * 10) / 10;
    document.getElementById('tdsval2').innerHTML = newValue + " ppm";
    if (newValue >= 340 && newValue <= 360) {
    document.getElementById('loading-icon2').style.display = 'none';
    document.getElementById('tick-mark2').style.display = 'block';
    document.getElementById('tdsch').disabled = false;
    tdschk()
    }
    else{
      tdschk()
      document.getElementById('tdsch').disabled = true;
      document.getElementById('loading-icon2').style.display = 'block';
      document.getElementById('tick-mark2').style.display = 'none';
    }
  }, 1000);
}

function updatetds(){ 
    setTimeout( () => {
    var newValue = 6 //Math.round(Math.random() * 500);
    document.getElementById('tdsval').innerHTML = newValue;
    updatetds()
  }, 1000);
}

function submitForm() {
  lighton = document.getElementById("timefrom").value;
  lightoff = document.getElementById("timeto").value;
  waterlevel = document.getElementById('tank-capacity').value;
  window.electronAPI.writeserial([3,
    {
      "status": 0,
      "wl":waterlevel,
      "ltime":[lighton, lightoff],
      "mtime":[pumpHour1, pumpHour2]
  }
  ]);
}

function finish(){
  window.electronAPI.saveconfig();
  window.location.href= "index.html";
}

// Show the first question initially
showQuestion(currentQuestion);
