var userNum = function(number) {
  if(parseInt(number)%3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  }

  if(parseInt(number)%2 === 0) {
    return "Boop!";
  }

  if(parseInt(number)%1 === 0) {
    return "Beep!";
  }
}










$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    var userInput = $("input#userInput").val();

    $("#output").text(userNum(userInput));

    event.preventDefault();
  });
});
