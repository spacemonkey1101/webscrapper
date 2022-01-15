const PORT = 6000
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express()

const url = 'https://www.theguardian.com/international'
const articles = []
axios(url)
    .then(response => {
        const html = response.data 
        const $ = cheerio.load(html) 
        $('.fc-item__title', html).each( function(){
             const title = $(this).text()
             const url = $(this).find('a').attr('href')
             articles.push({title, url })
        })  
        console.log(articles)
    }).catch( err => console.log(err))

app.listen(PORT , () => console.log(`Server running on PORT ${PORT}`))