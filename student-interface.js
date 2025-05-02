const testCodes = {
    "solar_system_easy": { code: "AKJ8B6", testPage: "Test.html" },
    "solar_system_medium": { code: "KDP83B", testPage: "Test.html" }, 
    "solar_system_hard": { code: "I73VVJ", testPage: "Test.html" }, 
    "History_easy": { code: "L9M13", testPage: "Test.html" }, 
    "Devices_easy": { code: "D8201A", testPage: "Test.html" }, 
    "Astronomy_easy": { code: "Z1L6PA", testPage: "Test.html" }
};

document.getElementById('startTestBtn').addEventListener('click', function () {
    const studentName = document.getElementById('studentName').value.trim();
    const enteredCode = document.getElementById('testCodeInput').value.trim(); 
    const errorMsg = document.getElementById('errorMsg');
    const waitMsg = document.getElementById('waitMsg');

    // Reset previous messages
    errorMsg.style.display = 'none';
    waitMsg.style.display = 'none';

    if (!studentName) {
        displayWaitMessage("⚠️ Please enter your name before starting the test.");
        return;
    }

    if (!enteredCode) {
        displayWaitMessage("⚠️ Please enter the test code.");
        return;
    }

    // Find the test key and page based on the entered code
    const matchedTest = findTestByCode(enteredCode);

    if (matchedTest) {
        // Pass the *actual code* entered by the user to handleTestAttempt
        handleTestAttempt(enteredCode, studentName, matchedTest.testPage);
    } else {
        errorMsg.textContent = "Invalid test code entered."; // More specific error
        errorMsg.style.display = 'block';
    }
});

// Helper function to find test details by code
function findTestByCode(code) {
    for (const key in testCodes) {
        if (testCodes[key].code === code) {
            // Return the whole object including the key if needed later,
            // but for now, just the page is needed by handleTestAttempt.
            return testCodes[key];
        }
    }
    return null; // Not found
}


function handleTestAttempt(testCode, studentName, testPage) { // testCode is the actual code like "AKJ8B6"
    const lastAttemptTime = localStorage.getItem(`lastAttempt_${testCode}`);
    const currentTime = Date.now();
    const waitTime = 300000; // 300000 == 5 minutes in milliseconds

    if (lastAttemptTime) {
        const elapsedTime = currentTime - parseInt(lastAttemptTime, 10);

        if (elapsedTime < waitTime) {
            const remainingTime = waitTime - elapsedTime;
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.ceil((remainingTime % 60000) / 1000);

            displayWaitMessage(`⏳ You must wait <b>${minutes} minute(s) and ${seconds} second(s)</b> before retaking this test.`);
            return;
        }
    }

    // Store student details and test attempt info
    localStorage.setItem("studentName", studentName);
    // **Store the specific code being taken, not just a generic "testTaken"**
    localStorage.setItem("currentTestCode", testCode); // Store the code being taken
    localStorage.setItem(`lastAttempt_${testCode}`, currentTime.toString());

    // --- MODIFICATION START ---
    // Redirect to the appropriate test page, passing the code as a URL parameter
    const testPageUrl = `${testPage}?code=${encodeURIComponent(testCode)}`;
    window.location.href = testPageUrl;
    // --- MODIFICATION END ---
}

function displayWaitMessage(message) {
    const waitMsg = document.getElementById('waitMsg');
    waitMsg.style.display = 'block';
    waitMsg.innerHTML = message; // Use innerHTML because the message contains <b> tags
}

// **Important**: Make sure your HTML has an input field with id="testCodeInput"
// <input type="text" id="testCodeInput" placeholder="Enter Test Code">

    