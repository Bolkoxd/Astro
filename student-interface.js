const testCodes = {
    "solar_system_easy": { code: "AKJ8B6", testPage: "solar_system_easy.html" },
    "solar_system_medium": { code: "KDP83B", testPage: "solar_system_medium.html" },
    "solar_system_hard": { code: "I73VVJ", testPage: "solar_system_hard.html" },
    "planets_easy": { code: "LMN789", testPage: "planets_easy.html" },
    "planets_medium": { code: "PQR012", testPage: "planets_medium.html" },
    "stars_easy": { code: "STU345", testPage: "stars_easy.html" },
    "stars_medium": { code: "VWX678", testPage: "stars_medium.html" }
  };
  
  document.getElementById('startTestBtn').addEventListener('click', function() {
    const studentName = document.getElementById('studentName').value.trim();
    const enteredCode1 = document.getElementById('testCode1').value.trim();
    const errorMsg = document.getElementById('errorMsg');
  
    errorMsg.style.display = 'none'; // Hide error message initially
  
    if (studentName === "") {
        alert("Please enter your name before starting the test.");
        return;
    }
  
    let matchedTest1 = null;
    for (const key1 in testCodes) {
        if (testCodes[key1].code === enteredCode1) {
            matchedTest1 = testCodes[key1].testPage;
            break;
        }
    }
  
    if (matchedTest1) {
        // Store student name and the test code in localStorage
        localStorage.setItem("studentName", studentName);
        localStorage.setItem("testTaken", enteredCode1);
        
        // Redirect to the correct test file
        window.location.href = matchedTest1;
    } else {
        errorMsg.style.display = 'block';
    }
  });
  