Model.findAll({
  attributes: {
    include: [[sequelize.fn("COUNT", sequelize.col("hats")), "no_hats"]]
  }
});
