document.write("<br/> This is first message");
document.write("<br/> This is second message");
document.write("<br/> This is Third message");

/*
fun1();
fun2();
fun3();

*/

document.write("1st message");
setTimeout(function(){
    document.getElementById("msg").innerHTML="2nd message";
},3000);

var i =0;
setInterval(function(){
    document.getElementById("info").innerHTML = i++;
},1000);
document.write("<br/> 3rd message")