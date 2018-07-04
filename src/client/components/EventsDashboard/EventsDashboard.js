import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';
import JudgementForm from '../JudgementForm/JudgementForm';

import { getEvents } from './action';

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
		this.setActiveEvent = this.setActiveEvent.bind(this);
		this.state = {
			isEnroll: false,
			isJudgement: false,
			events: [],
			activeEvent: {}
		};
	}

	componentDidMount() {
		console.log("didmount props ", this.props);
		this.props.getEvents();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps != this.props && nextProps.events.length) {
			console.log("nextprops ", nextProps);
			this.setState({events: nextProps.events[0].data, activeEvent: nextProps.events[0].data[0]});
		}
	}

	setActiveEvent(eventId) {
		let activeEvent = {};
		this.state.events.map((event) => {
			if(event['event_id'] == eventId) {
				activeEvent = event;
				return;
			}
		})
		this.setState({activeEvent: activeEvent});
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
									this.state.events.length && this.state.events.map((item, index) =>  {
										return <div key={index} className={this.state.activeEvent['event_id'] == item['event_id'] ? 'card active' : 'card'} onClick={(e) => this.setActiveEvent(item['event_id'], e)}>
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
									<div className="panel-title"> {this.state.activeEvent["event_name"]}</div>
					    			<div className="panel-body">
								      <p> Start Date : {this.state.activeEvent["start_date"]} - End Date : {this.state.activeEvent["end_date"]}</p>
								      <p>{this.state.activeEvent["event_description"]}</p>
								    </div>
								    <div className="panel-footer">
								      <button className="btn btn-primary" onClick={this.handleEnroll}>Enroll</button>
								      <button className="btn btn-primary" onClick={this.handleJudgement}>Judge Teams</button>
								    </div>
								</div>
								{this.state.isEnroll
									?
									<EnrollmentForm eventId={this.state.activeEvent['event_id']} />
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

EventsDashboard.propTypes = {
	events: PropTypes.array.isRequired
}


function mapStateToProps(state) {
	return {
		events: state.events
	}
}

export default connect(mapStateToProps, {getEvents})(EventsDashboard);
