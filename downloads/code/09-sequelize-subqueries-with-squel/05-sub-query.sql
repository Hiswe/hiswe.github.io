(
  SELECT CAST(COUNT(*) AS int)
  FROM items AS item
  WHERE ("item"."basketId" = "basket"."id")
) AS "itemsCount"
(
  SELECT SUM("item"."price")
  FROM items AS item
  WHERE ("item"."basketId" = "basket"."id")
) AS "totalPrice"

