document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Aký je názov najväčšieho známeho priepasťového útvaru v slnečnej sústave, nachádzajúceho sa na Marse?",
            correct: "Valles Marineris",
            options: ["Olympus Mons", "Valles Marineris", "Hellas Planitia", "Tharsis"],
            points: 1 
        },
        {
            question: "Aký je hlavný komponent atmosféry Venuše?",
            correct: "Oxid uhličitý",
            options: ["Oxid uhličitý", "Dusík", "Metán", "Kyslík", "Amoniak", "Vodík"],
            points: 1
        },
        {
            question: "Ktorý z nasledujúcich javov je spôsobený orbitálnou rezonanciou medzi telesami v Slnečnej sústave?",
            correct: "Dráhová rezonancia medzi mesiacmi Jupitera",
            options: [
                "Dráhová rezonancia medzi mesiacmi Jupitera",
                "Pomer obežných dôb Zeme a Venuše",
                "Gravitačné vlny vyžarované Slnkom",
                "Magnetické búrky na povrchu Slnka",
                "Skupinové usporiadanie planét počas konjunkcie"
            ],
            points: 1
        },
        {
            question: "Ktorá planéta v slnečnej sústave má najvyšší sklon rotácie?",
            correct: "Urán",
            options: ["Jupiter", "Neptún", "Saturn", "Urán", "Mars", "Pluto"],
            points: 1
        },
        {
            question: "Ako sa nazýva najväčšia medzera medzi prstenecmi Saturna?",
            correct: "Cassiniho medzera",
            options: ["Cassiniho medzera", "Maxwellova medzera", "Huygensova medzera", "Keelerova medzera", "Columbova medzera"],
            points: 1
        },
        {
            question: "Kde sa nachádza Oortov oblak?",
            correct: "Na okraji slnečnej sústavy",
            options: ["Na okraji slnečnej sústavy", "Medzi Marsom a Jupiterom", "Medzi Jupiterom a Saturnom", "V blízkosti Slnka", "Medzi dráhami Pluta a Neptúnu"],
            points: 1
        },
        {
            question: "Predpokladaj, že polomer Zeme je približne 6 378 km a doba rotácie je 24 hodín. Akou rýchlosťou sa Zem otáča?",
            correct: "0,463 km/s",
            options: ["0,455 km/s", "0,462 km/s", "0,475 km/s", "0,473 km/s", "0,463 km/s"],
            points: 4 
        },
        {
            question: "Vypočítajte únikovú rýchlosť pre mesiac Deimos. Predpokladajte, že hmotnosť Deimosu je 2.244×10^15kg a jeho polomer je 6.2km. Gravitačná konštanta je G=6.67430×10^−11 m^3⋅kg^−1⋅s^−2.",
            correct: "6,95 m/s", 
            options: ["6,95 m/s", "3,87 m/s", "7,24 m/s", "11,35 m/s", "9,11 m/s", "5,62 m/s"],
            points: 4 
        },
        {
            question: "Ktoré z nasledujúcich tvrdení sú pravdivé o Kuiperovom páse?",
            correct: ["Kuiperov pás sa nachádza za obežnou dráhou Neptúna.", "Kuiperov pás obsahuje trpasličie planéty ako Pluto a Eris.", "Kuiperov pás je zdrojom krátkoperiodických komét."],
            options: [
                "Kuiperov pás sa nachádza za obežnou dráhou Neptúna.",
                "Kuiperov pás obsahuje trpasličie planéty ako Pluto a Eris.",
                "Kuiperov pás je zdrojom krátkoperiodických komét.",
                "Kuiperov pás je bližšie k Slnku ako asteroidový pás.",
                "Kuiperov pás je tvorený hlavne kovovými asteroidmi."
            ],
            points: 2
        },
        {
            question: "Ktoré faktory najviac ovplyvňujú, či planéta udrží hustú atmosféru dlhodobo?", 
            correct: ["Gravitačná sila planéty", "Teplota planéty"],
            options: [
                "Gravitačná sila planéty",
                "Teplota planéty",
                "Počet mesiacov planéty",
                "Magnetické pole planéty",
                "Vzdialenosť planéty od Slnka",
                "Rotácia planéty"
            ],
            points: 2
        }
    ];
      
    // Shuffle questions array.
    questions.sort(() => Math.random() - 0.5);

    let timeRemaining = 1200; // 20 minutes = 1200 seconds
    let timeStart = Date.now(); // Track when the test starts
    let isTimerSubmission = false; // Flag to track if submission is from timer
    let isVisibilitySubmission = false; // New flag for visibility-based submission

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

    // Add visibilitychange listener to submit test when user leaves
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden" && !isTimerSubmission && !isVisibilitySubmission) {
            isVisibilitySubmission = true; // Set flag to indicate visibility-based submission
            submitTest();
        }
    });
    // Modified getRandomOptions:
    // If there are more than 6 options available, only 6 options are shown.
    // The function ensures that the correct answer(s) are always included.
    function getRandomOptions(correct, allOptions) {
        // If options are 6 or fewer, return all of them shuffled.
        if (allOptions.length <= 5) {
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
                    return correctSet.sort(() => Math.random() - 0.5).slice(0, 5);
                }
                let selectedIncorrect = incorrectOptions.slice(0, neededIncorrect);
                let combined = correctSet.concat(selectedIncorrect);
                return combined.sort(() => Math.random() - 0.5);
            } else {
                // For single-answer questions:
                let optionsCopy = [...allOptions];
                optionsCopy.sort(() => Math.random() - 0.5);
                let selectedOptions = optionsCopy.slice(0, 5);
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
        const studentName = localStorage.getItem("studentName");

        // Kontrola odpovedí a nezodpovedaných otázok
        for (let i = 1; i <= questions.length; i++) {
            const currentQuestion = questions[i - 1];
            if (Array.isArray(currentQuestion.correct)) {
                let selectedElements = document.querySelectorAll(`input[name="answer${i}"]:checked`);
                let selectedAnswers = Array.from(selectedElements).map(el => el.value);
                if (selectedAnswers.length === 0) {
                    unanswered.push(i);
                } else {
                    let fractionPerAnswer = 1 / currentQuestion.correct.length;
                    let numCorrectSelected = selectedAnswers.filter(answer => currentQuestion.correct.includes(answer)).length;
                    let numWrongSelected = selectedAnswers.filter(answer => !currentQuestion.correct.includes(answer)).length;
                    let questionScore = fractionPerAnswer * (numCorrectSelected - numWrongSelected) * currentQuestion.points;
                    score += questionScore;
                }
            } else {
                const selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
                if (!selectedAnswer) {
                    unanswered.push(i);
                } else if (selectedAnswer.value === currentQuestion.correct) {
                    score += currentQuestion.points;
                }
            }
        }

        // Show confirmation only for manual submission (not timer or visibility)
        if (!isTimerSubmission && !isVisibilitySubmission && unanswered.length > 0) {
            const proceed = confirm(`Nezodpovedali ste ${unanswered.length} otázok: ${unanswered.join(", ")}. Chcete pokračovať?`);
            if (!proceed) return; // Only stops if user cancels manual submission
        }

        // Proceed with submission regardless of unanswered questions for visibility change
        const timeSpentMilliseconds = Date.now() - timeStart;
        const timeSpentSeconds = Math.floor(timeSpentMilliseconds / 1000);
        const minutesSpent = Math.floor(timeSpentSeconds / 60);
        const secondsSpent = timeSpentSeconds % 60;

        timerDisplay.style.display = 'none';

        const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
        const percentage = (score / totalPoints) * 100;
        document.querySelector(".container").innerHTML = `
            <div class="result-section">
                <h1>Výsledok testu</h1>
                <p>Skóre: ${score.toFixed(2)}/${totalPoints}</p>
                <p>Percentuálne: ${percentage.toFixed(2)}%</p>
                <p>Čas strávený: ${minutesSpent} minút a ${secondsSpent} sekúnd</p>
                ${isVisibilitySubmission ? '<p><strong>Poznámka:</strong> Test bol automaticky ukončený, pretože ste opustili stránku.</p>' : ''}
                <button type="button" class="home-btn">Home</button>
            </div>
        `;

        saveTestResults(studentName, score.toFixed(2), totalPoints, `${minutesSpent} minút a ${secondsSpent} sekúnd`);

        document.querySelector(".home-btn").addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

    displayQuestions();
    startTimer();
});