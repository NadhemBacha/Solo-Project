window.onload=function(){ 
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
}
// setInterval(function(){
 //  console.log('ok')
 // },5000)