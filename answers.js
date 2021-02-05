function check_ans1(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Thor Ragnarok" || answer.value == "thor ragnarok" || answer.value == "Thor ragnarok"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans2(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Wonder Woman" || answer.value == "wonder woman" || answer.value == "aquaman" || answer.value == "Aquaman" && answer2.value=="Aquaman" || answer2.value == "Wonder Woman" || answer2.value == "wonder woman" || answer2.value == "aquaman"){
    right.style.display = "block";
    next.style.display = "inline";
    wrong.style.display = "none";
  }
  else{
    wrong.style.display = "block";
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans3(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Grievous" || answer.value == "grievous"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans4(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "6th year" || answer.value == "6" || answer.value == "six" || answer.value == "Six"){
    right.style.display = "block";
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans5(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Thamur" || answer.value=="thamur"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans6(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Risotto Groupon" || answer.value == "Risotto groupon" || answer.value == "risotto groupon"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
function check_ans7(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if ((answer.value == "Nathan" || answer.value == "Alex" || answer.value == "Howard" || answer.value == "nathan" || answer.value == "alex" || answer.value == "howard") && (answer2.value == "Nathan" || answer2.value == "Alex" || answer2.value == "Howard" || answer2.value == "nathan" || answer2.value == "alex" || answer2.value == "howard") && (answer3.value == "Nathan" || answer3.value == "Alex" || answer3.value == "Howard" || answer3.value == "nathan" || answer3.value == "alex" || answer3.value == "howard")){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
function check_ans8(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "MK" || answer.value == "mk"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
function check_ans9(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "lethal" || answer.value == "Lethal"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
function check_ans10(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "raxacoricofallapatorius" || answer.value == "Raxacoricofallapatorius"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
