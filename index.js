const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'work_db'
    },
    console.log(`Connected to the work_db database.`)
);
  
const questions = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "multipleChoices",
            message: "What would you like to do?",
            choices: [
                  "View departments",
                  "Add department",
                  "View roles",
                  "Add role",
                  "View employees",
                  "add employee",
                  "Update employee role",
                  "Quit",
            ]
        },
    ])
    .then(answer => {
        switch (answer.multipleChoices) {
            case "View departments":
                viewDepartments();
                break;
            case "Add department":
                addDepartment();
                break;
            case "View roles":
                viewRoles();
                break;
            case "Add role":
                addRole();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Update employee role":
                updateEmployeeRole();
                break;
            case "Quit":
                db.end();
                break;
            default:
                break;     
        }
    });
}

const viewDepartments = () => {
    db.query(`SELECT * FROM departments;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

const viewRoles = () => {
    db.query(`SELECT * FROM roles;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

const viewEmployees = () => {
    db.query(`SELECT * FROM employees;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

const addDepartment = () => {
    db.query(`SELECT * FROM departments;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

const addRole = () => {
    db.query(`SELECT * FROM departments;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

const addEmployee = () => {
    db.query(`SELECT * FROM departments;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

const updateEmployeeRole = () => {
    db.query(`SELECT * FROM departments;`, (err, res) => {
        if (err) throw err
        console.table(res)
        questions();
    })

};

db.connect((err) => { 
    if (err) throw err;
    questions();
});