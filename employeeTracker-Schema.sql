USE employeeTracker_db;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employee(role_id)
);