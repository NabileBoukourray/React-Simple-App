const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(morgan('short'));

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/*', (req, res, next) => {
    res.render('index.html');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});