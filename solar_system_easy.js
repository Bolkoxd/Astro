document.addEventListener("DOMContentLoaded", function () {

    const questions = [
        {
            question: "Koľko planét je v slnečnej sústave?",
            correct: "8",
            options: ["7", "8", "9", "6", "10", "11"]
        },
        {
            question: "Aká je približná vzdialenosť 1AU?",
            correct: "150M km.",
            options: ["150M km.", "120M km.", "150M m.", "120M m.", "200M km.", "90M km."]
        },
        {
            question: "Aká je najväčšia planéta slnečnej sústavy?",
            correct: "Jupiter",
            options: ["Jupiter", "Saturn", "Zem", "Neptún", "Mars", "Uranus"]
        },
        {
            question: "Ktorá planéta je známa ako „červená planéta“?",
            correct: "Mars",
            options: ["Venuša", "Mars", "Neptún", "Saturn", "Jupiter", "Zem"]
        },
        {
            question: "Ktorý objekt je najväčší v slnečnej sústave?",
            correct: "Slnko",
            options: ["Slnko", "Jupiter", "Zem", "Titan", "Neptún", "Ceres"]
        },
        {
            question: "Ktorá planéta má najviac mesiacov?",
            correct: "Saturn",
            options: ["Jupiter", "Saturn", "Mars", "Neptún", "Uranus", "Merkúr"]
        },
        {
            question: "Ktorá planéta je najbližšie k Slnku?",
            correct: "Merkúr",
            options: ["Venuša", "Mars", "Merkúr", "Zem", "Saturn", "Jupiter"]
        },
        {
            question: "Aká je najchladnejšia planéta v slnečnej sústave?",
            correct: "Urán",
            options: ["Mars", "Saturn", "Urán", "Neptún", "Pluto", "Venuša"]
        },
        {
            question: "Aká planéta má najhustejšiu atmosféru?",
            correct: "Venuša",
            options: ["Venuša", "Jupiter", "Zem", "Saturn", "Mars", "Neptún"]
        },
        {
            question: "Ako dlho trvá, kým svetlo zo Slnka dorazí na Zem?",
            correct: "Približne 8 minút",
            options: ["1 sekunda", "Približne 8 minút", "Približne 1 hodina", "24 hodín", "30 sekúnd", "10 minút"]
        }];

    questions.sort(() => Math.random() - 0.5);

    let timeRemaining = 300; // 5 minutes = 300 seconds
    let timeStart = Date.now(); // Track when the test starts
    let isTimerSubmission = false; // Flag to track if submission is from timer

    // Select the timer display from the HTML
    const timerDisplay = document.getElementById('timer-display');

    function startTimer() {
        const interval = setInterval(function () {
            if (timeRemaining <= 0) {
                clearInterval(interval);
                isTimerSubmission = true; // Set the flag when time runs out
                submitTest(); // Submit the test automatically
            } else {
                timeRemaining--;
                timerDisplay.textContent = `Time remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    function getRandomOptions(correct, allOptions) {
        let shuffledOptions = allOptions.filter(opt => opt !== correct).sort(() => Math.random() - 0.5);
        let selectedOptions = shuffledOptions.slice(0, 3); // Get 3 random incorrect answers
        selectedOptions.push(correct);
        return selectedOptions.sort(() => Math.random() - 0.5); // Shuffle final four options
    }

    function displayQuestions() {
        const container = document.querySelector(".container");
        container.innerHTML = ""; // Clear previous content
        questions.forEach((q, index) => {
            const options = getRandomOptions(q.correct, q.options);
            let questionHTML = `
                <div class="question-container" id="question${index + 1}" style="display: ${index === 0 ? 'block' : 'none'};">
                    <h1>${index + 1}/${questions.length}</h1>
                    <h1>${q.question}</h1>
                    <form>
                        ${options.map(option => `<label><input type="radio" name="answer${index + 1}" value="${option}"> ${option}</label>`).join("<br>")}
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
    
        // Check answers and unanswered questions
        for (let i = 1; i <= questions.length; i++) {
            const selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
            if (!selectedAnswer) {
                unanswered.push(i);
            } else if (selectedAnswer.value === questions[i - 1].correct) {
                score++;
            }
        }
    
        // Only display the warning if it's not a timer submission
        if (!isTimerSubmission && unanswered.length > 0) {
            const proceed = confirm(`Nezodpovedali ste ${unanswered.length} otázok: ${unanswered.join(", ")}. Chcete pokračovať?`);
            if (!proceed) return; // If user cancels, stop the function here
        }
    
        // Stop the timer and calculate the time spent
        const timeSpentMilliseconds = Date.now() - timeStart; // Calculate the total time in milliseconds
        const timeSpentSeconds = Math.floor(timeSpentMilliseconds / 1000); // Convert milliseconds to seconds
        const minutesSpent = Math.floor(timeSpentSeconds / 60); // Calculate minutes
        const secondsSpent = timeSpentSeconds % 60; // Remaining seconds
    
        timerDisplay.style.display = 'none'; // Hide the timer after submitting the test
    
        // Display the result section
        const percentage = (score / questions.length) * 100;
        document.querySelector(".container").innerHTML = `
            <div class="result-section">
                <h1>Výsledok testu</h1>
                <p>Skóre: ${score}/${questions.length}</p>
                <p>Percentuálne: ${percentage.toFixed(2)}%</p>
                <p>Čas strávený: ${minutesSpent} minút a ${secondsSpent} sekúnd</p>
                <button type="button" class="home-btn">Home</button>
            </div>
        `;
    
        // Save the test results
        saveTestResults(studentName, score, questions.length, `${minutesSpent} minút a ${secondsSpent} sekúnd`);
    
        // Add event listener to "Home" button
        document.querySelector(".home-btn").addEventListener("click", function () {
            window.location.href = "ask.html";
        });
    }
    
    function saveTestResults(studentName, score, totalQuestions, timeSpent) {
        let results = JSON.parse(localStorage.getItem("testResults")) || [];
        let now = new Date().toLocaleString(); // Get formatted date and time
        results.push({
            name: studentName,
            score: score,
            percentage: ((score / totalQuestions) * 100).toFixed(2) + "%",
            time: timeSpent,
            date: now
        });
        localStorage.setItem("testResults", JSON.stringify(results));
    }    
    displayQuestions();
    startTimer();
    allowUnselecting();
});
