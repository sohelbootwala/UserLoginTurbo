import React, { Component } from 'react'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../../actions'

class Admin extends Component {

		 componentDidMount(){
		 		// console.log('Admin component did mount')
		 		superagent.get('/auth/currentuser')
		 		.query(null)
		 		.set('Accept', 'application/json')
		 		.end((err, response) => {
		 				if(err){
		 						console.log('REQUEST ERROR' + err.message)
		 							return
		 				}
		 				const currentuser = response.body.user
		 				if (currentuser == null){
		 						console.log('USER NOT LOGGED IN: ')
		 						return
		 				}
		 				console.log('USER: ' + JSON.stringify(response.body))
		 				this.props.currentUserReceived(currentuser)
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

const stateToProps = (state) => {
		return {

		}
}

const dispatchToProps = (dispatch) => {
		return {
				currentUserReceived: (user) => dispatch(actions.currentUserReceived(user))

		}
}

export default connect(stateToProps, dispatchToProps)(Admin)




