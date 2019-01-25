



$(document).ready(function(){
  $("form#beepBoop").submit(function(){
    var userInput = $("input#beepBoop").val();

    $(".beepBoop").append(userInput + "<br>");

    event.preventDefault();
  });
});
