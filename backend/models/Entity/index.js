// const {Sequelize,DataTypes}=require('sequelize')
const { Sequelize, DataTypes } = require("sequelize");
const db_config = require("../../config/config")
const sql = require("mysql2/promise")

sql.
    createConnection({ user: db_config.USER, password: db_config.PASSWORD })

    .then((connection) =>

    connection.query(`create database if not exists ${db_config.DATABASE}`));

const sequelize= new Sequelize(
    db_config.DATABASE,
    db_config.USER,
    db_config.PASSWORD,{
        host:db_config.HOST,
        dialect:db_config.DIALECT
    }
) 
const db={}
db.sequelize=sequelize
db.USER=require("./user")(sequelize,DataTypes)

db.sequelize.sync({ force: false }, () => {

    console.log("Sync done");
  
  });
  
   
  
  module.exports = db;

console.log('connection successful')