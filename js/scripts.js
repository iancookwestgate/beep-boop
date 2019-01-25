



$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    var userInput = $("input#userInput").val();

    $("#output").text(userInput);

    event.preventDefault();
  });
});
