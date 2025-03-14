const testCodes = {
    "solar_system_easy": { code: "AKJ8B6", testPage: "solar_system_easy.html" },
    "solar_system_medium": { code: "KDP83B", testPage: "solar_system_medium.html" },
    "solar_system_hard": { code: "I73VVJ", testPage: "solar_system_hard.html" },
    "History_easy": { code: "L9M13", testPage: "History_easy.html" },
    "things_easy": { code: "D8201A", testPage: "nastroje_easy.html" },
};

document.getElementById('startTestBtn').addEventListener('click', function () {
    const studentName = document.getElementById('studentName').value.trim();
    const enteredCode1 = document.getElementById('testCode1').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    const waitMsg = document.getElementById('waitMsg');

    // Reset previous messages
    errorMsg.style.display = 'none';
    waitMsg.style.display = 'none';

    if (!studentName) {
        displayWaitMessage("⚠️ Please enter your name before starting the test.");
        return;
    }

    const matchedTest1 = getTestPageFromCode(enteredCode1);
    if (matchedTest1) {
        handleTestAttempt(enteredCode1, studentName, matchedTest1);
    } else {
        errorMsg.style.display = 'block';
    }
});

function getTestPageFromCode(code) {
    for (const key in testCodes) {
        if (testCodes[key].code === code) {
            return testCodes[key].testPage;
        }
    }
    return null;
}

function handleTestAttempt(testCode, studentName, testPage) {
    const lastAttemptTime = localStorage.getItem(`lastAttempt_${testCode}`);
    const currentTime = Date.now();
    const waitTime = 300000; // 5 minutes in milliseconds

    if (lastAttemptTime) {
        const elapsedTime = currentTime - parseInt(lastAttemptTime, 10);

        if (elapsedTime < waitTime) {
            const remainingTime = waitTime - elapsedTime;
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.ceil((remainingTime % 60000) / 1000);

            displayWaitMessage(`⏳ You must wait <b>${minutes} minute(s) and ${seconds} second(s)</b> before retaking the test.`);
            return;
        }
    }

    // Store student details and test attempt info
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("testTaken", testCode);
    localStorage.setItem(`lastAttempt_${testCode}`, currentTime.toString());

    // Redirect to the appropriate test page
    window.location.href = testPage;
}

function displayWaitMessage(message) {
    const waitMsg = document.getElementById('waitMsg');
    waitMsg.style.display = 'block';
    waitMsg.innerHTML = message;
}
