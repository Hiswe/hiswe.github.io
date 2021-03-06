const Sequelize = require("sequelize");

const sequelize = new Sequelize(`postgres://localhost:5432/sequelize-example`);

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

Item.Basket = Item.belongsTo(Basket);
Basket.Items = Basket.hasMany(Item);

sequelize.sync();
