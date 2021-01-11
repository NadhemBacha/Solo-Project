
function showValue(num){
  document.getElementById('output').value+=num
}
function operation(){
  var number=document.getElementById('output').value
  var number1=eval(number)
  document.getElementById('output').value= number1
}
function Reset(){
  document.getElementById('output').value =''
}
function removeOne(){
  var rem1=document.getElementById('output').value
  var str="";
  var i =0;
  while(i<rem1.length-1){
    str+=rem1[i];
    i++;
  }
  document.getElementById('output').value=str
}
function pow2(){
  var total= document.getElementById('output').value;
  total*= total
  document.getElementById('output').value=total
}

function show(num){
  document.getElementById('out').value+=num
}
function remove1(){
  var rem1=document.getElementById('out').value
  var str="";
  var i =0;
  while(i<rem1.length-1){
    str+=rem1[i];
    i++;
  }
  document.getElementById('out').value=str
}
function Reset1(){
  document.getElementById('out').value =''
}
function converter(){
var result=document.getElementById('out').value;
result *= 2.20462262185
document.getElementById('out').value=result
}
//setInterval(function(){
 // console.log('ok')
 // },5000)

// $(document).ready(function(){
//   $("#hide").click(function(){
//     $("#clacul").hide();
//   });
//   $("#show").click(function(){
//     $("#calcul").show();
//   });
// });