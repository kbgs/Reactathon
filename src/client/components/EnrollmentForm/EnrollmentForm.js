import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {enrollToEvent} from './action';

class EnrollmentForm extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleEnroll = this.handleEnroll.bind(this);
		this.state = {
			enrollData: {}
		}
	}

	onChange(e) {
		let enrollData = this.state.enrollData;
		enrollData[e.target.name] = e.target.value;
		this.setState({enrollData: enrollData});
	}

	handleEnroll(e) {
		e.preventDefault();
		let enrollData = this.state.enrollData;
		if(Object.keys(this.state.enrollData).length) {
			let participants = enrollData.participants.split(',');
			let participantsList = [];
			participants.length && participants.map((item) => {
				participantsList.push(item);
			})

			enrollData.participants = participantsList;
			enrollData['event_id'] = this.props.eventId;
			this.props.enrollToEvent(enrollData);
		}
	}

	render() {
		return (
			<form>
				<div className="form-group">
				  <label htmlFor="validationServer01">Team Name</label>
				  <input type="text" name='group_name' className="form-control" id="validationServer01" value={this.state['group_name']} required 
				  	onChange={this.onChange}/>
				</div>
				
				<div className="form-group">
			    	<label htmlFor="exampleFormControlTextarea1">Participants List</label>
			    	<textarea name='participants' className="form-control" id="exampleFormControlTextarea1" rows="3"
			    		onChange={this.onChange}>{this.state.participants}</textarea>
			 	</div>
			  	<button className="btn btn-primary" onClick={this.handleEnroll}>Submit form</button>
			</form>
		)
	}
}


EnrollmentForm.propTypes = {
	enrollToEvent: PropTypes.func.isRequired
}


function mapStateToProps(state) {
	return {
		
	}
}

export default connect(mapStateToProps, {enrollToEvent})(EnrollmentForm);
