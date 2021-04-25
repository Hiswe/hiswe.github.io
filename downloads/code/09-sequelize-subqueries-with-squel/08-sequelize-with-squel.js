const COUNT_ITEMS = formatQuery(
  squel
    // don't use squel `autoQuoteAliasNames`
    .select({ autoQuoteAliasNames: false })
    // force integer on count
    .field(`CAST(COUNT(*) AS int)`)
    .where(`item.basketId = basket.id`)
    .from(`items`, `item`)
    .toString()
);

router.get(`/baskets`, async (ctx, next) => {
  const basket = await Basket.findAll({
    attributes: {
      include: [[COUNT_ITEMS, `itemsCount`]]
    }
  });
  ctx.body = basket;
});
