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
          viewEmployees();
          break;
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "Add Employee":
          addEmployee();
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

//Main_Prompt Switch Case Functions

//View All Employees
function viewEmployees(){
  
  // Instantiate CLI-Table
  var table = new Table({
    head: ['ID','First Name','Last Name']
    });

  var query = "SELECT id, first_name, last_name FROM employee";
  connection.query(query, function(err, data){
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
      var dataArr = [];
      for(var key in data[i]){
        dataArr.push(data[i][key]);
      }
      table.push(dataArr);
    }
    console.log(table.toString());
    employeeTrackerInit();
  });
};

//View All Departments
function viewDepartments(){
  
  // Instantiate CLI-Table
  var table = new Table({
    head: ['ID','Department Name']
    });

  var query = "SELECT * FROM department";
  connection.query(query, function(err, data){
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
      var dataArr = [];
      for(var key in data[i]){
        dataArr.push(data[i][key]);
      }
      table.push(dataArr);
    }
    console.log(table.toString());
    employeeTrackerInit();
  });
};

//View All Roles
function viewRoles(){
  
  // Instantiate CLI-Table
  var table = new Table({
    head: ['ID','Position Title','Salary','Dept ID']
    });

  var query = "SELECT * FROM role";
  connection.query(query, function(err, data){
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
      var dataArr = [];
      for(var key in data[i]){
        dataArr.push(data[i][key]);
      }
      table.push(dataArr);
    }
    console.log(table.toString());
    employeeTrackerInit();
  });
};

//Add Employee
function addEmployee(){
  
  var query = "SELECT * FROM role";
  connection.query(query, function(err, data){
    if (err) throw err;
    inquirer.prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the new employee's first name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the new employee's last name?"
      },
      {
        name: "role",
        type: "list",
        message: "What is the new employee's role?",
        choices: function(){
          var roleList = [];
          for(var i = 0; i < data.length; i++){
            roleList.push({name: data[i].title, value: data[i].id});
          }
          return roleList;
        }
      },
    ]).then(function(answer){
      for (i = 0 ; i< data.length; i ++) {
        if (data[i].title === answer.role) {
          answer.role_id = data[i].id;
        };
      }; 
      connection.query("INSERT INTO employee SET ?",{first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role}, function(err, data){
        if (err) throw err;
        console.log("New employee "+ answer.first_name + " " + answer.last_name + " added to employee table!");
        employeeTrackerInit();
      });
    });
  });
};