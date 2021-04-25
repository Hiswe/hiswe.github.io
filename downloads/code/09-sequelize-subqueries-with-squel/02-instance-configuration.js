Basket.create(
  {
    name: `fruits`,
    items: [
      {
        name: `apples`,
        price: 17.3
      },
      {
        name: `bananas`,
        price: 22.5
      }
    ]
  },
  {
    include: [Basket.Items]
  }
);
