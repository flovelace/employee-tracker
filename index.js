// Enable the iquirere package for the questions
const inquirer = require("inquirer");
// enable to connection to the db
const db = require("./config/connection.js");
// thow an error if the user fails to connect
const table = require("console.table");
db.connect((err) => {
    if (err) throw err;
    console.log('You are ready to begin!');
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
            "View Employee by Department Name",
            "Add a New Department",
            "Add a New Role",
            "Add a New Employee",
            "Quit?",
        ],
    })
    .then(function (userInput) {
        if (userInput.welcome === "View All Departments") {
            getDept();
        } else if (userInput.welcome === "View All Current Roles") {
            getRoles();
        } else if (userInput.welcome === "View Employee Roster") {
            getEmpl();
        } else if (userInput.welcome === "View Employee by Department Name") {
            getEmplDept();
        } else if (userInput.welcome === "Add a New Department") {
            addDept();
        } else if (userInput.welcome === "Add a New Role") {
            addRole();
        } else if (userInput.welcome === "Add a new Employee") {
            addNewEmpl();
        } else if (userInput.welcome === "Quit?") {
            return;
        }
        
    })
}

function getDept() {
    const sql = `SELECT * FROM department;`;
    db.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    });
}

function getRoles() {
    const sql = 'SELECT * FROM roles;';
    db.query(sql, function(err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    })
}

questions();


