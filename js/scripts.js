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

$(document).ready(function() {
  $("button#question3").click(function() {
    $(".question4").show();
  });
});

$(document).ready(function() {
  $("button#question4").click(function() {
    $(".question5").show();
  });
});


$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
var questionOne =  $('input[name="question1"]:checked').val();
var questionTwo =  $('input[name="question2"]:checked').val();
var questionThree= $('input[name="question3"]:checked').val();
var questionFour =  $('input[name="question4"]:checked').val();
var questionFive= $('input[name="question5"]:checked').val();
var userName= $("input#name").val();
$(".name").text(userName);
var result=parseInt(questionOne)+ parseInt(questionTwo)+ parseInt(questionThree)+parseInt(questionFour)+ parseInt(questionFive);
$(".result").text(result);
var percentage=(result/25)*100;
$(".percentage").text(percentage);
$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$(".question5").hide();
$("#output").show();
});

});
