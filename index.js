// inquirer and fs module declarations
const inquirer = require("inquirer");
const fs = require("fs");

// constants declaration for constructor classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const card = require("./lib/CreateCard");
const HTML = require("./lib/CreateHTML");

// empty array to hold employees
const employees = [];

// initial inquirer to start the application and receive manager information
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the manager's name: ",
      validate: function (input) {
        // validate input is provided
        if (!input) {
          console.log("Please enter a valid name");
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager's Id: ",
      validate: function (input) {
        if (!input) {
          console.log("Please enter a valid Id");
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's Email: ",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "Please enter the office number: ",
      validate: function (input) {
        // validate office number is a number
        if (isNaN(input)) {
          console.log(
            "Please enter a valid Office Number, Press up arrow to change input"
          );
        } else {
          return true;
        }
      },
    },
  ])
  .then((response) => {
    // once all prompts are answered then generate new manager object
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );

    // push manager object to employees array
    employees.push(manager);

    // start the employees menu function to give next prompts
    employeeMenu();
  })
  .catch((error) => {
    console.log(error);
  });

// employee menu prompt asking user if they have more employees to enter or finish the team
const employeeMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "Add another employee or finish the team?",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((response) => {
      // if the response is finish then build the html
      if (response.type === "Finish") {
        console.log("Team finished");
        buildHtml();
      } else {
        // if any other response call employee creation function with the type of employee as parameter
        createEmployee(response.type);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// funciton to create additional employees. function takes employee type as parameter
const createEmployee = (employeeType) => {
  // prompt generic questions that are common between engineer and intern. Such as name, id and email
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter the employees's name: ",
          validate: function (input) {
            if (!input) {
              console.log("Please enter a valid name");
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter the employee's Id: ",
          validate: function (input) {
            if (!input) {
              console.log("Please enter a valid Id");
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the employee's Email: ",
        },
      ])
      // once generic questions are answered then check employee type. if employee type is engineer then ask for gitHub else if the employee type is Intern then ask for school name
      .then((response) => {
        if (employeeType === "Engineer") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "Please enter their GitHub username: ",
              },
            ])
            .then((result) => {
              // create new engineer employee with the given answers
              const engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                result.github
              );

              // push new employee to the employees array
              employees.push(engineer);
              employeeMenu();
            });
        } else {
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "Please enter their school name: ",
              },
            ])
            .then((result) => {
              const intern = new Intern(
                response.name,
                response.id,
                response.email,
                result.school
              );

              employees.push(intern);
              employeeMenu();
            });
        }
      })
      .catch((error) => {
        console.log(error);
      })
  );
};

// function to build the html file and write it
const buildHtml = () => {
  let htmlPage; // initial html page
  // cards constant to call the cards constructor and build cards for each employee in the employees array
  const cards = employees
    .map((val) => {
      let currentEmployee = new card(val);
      return currentEmployee.generateCard();
    })
    .join("");

  // build overall html page using the HTML constructor with the cards as input
  let htmlContent = new HTML(cards);
  htmlPage = htmlContent.generateHtml();

  // write the file to the dist folder
  fs.writeFile("./dist/index.html", htmlPage, (err) => {
    err ? console.log(err) : console.log("index.html generated successfully");
  });
};
