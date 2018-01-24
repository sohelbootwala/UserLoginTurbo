import React, { Component } from 'react'

class Admin extends Component {

		 componentDidMount(){
		 		console.log('Admin component did mount')
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