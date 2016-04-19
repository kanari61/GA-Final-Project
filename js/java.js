var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

function runCipher(){
  var cipherText = $('#cypher').val();
  var cipherOffset = $('#offset').val();
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for(i=0; i<cipherText.length; i++){
     var letter = cipherText[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
    
     var index = alphabet.indexOf(letter);
     if(index == -1){
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }

   $('#finish').val(cipherFinish);
}

function Decipher(){
  var decipherText = $('#decipher').val();
  var decipherOffset = $('#offset2').val();
  decipherOffset = -(decipherOffset % alphabet.length);
  var decipherFinish = '';

  for(i=0; i<decipherText.length; i++){
     var letter = decipherText[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
    
     var index = alphabet.indexOf(letter);
     if(index == -1){
       decipherFinish += letter;
     } else {
       index = ((index + decipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       decipherFinish += nextLetter;
     }
  }

 $('#finish2').val(decipherFinish);
}


    
 

function KeyCheck(event)
{
   
}

$(document).ready(function() {
  $('#cypher').keypress(function(){
    setTimeout(function(){ runCipher(); },20);
  });
  $('#cypher').blur(function(){
    runCipher();
  });
   $('#cypher').keyup(function(event){
    var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      runCipher();
      break; 
      default:
      break;
   }
    runCipher();
  });
  $('#offset').change(function(){
    setTimeout(runCipher(),20);
  });
  
});



$(document).ready(function() {
  $('#decipher').keypress(function(){
    setTimeout(function(){ Decipher(); },20);
  });
  $('#decipher').blur(function(){
    Decipher();
  });
   $('#decipher').keyup(function(event){
    var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      runCipher();
      break; 
      default:
      break;
   }
    Decipher();
  });
  $('#offset').change(function(){
    setTimeout(Decipher(),20);
  });
  
});