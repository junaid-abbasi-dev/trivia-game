const readline = require("node:readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const easyQuestions = [
  {
    category: "Science",
    questions: [
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
      },
      {
        question: "What gas do humans need to breathe?",
        choices: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
        correctAnswer: "Oxygen"
      },
      {
        question: "What is H2O commonly called?",
        choices: ["Salt", "Water", "Oxygen", "Sugar"],
        correctAnswer: "Water"
      },
      {
        question: "How many legs does an insect have?",
        choices: ["Four", "Six", "Eight", "Ten"],
        correctAnswer: "Six"
      },
      {
        question: "What is the center of our solar system?",
        choices: ["Earth", "The Moon", "The Sun", "Mars"],
        correctAnswer: "The Sun"
      },
      {
        question: "Which organ pumps blood through the human body?",
        choices: ["Brain", "Heart", "Lungs", "Stomach"],
        correctAnswer: "Heart"
      },
      {
        question: "What force pulls objects toward Earth?",
        choices: ["Gravity", "Electricity", "Magnetism", "Friction"],
        correctAnswer: "Gravity"
      },
      {
        question: "Which part of a plant absorbs water from the soil?",
        choices: ["Flowers", "Leaves", "Roots", "Fruit"],
        correctAnswer: "Roots"
      }
    ]
  },

  {
    category: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        choices: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Modern Language",
          "HomeText Markup Language"
        ],
        correctAnswer: "HyperText Markup Language"
      },
      {
        question: "Which tag creates the largest heading?",
        choices: ["<h1>", "<h6>", "<p>", "<header>"],
        correctAnswer: "<h1>"
      },
      {
        question: "Which tag creates a paragraph?",
        choices: ["<div>", "<p>", "<h1>", "<span>"],
        correctAnswer: "<p>"
      },
      {
        question: "Which tag creates a link?",
        choices: ["<a>", "<link>", "<p>", "<img>"],
        correctAnswer: "<a>"
      },
      {
        question: "Which attribute provides the destination of a link?",
        choices: ["src", "href", "alt", "class"],
        correctAnswer: "href"
      },
      {
        question: "Which tag displays an image?",
        choices: ["<picture>", "<image>", "<img>", "<src>"],
        correctAnswer: "<img>"
      },
      {
        question: "Which tag creates an unordered list?",
        choices: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: "<ul>"
      },
      {
        question: "Which tag contains the visible content of a webpage?",
        choices: ["<head>", "<title>", "<body>", "<meta>"],
        correctAnswer: "<body>"
      }
    ]
  },

  {
    category: "JavaScript",
    questions: [
      {
        question: "Which keyword creates a variable that can be reassigned?",
        choices: ["let", "const", "return", "function"],
        correctAnswer: "let"
      },
      {
        question: "Which method displays a message in the console?",
        choices: [
          "console.log()",
          "console.show()",
          "print.console()",
          "log.console()"
        ],
        correctAnswer: "console.log()"
      },
      {
        question: "Which symbol is used for strict equality?",
        choices: ["=", "==", "===", "!="],
        correctAnswer: "==="
      },
      {
        question: "Which brackets are used to create an array?",
        choices: ["{}", "[]", "()", "<>"],
        correctAnswer: "[]"
      },
      {
        question: "What is the first index of a JavaScript array?",
        choices: ["0", "1", "-1", "First"],
        correctAnswer: "0"
      },
      {
        question: "Which method adds an item to the end of an array?",
        choices: [".push()", ".pop()", ".shift()", ".slice()"],
        correctAnswer: ".push()"
      },
      {
        question: "Which data type contains true or false?",
        choices: ["String", "Number", "Boolean", "Object"],
        correctAnswer: "Boolean"
      },
      {
        question: "Which keyword sends a value back from a function?",
        choices: ["send", "return", "break", "result"],
        correctAnswer: "return"
      }
    ]
  }
]
const mediumQuestions = [
  {
    category: "Science",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        choices: ["Ag", "Au", "Gd", "Go"],
        correctAnswer: "Au"
      },
      {
        question: "Which cell structure contains genetic material?",
        choices: ["Cell wall", "Nucleus", "Cytoplasm", "Cell membrane"],
        correctAnswer: "Nucleus"
      },
      {
        question: "What is the process by which plants make food?",
        choices: [
          "Respiration",
          "Digestion",
          "Photosynthesis",
          "Fermentation"
        ],
        correctAnswer: "Photosynthesis"
      },
      {
        question: "Which blood cells help the body fight infections?",
        choices: [
          "Red blood cells",
          "White blood cells",
          "Platelets",
          "Plasma"
        ],
        correctAnswer: "White blood cells"
      },
      {
        question: "What is the largest organ in the human body?",
        choices: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin"
      },
      {
        question: "Which planet has the largest number of visible rings?",
        choices: ["Mars", "Venus", "Saturn", "Mercury"],
        correctAnswer: "Saturn"
      },
      {
        question: "What is the boiling point of water at sea level in Celsius?",
        choices: ["50°C", "75°C", "100°C", "125°C"],
        correctAnswer: "100°C"
      },
      {
        question: "Which type of energy is stored in food?",
        choices: [
          "Chemical energy",
          "Sound energy",
          "Light energy",
          "Nuclear energy"
        ],
        correctAnswer: "Chemical energy"
      }
    ]
  },

  {
    category: "HTML",
    questions: [
      {
        question: "Which semantic element represents the main content of a webpage?",
        choices: ["<section>", "<main>", "<body>", "<content>"],
        correctAnswer: "<main>"
      },
      {
        question: "Which attribute provides alternative text for an image?",
        choices: ["title", "src", "alt", "href"],
        correctAnswer: "alt"
      },
      {
        question: "Which element connects a label to a form input?",
        choices: ["<span>", "<label>", "<legend>", "<caption>"],
        correctAnswer: "<label>"
      },
      {
        question: "Which input type hides the characters entered by a user?",
        choices: ["text", "hidden", "password", "private"],
        correctAnswer: "password"
      },
      {
        question: "Which semantic element is commonly used for navigation links?",
        choices: ["<navigate>", "<links>", "<nav>", "<menuitem>"],
        correctAnswer: "<nav>"
      },
      {
        question: "What does the required attribute do on a form input?",
        choices: [
          "Disables the input",
          "Makes the input mandatory",
          "Hides the input",
          "Automatically submits the form"
        ],
        correctAnswer: "Makes the input mandatory"
      },
      {
        question: "Which element groups related form controls together?",
        choices: ["<formgroup>", "<fieldset>", "<section>", "<group>"],
        correctAnswer: "<fieldset>"
      },
      {
        question: "Which attribute should contain a unique value on a webpage?",
        choices: ["class", "style", "id", "name"],
        correctAnswer: "id"
      }
    ]
  },

  {
    category: "JavaScript",
    questions: [
      {
        question: "What does the map() method return?",
        choices: [
          "A new array",
          "The original array",
          "One matching item",
          "A Boolean"
        ],
        correctAnswer: "A new array"
      },
      {
        question: "What does the filter() method return?",
        choices: [
          "The first matching item",
          "A new array of matching items",
          "The index of a matching item",
          "The length of the array"
        ],
        correctAnswer: "A new array of matching items"
      },
      {
        question: "What does the find() method return?",
        choices: [
          "Every matching item",
          "The first matching item",
          "A new array",
          "The last array index"
        ],
        correctAnswer: "The first matching item"
      },
      {
        question: "What is a callback function?",
        choices: [
          "A function passed to another function",
          "A function without a name",
          "A function that cannot return a value",
          "A function inside an object"
        ],
        correctAnswer: "A function passed to another function"
      },
      {
        question: "What is the result of typeof 42?",
        choices: ["integer", "number", "string", "value"],
        correctAnswer: "number"
      },
      {
        question: "Which syntax copies the items of an array using spread syntax?",
        choices: [
          "[...originalArray]",
          "[originalArray]",
          "{...originalArray}",
          "copy(originalArray)"
        ],
        correctAnswer: "[...originalArray]"
      },
      {
        question: "What does array.pop() do?",
        choices: [
          "Removes the first item",
          "Removes the last item",
          "Adds an item to the beginning",
          "Adds an item to the end"
        ],
        correctAnswer: "Removes the last item"
      },
      {
        question: "What value does a function return if it has no return statement?",
        choices: ["null", "false", "0", "undefined"],
        correctAnswer: "undefined"
      }
    ]
  }
]
const hardQuestions = [
  {
    category: "Science",
    questions: [
      {
        question: "Which organelle produces most of a cell's usable energy?",
        choices: [
          "Nucleus",
          "Mitochondrion",
          "Ribosome",
          "Golgi apparatus"
        ],
        correctAnswer: "Mitochondrion"
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen"
      },
      {
        question: "What is the SI unit of electrical resistance?",
        choices: ["Volt", "Watt", "Ampere", "Ohm"],
        correctAnswer: "Ohm"
      },
      {
        question: "Which particle determines the atomic number of an element?",
        choices: ["Electron", "Neutron", "Proton", "Photon"],
        correctAnswer: "Proton"
      },
      {
        question: "Which type of bond involves atoms sharing electrons?",
        choices: [
          "Ionic bond",
          "Covalent bond",
          "Metallic bond",
          "Hydrogen bond"
        ],
        correctAnswer: "Covalent bond"
      },
      {
        question: "What is the name of the boundary around a black hole?",
        choices: [
          "Event horizon",
          "Photon belt",
          "Gravity ring",
          "Singularity field"
        ],
        correctAnswer: "Event horizon"
      },
      {
        question: "Which law states that energy cannot be created or destroyed?",
        choices: [
          "Law of conservation of energy",
          "Newton's first law",
          "Ohm's law",
          "Law of universal gravitation"
        ],
        correctAnswer: "Law of conservation of energy"
      },
      {
        question: "Which part of the brain primarily controls balance and coordination?",
        choices: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        correctAnswer: "Cerebellum"
      }
    ]
  },

  {
    category: "HTML",
    questions: [
      {
        question: "Which attribute improves accessibility by identifying the language of a webpage?",
        choices: ["language", "lang", "locale", "translate"],
        correctAnswer: "lang"
      },
      {
        question: "Which element provides a caption for a fieldset?",
        choices: ["<caption>", "<label>", "<legend>", "<summary>"],
        correctAnswer: "<legend>"
      },
      {
        question: "Which attribute associates a label with an input element?",
        choices: ["for", "name", "target", "input"],
        correctAnswer: "for"
      },
      {
        question: "Which element represents self-contained content that could stand independently?",
        choices: ["<article>", "<section>", "<aside>", "<div>"],
        correctAnswer: "<article>"
      },
      {
        question: "Which attribute allows an input to match a regular-expression pattern?",
        choices: ["validate", "regex", "pattern", "match"],
        correctAnswer: "pattern"
      },
      {
        question: "Which element displays a value within a known range?",
        choices: ["<progress>", "<range>", "<output>", "<meter>"],
        correctAnswer: "<meter>"
      },
      {
        question: "Which attribute gives an accessible name to an element when no visible label exists?",
        choices: ["aria-label", "alt", "title", "description"],
        correctAnswer: "aria-label"
      },
      {
        question: "Which script attribute downloads a script without blocking HTML parsing and executes it after parsing finishes?",
        choices: ["async", "defer", "delay", "module"],
        correctAnswer: "defer"
      }
    ]
  },

  {
    category: "JavaScript",
    questions: [
      {
        question: "What is the result of 2 + '3' in JavaScript?",
        choices: ["5", "'23'", "undefined", "NaN"],
        correctAnswer: "'23'"
      },
      {
        question: "What is the result of Number('hello')?",
        choices: ["0", "undefined", "NaN", "null"],
        correctAnswer: "NaN"
      },
      {
        question: "Which array method checks whether every item passes a condition?",
        choices: [".some()", ".every()", ".filter()", ".find()"],
        correctAnswer: ".every()"
      },
      {
        question: "What is a closure in JavaScript?",
        choices: [
          "A function that remembers variables from its outer scope",
          "A function that immediately stops running",
          "A method that closes the browser",
          "A loop that cannot be exited"
        ],
        correctAnswer: "A function that remembers variables from its outer scope"
      },
      {
        question: "What does the reduce() method commonly do?",
        choices: [
          "Combines array items into one result",
          "Removes the last array item",
          "Returns every matching item",
          "Sorts an array automatically"
        ],
        correctAnswer: "Combines array items into one result"
      },
      {
        question: "What is the result of null === undefined?",
        choices: ["true", "false", "null", "undefined"],
        correctAnswer: "false"
      },
      {
        question: "Which statement about const objects is correct?",
        choices: [
          "Their properties can still be changed",
          "Their properties can never be changed",
          "They cannot contain arrays",
          "They are automatically frozen"
        ],
        correctAnswer: "Their properties can still be changed"
      },
      {
        question: "What does an async function always return?",
        choices: ["A callback", "A Promise", "An array", "undefined"],
        correctAnswer: "A Promise"
      }
    ]
  }
]
// start game
function startGame() {
    // define game rules
    const gameRules =  
    `
    Welcome to Trivia Hack!! :)
    You will have 8 seconds to answer each question, once 8 seconds has passed,
    your answer will be considered as incorrect.
    `
    // show game rules
    console.log(gameRules)
    // ask player to start or end the game
    rl.question("Press S to start / Any other key to end: ", function (answer) {
        // whatever player answers make it in lower case
        const startGameOrExit = answer.toLowerCase()
        // if player chooses to play, ask for difficulty level
        if (startGameOrExit === 's') {
            rl.question(
                "Select Difficulty: E for Easy, M for Medium, H for Hard: ", function (answer) {
                    const difficultyLevel = answer.toLowerCase()
                    askCategory(difficultyLevel)
                }
            )
        } else {
            console.log("Good bye!")
            rl.close()
        }
    })
};


