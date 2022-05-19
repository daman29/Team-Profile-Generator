const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "Please enter the manager's name",
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
      name: "managerId",
      message: "Please enter the manager's Id",
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
      name: "managerEmail",
      message: "Please enter the manager's Email",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "Please enter the office number",
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
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.officeNumber
    );

    employees.push(manager);

    employeeMenu();
  })
  .catch((error) => { console.log(error)});

const employeeMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Add another employee or finish the team? "
        }
    ])
}