/*
 object: any real world entity
 example person, car, animal and bank
 */
//one WAY object creation using literal style

var empObject = {id:100,name:"RAMESH",salary:20000};
document.write("Employee object <br/>")
document.write(empObject)
document.write("<br/>ID is"+empObject.id)
document.write("<br/>name is"+empObject.name)
document.write("<br/>salary is"+empObject.salary)


//convert object to string format

var empString = JSON.stringify(empObject);
document.write("<br/>")
document.write("emp object in string format<br/>")
document.write(empString)
document.write("<br/>ID is"+empString.id)
document.write("<br/>name is"+empString.name)
document.write("<br/>salary is"+empString.salary)


//convert string to json format
var empJson =JSON.parse(empString);
document.write("<br/>")
document.write("emp object in JSON format<br/>")
document.write(empJson)
document.write("<br/>ID is"+empJson.id)
document.write("<br/>name is"+empJson.name)
document.write("<br/>salary is"+empJson.salary)

