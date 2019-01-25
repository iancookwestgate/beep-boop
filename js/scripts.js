var complete = function(userNum){
  var result = [];

  for (var i = 0; i <= userNum; i++) {

    if (i.toString().includes("3")) {
      result.push(" I'm sorry, Dave. I'm afraid I can't do that");
    } else if (i.toString().includes("2")) {
      result.push(" Boop");
    } else if (i.toString().includes("1")) {
      result.push(" Beep");
    } else
      result.push(" " +i);
    }

  return result;
};

$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    var userInput = $("input#userInput").val();

    $("#output").text(complete(userInput));

    event.preventDefault();
  });
});
