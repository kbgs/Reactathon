import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';

class AddEvent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			eventName : '',
			eventType : '',
			startDate : null,
			endDate : null,
			eventDescription :''
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

	submitForm() {

	}

	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label for="eventName">Event Name</label>
						<input 	type="text" className="form-control is-valid" id="eventName" 
								name="eventName" placeholder="First name" value={this.state.eventName} 
								onChange={this.onFieldChange} required />
					</div>
					<div class="form-group">
					    <label for="eventType">Event Type</label>
					    <select className="form-control" id="eventType" name="eventType" onChange={this.onFieldChange} >
					      <option>1</option>
					      <option>2</option>
					      <option>3</option>
					      <option>4</option>
					      <option>5</option>
					    </select>
					</div>
					<div className="form-group">
					  	<label for="startDate">Start Date</label>
					  	<DateTime 	dateFormat="MM-DD-YYYY" 
					  				closeOnSelect ={true}
					  				inputProps = {{name:"startDate", id:"startDate"}}
					  				onChange={(e) => this.onFieldChange(e, "startDate")} 
					  				value = {this.state.startDate}	/>
					</div>
					<div className="form-group">
					  	<label for="endDate">End Date</label>
					  	<DateTime 	dateFormat="MM-DD-YYYY"  closeOnSelect ={true}
					  				inputProps = {{name:"endDate", id:"endDate"}}
					  				onChange={(e) => this.onFieldChange(e, "endDate")} 
					  				value = {this.state.endDate}	/>
					</div>
					<div className="form-group">
						<label for="eventDescription">Event Description</label>
						<textarea 	className="form-control" id="eventDescription" name="eventDescription" rows="3" 
									onChange={this.onFieldChange} value={this.state.eventDescription}>
						</textarea>
					</div>
					<button className="btn btn-primary" type="submit" onClick={this.submitForm}>Submit form</button>
				</form>			
			</div>
			
		)
	}
}

export default AddEvent;
