

//Open up the first question:

    var time = 30;

    var intervalId;

    var question = 0;

    $("#start").on("click", function(){
        // $("div1").load("file2.html"); //div1 is the id for outer div of file1
        question++;
    })

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }
    function decrement() {
        time--;

        $("#show-number").html("<h2>" + time + "<h2>");

        if (Number <= 0) {
            
            stop();

            alert("Time's Up!");
        
        }
    }

        function stop() {

            clearInterval(intervalId);
         }

        //  if (question === 1) {
             $("#question").html("What NBA team has played the most games on Christmas and how many?");
            
            $("#choice-1").html("Celtics- 20");
            $("#choice-2").html("76er's- 18");
            $("#choice-3").html("Knicks- 51");
            $("#choice-4").html("Lakers- 25");
        //  }

         $(".answer").hover(function(){
                $(this).css("background-color", "orange");},
               function() { 
                   $(this).css("background-color", "white");});


            //if (question ===2) {
     $("#question").html("What player has scored the most points on X-mas Day?");
            
                   $("#choice-1").html("Kobe Bryant");
                   $("#choice-2").html("Shaq");
                   $("#choice-3").html("Lebron James");
                   $("#choice-4").html("Dwayne Wade");
               //  }
       
                $(".answer").hover(function(){
                       $(this).css("background-color", "orange");},
                      function() { 
                          $(this).css("background-color", "white");});
         

            //if (question ===3) {
                $("#question").html("How many NBA games will be played on X-mas this year?");
            
                $("#choice-1").html("10");
                $("#choice-2").html("6");
                $("#choice-3").html("5");
                $("#choice-4").html("0");
            //  }
    
             $(".answer").hover(function(){
                    $(this).css("background-color", "orange");},
                   function() { 
                       $(this).css("background-color", "white");});

            //if (question ===4) {
     $("#question").html("What team has the most losses in X-mas Day history?");
            
     $("#choice-1").html("Lakers");
     $("#choice-2").html("Heat");
     $("#choice-3").html("76ers");
     $("#choice-4").html("Knicks");
 //  }

  $(".answer").hover(function(){
         $(this).css("background-color", "orange");},
        function() { 
            $(this).css("background-color", "white");});

                        //if (question === 5) {
     $("#question").html("Who has scored the most points in a X-mas day game?");
            
     $("#choice-1").html("Bernard King");
     $("#choice-2").html("Wilt Chamberlain");
     $("#choice-3").html("Rick Berry");
     $("#choice-4").html("David West");
 //  }

  $(".answer").hover(function(){
         $(this).css("background-color", "orange");},
        function() { 
            $(this).css("background-color", "white");});