router.get(`/baskets`, async (ctx, next) => {
  const baskets = await Basket.findAll({
    include: [Basket.Items]
  });
  const result = baskets.map(basket => {
    const withCount = basket.toJSON();
    withCount.itemsCount = withCount.items.length;
    withCount.totalPrice = withCount.items.reduce(
      (total, item) => total + item.price,
      0
    );
    delete withCount.items;
    return withCount;
  });
  ctx.body = result;
});
