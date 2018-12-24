//variable for what questions appear
var slide = 0;
//variables for if the user gets the questions right or wrong for the last slide:
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
//variables for the timer:
    var time = 10;
    var intervalId;

     var media = ["assets/images/zinger.gif", "assets/images/kobe.gif", "assets/images/knicks-no.gif", "../TriviaGame/assets/images/wade.gif", "assets/images/christmas-schedule.jpg"];

     //SetInterval function for the countdown:
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        time--;
        $("#show-number").html("Timer: " + time + " Seconds");
        if (time === 0) {
            stop();
            hittingZero();
        }
    }
        function stop() {
            clearInterval(intervalId);
         }

function printRight() {
            $("#question").empty();
            $(".answer").empty();
            $("#start").empty();
            $("#question").html("Correct!");  
            $("#choice-1").html("<img src=" + media[slide] + " width='400px'>");
            }
function printWrong() {
            $("#question").empty();
            $(".answer").empty();
            $("#start").empty();
            $("#question").html("Nice Try!");  
            $("#choice-2").html("<img src=" + media[slide] + " width='400px'>");
            if(slide === 0) {
            $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerC)
            }
            if(slide === 1) {
                $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerA)
                }
            if(slide === 2) {
                $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerD)
                }
            if(slide === 3) {
                $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerC)
                }
            if(slide === 4) {
                $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerA)
                }
        }
function printafk() {
            $("#question").empty();
            $(".answer").empty();
            $("#start").empty();
            $("#question").html("You ran out of time!");  
            $("#choice-2").html("<img src=" + media[slide] + " width='400px'>");
            if(slide === 0) {
                $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerC)
                }
                if(slide === 1) {
                    $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerA)
                    }
                if(slide === 2) {
                    $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerD)
                    }
                if(slide === 3) {
                    $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerC)
                    }
                if(slide === 4) {
                    $("#choice-1").html("The answer was: " + quiz.Basketball[slide].answerA)
                    }                
                }    
function printFinal() {
            $("#question").empty();
            $(".answer").empty();
            $("#start").empty();
            $(".starts").empty(); 
           $("#question").html("Your Results!");  
           $("#choice-1").html("Correct: " + correct);
           $("#choice-2").html("Incorrect: " + incorrect);
           $("#choice-3").html("Unanswered: " + unanswered);
           $("#choice-4").html("Try again?");
            stop();}
function resetAll() {
            $("#question").empty();
            $(".answer").empty();
            $("#start").empty();
            $(".starts").empty();               
            slide = 0;
            correct = 0;
            incorrect = 0;
            unanswered = 0;

            }


