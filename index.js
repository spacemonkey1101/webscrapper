const PORT = 6000
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express()

const url = 'https://www.theguardian.com/international'

axios(url)
    .then(response =>{
        const html = response.data 
        console.log(html);
    })

app.listen(PORT , () => console.log(`Server running on PORT ${PORT}`))