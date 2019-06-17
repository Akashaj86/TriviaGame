
//Setting countdown clock for whole game, 600 secs in 10mins//
setTimeout(timeUp, 1000 * 600);

//Adding reset button//
trivia.reset();
      document.getElementById("trivia-reset").addEventListener("click", trivia.reset);
      document.getElementById("trivia-reset").disabled = false;
    

    reset : function () {
        trivia.rights = 0;
        trivia.wrongs = 0;
        trivia.elLives.innerHTML = trivia.guesses;
        trivia.elImg.style.opacity = 0;}
  
     const triviaContainer = document.getElementById('trivia'); 
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







      window.addEventListener("load", trivia.init); 