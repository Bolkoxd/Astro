const allTests = {
    "AKJ8B6": { 
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
    },
    "Z1L6PA": { // Corresponds to Astronomy_easy
        timeLimit: 600, // 10 minutes
        questions: [
             {
                 question: "Čo je najväčšia známa štruktúra vo vesmíre?",
                 correct: "Veľká stena Herkules-Koróna Borealis",
                 options: ["Galaxia Mliečna cesta", "Veľká stena Herkules-Koróna Borealis", "Kopa galaxií v Panne", "Hmlovina Tarantula"],
                 points: 2
             },
             {
                 question: "Čo je to čierna diera?",
                 correct: " Oblasť priestoru s takou silnou gravitáciou, že z nej nemôže uniknúť nič, ani svetlo",
                 options: [" Chladná hviezda, ktorá nevyžaruje svetlo", 
                           " Oblasť priestoru s takou silnou gravitáciou, že z nej nemôže uniknúť nič, ani svetlo", 
                           "Planéta zložená z tmavej hmoty",
                           "Typ galaxie s veľmi nízkou svietivosťou"],
                 points: 2
             },
             {
                 question: "Ktorý z nasledujúcich javov je dôsledkom zemskej rotácie?",
                 correct: "Striedanie dňa a noci",
                 options: ["Striedanie ročných období", "Príliv a odliv", "Striedanie dňa a noci", "Zatmenie Slnka"],
                 points: 2
             },
             {
                 question: "Ako sa nazýva naša galaxia?",
                 correct: "Mliečna cesta",
                 options: ["Andromeda", "Triangulum", "Mliečna cesta", "Sombrero", "Centaurus A", "Veľký Magellanov mrak"],
                 points: 1
             },
             {
                 question: "Čo je to supernova?",
                 correct: "Explózia hviezdy na konci jej života",
                 options: ["Bežný zánik malej hviezdy", "Explózia hviezdy na konci jej života", "Zrážka dvoch planét", "Vznik novej galaxie"],
                 points: 2
             },
             {
                 question: "Čo je to asteroid?",
                 correct: "Skalnaté teleso obiehajúce okolo Slnka, menšie ako planéta",
                 options: ["Malé ľadové teleso obiehajúce okolo Slnka", 
                           "Veľké plynné teleso mimo slnečnej sústavy", 
                           "Skalnaté teleso obiehajúce okolo Slnka, menšie ako planéta", 
                           "Planéta obiehajúca okolo Slnka"],
                 points: 2
             },
             {
                 question: "Čo je to červený posun?",
                 correct: "Posun spektrálnych čiar svetla vzdialených galaxií smerom k červenému koncu spektra v dôsledku rozpínania vesmíru",
                 options: ["Posun spektrálnych čiar svetla vzdialených galaxií smerom k červenému koncu spektra v dôsledku rozpínania vesmíru", 
                           "Zmena farby hviezdy na červenú pri jej zahrievaní", 
                           "Optický klam spôsobený zemskou atmosférou", 
                           "Jav pozorovaný len pri veľmi jasných hviezdach"],
                 points: 2
             },
             {
                 question: "Ako sa nazýva naša najbližšia hviezda okrem Slnka?",
                 correct: "Proxima Centauri",
                 options: ["Sírius", "Proxima Centauri", "Betelgeuse", "Vega", "Luhman 16", "UY Scuti", "Stephenson 2-18"],
                 points: 2
             },
             {
                 question: "Čo je to hmlovina?",
                 correct: "Oblak plynu a prachu v medzihviezdnom priestore",
                 options: ["Skupina mnohých hviezd, ktoré sú blízko seba", "Oblak plynu a prachu v medzihviezdnom priestore", "Malá galaxia obiehajúca okolo väčšej galaxie", "Pozostatok po zrážke dvoch planét"],
                 points: 2
             },
             {
                 question: "Ktorý mesiac je známy svojimi jazerami a morami tekutého metánu a etánu",
                 correct: "Titan",
                 options: ["Európa", "Titan", "Io", "Ganymedes", "Mesiac", "Luna", "Callisto"],
                 points: 2
             },
             {
                 question: "Čo je to exoplanéta?",
                 correct: ["Planéta, ktorá obieha okolo inej hviezdy ako Slnka", "Planéta, ktorá sa nachádza mimo našej galaxie", "Planéta, ktorá sa nenachádza v Slnečnej sústave"], // Note: Adjusted this based on options, assuming multiple answers are possible interpretations
                 options: ["Planéta, ktorá obieha okolo inej hviezdy ako Slnka",
                           "Planéta v našej slnečnej sústave, ktorá bola objavená len nedávno", 
                           "Malé teleso podobné planéte, ktoré obieha okolo inej planéty",
                           "Planéta, ktorá sa nachádza mimo našej galaxie", 
                           "Planéta, ktorá sa nenachádza v Slnečnej sústave"],
                 points: 2
             },
             {
                 question: "Aké sú hlavné zložky typickej kométy?",
                 correct: ["Ľad", "Prach", "Plyn"],
                 options: ["Skaly", "Ľad", "Prach", "Plyn", "Kovové jadro", "Piesok", "diamant"],
                 points: 2
             },
        ]
    }
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

    // Shuffle the selected questions array.
    currentTestQuestions.sort(() => Math.random() - 0.5);

    let timeStart = Date.now();
    let isTimerSubmission = false;
    let isVisibilitySubmission = false;
    let hasSubmitted = false; // Flag to prevent multiple submissions
    let userAnswersDetailed = []; // <--- *** NEW: To store detailed answers ***

    const timerDisplay = document.getElementById('timer-display');

    function startTimer() {
        timerDisplay.textContent = `Time remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`;
        const interval = setInterval(function () {
            if (hasSubmitted) { // Use the main submission flag
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
        if (document.visibilityState === "hidden" && !hasSubmitted && !document.querySelector(".result-section")) {
            isVisibilitySubmission = true;
            console.log("Visibility changed, submitting test."); // Debug log
            submitTest();
        }
    });

    function getRandomOptions(correct, allOptions) {
        // --- Keep this function as is ---
        if (allOptions.length <= 6) { // Adjusted to 6 for clarity if we *want* max 6
            return allOptions.sort(() => Math.random() - 0.5);
        } else {
            const numOptionsToDisplay = 6;
            if (Array.isArray(correct)) {
                let correctSet = [...correct];
                let incorrectOptions = allOptions.filter(opt => !correctSet.includes(opt));
                incorrectOptions.sort(() => Math.random() - 0.5);

                let neededIncorrect = numOptionsToDisplay - correctSet.length;

                if (neededIncorrect <= 0) {
                    return correctSet.sort(() => Math.random() - 0.5).slice(0, numOptionsToDisplay);
                }

                neededIncorrect = Math.min(neededIncorrect, incorrectOptions.length);
                let selectedIncorrect = incorrectOptions.slice(0, neededIncorrect);
                let combined = correctSet.concat(selectedIncorrect);
                return combined.sort(() => Math.random() - 0.5);

            } else {
                let incorrectOptions = allOptions.filter(opt => opt !== correct);
                incorrectOptions.sort(() => Math.random() - 0.5);

                // Need numOptionsToDisplay - 1 incorrect options
                let neededIncorrect = numOptionsToDisplay - 1;
                let selectedIncorrect = incorrectOptions.slice(0, Math.min(neededIncorrect, incorrectOptions.length));
                let selectedOptions = [correct, ...selectedIncorrect];
                return selectedOptions.sort(() => Math.random() - 0.5);
            }
        }
     }

    function displayQuestions() {
        const container = document.querySelector(".container");
        container.innerHTML = ""; // Clear previous content.

        currentTestQuestions.forEach((q, index) => {
            const options = getRandomOptions(q.correct, q.options);
            const inputType = Array.isArray(q.correct) ? "checkbox" : "radio";
            let questionHTML = `
                <div class="question-container" id="question${index + 1}" style="display: ${index === 0 ? 'block' : 'none'};">
                    <h1>${index + 1}/${currentTestQuestions.length}</h1>
                    <h1>${q.question}</h1>
                        ${options.map(option => `<label><input type="${inputType}" name="answer${index + 1}" value="${option.replace(/"/g, '&quot;')}"> ${option}</label>`).join("<br>")}
                        <div class="navigation-buttons">
                         ${index > 0 ? `<button type="button" class="prev-btn">Previuos</button>` : ""}
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

        const submitButton = document.querySelector(".submit");
        if (submitButton) {
             submitButton.addEventListener("click", function () {
                 // Clear timer/visibility flags for message logic if manually submitted
                 const wasTimer = isTimerSubmission;
                 const wasVis = isVisibilitySubmission;
                 isTimerSubmission = false;
                 isVisibilitySubmission = false;
                 // Ask for confirmation if unanswered questions exist
                 let unanswered = checkUnanswered();
                 if (unanswered.length > 0) {
                     const proceed = confirm(`Nezodpovedali ste ${unanswered.length} otázok: ${unanswered.join(", ")}. Chcete napriek tomu odovzdať test?`);
                     if (!proceed) {
                         // Restore original flags if user cancels
                         isTimerSubmission = wasTimer;
                         isVisibilitySubmission = wasVis;
                         return; // Stop submission
                     }
                 }
                 // If confirmed or no unanswered, proceed to submit
                 submitTest();
             });
        } else {
             console.error("Submit button not found. Ensure the last question includes it.");
        }
    }

    // Helper function to check for unanswered questions without submitting
    function checkUnanswered() {
        let unansweredIndexes = [];
        for (let i = 0; i < currentTestQuestions.length; i++) {
            const currentQuestion = currentTestQuestions[i];
            const questionIndexForName = i + 1;
            let isAnswered = false;
            if (Array.isArray(currentQuestion.correct)) {
                let selectedElements = document.querySelectorAll(`input[name="answer${questionIndexForName}"]:checked`);
                if (selectedElements.length > 0) {
                    isAnswered = true;
                }
            } else {
                const selectedAnswer = document.querySelector(`input[name="answer${questionIndexForName}"]:checked`);
                if (selectedAnswer) {
                    isAnswered = true;
                }
            }
            if (!isAnswered) {
                unansweredIndexes.push(questionIndexForName);
            }
        }
        return unansweredIndexes;
    }


    function submitTest() {
        // Prevent multiple submissions
        if (hasSubmitted) {
            console.log("Submission already in progress or completed.");
            return;
        }
        hasSubmitted = true; // Set flag immediately
        console.log("SubmitTest called. isTimer:", isTimerSubmission, "isVisibility:", isVisibilitySubmission); // Debug log

        // --- Stop the timer explicitly ---
        // Set a flag or clear interval if needed, handled by hasSubmitted check in timer now

        let score = 0;
        userAnswersDetailed = []; // Clear previous detailed answers if any
        const takenTestCode = testCode; // Use the validated test code

        // Loop through questions to calculate score AND store detailed answers
        for (let i = 0; i < currentTestQuestions.length; i++) {
            const currentQuestion = currentTestQuestions[i];
            const questionIndexForName = i + 1; // For input name="answerX"
            let isCorrect = false;
            let userAnswer = null;
            let questionScore = 0;

            if (Array.isArray(currentQuestion.correct)) {
                // Multiple correct answers (checkboxes)
                let selectedElements = document.querySelectorAll(`input[name="answer${questionIndexForName}"]:checked`);
                let selectedAnswers = Array.from(selectedElements).map(el => el.value);
                userAnswer = selectedAnswers.length > 0 ? selectedAnswers : null; // Store array or null

                if (selectedAnswers.length > 0) {
                    let correctSet = new Set(currentQuestion.correct);
                    let numCorrectSelected = 0;
                    let numWrongSelected = 0;

                    selectedAnswers.forEach(answer => {
                        if (correctSet.has(answer)) {
                            numCorrectSelected++;
                        } else {
                            numWrongSelected++;
                        }
                    });

                    // Calculate points for this question
                    questionScore = Math.max(0, (numCorrectSelected - numWrongSelected)) / currentQuestion.correct.length * currentQuestion.points;
                    score += questionScore;

                    // Determine correctness for display (strict: all correct selected, no incorrect selected)
                    isCorrect = numCorrectSelected === currentQuestion.correct.length && numWrongSelected === 0;
                }
                 // else: Unanswered, isCorrect remains false, score doesn't increase

            } else {
                // Single correct answer (radio buttons)
                const selectedElement = document.querySelector(`input[name="answer${questionIndexForName}"]:checked`);
                userAnswer = selectedElement ? selectedElement.value : null; // Store string or null

                if (selectedElement) {
                    if (selectedElement.value === currentQuestion.correct) {
                        questionScore = currentQuestion.points;
                        score += questionScore;
                        isCorrect = true;
                    }
                    // else: Incorrect, isCorrect remains false, score doesn't increase
                }
                 // else: Unanswered, isCorrect remains false, score doesn't increase
            }

            // *** Store the detailed result for this question ***
            userAnswersDetailed.push({
                questionText: currentQuestion.question,
                userAnswer: userAnswer,
                correctAnswer: currentQuestion.correct,
                points: currentQuestion.points,
                achievedPoints: questionScore, // Store points achieved for this Q
                isCorrect: isCorrect // Based on strict check for display
            });
        }

        // Proceed with submission finalization
        const timeSpentMilliseconds = Date.now() - timeStart;
        const timeSpentSeconds = Math.floor(timeSpentMilliseconds / 1000);
        const minutesSpent = Math.floor(timeSpentSeconds / 60);
        const secondsSpent = timeSpentSeconds % 60;

        // Hide timer display
        if(timerDisplay) timerDisplay.style.display = 'none';

        const totalPoints = currentTestQuestions.reduce((sum, q) => sum + q.points, 0);
        score = Math.max(0, score); // Ensure score isn't negative
        score = Math.min(score, totalPoints); // Cap score at total points
        const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0; // Avoid division by zero

        // Display Results Summary + Add "View Details" button
        document.querySelector(".container").innerHTML = `
            <div class="result-section">
                <h1>Výsledok testu (Kód: ${takenTestCode || 'N/A'})</h1>
                <h2>Meno: ${studentName || 'N/A'}</h2>
                <p>Skóre: ${score.toFixed(2)} / ${totalPoints}</p>
                <p>Percentuálne: ${percentage.toFixed(2)}%</p>
                <p>Čas strávený: ${minutesSpent} minút a ${secondsSpent} sekúnd</p>
                ${isVisibilitySubmission ? '<p><strong>Poznámka:</strong> Test bol automaticky ukončený, pretože ste opustili stránku alebo prepli na inú kartu/aplikáciu.</p>' : ''}
                ${isTimerSubmission && !isVisibilitySubmission ? '<p><strong>Poznámka:</strong> Test bol ukončený z dôvodu vypršania časového limitu.</p>' : ''}
                <button type="button" class="home-btn">Home</button>
                <button type="button" id="view-details-btn">Zobraziť podrobnosti odpovedí</button>
                <div id="detailed-results" style="display: none; margin-top: 20px; border-top: 1px solid #ccc; padding-top: 15px;">
                    </div>
            </div>
        `;

        // --- Pass the test code to the save function ---
        saveTestResults(studentName, takenTestCode, score.toFixed(2), totalPoints, `${minutesSpent} minút a ${secondsSpent} sekúnd`);

        // Add event listener for the "Home" button
        document.querySelector(".home-btn").addEventListener("click", function () {
             localStorage.removeItem("currentTestCode");
             window.location.href = "student-interface.html"; // Or your main student page
        });

        document.getElementById("view-details-btn").addEventListener("click", function (event) {
            displayDetailedResults(userAnswersDetailed);
            event.target.style.display = 'none'; // Hide the button after clicking
        });

         // Clear the sensitive items after submission and saving
         localStorage.removeItem("currentTestCode");
         // Decide if you want to clear the studentName here or keep it for the next session
         // localStorage.removeItem("studentName");
    }


    // --- *** NEW: Function to display detailed results *** ---
    function displayDetailedResults(results) {
        const detailsContainer = document.getElementById('detailed-results');
        if (!detailsContainer) return;

        let detailsHTML = '<h2>Podrobné výsledky:</h2>';

        results.forEach((result, index) => {
            const questionNumber = index + 1;
            const isMultipleChoice = Array.isArray(result.correctAnswer);
            let userAnswerDisplayHTML = '<span class="unanswered">Nezodpovedané</span>'; // Default display for unanswered

            if (result.userAnswer !== null) {
                if (isMultipleChoice) {
                    // --- Granular highlighting for multiple choice ---
                    const correctSet = new Set(result.correctAnswer);
                    const userAnswers = result.userAnswer; // Should be an array if not null
                    let styledAnswers = [];
                    // Check if userAnswers is actually an array (it should be if not null for MC)
                    if (Array.isArray(userAnswers)) {
                        userAnswers.forEach(answer => {
                            // Escape HTML entities in the answer before wrapping
                            const escapedAnswer = answer.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '&quot;');
                            if (correctSet.has(answer)) {
                                // User selected a CORRECT answer - highlight green
                                styledAnswers.push(`<span class="correct">${escapedAnswer}</span>`);
                            } else {
                                // User selected an INCORRECT answer - highlight red
                                styledAnswers.push(`<span class="incorrect">${escapedAnswer}</span>`);
                            }
                        });
                         // Handle case where styledAnswers might be empty if userAnswer was [] technically not null
                        userAnswerDisplayHTML = styledAnswers.length > 0 ? styledAnswers.join(', ') : '<span class="unanswered">Žiadna volba</span>';
                    } else {
                         // Fallback if userAnswer for MC is somehow not an array but not null (shouldn't happen)
                         console.warn(`Expected array for multiple choice answer, got: ${typeof result.userAnswer} for Q${questionNumber}`);
                         userAnswerDisplayHTML = `<span class="incorrect">${String(result.userAnswer).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '&quot;')}</span>`;
                    }
                    // --- End granular highlighting ---
                } else {
                    // --- Single choice highlighting (remains the same) ---
                    const highlightClass = result.isCorrect ? 'correct' : 'incorrect';
                     const escapedAnswer = result.userAnswer.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '&quot;');
                    userAnswerDisplayHTML = `<span class="${highlightClass}">${escapedAnswer}</span>`;
                    // --- End single choice highlighting ---
                }
            }

            // Format correct answer (always use blue label style) - Escape HTML entities
             const correctAnswerDisplay = (Array.isArray(result.correctAnswer) ? result.correctAnswer.join(', ') : result.correctAnswer)
                                          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '&quot;');


            detailsHTML += `
                <div class="detailed-question">
                    <p><b>Otázka ${questionNumber}:</b> ${result.questionText} <i>(Max bodov: ${result.points})</i></p>
                    <p>Vaša odpoveď: ${userAnswerDisplayHTML}</p>
            `;

            // Show the "Correct Answer" section if the user wasn't perfectly correct.
            // The original strict 'isCorrect' flag (meaning ALL correct chosen AND NO incorrect chosen) determines if this section shows.
            if (!result.isCorrect) {
                detailsHTML += `<p>Správna odpoveď: <span class="correct-answer-label">${correctAnswerDisplay}</span></p>`;
            }

             // Show points achieved for this question (optional, uncomment if desired)
            // detailsHTML += `<p>Získané body: ${result.achievedPoints.toFixed(2)}</p>`;

            detailsHTML += `</div><hr>`; // Add a separator
        });

        detailsContainer.innerHTML = detailsHTML;
        detailsContainer.style.display = 'block'; // Show the container
    }

    function saveTestResults(name, code, achievedScore, maxScore, timeTaken) {
        console.log("Saving test results (example):");
        console.log(`  Student: ${name}`);
        console.log(`  Test Code: ${code}`);
        console.log(`  Score: ${achievedScore} / ${maxScore}`);
        console.log(`  Time: ${timeTaken}`);

        // Example: Append to a list in localStorage (demonstration only)
        const resultsKey = `testResults_${code}`; // Store results per test code
        let existingResults = JSON.parse(localStorage.getItem(resultsKey) || "[]");
        existingResults.push({
            student: name,
            score: achievedScore,
            total: maxScore,
            time: timeTaken,
            date: new Date().toISOString()
            // You could also store 'userAnswersDetailed' here if needed later
        });
        localStorage.setItem(resultsKey, JSON.stringify(existingResults));

    }


    // --- Initial setup ---
    displayQuestions();
    startTimer();

}); // End of DOMContentLoaded
