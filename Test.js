// Define all possible tests keyed by their unique code
const allTests = {
    "AKJ8B6": { // Corresponds to solar_system_easy
        timeLimit: 300, // 5 minutes
        questions: [
            {
                question: "Koľko planét je v slnečnej sústave?",
                correct: "8",
                options: ["7", "8", "9", "6", "10", "11"],
                points: 1
            },
            {
                question: "Aká je približná vzdialenosť 1AU?",
                correct: "150M km.",
                options: ["150M km.", "120M km.", "150M m.", "120M m.", "200M km.", "90M km."],
                points: 1
            },
            {
                question: "Aká je najväčšia planéta slnečnej sústavy?",
                correct: "Jupiter",
                options: ["Jupiter", "Saturn", "Zem", "Neptún", "Mars", "Uranus"],
                points: 1
            },
            {
                question: "Ktorá planéta je známa ako „červená planéta“?",
                correct: "Mars",
                options: ["Venuša", "Mars", "Neptún", "Saturn", "Jupiter", "Zem"],
                points: 1
            },
            {
                question: "Ktorý objekt je najväčší v slnečnej sústave?",
                correct: "Slnko",
                options: ["Slnko", "Jupiter", "Zem", "Titan", "Neptún", "Ceres"],
                points: 1
            },
            {
                question: "Ktorá planéta má najviac mesiacov?",
                correct: "Saturn",
                options: ["Jupiter", "Saturn", "Mars", "Neptún", "Uranus", "Merkúr"],
                points: 1
            },
            {
                question: "Ktorá planéta je najbližšie k Slnku?",
                correct: "Merkúr",
                options: ["Venuša", "Mars", "Merkúr", "Zem", "Saturn", "Jupiter"],
                points: 1
            },
            {
                question: "Aká je najchladnejšia planéta v slnečnej sústave?",
                correct: "Urán",
                options: ["Mars", "Saturn", "Urán", "Neptún", "Pluto", "Venuša"],
                points: 1
            },
            {
                question: "Aká planéta má najhustejšiu atmosféru?",
                correct: "Venuša",
                options: ["Venuša", "Jupiter", "Zem", "Saturn", "Mars", "Neptún"],
                points: 1
            },
            {
                question: "Ako dlho trvá, kým svetlo zo Slnka dorazí na Zem?",
                correct: "Približne 8 minút",
                options: ["1 sekunda", "Približne 8 minút", "Približne 1 hodina", "24 hodín", "30 sekúnd", "10 minút"],
                points: 1
            }
             
        ]
    },
    "KDP83B": { // Corresponds to solar_system_medium
        timeLimit: 600, // 10 minutes
        questions: [
            {
                question: "Ktoré z nasledujúcich objektov patria medzi vnútorné planéty slnečnej sústavy?",
                correct: ["Merkúr", "Venuša", "Zem", "Mars"],
                options: ["Merkúr", "Venuša", "Zem", "Mars", "Jupiter", "Saturn", "Kepler"],
                points: 2
              },
              {
                question: "Ktoré z nasledujúcich planét majú prstence?",
                correct: ["Saturn", "Jupiter", "Urán", "Neptún"],
                options: ["Merkúr", "Venuša", "Saturn", "Jupiter", "Urán", "Neptún", "Pluto", "Titan", "Phobos", "Deimos", "Io", "Ganymedes"],
                points: 2
              },
              {
                question: "Ktorá planéta má najnižšiu hustotu?",
                correct: "Saturn",
                options: ["Jupiter", "Saturn", "Uranus", "Neptún", "Venuša", "Zem"],
                points: 1
              },
              {
                question: "Ktoré z nasledujúcich objektov sa oficiálne považujú za trpasličie planéty?",
                correct: ["Pluto", "Ceres"],
                options: ["Pluto", "Ceres", "Deimos", "Proxima Centauri b", "Miller", "Sedna"],
                points: 2
              },
              {
                question: "Ktorá oblasť slnečnej sústavy sa nachádza medzi obežnými dráhami Marsu a Jupitera?",
                correct: "Pás asteroidov",
                options: ["Kuiperov pás", "Pás asteroidov", "Oortov oblak", "Heliosféra", "Vnútorný slnečný obal"],
                points: 1
              },
              {
                question: "Ktorý mesiac slnečnej sústavy je najväčší?",
                correct: "Ganymedes",
                options: ["Titan", "Ganymedes", "Callisto", "Io", "Triton", "Europa"],
                points: 1
              },
              {
                question: "Ktorý prvok sa vyskytuje v najväčšom množstve v slnečnej sústave?",
                correct: "Vodik",
                options: ["Vodik", "Helium", "Kyslík", "Uhlík", "Dusík", "Železo"],
                points: 1
              },
              {
                question: "Ako sa nazýva hranica medzi heliosférou a medzihviezdnym priestorom?",
                correct: "Heliopauza",
                options: ["Heliosféra", "Heliopauza", "Kuiperov pás", "Oortov oblak", "Pás asteroidov"],
                points: 1
              },
              {
                question: "Ktorá planéta má najvyššiu teplotu?",
                correct: "Venuša",
                options: ["Merkúr", "Venuša", "Mars", "Zem", "Jupiter", "Saturn"],
                points: 1
              },
              {
                question: "Ktorý z nasledujúcich objektov má veľmi excentrickú eliptickú trajektóriu?",
                correct: "Sedna",
                options: ["Pluto", "Eris", "Sedna", "Haumea", "Makemake", "Ceres"],
                points: 1
              }
        
        ]
    },
    "I73VVJ": { // Corresponds to solar_system_hard
        timeLimit: 1200, // 20 minutes
        questions: [
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
                question: "Vypočítajte únikovú rýchlosť pre mesiac Deimos. Predpokladajte, že hmotnosť Deimosu je 2.244×10^15kg a jeho polomer je 6.2km. Gravitačná konštanta je G=6.67430×10^−11",
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
        ]
    },
    "L9M13": { // Corresponds to History_easy
        timeLimit: 300, // 5 minutes
        questions: [
            {
                question: "Kto je považovaný za otca modernej astronómie?",
                correct: "Nikolas Koperník",
                options: ["Nikolas Koperník", "Johán Kepler", "Galileo Galilei", "Isaac Newton"],
                points: 1
            },
            {
                question: "Aký model vesmíru presadzoval Nikolas Koperník?",
                correct: "Heliocentrický",
                options: ["Geocentrický", "Heliocentrický", "Tychonický", "Newtonovský"],
                points: 1
            },
            {
                question: "Ktorý grécky filozof tvrdil, že Zem je stredom vesmíru?",
                correct: "Aristoteles",
                options: ["Ptolemai", "Aristoteles", "Kopernik", "Kepler"],
                points: 1
            },
            {
                question: "Ako sa nazýva proces, pri ktorom čierne diery vyžarujú častice v dôsledku kvantových efektov?",
                correct: "Hawkingovo žiarenie",
                options: ["Hawkingovo žiarenie", "Čiernodierne vyparovanie", "Kvantové žiarenie", "Horizonový efekt"],
                points: 1
            },
            
            {
                question: "V ktorom roku bola skonštruovaná rovnica E=mc^2",
                correct: "1905",
                options: ["1905", "1900", "1902", "1910", "1899"],
                points: 1
            },
            {
                question: "Ktorý astronóm objavil eliptické dráhy planét?",
                correct: "Johán Kepler",
                options: ["Galileo Galilei", "Johán Kepler", "Tycho Brahe", "Isaac Newton"],
                points: 1
            },
            {
                question: "Ktorý dôležitý objav spravil Galileo Galilei pomocou ďalekohľadu?",
                correct: "Mesiace Jupitera",
                options: ["Mesiace Jupitera", "Prstence Saturna", "Slnečné žiarenie", "Urán"],
                points: 1
            },
            {
                question: "Ktorý vedec sformuloval gravitačný zákon?",
                correct: "Isaac Newton",
                options: ["Galileo Galilei", "Nikolaus Kopernik", "Isaac Newton", "Johannes Kepler"],
                points: 1
            },
            {
                question: "Ako sa volá najstaršie známe astronomické zariadenie na meranie polohy hviezd a planét?",
                correct: "Astroláb",
                options: ["Astroláb", "Sextant", "Teleskop", "Kvadrant"],
                points: 1
            },
            {
                question: "Ktoré teleso astronómovia dlho považovali za deviatu planétu slnečnej sústavy?",
                correct: "Pluto",
                options: ["Pluto", "Ceres", "Eris", "Merkur"],
                points: 1
            },
        ]
    },
    "D8201A": { // Corresponds to things_easy
        timeLimit: 300, // 5 minutes
        questions: [
            {
                question: "Aký nástroj sa používa na pozorovanie objektov vo vesmíre?",
                correct: "Teleskop",
                options: ["Teleskop", "Mikroskop", "Kompas", "Astroláb"],
                points: 1
            },
            {
                question: "Ako sa nazýva prístroj na meranie uhlovej výšky hviezd nad obzorom?",
                correct: "Sextant",
                options: ["Sextant", "Teleskop", "Astroláb", "Barometer"],
                points: 1
            },
            {
                question: "Prečo je teleskop s väčším priemerom objektívu lepší na pozorovanie objektov vo vesmíre?",
                correct: "Zachytáva viac svetla, čo vedie k jasnejším a detailnejším obrazom.",
                options: ["Zachytáva viac svetla, čo vedie k jasnejším a detailnejším obrazom.", "Zlepšuje farby obrazu, ktoré sa zobrazujú na obrazovke.", "Umožňuje lepšie zamerať teleskop na konkrétny objekt.", "Znižuje náklady na výrobu teleskopu."],
                points: 1
            },
            {
                question: "Aký nástroj pomáha astronómom analyzovať svetlo z hviezd?",
                correct: "Spektroskop",
                options: ["Spektroskop", "Teleskop", "Sextant", "Barometer"],
                points: 1
            },
            {
                question: "Aký známy teleskop sa nachádza na obežnej dráhe Zeme?",
                correct: "Hubbleov teleskop",
                options: ["Hubbleov teleskop", "Newtonov teleskop", "Arecibo teleskop", "James Webb teleskop"],
                points: 1
            },
            {
                question: "Ako sa nazýva teleskop určený na zachytávanie rádiových vĺn z vesmíru?",
                correct: "Rádioteleskop",
                options: ["Rádioteleskop", "Optický teleskop", "Vĺnový teleskop", "Barometer"],
                points: 1
            },
            {
                question: "Ktorý prístroj sa používal na meranie času v minulosti?",
                correct: "Slnečné hodiny",
                options: ["Slnečné hodiny", "Teleskop", "Astroláb", "Gyroskop"],
                points: 1
            },
            {
                question: "Ako sa nazýva prístroj, ktorý pomáha navigátorom určovať zemepisnú šírku?",
                correct: "Kvadrant",
                options: ["Kvadrant", "Kompas", "Spektroskop", "Gyroskop"],
                points: 1
            },
            {
                question: "Ktorý typ teleskopu používa na zber svetla zakrivené zrkadlá?",
                correct: "Reflektor",
                options: ["Reflektor", "Refraktor", "Rádioteleskop", "Teleskop"],
                points: 1
            },
            {
                question: "Aký typ ďalekohľadu využíva na zber svetla šošovky?",
                correct: "Refraktor",
                options: ["Refraktor", "Reflektor", "Rádioteleskop", "Spektroskop"],
                points: 1
            }            

        ]
    }
    // Add other test codes and their corresponding question arrays here
};

