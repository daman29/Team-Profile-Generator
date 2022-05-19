const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { type } = require("os");

const employees = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
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
      name: "managerId",
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
      name: "managerEmail",
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
      response.managerName,
      response.managerId,
      response.managerEmail,
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
      } else {
        createEmployee(response.type);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// const createEmployee = (type) => {
//   if (type === "Engineer") {
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "name",
//           message: "Please enter the employees's name",
//           validate: function (input) {
//             if (!input) {
//               console.log("Please enter a valid name");
//             } else {
//               return true;
//             }
//           },
//         },
//         {
//           type: "input",
//           name: "id",
//           message: "Please enter the employee's Id",
//           validate: function (input) {
//             if (!input) {
//               console.log("Please enter a valid Id");
//             } else {
//               return true;
//             }
//           },
//         },
//         {
//           type: "input",
//           name: "email",
//           message: "Please enter the employee's Email",
//         },
//         {
//           type: "input",
//           name: "github",
//           message: "Please enter their GitHub username",
//         },
//       ])
//       .then((response) => {
//         const engineer = new Engineer(
//           response.name,
//           response.id,
//           response.email,
//           response.github
//         );

//         employees.push(engineer);

//         employeeMenu();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else if (type === "Intern") {
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "name",
//           message: "Please enter the employees's name",
//           validate: function (input) {
//             if (!input) {
//               console.log("Please enter a valid name");
//             } else {
//               return true;
//             }
//           },
//         },
//         {
//           type: "input",
//           name: "id",
//           message: "Please enter the employee's Id",
//           validate: function (input) {
//             if (!input) {
//               console.log("Please enter a valid Id");
//             } else {
//               return true;
//             }
//           },
//         },
//         {
//           type: "input",
//           name: "email",
//           message: "Please enter the employee's Email",
//         },
//         {
//           type: "input",
//           name: "school",
//           message: "Please enter the school name",
//         },
//       ])
//       .then((response) => {
//         const intern = new Intern(
//           response.name,
//           response.id,
//           response.email,
//           response.school
//         );

//         employees.push(intern);

//         employeeMenu();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };

const createEmployee = (typeEm) => {
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
      if (typeEm === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            name: "github",
            message: "Please enter their GitHub username: ",
          },
        ]).then((result) => {            
            const engineer = new Engineer(response.name, response.id, response.email, result)

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
            const intern = new Intern(response.name, response.id, response.email, result)

            employees.push(intern)
            employeeMenu();
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
