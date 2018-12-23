

//Open up the first question:
        //for the timer
    var time = 30;
    var intervalId;
    
        //for the last page
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

        //to determine what page to text to show
       var slide = 0; 
       var right = false;
       var answered = false;

    var nextQuestion = 0;
    

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }
    function decrement() {
        time--;

        $("#show-number").html("Timer: " + time + " Seconds");

        if (time <= 0) {
            
            stop();

        
        }
    }

        function stop() {

            clearInterval(intervalId);
         }

         var answers = ["Knicks", "Kobe Bryant", "Knicks", "Dwyane Wade", "Bernard King",  "5"];
         var questions = ["What NBA team has played the most games on Christmas and how many?", 
         "What player has scored the most points on X-mas Day?", "What team has the most losses in X-mas Day history?",
         "What active player has played the most X-mas games", "Who has scored the most points in a X-mas day game?",
          "How many NBA games will be played on X-mas this year?" ];
          var answerChoices = ["Celtics", "76ers", "Knicks", "Lakers", "Kobe Bryant", "Shaq", "Lebron James", "Dwayne Wade", "10", "3", "5", "0", "Lakers", "Heat", "Bulls",
                "Knicks", "Bernard King", "Wilt Chamberlain", "Jerry West", "Rick Berry", "Dwyane Wade", "Dirk", "LeBron James", 
                "Kevin Durant", 
        ]

         if (question === 1) {  }

            $("#question").html("What NBA team has played the most games on Christmas and how many?");
            
            $("#choice-1").html("Celtics- 20");
            $("#choice-2").html("76er's- 18");
            $("#choice-3").html("Knicks- 51");
            $("#choice-4").html("Lakers- 25");
       

         $(".answer").hover(function(){
                $(this).css("background-color", "orange");
                $(this).css("border", "3px solid black");},
                function() { 
                $(this).css("background-color", "blueviolet");
                $(this).css("border", "none");
                });

//             if (question === 2) {
//      $("#question").html("What player has scored the most points on X-mas Day?");
            
//                    $("#choice-1").html("Kobe Bryant");
//                    $("#choice-2").html("Shaq");
//                    $("#choice-3").html("Lebron James");
//                    $("#choice-4").html("Dwayne Wade");
//                 }
       
//                 $(".answer").hover(function(){
//                        $(this).css("background-color", "orange");
//                        $(this).css("border", "3px solid black");},

//                       function() { 
//                           $(this).css("background-color", "blueviolet");
//                           $(this).css("border", "3px","solid", "black")
//                       });

//             //if (question ===3) {
//                 $("#question").html("How many NBA games will be played on X-mas this year?");
            
//                 $("#choice-1").html("10");
//                 $("#choice-2").html("6");
//                 $("#choice-3").html("5");
//                 $("#choice-4").html("0");
//             //  }
    
//              $(".answer").hover(function(){
//                     $(this).css("background-color", "orange");
//                     $(this).css("border", "3px solid black");},

//                    function() { 
//                        $(this).css("background-color", "blueviolet");

//                     });
//             //if (question ===4) {
//      $("#question").html("What team has the most losses in X-mas Day history?");
            
//      $("#choice-1").html("Lakers");
//      $("#choice-2").html("Heat");
//      $("#choice-3").html("76ers");
//      $("#choice-4").html("Knicks");
//  //  }

//   $(".answer").hover(function(){
//          $(this).css("background-color", "orange");
//          $(this).css("border", "3px solid black");},
//         function() { 
//             $(this).css("background-color", "blueviolet");

//         });
//                         //if (question === 5) {
//      $("#question").html("Who has scored the most points in a X-mas day game?");
            
//      $("#choice-1").html("Bernard King");
//      $("#choice-2").html("Wilt Chamberlain");
//      $("#choice-3").html("Rick Berry");
//      $("#choice-4").html("David West");
//  //  }

//   $(".answer").hover(function(){
//          $(this).css("background-color", "orange");
//          $(this).css("border", "3px solid black");},

//         function() { 
//             $(this).css("background-color", "blueviolet");
//         });

//if (question === 6) {
//      $("#question").html("What active player has played the most X-mas games");
            
//      $("#choice-1").html("Dywane Wade");
//      $("#choice-2").html("Lebron James");
//      $("#choice-3").html("Dirk Novinski");
//      $("#choice-4").html("Kevin Durant");
//  //  }

