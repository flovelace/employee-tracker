// Enable the iquirere package for the questions
const inquirer = require("inquirer");
// enable to connection to the db
const db = require("./config/connection.js");
// thow an error if the user fails to connect
const table = require("console.table");

db.connect((err) => {
    if (err) throw err;

});

// start questions with Inquirer
function questions () {
    inquirer
    .prompt ({
        type: "list",
        name: "welcome",
        message: "Welcome to the Employee Tracker! What would you like to do today?",
        choices: [
            "View All Departments",
            "View All Current Roles",
            "View Employee Roster",
            "Add a New Department",
            "Add a New Role",
            "Add a New Employee",
            "Quit?",
        ],
    })
    // these are the options for the user to choose from
    .then(function (userInput) {
        if (userInput.welcome === "View All Departments") {
            getDept();
        } else if (userInput.welcome === "View All Current Roles") {
            getRoles();
        } else if (userInput.welcome === "View Employee Roster") {
            getEmpl();
        } else if (userInput.welcome === "Add a New Department") {
            addDept();
        } else if (userInput.welcome === "Add a New Role") {
            addRole();
        } else if (userInput.welcome === "Add a New Employee") {
            addEmpl();
        } else if (userInput.welcome === "Quit?") {
            console.log("Thank you for using Employee Tracker! Have a good day!");
            db.end();
            return;
        }
        
    })
}
// gets the department
function getDept() {
    const sql = `SELECT * FROM department;`;
    db.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    });
}
// gets the employee roles, their salary, and their dept
function getRoles() {
    const sql = `SELECT A.id, A.title, A.salary, B.dept_name
    FROM roles AS A
    LEFT JOIN department AS B
    ON B.id = A.department_id;`;
    db.query(sql, function(err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    })
}
// gets the employee names, role, salary and managers
function getEmpl() {
    const sql = `SELECT A.*, B.title, B.salary, B.department_id
    FROM employees AS A
    LEFT JOIN roles as B
    ON B.id = A.role_id;`;
    db.query(sql, function(err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    })
}

// add a department
function addDept() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "deptName",
            message: "What is the name of the department you would like to add?",
        },
    ])
    .then(function (deptUpdate) {
        const department = deptUpdate.deptName;

        const sql = `INSERT INTO department (dept_name)
        VALUES ('${department}')`;
        db.query(sql, function (err, res) {
            if (err) throw err;
            console.table(res);
            questions();
        });
    });
}

// add a role
function addRole() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "roleName",
            message: "Please enter the name of the role you wish to add.",
        },
        {
            type: "input",
            name: "salary",
            message: "Please enter the salary for this role.",
        },
        {
            type: "input",
            name: "deptIdentifier",
            message: "Please enter the ID for the department.",
        }
    ])
    .then(function (roleUpdate) {
        const newRole = roleUpdate.roleName;
        const newSalary = roleUpdate.salary;
        const newIdentifier = roleUpdate.deptIdentifier;

        const sql = `INSERT INTO roles (title, salary, department_id)
        VALUES ('${newRole}', '${newSalary}', '${newIdentifier}')`;
        db.query(sql, function (err, res) {
            if (err) throw err;
            console.table(res);
            questions();
        });

    });
}

function addEmpl() {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "firstName",
            message: "Please enter the employee's first name.",
        },
        {
            type: "input",
            name: "lastName",
            message: "Please enter the employee's last name.",
        },
        {
            type: "input",
            name: "emplRole",
            message: "Please enter the employee's role ID at the company.",
        },
        {
            type: "input",
            name: "managerID",
            message: "Please enter the manager's ID.",
        }
    ])
    .then(function (emplUpdate) {
        const fName = emplUpdate.firstName;
        const lName = emplUpdate.lastName;
        const eRole = emplUpdate.emplRole;
        const manId = emplUpdate.managerID;

        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES ('${fName}', '${lName}', '${eRole}', '${manId}')`;
        db.query(sql, function (err, res) {
            if (err) throw err;
            console.table(res);
            questions();
        });
    });
}
questions();


