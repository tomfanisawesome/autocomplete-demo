const express = require('express')
const axios = require('axios')

const router = express.Router();

router.get('/api/autocomplete/:query', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const autocompleteUrlPrefix ='https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=EGsMlJB3--Cdv8MT7ALkR7lYo1tFbgyZ6xmVCkrmKmA&query=Pariser+1+Berl&beginHighlight=%3Cb%3E&endHighlight=%3C/b%3E&maxresults=&country=';

    
    axios({
        method: 'GET',
        url: autocompleteUrlPrefix + req.params.query,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(resonse => {
        res.send(JSON.stringify(resonse.data));
    }).catch(error => {
        res.status(400).send(JSON.stringify(error));
    })
})

router.use('/', express.static('client'))

module.exports = router;