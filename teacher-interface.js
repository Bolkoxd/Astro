// DOM Elements
const topicSelect = document.getElementById('topic');
const difficultySelect = document.getElementById('difficulty');
/*const generateCodeButton = document.getElementById('generateCode');
generatedCodeDisplay = document.getElementById('generatedCode');
const testCodeInput = document.getElementById('testCode');
const startTestButton = document.getElementById('startTest');
const testInterface = document.getElementById('testInterface');
const questionsDiv = document.getElementById('questions');
const submitTestButton = document.getElementById('submitTest');
const resultsDiv = document.getElementById('results');
const scoreDisplay = document.getElementById('score');
 
 Test Data
const tests = {
  astronomy: {
    easy: [
      { question: 'What is the closest planet to the Sun?', options: ['Earth', 'Mercury', 'Venus'], answer: 'Mercury' },
      { question: 'How many moons does Earth have?', options: ['1', '2', '3'], answer: '1' }
    ],
    medium: [
      { question: 'What is the largest planet in the solar system?', options: ['Earth', 'Jupiter', 'Saturn'], answer: 'Jupiter' },
      { question: 'What is the name of our galaxy?', options: ['Andromeda', 'Milky Way', 'Whirlpool'], answer: 'Milky Way' }
    ],
    hard: [
      { question: 'What is a light-year?', options: ['A measure of time', 'A measure of distance', 'A measure of brightness'], answer: 'A measure of distance' },
      { question: 'What is the hottest planet in the solar system?', options: ['Mercury', 'Venus', 'Mars'], answer: 'Venus' }
    ]
  },
  math: {
    easy: [
      { question: 'What is 5 + 7?', options: ['10', '12', '14'], answer: '12' },
      { question: 'What is 3 * 4?', options: ['7', '12', '15'], answer: '12' }
    ],
    medium: [
      { question: 'What is 15 / 3?', options: ['3', '5', '6'], answer: '5' },
      { question: 'What is 10 - 4?', options: ['5', '6', '7'], answer: '6' }
    ],
    hard: [
      { question: 'What is 2^3?', options: ['4', '6', '8'], answer: '8' },
      { question: 'What is the square root of 64?', options: ['6', '8', '10'], answer: '8' }
    ]
  },
  history: {
    easy: [
      { question: 'Who was the first president of the USA?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln'], answer: 'George Washington' },
      { question: 'In which year did World War II end?', options: ['1945', '1950', '1939'], answer: '1945' }
    ],
    medium: [
      { question: 'Who wrote the Declaration of Independence?', options: ['George Washington', 'Thomas Jefferson', 'Benjamin Franklin'], answer: 'Thomas Jefferson' },
      { question: 'What was the main cause of the Cold War?', options: ['Economic differences', 'Political differences', 'Technological differences'], answer: 'Political differences' }
    ],
    hard: [
      { question: 'Who discovered America?', options: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan'], answer: 'Christopher Columbus' },
      { question: 'What year did the Berlin Wall fall?', options: ['1989', '1991', '1985'], answer: '1989' }
    ]
  }
};

Generate Test Code
generateCodeButton.addEventListener('click', generateTestCode);

function generateTestCode() {
  const topic = topicSelect.value;
  const difficulty = difficultySelect.value;
  const code = `${Math.floor(Math.random() * 10000)}`;
  /*if(code < 1000){
    code = `${Math.floor(Math.random() * 10000)}`
  }
  generatedCodeDisplay.textContent = `Generated Code: ${code}`;
  localStorage.setItem(code, JSON.stringify({ topic, difficulty }));
}

// Start Test
startTestButton.addEventListener('click', startTest);

function startTest() {
  const enteredCode = testCodeInput.value;
  const testData = JSON.parse(localStorage.getItem(enteredCode));

  if (testData) {
    const { topic, difficulty } = testData;
    const testQuestions = tests[topic][difficulty];
    loadQuestions(testQuestions);
    testInterface.classList.remove('hidden');
  } else {
    alert('Invalid test code. Please try again.');
  }
}

// Load Questions
function loadQuestions(questions) {
  questionsDiv.innerHTML = '';
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map(option => `
        <label>
          <input type="radio" name="question${index}" value="${option}">
          ${option}
        </label>
      `).join('')}
    `;
    questionsDiv.appendChild(questionDiv);
  });
}

// Submit Test
submitTestButton.addEventListener('click', submitTest);

function submitTest() {
  const enteredCode = testCodeInput.value;
  const testData = JSON.parse(localStorage.getItem(enteredCode));
  const { topic, difficulty } = testData;
  const testQuestions = tests[topic][difficulty];

  let score = 0;
  testQuestions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  });

  // Calculate percentage
  const totalQuestions = testQuestions.length;
  const percentage = ((score / totalQuestions) * 100).toFixed(2); // 2 decimal places

  // Display results
  resultsDiv.classList.remove('hidden');
  scoreDisplay.innerHTML = `
    You scored <strong>${percentage}%</strong>. <strong>${score} out of ${totalQuestions}</strong>.<br>
  `;*/

// Step 1: Test code mapping (each topic & difficulty combination has a code)
const testCodes = {
  "solar_system_easy": { code: "ABC123", testPage: "ABC123.html" },
  "solar_system_medium": { code: "DEF456", testPage: "solar_system_medium.html" },
  "solar_system_hard": { code: "IEK426", testPage: "solar_system_hard.html" },
  "planets_easy": { code: "LMN789", testPage: "planets_easy.html" },
  "planets_medium": { code: "PQR012", testPage: "planets_medium.html" },
  "stars_easy": { code: "STU345", testPage: "stars_easy.html" },
  "stars_medium": { code: "VWX678", testPage: "stars_medium.html" }
};

// Step 2: Show the test code when the button is clicked
document.getElementById('showCode').addEventListener('click', function() {
  const topic = document.getElementById('topic').value;
  const difficulty = document.getElementById('difficulty').value;
  const key = `${topic}_${difficulty}`;

  if (testCodes[key]) {
    document.getElementById('testCodeDisplay').textContent = `Test Code: ${testCodes[key].code}`;
  } else {
    document.getElementById('testCodeDisplay').textContent = "No test available!";
  }
});

// Step 3: Handle the test start event
document.getElementById('startTest').addEventListener('click', function() {
  const enteredCode = document.getElementById('testCode').value.trim();
  let matchedTest = null;

  // Step 4: Find the corresponding test file based on the entered test code
  for (const key in testCodes) {
    if (testCodes[key].code === enteredCode) {
      matchedTest = testCodes[key].testPage;
      break;
    }
  }

  if (matchedTest) {
    window.location.href = matchedTest; // Redirect to the correct test file
  } else {
    alert("Invalid test code. Please try again.");
  }
});

