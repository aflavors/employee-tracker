/*Seeds for SQL Table*/
USE employeeTracker_db;

INSERT INTO department (name)
VALUES ("Accounting"), ("Engineering"), ("Human Resources"), ("Communications"), ("Research"), ("Finance");

INSERT INTO role (title, salary)
VALUES ("Accountant", 75000.00),
("Sr Accountant", 100000.00), 
("Engineer I", 80000.00), 
("Engineer II", 90000.00),
("Sr Engineer", 100000.00),
("Lead Engineer", 120000.00),
("Talent Manager", 65000.00),
("Hiring Manager", 70000.00),
("HR Consultant", 75000.00),
("Communications Specialist", 65000.00),
("Lead Communications Specialist", 75000.00),
("Researcher I", 60000.00),
("Researcher II", 80000.00),
("Sr Researcher", 90000.00)

INSERT INTO employee (first_name, last_name)
VALUES ("Bob", "Jones"),
("Sarah", "Jones"),
("John", "Smith"),
("Bob", "Smith"),
("Jack", "White"),
("Elliot", "Black"),
("Frank", "Anderson"),
("Patricia", "Anderson")
