
var database = process.env.Database;
var username = process.env.Username;
var password = process.env.Password;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(database,username,password,{
  host:process.env.Host,
  dialect:process.env.dialect
});

sequelize.authenticate()
.then(()=>{
  console.log("Database connected successfully");
})
.catch(err=>{
  console.log(`Unable to connect to the database: ${err}`);
})
