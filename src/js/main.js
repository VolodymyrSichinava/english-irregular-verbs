// Object with irregular verbs
const verbs = [
  // ["be", "waswere", "been"],
  ["become", "became", "become"],
  ["begin", "began", "begun"],
  ["break", "broke", "broken"],
  ["bring", "brought", "brought"],
  ["build", "built", "built"],
  ["buy", "bought", "bought"],
  // ["can", "could", "-"],
  ["catch", "caught", "caught"],
  ["come", "came", "come"],
  ["cost", "cost", "cost"],
  ["do", "did", "done"],
  ["drink", "drank", "drunk"],
  ["drive", "drove", "driven"],
  ["eat", "ate", "eaten"],
  ["fall", "fell", "fallen"],
  ["feel", "felt", "felt"],
  ["find", "found", "found"],
  ["fly", "flew", "flown"],
  ["forget", "forgot", "forgotten"],
  ["get", "got", "got"],
  ["give", "gave", "given"],
  ["go", "went", "gone"],
  ["have", "had", "had"],
  ["hear", "heard", "heard"],
  ["know", "knew", "known"],
  ["leave", "left", "left"],
  ["lose", "lost", "lost"],
  ["make", "made", "made"],
  ["meet", "met", "met"],
  ["pay", "paid", "paid"],
  ["put", "put", "put"],
  ["read", "read", "read"],
  ["run", "ran", "run"],
  ["say", "said", "said"],
  ["see", "saw", "seen"],
  ["send", "sent", "sent"],
  ["sing", "sang", "sung"],
  ["sit", "sat", "sat"],
  ["sleep", "slept", "slept"],
  ["speak", "spoke", "spoken"],
  ["spend", "spent", "spent"],
  ["stand", "stood", "stood"],
  ["swim", "swam", "swum"],
  ["teach", "taught", "taught"],
  ["take", "took", "taken"],
  ["tell", "told", "told"],
  ["think", "thought", "thought"],
  ["understand", "understood", "understood"],
  ["wake", "woke", "woken"],
  ["wear", "wore", "worn"],
  ["win", "won", "won"],
  ["write", "wrote", "written"],
]

// Declaring all variables
let verbsArr = Array.from(verbs);
let buttonCreate = document.querySelector('#buttonCreate');
let buttonCheck = document.querySelector('#buttonCheck');
let min = 0;
let max = verbsArr.length - 1;
let verbNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let inputs = document.querySelector('#inputs');
let presentVerb = document.getElementById('pressimple');
let answersClient = {};
let rightArr = [];
let wrongArr = [];
let counter = 1;
let fullNumber = document.getElementById('fullNumber');
let currentNumber = document.getElementById('currentNumber');
let counterVerbs = document.getElementById('counterVerbs');
let rightNumber = document.getElementById('rightNumber');
let wrongNumber = document.getElementById('wrongNumber');
let infoResults = document.getElementById('infoResults');
let wrongCounter = 0;

// Function for creating verbs
function create() {
  buttonCreate.style.display = 'none';
  counterVerbs.style.display = 'flex';
  inputs.style.display = 'flex';
  currentNumber.innerHTML = counter;
  fullNumber.innerHTML = verbs.length;
  presentVerb.innerHTML = verbsArr[verbNumber][0];
}

// Function for checking verbs
function check() {
  let answerArr = [];
  let answerSimple = document.getElementById('pastsimple').value.replace(/\s+/g, ' ').trim();
  let answerParticiple = document.getElementById('pastparticiple').value.replace(/\s+/g, ' ').trim();
  answerArr.push(verbsArr[verbNumber][0], answerSimple, answerParticiple);
  if (verbsArr[verbNumber].join() !== answerArr.join()) {
    answersClient[`${verbsArr[verbNumber][0]}`] = [verbsArr[verbNumber][1] + ' ' + verbsArr[verbNumber][2], answerSimple + ' ' + answerParticiple];
    wrongCounter = wrongCounter + 1;
  }

  counter = counter + 1;
  verbsArr.splice(verbNumber, 1);
  max = verbsArr.length - 1;
  verbNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('pastsimple').value = "";
  document.getElementById('pastparticiple').value = "";

  if (max < 0) {
    inputs.style.display = 'none';
    counterVerbs.style.display = 'none';
    infoResults.style.display = 'flex';
    rightNumber.innerHTML = verbs.length - wrongCounter;
    wrongNumber.innerHTML = wrongCounter;
    let wrong = document.getElementById('content-results');
    wrong.innerHTML = `<table id="wrongAnswers" class="content-result__wrongAnswers"></table>`;
    for (let key in answersClient) {
      let row = document.createElement('tr');
      row.innerHTML = `<td class="resultPres">${key}</td>` + `<td><span class="true">${answersClient[key][0]}</span><br><span class="false">${answersClient[key][1]}</span></td>`;
      document.getElementById('wrongAnswers').appendChild(row);
    }
  } 
  else {
    create();
  }
}

// Event handlers
buttonCreate.addEventListener('click', function() {
  create();
});

buttonCheck.addEventListener('click', function() {
  check();
});
