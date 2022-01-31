const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://fibzfsjymcsaia:7af6010ab7ef84dae141c23bf06d6f2267f4c2bb92bd9a58b1dc854924282ed1@ec2-54-220-14-54.eu-west-1.compute.amazonaws.com:5432/d9qvdhhqf88in0',{
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
})

sequelize.sync().then(function () {
}).then(
    console.log("Synced.")
);
module.exports = sequelize;