// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer (name, id, email, gitHub){
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
    this.getName = function(){
        return this.name
    }
    this.getId = function(){
        return this.id
    }
    this.getEmail = function(){
        return this.email
    }
    this.getRole = function(){
        return 'Engineer'
    }
}



module.exports = Engineer;