
$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();


var questionOne =  $('input[name="question1"]:checked').val();
var questionTwo =  $('input[name="question2"]:checked').val();
var questionThree= $('input[name="question3"]:checked').val();

var result=parseInt(questionOne)+ parseInt(questionTwo)+ parseInt(questionThree);
});
});
