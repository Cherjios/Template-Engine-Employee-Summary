// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, School){
        super(name, id, email);
        this.school = School;
        this.getSchool = function(){
            return this.school;
        }
        this.getRole = function(){
            return 'Intern'
        }
    }
}


module.exports = Intern;