var quiz = {
Basketball: [{
  Question: "What NBA team has played the most games on Christmas and how many?",
  answerA: "Celtics",
  answerB: "76ers",
  answerC: "Knicks",
  answerD: "Lakers" 
}, {
    Question: "What player has scored the most points on X-mas Day?",
    answerA: "Kobe",
    answerB: "Shaq",
    answerC: "Lebron",
    answerD: "Tim Duncan"
}, {
  Question: "What team has the most losses in X-mas Day history?",
  answerA: "Lakers",
  answerB: "Heat",
  answerC: "Kings",
  answerD: "Knicks"
}, {
  Question: "What active player has played the most X-mas games",
  answerA: "Dirk",
  answerB: "Lebron",
  answerC: "Wade",
  answerD: "Vince Carter"
}, {
  Question: "How many NBA games will be played on X-mas this year?",
  answerA: "5",
  answerB: "3",
  answerC: "0",
  answerD: "12"
}]
}; 

        //callback function to print the question
        function printQuestion() {

            $("#show-number").empty();     
            $("#question").empty();
            $(".answer").empty();
            $(".starts").empty();
            
            time = 10;
            run();           
            

            $("#question").html(quiz.Basketball[slide].Question);
            $("#choice-1").html(quiz.Basketball[slide].answerA);
            $("#choice-2").html(quiz.Basketball[slide].answerB);
            $("#choice-3").html(quiz.Basketball[slide].answerC);
            $("#choice-4").html(quiz.Basketball[slide].answerD);
            }
         

  function nextQuestion() {
                slide++;
                console.log(slide)
            }  

         function hittingZero() {
            stop();
            unanswered++;     
            printafk();   
             nextQuestion();
            if (slide < 5) {
                setTimeout(printQuestion, 1000 * 5);
         }    else {
             setTimeout(printFinal, 1000 * 5);
         }
        }
          //User starts game:
    $("#start").on("click", function() {
        $(".starts").empty();
      slide++; 
      printQuestion();
    });


   

        if(slide === 0) {
            $(".starts").empty();
            printQuestion();
            
        $(("#choice-1")).on("click", function() {
            stop();
            incorrect++;     
            printWrong();   
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             }); 
        $(("#choice-2")).on("click", function() {
            stop();
            incorrect++;     
            printWrong();
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             }); 
        $("#choice-3").on("click", function() {
            stop();
            correct++;     
            printRight();   
            nextQuestion();
             setTimeout(printQuestion, 1000 * 5);        
             });
       $(("#choice-4")).on("click", function() {
        stop();
            incorrect++;     
            printWrong();
            nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             });  
    
        }
    

        if(slide === 1) {

        $("#choice-1").on("click", function() {
            stop();
            correct++;     
            printRight();   
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);        
             });
            
        $(("#choice-2")).on("click", function() {
            stop();
            incorrect++;     
            printWrong();   
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             }); 
        $(("#choice-3")).on("click", function() {
            stop();
            incorrect++;     
            printWrong();
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             }); 
       $(("#choice-4")).on("click", function() {
        stop();
            incorrect++;     
            printWrong();
            nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             });  
    
        }

      if(slide === 2) {

            run();
            printQuestion();

        $("#choice-1").on("click", function() {
            stop();
            correct++;     
            printRight();   
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);        
             });
            
        $(("#choice-2")).on("click", function() {
            stop();
            incorrect++;     
            printWrong();   
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             }); 
        $(("#choice-3")).on("click", function() {
            stop();
            incorrect++;     
            printWrong();
             nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             }); 
       $(("#choice-4")).on("click", function() {
        stop();
            incorrect++;     
            printWrong();
            nextQuestion();
             setTimeout(printQuestion, 1000 * 5);         
             });  
            }        

        if(slide === 3) {

                run();
                printQuestion();

            $("#choice-1").on("click", function() {
                stop();
                correct++;     
                printRight();   
                 nextQuestion();
                 setTimeout(printQuestion, 1000 * 5);        
                 });
                
            $(("#choice-2")).on("click", function() {
                stop();
                incorrect++;     
                printWrong();   
                 nextQuestion();
                 setTimeout(printQuestion, 1000 * 5);         
                 }); 
            $(("#choice-3")).on("click", function() {
                stop();
                incorrect++;     
                printWrong();
                 nextQuestion();
                 setTimeout(printQuestion, 1000 * 5);         
                 }); 
           $(("#choice-4")).on("click", function() {
            stop();
                incorrect++;     
                printWrong();
                nextQuestion();
                 setTimeout(printQuestion, 1000 * 5);         
                 });  
                }

            if(slide === 4) {

                    run();
                    printQuestion();
    
                $("#choice-1").on("click", function() {
                    stop();
                    correct++;     
                    printRight();   
                     nextQuestion();
                     setTimeout(printFinal, 1000 * 5);        
                     });
                    
                $(("#choice-2")).on("click", function() {
                    stop();
                    incorrect++;     
                    printWrong();   
                     nextQuestion();
                     setTimeout(printFinal, 1000 * 5);         
                     }); 
                $(("#choice-3")).on("click", function() {
                    stop();
                    incorrect++;     
                    printWrong();
                     nextQuestion();
                     setTimeout(printFinal, 1000 * 5);         
                     }); 
               $(("#choice-4")).on("click", function() {
                stop();
                    incorrect++;     
                    printWrong();
                    nextQuestion();
                     setTimeout(printFinal, 1000 * 5);         
                     });  
                    }

    if(slide > 4) {
        $(".starts").empty();
        printFinal();
        $("#choice-4").on("click", function() {
            resetAll();
        })
    }

            //function to change the style:
            $(".answer").hover(function(){
                $(this).css("background-color", "orange");
                $(this).css("border", "3px solid black");},
                function() { 
                $(this).css("background-color", "blueviolet");
                $(this).css("border", "none");
                });
