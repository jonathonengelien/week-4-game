

$( document ).ready(function(){

    ///////// Variables /////////


    // Select a random number for the start of the game
    // Number between 30-99
    var randomNumber = Math.floor(Math.random() * 69 + 30);

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    // Crystal Values
    
    var crystalOne = Math.floor(Math.random() * 9 + 1);
    var crystalTwo = Math.floor(Math.random() * 9 + 1);
    var crystalThree = Math.floor(Math.random() * 9 + 1);
    var crystalFour = Math.floor(Math.random() * 9 + 1);


    
    ////////// Functions //////////


    //Game Start
    function gameStart() {
        $('#replace-random-number').text(randomNumber);
        $('#replace-wins').text(wins);
        $('#replace-losses').text(losses);
        $('#replace-your-score').text(yourScore);       
    }


    //Game Reset
    function resetGame() {

        //Reset Crystal Values
        crystalOne = Math.floor(Math.random() * 9 + 1);
        crystalTwo = Math.floor(Math.random() * 9 + 1);
        crystalThree = Math.floor(Math.random() * 9 + 1);
        crystalFour = Math.floor(Math.random() * 9 + 1);

        //Reset Random Number
        randomNumber = Math.floor(Math.random() * 69 + 30);

        //Reset Score
        yourScore = 0;
        $('#replace-your-score').text(yourScore); 
    }


    //Win Function
    function youWin() {
        wins++; 
        $('#replace-wins').text(wins);
        resetGame();
    }


    //Lose Function
    function youLose() {
        losses++; 
        $('#replace-losses').text(losses);
        resetGame();
    }

    // Crystal Values

    //Set Click for Jewel
    $('#crystal-one').click(function(){

        userTotal = yourScore + crystalOne;
        $('#replace-your-score').text(userTotal); 

        //Set Win/Lose Conditions
        if (userTotal == randomNumber){
            youWin();
        }
        else if ( userTotal > randomNumber){
            youLose();
        }  
    })

    //Set Click for Jewel
    $('#crystal-two').click(function(){

        userTotal = yourScore + crystalTwo;
        $('#replace-your-score').text(userTotal); 

        //Set Win/Lose Conditions
        if (userTotal == randomNumber){
            youWin();
        }
        else if ( userTotal > randomNumber){
            youLose();
        }  
    });

    //Set Click for Jewel
    $('#crystal-three').click(function(){

        userTotal = yourScore + crystalThree;
        $('#replace-your-score').text(userTotal); 

        //Set Win/Lose Conditions
        if (userTotal == randomNumber){
            youWin();
        }
        else if ( userTotal > randomNumber){
            youLose();
        }  
    });

    //Set Click for Jewel
    $('#crystal-four').click(function(){

        userTotal = yourScore + crystalFour;
        $('#replace-your-score').text(userTotal); 

        //Set Win/Lose Conditions
        if (userTotal == randomNumber){
            youWin();
        }
        else if ( userTotal > randomNumber){
            youLose();
        }  
    });
    


    //Game begins when Start Button is Clicked
    $('#start-button').on('click', function(){
        gameStart();
    });

});