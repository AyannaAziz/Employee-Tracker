const inquirer = require("inquirer");

const mysql = require("mysql");

// Creating the variable for the database in mysql workbench
const connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "kitty123",
  database: "employeetracker_db",
});

// Connecting to mysql
connection.connect((err) => {
  if (err) throw err;
  // TODO: prompt the user for their next action.
  userOptions();
});



