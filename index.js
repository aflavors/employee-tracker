var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Archives1",
  database: "employeeTracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

//Application Initialization

function employeeTrackerInit(){
  inquirer
    .prompt({
      name: "main_prompt",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role",
        "Exit Application"
      ]
    }).then(function(answer){
      switch (answer.main_prompt){
        case "View All Employees":
          //viewEmployees function
          break;
        case "View All Departments":
          //viewDepartments function
          break;
        case "View All Roles":
          //viewRoles function
          break;
        case "Add Employee":
          //addEmployee function
          break;
        case "Add Role":
          //addRole function
          break;
        case "Add Department":
          //addDepartment function
          break;
        case "Update Employee Role":
          //updateRole function
          break;
        case "Exit Application":
          connection.end();
          break;
      }
    });
}

employeeTrackerInit();
