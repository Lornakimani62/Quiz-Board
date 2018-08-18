$(document).ready(function() {
  $("button#start").click(function() {
    $(".question1").show();
  });
});

$(document).ready(function() {
  $("button#question1").click(function() {
    $(".question2").show();
  });
});

$(document).ready(function() {
  $("button#question2").click(function() {
    $(".question3").show();
  });
});



$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
var questionOne =  $('input[name="question1"]:checked').val();
var questionTwo =  $('input[name="question2"]:checked').val();
var questionThree= $('input[name="question3"]:checked').val();
var result=parseInt(questionOne)+ parseInt(questionTwo)+ parseInt(questionThree);
alert(+result);
});

});
