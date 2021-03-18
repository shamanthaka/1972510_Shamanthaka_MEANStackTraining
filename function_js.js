//normal function
function add(a,b){
    return a+b;
}
document.write("normal function <br/>")
document.write(add(100,200))


//expression style function

var sum = function addNumber(a,b){
    return a+b;

}
document.write("<br>expression style function <br/>")
document.write(sum(20,40));

var sumOfNumber = function (a,b){
    return a+b;

}
document.write("<br>expression style function without Name <br/>")
document.write(sumOfNumber(20,40));

//callBack function
document.write("<br> Callback function <br/>")
function sayHello(fname,callBack){
    document.write("<br/>Welcome,your name is "+callBack(fname));
}
var maleInfo= function(fname){
    return "Mr" +fname;
}
var femaleInfo = function(fname){
    return "Miss" +fname;
}
sayHello("Raj",maleInfo);
sayHello("Reeta",femaleInfo);
sayHello("Ajay", function(fname){
    return "Mr" +fname;
});
