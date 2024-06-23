const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const weatherData = require('./utils/weatherData');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('root');
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send('Address is required');
    }
    weatherData(req.query.address, (error, data) => {
        if (error) {
            return res.send({ error });
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
