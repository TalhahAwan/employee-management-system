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
  