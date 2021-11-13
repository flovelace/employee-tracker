// Enable sql to be used in the application
const mysql = require("mysql2");

// Initiate the connection to the database
const db = mysql.createConnection (
    {
        host: "localhost",
        // Input your SQL username here
        user: "root",
        // Input your SQL password here (do not upload to github!)
        password: "",
        // This is name of the database that you will be utilising
        database: "employees"
    },
    // It is always important to confirm that users are connected to the database
    console.log("You are know connected to the employees database!")
);

// export the connection
module.exports = db;