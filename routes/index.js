// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', function(req, res){
		res.render('index', {text: 'This is the dynamic data. Open index.js fromthe routes'})
})

router.get('/signup', function(req, res){
		res.render('signup', null)
})

module.exports = router
