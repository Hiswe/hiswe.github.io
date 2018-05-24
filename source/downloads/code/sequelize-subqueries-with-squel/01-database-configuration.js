const Sequelize = require("sequelize");
const sequelize = require("./sequelize-connection");

const Basket = sequelize.define(`basket`, {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
});

const Item = sequelize.define(`item`, {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

Item.belongsTo(Basket);
Basket.hasMany(Item);
