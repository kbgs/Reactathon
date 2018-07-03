import React, {Component} from 'react';
import PropTypes from 'prop-types';

const GROUPS_INFO = [{
	"event_id" : 100,
	"group_name" : "Reactathon",
	"start_date" : "07/02/2018",
	"end_date" : "07/04/2018",
	"event_description" : "Reactathon for VDSI",
	"technologies" : "React JS, NODE JS",
	"participants" : ["statement_1", "statement_2"],
	"attachments" : ["att1.jpg", "att2.jpg"],
	"event_type" : "hackathon",
	"event_link" : ""
},{
	"event_id" : 101,
	"event_name" : "Brown Bag Session on Blockchain technology",
	"start_date" : "08/02/2018",
	"end_date" : "08/02/2018",
	"event_description" : "A session on block chain technology",
	"technologies" : "Blockchain",
	"problem_statements" : "",
	"attachments" : "",
	"event_type" : "brownbag",
	"event_link" : "https://webex.com"
},{
	"event_id" : 102,
	"event_name" : "GUSTO Events",
	"start_date" : "10/01/2018",
	"end_date" : "11/18/2018",
	"event_description" : "A Year end sports events conducted & awarded the employees and also final day celebrations",
	"technologies" : "",
	"problem_statements" : "",
	"attachments" : "",
	"event_type" : "gusto",
	"event_link" : "https://gusto.verizon.com"
}]


class JudgementForm extends Component {
	render() {
		return (
			<div>
				<h4> Upcoming Events list 2018</h4>
				<div className="card-group">
					{
						GROUPS_INFO.map((item, index) =>  {
							return <div className="card">
							    <div className="card-body">
							      <h2 className="card-title">{item["group_name"]}</h2>
							    </div>
							</div>
						})
					}
				</div>	
				<div className="card-preview">					
					<div className="panel panel-default">
						<div className="panel-title"> {item["group_name"]}</div>
					    <div className="panel-body">
					     	<form>
								<div className="form-group">
								  <label for="validationServer01">Score</label>
								  <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
								  <div className="valid-feedback">
									Looks good!
								  </div>
								</div>
								<div className="form-group">
								  <label for="validationServer02">End Result</label>
								  <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
								  <div className="valid-feedback">
									Looks good!
								  </div>
								</div>
								<div className="form-group">
									<label for="exampleFormControlTextarea1">Feedback</label>
									<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
								</div>
							  	<button className="btn btn-primary" type="submit">Submit form</button>
							</form>
						</div>
					</div>
				</div>		
			</div>

			
		)
	}
}

export default JudgementForm;
