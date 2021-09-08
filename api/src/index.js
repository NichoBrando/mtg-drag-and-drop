const express = require('express');
const Card = require('mtgsdk').card;
const { pick } = require('lodash');
const cors = require('cors');

const app = express();

app.use(cors());

const getCardInfo = (card) => {
    if(!card.imageUrl) return;
    return pick(card, [
        'name',
        'imageUrl',
        'multiverseid'
    ]);
};

app.get('/', async (req, res) => {
    const query = req.query || {};
    res.header("Access-Control-Allow-Origin", "*");
    const name = query.name || '';
    const colors = query.colors || '';
    const data = await Card.where({ pageSize: 20, page: 0 , name, colors }).map(getCardInfo).filter(item => item);
    res.send(data);
});

app.listen(4000);