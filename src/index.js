import { hook } from './kloudless/hook';

const express = require('express');
const app = express();
const port = 3333;

const rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

app.use(express.json({ verify: rawBodySaver }));

app.get('/', (req, res) => res.send('Hello World'));
app.post('/kloudless-hook', (req, res) => hook(req, res));

app.listen(port, () => console.log(`Kloudless Event Explorer listening on port ${port}!`));
