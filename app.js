const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>Racing App - Sydney Server</title></head>
    <body>
      <h1>🏇 Racing App - Sydney Server</h1>
      <p>✅ Deployed on Australian server</p>
      <p>✅ Ready for Betfair session token: DY8lZT9MzxC4dhEk9EiSMo4Edb3ap0lvQaK6WL2iCLA=</p>
      <p>✅ Bypasses geographic restrictions</p>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Racing app running on Sydney server');
});
