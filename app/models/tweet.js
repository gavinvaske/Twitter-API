const db = require("../config/database")
const { Sequelize, DataTypes, Model } = require("sequelize")

// const sequelize = new Sequelize(process.env.DATABASE_URL);
// class tweet extends Model {
//   test() {
//     console.log('test')
//     return 'test'
//   }
//   getTweet(){
//     return this.message
//   }
// }
// tweet.init({
//   message: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     len: [0,140],  // only allow values with length between 0 and 140
//   }
// }, { sequelize });

// module.exports = tweet

module.exports = db.define(
  "tweet",
  {
    /* attributes */
    message: {
      type: Sequelize.STRING,
    },
  },
  {
    /* options */
  }
)
