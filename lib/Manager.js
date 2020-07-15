// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email,OfficeNumber){
        super(name, id, email);
        this.officeNumber = OfficeNumber;
        this.getOfficeNumber = function(){
            return this.officeNumber;
        }
        this.getRole = function(){
            return 'Manager'
        }
    }
}


module.exports = Manager;