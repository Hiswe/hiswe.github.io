---
title: promises
tags:
---

transforming a node JS callback system to promise

http://stackoverflow.com/questions/26076511/handling-multiple-catches-in-promise-chain

http://bluebirdjs.com/docs/api/operationalerror.html

http://bluebirdjs.com/docs/api/catch.html

```js
nodeStyleCB1(callBack1)

function callBack1(err, result) {
  if (err) return handleRejection1(err)
  callBack2()
}

function callBack2(err, result) {
  if (err) return handleRejection2(err)
  callBack3()
}

function callBack3(err, result) {
  if (err) return handleRejection3(err)
  // do final stuff
}

```


```js
promisedAction1()
  .catch(handleRejection1)
  .then(promisedAction2)
  .catch(handleRejection2)
  .then(promisedAction3)
  .catch(function (err) {
    if (err.handled) return;
    // do a generic error handling
  })

function handleRejection1(err) {
  // do stuff with error
  return Promise.reject({handled: true})
}
function handleRejection2(err) {
  // do stuff with error
  return Promise.reject({handled: true})
}

```

http://callbackhell.com/

http://bluebirdjs.com/docs/features.html
