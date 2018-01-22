const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

router.post('/register', function(req, res){

// This will persist the data to the project
		turbo.createUser(req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
				res.json({
						confirmation: 'fail',
						message: err.message
				})
		})
})

router.post('/login', function(req, res){
		turbo.login(req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
				res.json({
						confirmation: 'fail',
						message: err.message
				})
		})
})



module.exports = router
