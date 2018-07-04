import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import { connect } from "react-redux"
import {addEventData} from './action';
import moment from 'moment';

class AddEvent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			event_name : '',
			event_type : '',
			start_date : null,
			end_date : null,
			event_description :'',
			technologies : null,
			judge : []
		}
		this.onFieldChange = this.onFieldChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onFieldChange(e, name) {
		if(name) {
			this.setState({[name]:e["_d"]});
		} else {
			this.setState({[e.target.name]:e.target.value});	
		}
		
	}

	submitForm(e) {
		e.preventDefault();
		let eventData = this.state;
		let judges= eventData["judge"].split(',');
		let judgesList = [];
		judges.length && judges.map((item) => {
			judgesList.push(item);
		});
		eventData['start_date'] = moment(eventData['start_date']).format('MM-DD-YYYY');
		eventData['end_date'] = moment(eventData['end_date']).format('MM-DD-YYYY');
		eventData["judge"] = judgesList;
		eventData["event_id"] = Math.floor(Math.random()*(999-100+1)+100);
		this.props.addEventData(eventData);
	}

	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label for="event_name">Event Name</label>
						<input 	type="text" className="form-control" id="event_name" 
								name="event_name" placeholder="Event name" value={this.state.event_name} 
								onChange={this.onFieldChange} required />
					</div>
					<div class="form-group">
					    <label for="event_type">Event Type</label>
					    <select className="form-control" id="event_type" name="event_type" onChange={this.onFieldChange} >
					      <option>Brown Bag</option>
					      <option>Hackathon</option>
					      <option>Fun</option>
					    </select>
					</div>
					{
						this.state.event_type == "Hackathon" 
						?
							<div className="form-group">
								<label for="technologies">Skills</label>
								<input 	type="text" className="form-control" id="technologies" 
										name="technologies" value={this.state.technologies} 
										onChange={this.onFieldChange} required />
							</div>
						:
						null
					}
					<div className="form-group">
					  	<label for="start_date">Start Date</label>
					  	<DateTime 	dateFormat="MM-DD-YYYY" 
					  				closeOnSelect ={true}
					  				inputProps = {{name:"start_date", id:"start_date"}}
					  				onChange={(e) => this.onFieldChange(e, "start_date")} 
					  				value = {this.state.start_date}	/>
					</div>
					<div className="form-group">
					  	<label for="end_date">End Date</label>
					  	<DateTime 	dateFormat="MM-DD-YYYY"  closeOnSelect ={true}
					  				inputProps = {{name:"end_date", id:"end_date"}}
					  				onChange={(e) => this.onFieldChange(e, "end_date")} 
					  				value = {this.state.end_date}	/>
					</div>
					<div className="form-group">
						<label for="judge">Judges</label>
						<textarea 	className="form-control" id="judge" name="judge" rows="3" 
									onChange={this.onFieldChange}  placeholder="Enter Judge Emails separated by comma" value={this.state.judge}>
						</textarea>
					</div>
					<div className="form-group">
						<label for="event_description">Event Description</label>
						<textarea 	className="form-control" id="event_description" name="event_description" rows="3" 
									onChange={this.onFieldChange} value={this.state.event_description}>
						</textarea>
					</div>
					<button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
				</form>			
			</div>
			
		)
	}
}


AddEvent.propTypes = {
	addEventData: PropTypes.func.isRequired
}


function mapStateToProps(state) {
	return {
		
	}
}

export default connect(mapStateToProps, {addEventData})(AddEvent);
