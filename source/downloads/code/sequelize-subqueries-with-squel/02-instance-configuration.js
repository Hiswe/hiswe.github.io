// http://docs.sequelizejs.com/manual/tutorial/associations.html#creating-elements-of-a-belongsto-has-many-or-hasone-association

Basket.create({
  name: `fruits`,
  items: [
    {
      name: `apples`,
      price: 20
    },
    {
      name: `bananas`,
      price: 35
    }
  ],
  include: [
    {
      association: Basket.Items
    }
  ]
});
