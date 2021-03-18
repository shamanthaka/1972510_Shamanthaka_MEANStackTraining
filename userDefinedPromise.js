var option = prompt("Enter your option")
var obj = new Promise(function(resolve,rejected){
    if(option=='yes'){
     resolve("successfully done the task")

    } else{
        rejected("Failure-Error generated")
    }
    
});
//Asynchromous call back function then execute only if 
//promise resolve else catch execute

obj.then(data=>document.write(data)).catch(error=>document.write(error));