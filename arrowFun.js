var sayHello = function(name){
    return "welcome" +name;
}
var addNumber2 = function(a,b){
    var sum = a+b;
    return sum;
}
document.write("<br/> Expression style<br/>")
document.write(sayHello("Ravi"));
//arrow function is known as anonymous function
//arrow funciton by default return value
//1st point if we want to write code vry less and not repeating the same logic again and again


document.write("<br/> using arrow key function<br/>")
var sayHi = (name)=>"welcome" +name;
document.write(sayHi("Ravi"))
document.write("<br/>")
var addNumber1 = (a,b)=>a+b;
var findLargest = (a,b)=>{
    if(a>b){
        return a;
    }else{
        return b;
    }
}
document.write("Addition of two number using arrow functions<br/>")
document.write(addNumber1(100,200)+" "+addNumber2(100,200))
document.write("<br/> larget of two number is <br/>")
document.write(findLargest(2,4));