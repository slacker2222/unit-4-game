console.log("unit 4")
    
    $( document ).ready(function(){
 var Random=Math.floor(Math.random()*101+19)
//#between 19-120

$('#randomNumber').text(Random);
//I did append this to HTML randomNumber in HTML


var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)
//I set up random numbers between 1-12 for each jewel

//   document.getElementById("").value = "16";

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //tally variabless
  var images = [".gemImage"];
//   var images = [".", ".images/greengem.png", ".images/bluegem.png", ".images/yellowgem.png"];
  

$('#numberWins').text(wins);
$('#numberLoses').text(losses);
//game reset
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 

function winner(){
    alert("Winner Winner Chicken Dinner!");
        wins++; 
        $('#numberWins').text(wins);
        reset();
    }

function loser(){
    alert ("So counting is not your thing, eh?");
        losses++;
        $('#numberLosses').text(losses);
        reset()
     }


    $('#one').on ('click', function(){
    userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
            if (userTotal == Random){
              winner();
        }
            else if ( userTotal > Random){
              loser();
        }   
     })  
    $('#two').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
            if (userTotal == Random){
              winner();
            }
            else if ( userTotal > Random){
              loser();
            }
     })
    $('#three').on ('click', function(){
         userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
            if (userTotal == Random){
            winner();
            }
            else if ( userTotal > Random){
            loser();
            }
    })
    $('#four').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
            if (userTotal == Random){
            winner();
            }
            else if ( userTotal > Random){
            loser();
            }
    });
});

     

