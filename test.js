const mysql = require('mysql');
const fs = require('fs');
const connection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12610854',
  password: 'KtEzYS8jJR',
  database: 'sql12610854'
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
  }
  console.log('Connection MySQL Database Successfully');
});

connection.query('select * from ggg',(err, results) => {
  if (err) 
  {
    console.log('error',err);
  }
  console.log(results);
});
