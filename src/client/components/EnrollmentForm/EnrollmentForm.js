import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EnrollmentForm extends Component {
	render() {
		return (
			<form>
				<div className="form-group">
				  <label for="validationServer01">First name</label>
				  <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
				  <div className="valid-feedback">
					Looks good!
				  </div>
				</div>
				<div className="form-group">
				  <label for="validationServer02">Last name</label>
				  <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
				  <div className="valid-feedback">
					Looks good!
				  </div>
				</div>
				<div className="form-group">
				  <label for="validationServerUsername">Team Name</label>
				  <div className="input-group">
					<div className="input-group-prepend">
					  <span className="input-group-text" id="inputGroupPrepend3">@</span>
					</div>
					<input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" ariaDescribedby="inputGroupPrepend3" required />
					<div className="invalid-feedback">
					  Please choose a username.
					</div>
				  </div>
				</div>
				<div className="form-group">
			    	<label for="exampleFormControlTextarea1">Participants List</label>
			    	<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			 	</div>
			  	<button className="btn btn-primary" type="submit">Submit form</button>
			</form>
		)
	}
}

export default EnrollmentForm;
