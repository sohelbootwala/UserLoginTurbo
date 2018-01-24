const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

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
			req.vertexSession.user = {id: data.id}

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

router.get('/currentuser', function(req, res){
	if (req.vertexSession == null){
			res.json({
					confirmation: 'success',
					user: null
			})

			return
	}

	if (req.vertexSession.user == null){
		res.json({
				confimation: 'success',
				user: null
		})

		return
	}
	//binding the session key
	res.json({
			confirmation: 'success',
			user: req.vertexSession.user
	})


})



module.exports = router
