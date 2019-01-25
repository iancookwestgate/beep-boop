var userNum = function(number) {
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
