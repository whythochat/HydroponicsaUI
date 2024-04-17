var capacity = 0;
var typeOfLights = '';
var pumpHour1 = 0;
var pumpHour2 = 0;
var timing = 0;
var lighton = 0;
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
    else {
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
    pumpHour1 = timing[0]
    pumpHour2 = timing[1]
  }
}

keys2.forEach(key => {
  key.addEventListener('click', () => {
    if (key.getAttribute('data-value') === '-1') {
      pumpCycle.value = pumpCycle.value.slice(0, -1);
    }
    else {
      const keyValue = key.getAttribute('data-value');
      pumpCycle.value += keyValue;
    }
    updateValues();
  });
});

let currentQuestion = 1;
const questions = document.querySelectorAll('.question');

document.getElementById('lights').addEventListener('change', () => {
  var selectedOption = document.querySelector('input[name="option"]:checked').value;

  switch (selectedOption) {
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

// function showQuestion(questionNumber) {
//   questions.forEach((question, index) => {
//     if (index === questionNumber - 1) {
//       question.style.display = 'block';
//       setTimeout(() => {
//         question.style.opacity = '1';
//         question.style.transform = 'translateX(0)';
//       }, 10); // Adding a small delay to ensure the slide effect works properly
//     } else {
//       setTimeout(() => {
//         question.style.opacity = '0';
//         question.style.transform = 'translateX(-100%)';
//         setTimeout(() => {
//           question.style.display = 'none';
//         }, 500); // Hiding after animation is complete
//       }, 0); // No delay for hiding other questions
//     }
//   });
// }


function showQuestion(questionNumber) {
  questions.forEach((question, index) => {
    if (index === questionNumber - 1) {
      question.style.display = 'block';
      question.style.opacity = '1';
      question.style.transform = 'translateX(0)';
    } else {
      question.style.opacity = '0';
      question.style.transform = 'translateX(-100%)';
      question.style.display = 'none';
    }
  });
}


function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function previous_Question() {
  if (currentQuestion > 0) {
    currentQuestion = currentQuestion - 2;
    showQuestion(currentQuestion);
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function skipQuestion() {
  if (currentQuestion < questions.length) {
    currentQuestion += 2;
    showQuestion(currentQuestion);
  }
}

function updateph() {
  const interval = setInterval(() => {
    var newValue, stat
    fetch('./info.json')
      .then(response => response.json())
      .then(data => {
        newValue = data.pH
        document.getElementById('phval').innerHTML = newValue;
        stat = data.pc
        if (stat == 1) {
          document.getElementById('loading-icon').style.display = 'none';
          document.getElementById('tick-mark').style.display = 'block';
          document.getElementById('phch').disabled = false;
          clearInterval(interval)
        }
      })
  }, 500);
}

function updatetds() {
  const interval = setInterval(() => {
    fetch('./info.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('tdsval').innerHTML = data.TDS
      })
  }, 500);
}

function tdschk() {
  const interval = setInterval(() => {
    fetch('./info.json')
      .then(response => response.json())
      .then(data => {
        var newValue = data.TDS
        var stat = data.tc
        document.getElementById('tdsval2').innerHTML = newValue + " ppm";
        if (stat == 1) {
          document.getElementById('loading-icon2').style.display = 'none';
          document.getElementById('tick-mark2').style.display = 'block';
          document.getElementById('tdsch').disabled = false;
          clearInterval(interval)
        }
      })
  }, 500);
}

function startPhCalibration() {
  window.electronAPI.writeserial([3,
    {
      "status": 2
    }
  ]);
}

function turnLightsOnOff() {
  window.electronAPI.writeserial([3,
    {
      "status": 5
    }
  ]);
}

function showTdsValue() {
  window.electronAPI.writeserial([3,
    {
      "status": 3
    }
  ]);
}

function startTdsCalibration() {
  window.electronAPI.writeserial([3,
    {
      "status": 4
    }
  ]);
}

function turnMotorOnOff() {
  window.electronAPI.writeserial([3,
    {
      "status": 6
    }
  ]);
}


function submitForm() {
  lighton = document.getElementById("timefrom").value.split(':')[0];
  lightoff = document.getElementById("timeto").value.split(':')[0];
  waterlevel = document.getElementById('tank-capacity').value;
  window.electronAPI.writeserial([3,
    {
      "status": 1,
      "WL": parseInt(waterlevel, 10),
      "l_time": [parseInt(lighton, 10), parseInt(lightoff, 10)],
      "m_time": [parseInt(pumpHour1, 10), parseInt(pumpHour2, 10)]
    }
  ]);
}

function finish() {
  window.electronAPI.saveconfig(1);
  window.electronAPI.writeserial([3,
    {
      "status": 0
    }
  ]);
  window.location.href = "index.html";
}

// Show the first question initially
showQuestion(currentQuestion);
