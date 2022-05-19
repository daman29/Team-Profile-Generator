const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const card = require("./lib/CreateCard");
const HTML = require("./lib/CreateHTML")

const employees = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the manager's name: ",
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
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );

    employees.push(manager);

    employeeMenu();
  })
  .catch((error) => {
    console.log(error);
  });

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
      if (response.type === "Finish") {
        console.log("team finished");
        console.log(employees);
        buildHtml()
      } else {
        createEmployee(response.type);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const createEmployee = (employeeType) => {
  return inquirer
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
    .then((response) => {
      if (employeeType === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            name: "github",
            message: "Please enter their GitHub username: ",
          },
        ]).then((result) => {            
            const engineer = new Engineer(response.name, response.id, response.email, result.github)

            employees.push(engineer)
            employeeMenu();
        });
      } else {
        inquirer.prompt([
          {
            type: "input",
            name: "school",
            message: "Please enter their school name: ",
          },
        ]).then(result => {
            const intern = new Intern(response.name, response.id, response.email, result.school)

            employees.push(intern)
            employeeMenu();
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const buildHtml = () => {
    const cards = employees.map((val) =>{
        let currentEmployee = new card(val)
        return currentEmployee.generateCard()
    }).join("")

    const htmlContent = () => {
        let html = new HTML(cards)
        return html.generateHtml()
    }
}