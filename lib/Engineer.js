// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, Github){
        super(name, id, email);
        this.github = Github;
        this.getGithub = function(){
            return this.github;
        }
        this.getRole = function(){
            return 'Engineer'
        }
    }
}


module.exports = Engineer;