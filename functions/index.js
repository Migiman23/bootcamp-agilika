const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')
const nuxtConfig = require('./nuxt.config.js')
// const axios = require('axios')
// const express = require('express');
// const cors = require('cors');
const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath:'/'
  }
}
const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  try{
    res.set('Cache-control', 'public, max-age=600, s-maxage=1200')
    await nuxt.ready()
    const result = await nuxt.renderRoute(req.path) // Returns { html, error, redirected }
    res.send(result.html) // Sends html as response
  } catch(err){
    console.log('ERROR' , err)
    res.send(err) // Sends html as response
  }
  
})
//Ejemplo de httprequest a un feed de youtube
// const getFeed = express();
// getFeed.use(cors({ origin: true }));
// getFeed.get('/', async (req, res) => {
//   res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
//   console.log('get youtube videos');
//   await axios.get('https://www.youtube.com/feeds/videos.xml?channel_id=UCP9-9YUnDTfSPsrwI7ESSbQ')
//   .then(response => {    
//     let json = convert.xml2json(response.data, {compact: true, spaces: 4})  
//     res.status(200).send(json)
//     console.log(json)
//   })
//   .catch(error => {    
//     res.status(500).send(error)
//   })
// });

// exports.getFeed = functions.https.onRequest(getFeed)