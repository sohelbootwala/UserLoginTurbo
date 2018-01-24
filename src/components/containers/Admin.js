import React, { Component } from 'react'
import superagent from 'superagent'

class Admin extends Component {

		 componentDidMount(){
		 		console.log('Admin component did mount')
		 		//who is logged in???

		 		superagent.get('/auth/currentuser')
		 		.query(null)
		 		.set('Accept', 'application/json')
		 		.end((err, response) => {
		 				if(err){
		 						console.log('REQUEST ERROR' + err.message)
		 							return
		 				}

		 				console.log('USER: ' + JSON.stringify(response.body))
		 		})
		 }

		render(){
				return (
						<div className="container">
								This is the Admind Container!
						</div>
						
				)
		}
}

export default Admin