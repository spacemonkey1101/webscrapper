const PORT = 6000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

app.listen(PORT , () => console.log(`Server running on PORT ${PORT}`))