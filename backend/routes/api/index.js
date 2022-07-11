const router = require('express').Router();

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

/*
Test this route by navigating to http://localhost:8000/api/csrf/restore and creating a fetch request in the browser's DevTools console.
Make a request to /api/test with the POST method,
 a body of { hello: 'world' },
 a "Content-Type" header,
 and an XSRF-TOKEN header with the value of the XSRF-TOKEN cookie located in your DevTools.

Example fetch request:

fetch('/api/test', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ hello: 'world' })
}).then(res => res.json()).then(data => console.log(data));

Replace the <value of XSRF-TOKEN cookie> with the value of the XSRF-TOKEN cookie.
If you don't have the XSRF-TOKEN cookie anymore, access the http://localhost:8000/api/csrf/restore route to add the cookie back.

After the response returns to the browser, parse the JSON response body and print it out.
*/

module.exports = router;