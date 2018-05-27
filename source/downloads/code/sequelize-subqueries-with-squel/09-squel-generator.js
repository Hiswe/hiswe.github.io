const createSubQuery = ({ field, model, relation }) => {
  const query = squel
    .select({ autoQuoteAliasNames: false })
    .field(field)
    .where(`${relation}.${model}Id = ${model}.id`)
    .from(`${relation}s`, relation)
    .toString();
  return `(${formatQuery(query)})`;
};

const COUNT_ITEMS = subQuery({
  field: `CAST(COUNT(*) AS int)`,
  model: `basket`,
  relation: `item`
});

const SUM_ITEMS = subQuery({
  field: `SUM(item.price)`,
  model: `basket`,
  relation: `item`
});

router.get(`/baskets`, async (ctx, next) => {
  const basket = await Basket.findAll({
    attributes: {
      include: [[COUNT_ITEMS, `itemsCount`], [SUM_ITEMS, `totalPrice`]]
    }
  });
  ctx.body = basket;
});
