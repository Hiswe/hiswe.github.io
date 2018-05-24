Basket.create(
  {
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
    ]
  },
  {
    include: [Basket.Items]
  }
);
