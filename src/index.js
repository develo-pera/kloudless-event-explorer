import { hook } from './kloudless/hook';

const express = require('express');
const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.post('/kloudless-hook', (req, res) => hook(req, res));

app.listen(port, () => console.log(`Kloudless Event Explorer listening on port ${port}!`));
