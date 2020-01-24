const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllRows = function(callback) {
  // TODO - your code here!
};

module.exports = {
  getAllRows
};
