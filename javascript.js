//I'm thinking the website that walked me through this step by step taught me the wrong things.//

//Setting countdown clock for whole game, 600 secs in 10mins//
setTimeout(timeUp, 1000 * 600);

//Adding reset button//
    //function reset()
    //  document.getElementById("trivia-reset").addEventListener("click", reset);
     // document.getElementById("trivia-reset").disabled = false;
    

    function reset() {
        trivia.rights = 0;
        trivia.wrongs = 0;
        trivia.elLives.innerHTML = trivia.guesses;
        trivia.elImg.style.opacity = 0;}
  
     

        function buildTrivia(){
            const output = [];

            myQuestions.forEach(
                (currentQuestion, questionNumber) => {
                    const answers = [];
                    for(letter in currentQuestion.answers){
                        const answers = [];

                        // and for each available answer...
                        for(letter in currentQuestion.answers){
                        
                          // ...add an html radio button
                          answers.push(
                            `<label>
                              <input type="radio" name="question${questionNumber}" value="${letter}">
                              ${letter} :
                              ${currentQuestion.answers[letter]}
                            </label>`
                          );
                        }
                  
                        // add this question and its answers to the output
                        output.push(
                          `<div class="question"> ${currentQuestion.question} </div>
                          <div class="answers"> ${answers.join("")} </div>`
                        );
                      };
                  
                      // finally combine our output list into one string of HTML and put it on the page
                      quizContainer.innerHTML = output.join("");
                    
                  
                    function showResults() {
                      // gather answer containers from our quiz
                      const answerContainers = quizContainer.querySelectorAll(".answers");
                  
                      // keep track of user's answers
                      let numCorrect = 0;
                  
                      // for each question...
                      myQuestions.forEach((currentQuestion, questionNumber) => {
                        // find selected answer
                        const answerContainer = answerContainers[questionNumber];
                        const selector = `input[name=question${questionNumber}]:checked`;
                        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                  
                        // if answer is correct
                        if (userAnswer === currentQuestion.correctAnswer) {
                          // add to the number of correct answers
                          numCorrect++;
                  
                          // color the answers green
                          answerContainers[questionNumber].style.color = "lightgreen";
                        } else {
                          // if answer is wrong or blank
                          // color the answers red
                          answerContainers[questionNumber].style.color = "red";
                        }
                      });
                  
                      // show number of correct answers out of total
                      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
                    }

                    const quizContainer = document.getElementById('quiz'); 
                    const resultsContainer = document.getElementById('results');
                    const submitButton = document.getElementById('submit');

        function buildTrivia(){}
        function showResults(){}
        buildTrivia()
        submitButton.addEventListener('click', showResults); 

        const myQuestions = [
            {
                question1: "National Trivia Day is held on?",
                answers: {
                    a: "Oct 3rd",
                    b: "May 5th",
                    c: "Jan 4th",
                },
                correctAnswer: "c"
            },
            {
                question2: "Trivium translates from Latin to mean?",
                answers: {
                    a: "Trifle",
                    b: "Triple Way",
                    c: "Thought",
                },
                correctAnswer: "b"
            },
            {
                question3: "Trivial Pursuit was created by?",
                answers: {
                    a: " Merv Griffin and Ted Turner",
                    b: "Chris Haney and Scott Abbott",
                    c: "Richard L. Simon and M. Lincoln Schuster",
                },
                correctAnswer: "b"
            },
            {
                question4: "Julann Griffin invented what game?",
                answers: {
                    a: "Family feud",
                    b: "Hollywood Squares",
                    c: "Jeporady",
                },
                correctAnswer: "c"
            },
            {
                question5: "The original name for Jepardy! was?",
                answers: {
                    a: "What's the Question",
                    b: "Answer and Question",
                    c: "Whaddya Know",
                },
                correctAnswer: "a",
            },
            {
                question6: "Alex Trebek's first name is?",
                answers: {
                    a: "Paul",
                    b: "Saul",
                    c: "George",
                },
                correctAnswer: "c",
            },
            {
                question7: "The loose definition of Trivia is?",
                answers: {
                    a:"little known facts or unimportant matters",
                    b: "questions of random facts",
                    c: "obscure elements of casual existence",
            },
            correctAnswer: "a",
            
        },
        {
            question8: "The term Trivia was coined in?",
            answers: {
                a: "1945",
                b: "1902",
                c: "1934",
            },
            correctAnswer: "b",
        },
        {
            question9: "Quiz shows first became popular in the?",
            answers: {
                a: "'60s",
                b: "'50s",
                c: "'40s",
            },
            correctAnswer: "b",
        },
        {
            question10: "The first Quiz Bowl competitions were held at?",
            answers: {
                a: "Columbia University",
                b: "M.I.T.",
                c: "Yale University",
            },
            correctAnswer: "a",    
        },    
        ];//last one, ends array//
                  
                    // display quiz right away
                    buildQuiz();
                    
                  
                    // on submit, show results
                    submitButton.addEventListener("click", showResults);
                  })();

                           







      window.addEventListener("load", trivia.init)}; 