//   $(".answer").hover(function(){
//          $(this).css("background-color", "orange");
//          $(this).css("border", "3px solid black");},

//         function() { 
//             $(this).css("background-color", "blueviolet");
//         });
        run();


    //     //answer question 1
    // $("#final-answer").html("Knicks: With 52 games played on X-mas");
    // $("#answer-gif").html("GIF OR PIC OF MELO IN XMAS COLORS");

    //     //Answer question 2
    //     $("#final-answer").html("Knicks: of the 52 games played on x-mas, they've lost 30 of them");
    //     $("#answer-gif").html("GIF OR PIC OF MELO IN XMAS COLORS");
    //     //answer question 3
    //     $("#final-answer").html("Kobe Bryant: Kobe has scored 395 points on X-mas");
    //     $("#answer-gif").html("GIF OR PIC Kobe  ");
    //     //answer question 4
    //     $("#final-answer").html("5: There will be 5 games on christmas this year");
    //     $("#answer-gif").html("pic of this year's xmas slate  ");
    //     //answer question 5
    //     $("#final-answer").html("Bernard King: He scored 60 points in 1984");
    //     $("#answer-gif").html("GIF OR PIC OF MELO IN XMAS COLORS");
                    







// if the user clicks on the three wrong options, you get directed to a page that says the correct answer and 
// and if you get do click the correct answer, it sends the user to a timed screen that says "correct!"

// on every screen make an if statement that says if time >0 load index 2 but if time = 0, run index3.
// if an answer choice is clicked run stop function and load either index 2 or 3.



//Make 4th HTML file with the number correct, incorrect, and unanswered, answers. This page also includes a reset/retake button. 





//on the answer page:
        //Question 1:
                //if (question === 1) [
                //     $("#choice-3").click(function() {
                //         answer++;

                //         //load index3
                //     })
                // ]

    // function rightAnswer() {
    //         if($("choice-3").click(function()))
    // }

    //each question logic

        //timer counts down from 30
        //3 options:
        // if the player selects the correct answer, the screeen lets the player know that is correct while the we run the stop function of the timer
        //  if the player selects the wrong answer, the screen say "nope!", and tells the player the correct answer while the timer runs the stop function
        //  if the player doesn't answer the question in time, the screen says "out of time!" and then it shows the player the right answer while the timer is stopped at zero.

        if (time > 0) {
        $("#choice-3").on("click", function(){
            correct++;
           
            if (right = true){
                console.log("Knicks is correct!");
                console.log(correct);
                stop();
            
            }
            });

            $("#choice-1").click(function(){
                incorrect++;
                console.log("Nope, Wrong Answer!");
                console.log(incorrect);
                $("#final-answer").html("Knicks: of the 52 games played on x-mas, they've lost 30 of them");
                 stop();
            });
            $("#choice-2").click(function(){
                incorrect++;
                console.log("Nope, Wrong Answer!");
                console.log(incorrect);
                stop();
            });
            $("#choice-4").click(function(){
                incorrect++;
                console.log("Nope, Wrong Answer!");
                console.log(incorrect);
                stop();
            });
        }
            if(time === 0) {
                console.log("Out of time!")
                unanswered++;
                console.log(unanswered);
            }

        // if(!answered){
        //     console.log("answer screen")
        //     // time = 5;
        //   console.log(run);
        // }



        

            
//  $(".answer").click(function() {
//         if (user clicks on the right answer) {
//              var windowTimer = setTimeout(function() {
//                 $("#question").html("Correct!");
//                 $("#question").html(pic or gif);
//              }, 5000);}
//            if else (user clicks on the wrong answer) {
//                var windowTimer = setTimeout(function() {
//                 $("#question").html("Good Try!");
//                 $("#choice-1").html(answers[i]);
//                 $("#question").html(pic or gif);
//             }, 5000);}
//             else {
//             var windowTimer = setTimeout(function() {
//             $("#question").html("You ran out of time!");
//             $("#choice-1").html(answers[i]);
//             $("#question").html(pic or gif);
//             }, 5000);}
//       }

//      });
 
        
function nextQuestion() {
    questionsnext++;
    $("#question").empty();
    $("#answer-choices").empty();
    
    if(questions.indexOf === 0){
        for(var i = 0; i < answerChoices.indexOf[4]- 1; i++) {
        var questionsListed =  $("<div>").html(answerChoices.indexOf[i]);
        }
        $("#answer-choices").append(questionsListed);
    }
}




