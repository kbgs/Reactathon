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
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleJudgement = this.handleJudgement.bind(this);
		this.state = {
			judgementData: {}
		}
	}

	onChange(e) {
		let judgementData = this.state.judgementData;
		judgementData[e.target.name] = e.target.value;
		this.setState({judgementData: judgementData});
	}

	handleJudgement(e) {
		e.preventDefault();
		let judgementData = this.state.judgementData;
		if(Object.keys(this.state.judgementData).length) {
			judgementData['event_id'] = this.props.eventId;
			this.props.enrollToEvent(judgementData);
		}
	}
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-title"> {"test"}</div>
			    <div className="panel-body">
			     	<form>
						<div className="form-group">
						  <label htmlFor="validationServer01">Score</label>
						  <input type="text" name="score" className="form-control" id="validationServer01" value={this.state.score} required />
						</div>
						<div className="form-group">
						  <label htmlFor="validationServer02">End Result</label>
						  <input type="text" name="end_result" className="form-control" id="validationServer02" placeholder="Winner/First Runnerup" value={this.state.end_result} required />
						  
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">Comments</label>
							<textarea name="comments" className="form-control" id="exampleFormControlTextarea1" rows={this.state.comments}></textarea>
						</div>
					  	<button className="btn btn-primary" type="submit">Submit form</button>
					</form>
				</div>
			</div>
		)
	}
}

export default JudgementForm;
