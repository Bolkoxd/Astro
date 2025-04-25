// DOM Elements
const topicSelect = document.getElementById('topic');
const difficultySelect = document.getElementById('difficulty');

// Step 1: Test code mapping (each topic & difficulty combination has a code)
const testCodes = {
  "solar_system_easy": { code: "AKJ8B6", testPage: "results.html" },
  "solar_system_medium": { code: "KDP83B", testPage: "results.html" },
  "solar_system_hard": { code: "I73VVJ", testPage: "results.html" },
  "History_easy": { code: "L9M13", testPage: "results.html" },
  "things_easy": { code: "D8201A", testPage: "results.html" },
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

// Step 3: Handle the "Show results" button click
document.getElementById('startTest').addEventListener('click', function() {
  // Redirect directly to results.html
  window.location.href = "results.html";
});