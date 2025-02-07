document.addEventListener("DOMContentLoaded", function () {

    const questions = [
        {
          question: "Ktoré z nasledujúcich objektov patria medzi vnútorné planéty slnečnej sústavy?",
          correct: ["Merkúr", "Venuša", "Zem", "Mars"],
          options: ["Merkúr", "Venuša", "Zem", "Mars", "Jupiter", "Saturn", "Kepler"]
        },
        {
          question: "Ktoré z nasledujúcich planét majú prstence?",
          correct: ["Saturn", "Jupiter", "Uranus", "Neptún"],
          options: ["Merkúr", "Venuša", "Saturn", "Jupiter", "Uranus", "Neptún", "Pluto", "Titan", "Phobos", "Deimos", "Io", "Ganymedes"]
        },
        {
          question: "Ktorá planéta má najnižšiu hustotu?",
          correct: "Saturn",
          options: ["Jupiter", "Saturn", "Uranus", "Neptún", "Venuša", "Zem"]
        },
        {
          question: "Ktoré z nasledujúcich objektov sa oficiálne považujú za trpasličie planéty?",
          correct: ["Pluto", "Eris", "Haumea", "Makemake", "Ceres"],
          options: ["Pluto", "Eris", "Haumea", "Makemake", "Ceres", "Sedna"]
        },
        {
          question: "Ktorá oblasť slnečnej sústavy sa nachádza medzi obežnými dráhami Marsu a Jupitera?",
          correct: "Pás asteroidov",
          options: ["Kuiperov pás", "Pás asteroidov", "Oortov oblak", "Heliosféra", "Vnútorný slnečný obal"]
        },
        {
          question: "Ktorý mesiac slnečnej sústavy je najväčší?",
          correct: "Ganymedes",
          options: ["Titan", "Ganymedes", "Callisto", "Io", "Triton", "Europa"]
        },
        {
          question: "Ktorý prvok sa vyskytuje v najväčšom množstve v slnečnej sústave?",
          correct: "Vodik",
          options: ["Vodik", "Helium", "Kyslík", "Uhlík", "Dusík", "Železo"]
        },
        {
          question: "Ako sa nazýva hranica medzi heliosférou a medzihviezdnym priestorom?",
          correct: "Heliopauza",
          options: ["Heliosféra", "Heliopauza", "Kuiperov pás", "Oortov oblak", "Pás asteroidov"]
        },
        {
          question: "Ktorá planéta je najhoršia z hľadiska povrchovej teploty?",
          correct: "Venuša",
          options: ["Merkúr", "Venuša", "Mars", "Zem", "Jupiter", "Saturn"]
        },
        {
          question: "Ktorý z nasledujúcich objektov má extrémne eliptickú obežnú dráhu?",
          correct: "Sedna",
          options: ["Pluto", "Eris", "Sedna", "Haumea", "Makemake", "Ceres"]
        }
    ];
      
    // Shuffle questions array.
    questions.sort(() => Math.random() - 0.5);

    let timeRemaining = 300; // 5 minutes = 300 seconds
    let timeStart = Date.now(); // Track when the test starts
    let isTimerSubmission = false; // Flag to track if submission is from timer

    // Select the timer display element from the HTML.
    const timerDisplay = document.getElementById('timer-display');

    function startTimer() {
        const interval = setInterval(function () {
            if (timeRemaining <= 0) {
                clearInterval(interval);
                isTimerSubmission = true; // Set flag when time runs out
                submitTest(); // Automatically submit the test
            } else {
                timeRemaining--;
                timerDisplay.textContent = `Time remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    // Modified getRandomOptions:
    // If there are more than 6 options available, only 6 options are shown.
    // The function ensures that the correct answer(s) are always included.
    function getRandomOptions(correct, allOptions) {
        // If options are 6 or fewer, return all of them shuffled.
        if (allOptions.length <= 6) {
            return allOptions.sort(() => Math.random() - 0.5);
        } else {
            // More than 6 options available.
            if (Array.isArray(correct)) {
                // For multiple-answer questions:
                let correctSet = correct;
                let incorrectOptions = allOptions.filter(opt => !correctSet.includes(opt));
                // Shuffle the incorrect options.
                incorrectOptions.sort(() => Math.random() - 0.5);
                let neededIncorrect = 6 - correctSet.length;
                // In the unlikely event there are more correct answers than 6:
                if (neededIncorrect < 0) {
                    return correctSet.sort(() => Math.random() - 0.5).slice(0, 6);
                }
                let selectedIncorrect = incorrectOptions.slice(0, neededIncorrect);
                let combined = correctSet.concat(selectedIncorrect);
                return combined.sort(() => Math.random() - 0.5);
            } else {
                // For single-answer questions:
                let optionsCopy = [...allOptions];
                optionsCopy.sort(() => Math.random() - 0.5);
                let selectedOptions = optionsCopy.slice(0, 6);
                // Ensure the correct answer is included.
                if (!selectedOptions.includes(correct)) {
                    selectedOptions.pop(); // Remove one option.
                    selectedOptions.push(correct); // Add the correct answer.
                    selectedOptions.sort(() => Math.random() - 0.5);
                }
                return selectedOptions;
            }
        }
    }

    function displayQuestions() {
        const container = document.querySelector(".container");
        container.innerHTML = ""; // Clear previous content.
        questions.forEach((q, index) => {
            const options = getRandomOptions(q.correct, q.options);
            // Use checkboxes for multiple-answer questions; otherwise, use radio buttons.
            const inputType = Array.isArray(q.correct) ? "checkbox" : "radio";
            let questionHTML = `
                <div class="question-container" id="question${index + 1}" style="display: ${index === 0 ? 'block' : 'none'};">
                    <h1>${index + 1}/${questions.length}</h1>
                    <h1>${q.question}</h1>
                    <form>
                        ${options.map(option => `<label><input type="${inputType}" name="answer${index + 1}" value="${option}"> ${option}</label>`).join("<br>")}
                        ${index > 0 ? `<button type="button" class="prev-btn">Previous</button>` : ""}
                        ${index < questions.length - 1 ? `<button type="button" class="next-btn">Next</button>` : ""}
                        ${index === questions.length - 1 ? `<button type="button" class="submit">Submit</button>` : ""}
                    </form>
                </div>
            `;
            container.innerHTML += questionHTML;
        });
        setupNavigation();
    }

    function setupNavigation() {
        let currentQuestion = 1;
        const totalQuestions = questions.length;

        function showQuestion(index) {
            for (let i = 1; i <= totalQuestions; i++) {
                document.getElementById(`question${i}`).style.display = i === index ? "block" : "none";
            }
        }

        document.querySelectorAll(".next-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                if (currentQuestion < totalQuestions) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                }
            });
        });

        document.querySelectorAll(".prev-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                if (currentQuestion > 1) {
                    currentQuestion--;
                    showQuestion(currentQuestion);
                }
            });
        });

        document.querySelector(".submit").addEventListener("click", function () {
            submitTest();
        });
    }

    function submitTest() {
        let unanswered = [];
        let score = 0;
        const studentName = localStorage.getItem("studentName"); // Retrieve student's name from localStorage
    
        // Check answers and unanswered questions.
        for (let i = 1; i <= questions.length; i++) {
            const currentQuestion = questions[i - 1];
            if (Array.isArray(currentQuestion.correct)) {
                // For multiple-answer questions.
                let selectedElements = document.querySelectorAll(`input[name="answer${i}"]:checked`);
                let selectedAnswers = Array.from(selectedElements).map(el => el.value);
                if (selectedAnswers.length === 0) {
                    unanswered.push(i);
                } else {
                    let fractionPerAnswer = 1 / currentQuestion.correct.length;
                    let numCorrectSelected = selectedAnswers.filter(answer => currentQuestion.correct.includes(answer)).length;
                    let numWrongSelected = selectedAnswers.filter(answer => !currentQuestion.correct.includes(answer)).length;
                    let questionScore = fractionPerAnswer * (numCorrectSelected - numWrongSelected);
                    // Note: The score for the question can now be negative.
                    score += questionScore;
                }
            } else {
                // For single-answer questions.
                const selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
                if (!selectedAnswer) {
                    unanswered.push(i);
                } else if (selectedAnswer.value === currentQuestion.correct) {
                    score += 1;
                }
            }
        }
    
        // Only display the warning if it's not a timer submission.
        if (!isTimerSubmission && unanswered.length > 0) {
            const proceed = confirm(`Nezodpovedali ste ${unanswered.length} otázok: ${unanswered.join(", ")}. Chcete pokračovať?`);
            if (!proceed) return; // If user cancels, stop submission.
        }
    
        // Stop the timer and calculate the time spent.
        const timeSpentMilliseconds = Date.now() - timeStart;
        const timeSpentSeconds = Math.floor(timeSpentMilliseconds / 1000);
        const minutesSpent = Math.floor(timeSpentSeconds / 60);
        const secondsSpent = timeSpentSeconds % 60;
    
        timerDisplay.style.display = 'none'; // Hide the timer after submitting.
    
        // Display the result section.
        const percentage = (score / questions.length) * 100;
        document.querySelector(".container").innerHTML = `
            <div class="result-section">
                <h1>Výsledok testu</h1>
                <p>Skóre: ${score.toFixed(2)}/${questions.length}</p>
                <p>Percentuálne: ${percentage.toFixed(2)}%</p>
                <p>Čas strávený: ${minutesSpent} minút a ${secondsSpent} sekúnd</p>
                <button type="button" class="home-btn">Home</button>
            </div>
        `;
    
        // Save the test results.
        saveTestResults(studentName, score.toFixed(2), questions.length, `${minutesSpent} minút a ${secondsSpent} sekúnd`);
    
        // Add event listener to the "Home" button.
        document.querySelector(".home-btn").addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
    
    function saveTestResults(studentName, score, totalQuestions, timeSpent) {
        let results = JSON.parse(localStorage.getItem("testResults")) || [];
        let now = new Date().toLocaleString(); // Formatted date and time
        results.push({
            name: studentName,
            score: score,
            percentage: ((score / totalQuestions) * 100).toFixed(2) + "%",
            time: timeSpent,
            date: now,
            testCode: localStorage.getItem("testTaken") // New property for test code
        });
        localStorage.setItem("testResults", JSON.stringify(results));
    }
    
    displayQuestions();
    startTimer();
    
    // Dummy function if unselecting functionality is needed.
    function allowUnselecting() {
        // Implementation here if required.
    }
    allowUnselecting();
});
