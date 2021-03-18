function dis1(){
    document.write("Normal function<br/>")

}
dis1();
dis1();

//call function from same script
//call function from another script
//call function from html using events

//IIFE: Immediate Invoked functionexpression using anonymous function style
(function(){
    document.write("<br/> This is type of IIEF function<br/>");

})();

//IIFE: Immediate Invoked functionexpression using arrow function style
(()=>document.write("<br/> This is the type of IIEF function using Arrow"))();

((a,b)=>document.write(a+b))(10,20);

//multiplefunctions and multiple IIFE you can write, but all executed at once