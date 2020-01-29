// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("VirtualBar", "r17ie0jilw20yc4h", "ne89sjx1vz2636fe", {
  host: "i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

