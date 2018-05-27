// use the postgres flavour
const squel = require("squel").useFlavour("postgres");

// custom formatter
const fieldRegExp = /([a-zA-Z]*)\.([a-zA-Z]*)/g;
const formatQuery = query => `(${query.replace(fieldRegExp, `"$1"."$2"`)})`;
