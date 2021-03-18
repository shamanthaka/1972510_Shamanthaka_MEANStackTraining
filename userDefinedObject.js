//object: any real world entity
/*
state or property, have, variable/feilds
behaviour do function/methods


*/
function Employee(){
    this.id = 100;
    this.name = "Ravi";

    this.display = function(){
        document.write("<br/>")
        document.write("id is"+this.id)
        document.write("<br/> name is"+this.name);
    }
}



var emp1 = new Employee(100, "Ravi");
emp1.display();
Employee.prototype.age = 21;
Employee.prototype.info= function(){
    document.write("<br/> Thid run time behaviour added....")
}
document.write("After added age property");
document.write("id is"+emp1.id);
document.write("<br/>name is"+emp1.age);


var emp2 = new Employee(101, "Ramesh");
emp2.display();
document.write("name is"+emp2.name);
document.write("id is"+emp2.id);
document.write("<br/>name is"+emp2.age);