function askCategory(difficulty) {
    const selectCategoryOptions = "Select category: Science, HTML, or JavaScript: "
    if (difficulty === 'e') {
            rl.question(selectCategoryOptions, function (answer) {
                const categoryEasy = answer.toLowerCase()
                askEasyQuestions(categoryEasy)
            })
        } else if (difficulty === 'm') {
            rl.question(selectCategoryOptions, function (answer) {
                const categoryMedium = answer.toLowerCase()
            })
        } else if (difficulty === 'h') {
            rl.question(selectCategoryOptions, function (answer) {
                const categoryHard = answer.toLowerCase()
            })
        } else {
            console.log("Error: Invalid input!")
            startGame()
        }
}

let score = 0
let questionNumber = 1
const usedNumbers = []

// function for getting random numbers
function getUniqueRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 8)

    while (usedNumbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 8)
    }

    usedNumbers.push(randomNumber)
    return randomNumber
}
// function to ask easy questions
function askEasyQuestions(category) {
    // to get unique random number
    const randomNumber = getUniqueRandomNumber()
    if (category === 'science') {
            console.log(
            `
            ${easyQuestions[0].questions[randomNumber].question}
            ${easyQuestions[0].questions[randomNumber].choices}
            `
        )
        
        rl.question("Type your answer here: ", function (playerAnswer) {
            const capitalizedAnswer = 
                playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase()
                if (capitalizedAnswer === easyQuestions[0].questions[randomNumber].correctAnswer) {
                    console.log("Correct!")
                    score += 1
                    questionNumber += 1
                } else {
                    console.log("Incorrect")
                    questionNumber += 1
                }
                if (questionNumber > 8) {
                    console.log("Your score:" + score)
                    rl.close()
                } else {
                    askEasyQuestions(category)
                }
            })

    } else if (category === 'html') {
        console.log(easyQuestions[1].questions)
    } else if (category === 'javascript') {
        console.log(easyQuestions[2].questions)
    } else {
        console.log("Error: Invalid input!")
        startGame()
    }
    
}


startGame()