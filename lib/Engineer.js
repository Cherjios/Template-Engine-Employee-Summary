// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

const Engineer = function(github){
    this.github= github;
    this.getGithub = function(){
        return this.github
    };
    this.getRole = function(){
        return 'Engineer'
    };
};

Engineer.prototype = new Employee();



module.exports = Engineer;