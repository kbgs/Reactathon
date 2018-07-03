import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';

class AddEvent extends Component {
	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label for="validationServer01">Event Name</label>
						<input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
						<div className="valid-feedback">
							Looks good!
						</div>
					</div>
					<div class="form-group">
					    <label for="exampleFormControlSelect1">Event Type</label>
					    <select className="form-control" id="exampleFormControlSelect1">
					      <option>1</option>
					      <option>2</option>
					      <option>3</option>
					      <option>4</option>
					      <option>5</option>
					    </select>
					</div>
					<div className="form-group">
					  	<label for="validationServer02">Start Date</label>
					  	<DateTime dateFormat="MM-DD-YYYY" closeOnSelect ={true}/>
					</div>
					<div className="form-group">
					  	<label for="validationServer02">End Date</label>
					  	<DateTime dateFormat="MM-DD-YYYY"  closeOnSelect ={true}/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlTextarea1">Event Description</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>
					<button className="btn btn-primary" type="submit">Submit form</button>
				</form>			
			</div>
			
		)
	}
}

export default AddEvent;
