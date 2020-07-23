/*Seeds for SQL Table*/
USE employeeTracker_db;

INSERT INTO department (name)
VALUES ("Accounting"), ("Engineering"), ("Human Resources"), ("Communications"), ("Research"), ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 75000.00, 1),
("Sr Accountant", 100000.00, 1), 
("Engineer I", 80000.00, 2), 
("Engineer II", 90000.00, 2),
("Sr Engineer", 100000.00, 2),
("Lead Engineer", 120000.00, 2),
("Talent Manager", 65000.00, 3),
("Hiring Manager", 70000.00, 3),
("HR Consultant", 75000.00, 3),
("Communications Specialist", 65000.00, 4),
("Lead Communications Specialist", 75000.00, 4),
("Researcher I", 60000.00, 5),
("Researcher II", 80000.00, 5),
("Sr Researcher", 90000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Jones", 1, 1),
("Sarah", "Jones", 2, 2),
("John", "Smith", 3, 3),
("Bob", "Smith", 4, null),
("Jack", "White", 5, null),
("Elliot", "Black", 6, null),
("Frank", "Anderson", 7, 5),
("Patricia", "Anderson", 8, null);