document.addEventListener("DOMContentLoaded", function () {

    // Get the test code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const testCode = urlParams.get('code');
    const studentName = localStorage.getItem("studentName"); // Get student name

    // Validate the test code
    if (!testCode || !allTests[testCode]) {
        document.body.innerHTML = `<h1>Error: Invalid or missing test code.</h1><p>Please return to the previous page and enter a valid code.</p><p>Received code: ${testCode || 'None'}</p>`;
        // Clear potentially sensitive info if the test is invalid
        localStorage.removeItem("studentName");
        localStorage.removeItem("currentTestCode");
        return; // Stop execution
    }

    // --- Select the correct test data based on the code ---
    const currentTest = allTests[testCode];
    const currentTestQuestions = currentTest.questions; // The array of questions for *this* test
    let timeRemaining = currentTest.timeLimit; // Use the time limit specific to this test

    // --- REST OF YOUR Test.js CODE ---
    // IMPORTANT: Replace all instances of the old 'questions' variable
    // with 'currentTestQuestions'

    // Shuffle the selected questions array.
    currentTestQuestions.sort(() => Math.random() - 0.5);

    // let timeRemaining = 1200; // REMOVED - Now set from currentTest.timeLimit above
    let timeStart = Date.now();
    let isTimerSubmission = false;
    let isVisibilitySubmission = false;

    const timerDisplay = document.getElementById('timer-display');

    function startTimer() {
        // Update display immediately
        timerDisplay.textContent = `Time remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`;

        const interval = setInterval(function () {
            if (isTimerSubmission || isVisibilitySubmission) { // Stop timer if already submitted
                 clearInterval(interval);
                 return;
            }
            if (timeRemaining <= 0) {
                clearInterval(interval);
                isTimerSubmission = true;
                submitTest();
            } else {
                timeRemaining--;
                timerDisplay.textContent = `Time remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    document.addEventListener("visibilitychange", function () {
        // Only submit if the test hasn't been submitted by timer or manually already
        if (document.visibilityState === "hidden" && !isTimerSubmission && !isVisibilitySubmission && !document.querySelector(".result-section")) { // Added check for result section
            isVisibilitySubmission = true;
            console.log("Visibility changed, submitting test."); // Debug log
            submitTest();
        }
    });

    function getRandomOptions(correct, allOptions) {
         // --- Keep this function as is, it works on the options of a single question ---
         // ... (your existing getRandomOptions function code) ...
         // If options are 6 or fewer, return all of them shuffled.
         if (allOptions.length <= 5) { // Use 5, as 6 options total means slice(0, 5) grabs indices 0-4
             return allOptions.sort(() => Math.random() - 0.5);
         } else {
             // More than 6 options available.
             if (Array.isArray(correct)) {
                 // For multiple-answer questions:
                 let correctSet = [...correct]; // Clone to avoid modifying original
                 let incorrectOptions = allOptions.filter(opt => !correctSet.includes(opt));
                 // Shuffle the incorrect options.
                 incorrectOptions.sort(() => Math.random() - 0.5);
                 // We want exactly 6 options total if possible
                 let neededIncorrect = 6 - correctSet.length;

                 // If there are 6 or more correct answers, just take the first 6 shuffled correct answers
                 if (neededIncorrect <= 0) {
                     return correctSet.sort(() => Math.random() - 0.5).slice(0, 6);
                 }

                 // Ensure we don't try to slice more incorrect options than available
                 neededIncorrect = Math.min(neededIncorrect, incorrectOptions.length);

                 let selectedIncorrect = incorrectOptions.slice(0, neededIncorrect);
                 let combined = correctSet.concat(selectedIncorrect);
                 // Shuffle the final combined list of 6 options
                 return combined.sort(() => Math.random() - 0.5);

             } else {
                 // For single-answer questions:
                 // Need 5 incorrect + 1 correct = 6 total
                 let incorrectOptions = allOptions.filter(opt => opt !== correct);
                 incorrectOptions.sort(() => Math.random() - 0.5);

                 // Ensure we don't try to slice more incorrect options than available
                 let selectedIncorrect = incorrectOptions.slice(0, Math.min(5, incorrectOptions.length));

                 let selectedOptions = [correct, ...selectedIncorrect];
                 // Shuffle the final list
                 return selectedOptions.sort(() => Math.random() - 0.5);
             }
         }
     }

    function displayQuestions() {
        const container = document.querySelector(".container");
        container.innerHTML = ""; // Clear previous content.

        // --- Use currentTestQuestions ---
        currentTestQuestions.forEach((q, index) => {
            const options = getRandomOptions(q.correct, q.options);
            const inputType = Array.isArray(q.correct) ? "checkbox" : "radio";
            let questionHTML = `
                <div class="question-container" id="question${index + 1}" style="display: ${index === 0 ? 'block' : 'none'};">
                    <h1>${index + 1}/${currentTestQuestions.length}</h1>
                    <h1>${q.question}</h1>
                    <form>
                        ${options.map(option => `<label><input type="${inputType}" name="answer${index + 1}" value="${option.replace(/"/g, '&quot;')}"> ${option}</label>`).join("<br>")}
                        <div class="navigation-buttons">
                         ${index > 0 ? `<button type="button" class="prev-btn">Previous</button>` : ""}
                         ${index < currentTestQuestions.length - 1 ? `<button type="button" class="next-btn">Next</button>` : ""}
                         ${index === currentTestQuestions.length - 1 ? `<button type="button" class="submit">Submit</button>` : ""}
                        </div>
                    </form>
                </div>
            `;
            container.innerHTML += questionHTML;
        });
        setupNavigation();
    }

    function setupNavigation() {
        let currentQuestionIndex = 0; // Use 0-based index internally
        // --- Use currentTestQuestions ---
        const totalQuestions = currentTestQuestions.length;

        function showQuestion(indexToShow) { // indexToShow is 0-based
            document.querySelectorAll(".question-container").forEach((div, idx) => {
                div.style.display = idx === indexToShow ? "block" : "none";
            });
            currentQuestionIndex = indexToShow; // Update current index
        }

        document.querySelectorAll(".next-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                if (currentQuestionIndex < totalQuestions - 1) {
                    showQuestion(currentQuestionIndex + 1);
                }
            });
        });

        document.querySelectorAll(".prev-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                if (currentQuestionIndex > 0) {
                    showQuestion(currentQuestionIndex - 1);
                }
            });
        });

        // Ensure the submit button listener is attached correctly
         const submitButton = document.querySelector(".submit");
         if (submitButton) {
             submitButton.addEventListener("click", function () {
                // Set flags to prevent double submission from visibility change
                isTimerSubmission = false; // Manual submission overrides timer/visibility flags for message logic
                isVisibilitySubmission = false;
                submitTest();
             });
         } else {
             console.error("Submit button not found. Ensure the last question includes it.");
         }
    }


    let hasSubmitted = false; // Flag to prevent multiple submissions

    function submitTest() {
        // Prevent multiple submissions
        if (hasSubmitted) {
            console.log("Submission already in progress or completed.");
            return;
        }
        hasSubmitted = true; // Set flag immediately
        console.log("SubmitTest called. isTimer:", isTimerSubmission, "isVisibility:", isVisibilitySubmission); // Debug log


        let unanswered = [];
        let score = 0;
        // const studentName = localStorage.getItem("studentName"); // Already fetched at the top
        const takenTestCode = localStorage.getItem("currentTestCode"); // Get the code of the test being submitted

        // --- Use currentTestQuestions ---
        for (let i = 0; i < currentTestQuestions.length; i++) {
            const currentQuestion = currentTestQuestions[i];
            const questionIndexForName = i + 1; // For input name="answerX"

            if (Array.isArray(currentQuestion.correct)) {
                // Multiple correct answers (checkboxes)
                let selectedElements = document.querySelectorAll(`input[name="answer${questionIndexForName}"]:checked`);
                let selectedAnswers = Array.from(selectedElements).map(el => el.value);

                if (selectedAnswers.length === 0) {
                    unanswered.push(questionIndexForName);
                } else {
                    // Calculate score for multiple choice: (correctly selected - incorrectly selected) / total correct * points
                    let correctSet = new Set(currentQuestion.correct); // Use Set for efficient lookup
                    let numCorrectSelected = 0;
                    let numWrongSelected = 0;

                    selectedAnswers.forEach(answer => {
                        if (correctSet.has(answer)) {
                            numCorrectSelected++;
                        } else {
                            numWrongSelected++;
                        }
                    });

                    // Ensure score doesn't go below zero for the question
                    let questionScore = Math.max(0, (numCorrectSelected - numWrongSelected)) / currentQuestion.correct.length * currentQuestion.points;
                    score += questionScore;
                    // console.log(`Q${questionIndexForName}: Correct=${numCorrectSelected}, Wrong=${numWrongSelected}, Total Correct=${currentQuestion.correct.length}, Points=${currentQuestion.points}, Score Added=${questionScore.toFixed(2)}`);

                }
            } else {
                // Single correct answer (radio buttons)
                const selectedAnswer = document.querySelector(`input[name="answer${questionIndexForName}"]:checked`);
                if (!selectedAnswer) {
                    unanswered.push(questionIndexForName);
                } else if (selectedAnswer.value === currentQuestion.correct) {
                    score += currentQuestion.points;
                     // console.log(`Q${questionIndexForName}: Correct. Score Added=${currentQuestion.points}`);
                } else {
                    // console.log(`Q${questionIndexForName}: Incorrect. Selected=${selectedAnswer.value}, Correct=${currentQuestion.correct}`);
                }
            }
        }


        // Show confirmation ONLY for manual submission (not timer/visibility) if questions are unanswered
        if (!isTimerSubmission && !isVisibilitySubmission && unanswered.length > 0) {
            const proceed = confirm(`Nezodpovedali ste ${unanswered.length} otázok: ${unanswered.join(", ")}. Chcete napriek tomu odovzdať test?`);
            if (!proceed) {
                 hasSubmitted = false; // Reset submission flag if user cancels
                 console.log("User cancelled submission.");
                 return; // Stop submission
            }
        }

        // Stop the timer explicitly if submitting manually before time runs out
         isTimerSubmission = true; // Treat manual submit as final, prevents timer overlap

        // Proceed with submission
        const timeSpentMilliseconds = Date.now() - timeStart;
        const timeSpentSeconds = Math.floor(timeSpentMilliseconds / 1000);
        const minutesSpent = Math.floor(timeSpentSeconds / 60);
        const secondsSpent = timeSpentSeconds % 60;

        // Hide timer display
        if(timerDisplay) timerDisplay.style.display = 'none';

        // --- Use currentTestQuestions ---
        const totalPoints = currentTestQuestions.reduce((sum, q) => sum + q.points, 0);
        // Ensure score is not negative and cap at totalPoints
        score = Math.max(0, score);
        score = Math.min(score, totalPoints);

        const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0; // Avoid division by zero

        document.querySelector(".container").innerHTML = `
            <div class="result-section">
                <h1>Výsledok testu (Kód: ${takenTestCode || 'N/A'})</h1>
                <h2>Meno: ${studentName || 'N/A'}</h2>
                <p>Skóre: ${score.toFixed(2)} / ${totalPoints}</p>
                <p>Percentuálne: ${percentage.toFixed(2)}%</p>
                <p>Čas strávený: ${minutesSpent} minút a ${secondsSpent} sekúnd</p>
                ${isVisibilitySubmission ? '<p><strong>Poznámka:</strong> Test bol automaticky ukončený, pretože ste opustili stránku alebo prepli na inú kartu/aplikáciu.</p>' : ''}
                ${isTimerSubmission && !isVisibilitySubmission && unanswered.length === 0 ? '<p><strong>Poznámka:</strong> Test bol automaticky ukončený, pretože vypršal časový limit.</p>' : ''}
                <button type="button" class="home-btn">Home</button>
            </div>
        `;

        // --- Pass the test code to the save function ---
        saveTestResults(studentName, takenTestCode, score.toFixed(2), totalPoints, `${minutesSpent} minút a ${secondsSpent} sekúnd`);

        document.querySelector(".home-btn").addEventListener("click", function () {
            // Optionally clear specific test info, keep student name maybe?
             localStorage.removeItem("currentTestCode");
            // Redirect to index.html or student-interface.html
            window.location.href = "student-interface.html"; // Or your main student page
        });

         // Clear the sensitive items after submission and saving
         localStorage.removeItem("currentTestCode");
         // Decide if you want to clear the studentName here or keep it for the next session
         // localStorage.removeItem("studentName");
    }

    // --- ADD A function saveTestResults (if not already globally defined) ---
    // This function should ideally send the data to a server,
    // but for this example, we'll just log it or store it locally (less ideal for real scenarios).
    function saveTestResults(name, code, achievedScore, maxScore, timeTaken) {
        console.log("Saving test results (example):");
        console.log(`  Student: ${name}`);
        console.log(`  Test Code: ${code}`);
        console.log(`  Score: ${achievedScore} / ${maxScore}`);
        console.log(`  Time: ${timeTaken}`);

        // Example: Append to a list in localStorage (demonstration only, gets large quickly)
        const resultsKey = `testResults_${code}`; // Store results per test code
        let existingResults = JSON.parse(localStorage.getItem(resultsKey) || "[]");
        existingResults.push({
            student: name,
            score: achievedScore,
            total: maxScore,
            time: timeTaken,
            date: new Date().toISOString()
        });
        localStorage.setItem(resultsKey, JSON.stringify(existingResults));

       // In a real application, you would use fetch() to send this data to your backend server:
       /*
       fetch('/api/save-result', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               studentName: name,
               testCode: code,
               score: achievedScore,
               totalPoints: maxScore,
               timeSpent: timeTaken,
               submittedAt: new Date().toISOString()
           })
       })
       .then(response => response.json())
       .then(data => console.log('Result saved successfully:', data))
       .catch(error => console.error('Error saving result:', error));
       */
    }


    // --- Initial setup ---
    displayQuestions();
    startTimer();

}); // End of DOMContentLoaded
// --- MODIFICATION END ---