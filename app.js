// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

//Adding file 
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What Roll do you want to add?",
            name: "Roll",
          }
    ]);
  }

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "ID",
            message: "What is your ID?"
          },
          {
            type: "input",
            name: "Name",
            message: "What is your Name?"
          },
          {
            type: "input",
            name: "email",
            message: "Where are you email?"
          },
          {
            type: "input",
            name: "OfficeNumber",
            message: "What is your favorite Office Number?"
          },
          {
            type: "input",
            message: "Do you want to add another team member?",
            name: "AddMember"
          }
    ]);
  }
  function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "ID",
            message: "What is your ID?"
          },
          {
            type: "input",
            name: "Name",
            message: "What is your Name?"
          },
          {
            type: "input",
            name: "email",
            message: "Where are you email?"
          },
          {
            type: "input",
            name: "Github",
            message: "What is your Github username?"
          },
          {
            type: "input",
            message: "Do you want to add another team member?",
            name: "AddMember"
          }
    ]);
  }
  function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "ID",
            message: "What is your ID?"
          },
          {
            type: "input",
            name: "Name",
            message: "What is your Name?"
          },
          {
            type: "input",
            name: "email",
            message: "Where are you email?"
          },
          {
            type: "input",
            name: "School",
            message: "What is your School?"
          },
          {
            type: "input",
            name: "AddMember",
            message: "Do you want to add another team member?"
            
          }
    ]);
  }

  async function init() {
    try {
      var answers = await promptUser();

      if(answers.Roll === 'Manager'){
          var answerManager = await promptManager();
      }
      else if(answers.Roll === 'Engineer'){
          var answerEngineer = await promptEngineer();
      }
      else if(answers.Roll === 'Intern'){
          var answerIntern = await promptIntern();
      }
      if(answerManager.AddMember === 'Yes' || answerEngineer.AddMember === 'Yes' ||answerIntern.AddMember=== 'Yes' ){
          answer =  promptUser(); 
      }
  
  
    //   await writeFileAsync("index.html", answerManager);
    //   await writeFileAsync("index2.html", answerEngineer);
    //   await writeFileAsync("index3.html", answerIntern);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
