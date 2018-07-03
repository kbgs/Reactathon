import React, {Component} from 'react';
import PropTypes from 'prop-types';

import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';
import JudgementForm from '../JudgementForm/JudgementForm';

const UPCOMING_EVENTS = [{
	"event_id" : 100,
	"event_name" : "Reactathon",
	"start_date" : "07/02/2018",
	"end_date" : "07/04/2018",
	"event_description" : "Reactathon for VDSI",
	"technologies" : "React JS, NODE JS",
	"problem_statements" : ["statement_1", "statement_2"],
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

class EventsDashboard extends Component {
	constructor(props) {
		super(props);
		this.handleEnroll = this.handleEnroll.bind(this);
		this.handleJudgement = this.handleJudgement.bind(this);
		this.state = {
			isEnroll: false,
			isJudgement: false
		};

		
	}

	handleEnroll() {
		this.setState({ isEnroll: true });
	}

	handleJudgement() {
		this.setState({ isJudgement: true });
	}

	render() {
		return (
				<div>
					<h4> Upcoming Events list 2018</h4>
					<div className='row'>
						<div className='col-md-4'>
							<div className='events-list'>
								{
									UPCOMING_EVENTS.map((item, index) =>  {
										return <div key={index} className="card">
										    <div className="card-body">
										      <h2 className="card-title">{item["event_name"]}</h2>
										    </div>
										</div>
									})
								}
							</div>
						</div>
						<div className='col-md-8'>	
							<div className="right-panel">
								<div className="panel panel-default">
									<div className="panel-title"> {UPCOMING_EVENTS[0]["event_name"]}</div>
					    			<div className="panel-body">
								      <p> Start Date : {UPCOMING_EVENTS[0]["start_date"]} - End Date : {UPCOMING_EVENTS[0]["end_date"]}</p>
								      <p>{UPCOMING_EVENTS[0]["event_description"]}</p>
								    </div>
								    <div className="panel-footer">
								      <button className="btn btn-primary" onClick={this.handleEnroll}>Enroll</button>
								      <button className="btn btn-primary" onClick={this.handleJudgement}>Judge Teams</button>
								    </div>
								</div>
								{this.state.isEnroll
									?
									<EnrollmentForm />
									:
									null
								}

								{this.state.isJudgement
									?
									<JudgementForm />
									:
									null
								}
							</div>
						</div>
					</div>	
				</div>	  

		)
	}
}

export default EventsDashboard;
