var add=function(number1, number2, number3, number4, number5){
return number1+number2;
};
var number1=parseInt(prompt("Enter the first number"));
var number2=parseInt(prompt("Enter the second number"));
var result=add(number1, number2);
alert("The result is "+result+"");

var convert=function(Celsius, Farenheit){return  Farenheit=Celsius * 1.8 +32;};
var Celsius=parseFloat(prompt("Enter the temperature in degrees celsius"));
var Farenheit=Celsius * 1.8 +32;
var result= convert(Celsius, Farenheit);
alert("The temperature in degrees farenheit is "+result+"");

var BMI=function(Weight, Height){
return Weight/Height;
};
var Weight= parseFloat(prompt("Enter your Weight"));
var Height=parseFloat(prompt("Enter your Height"));
var result=BMI(Weight, Height);
alert("Your BMI is "+result+"");
