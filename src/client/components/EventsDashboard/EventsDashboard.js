import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';
import JudgementForm from '../JudgementForm/JudgementForm';

import { getEvents } from './action';

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
		this.props.getEvents(this.props.location.pathname);
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
		this.setState({activeEvent: activeEvent, isEnroll: false, isJudgement: false});
	}

	handleEnroll() {
		this.setState({ isEnroll: true });
	}

	handleJudgement() {
		this.setState({ isJudgement: true });
	}

	render() {
		console.log('event props: ', this.props);
		let userType = this.props.userType.length ? this.props.userType[0].data : '';
		return (
				<div>
					<h4>{this.props.location.pathname == '/upcomingEvents' ? 'Upcoming Events list 2018' : 'Past Events List'}</h4>
					<div className='row'>
						<div className='col-md-4'>
							<div className="events-list-left-panel">
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
							<div className="panel panel-default right-panel">
								<h3 className="panel-title text-center"> {this.state.activeEvent["event_name"]}</h3>
				    			<div className="panel-body">
							      <p> <strong>Start Date</strong> : {this.state.activeEvent["start_date"]} </p> <p> <strong>End Date</strong> : {this.state.activeEvent["end_date"]}</p>
							      <p> <strong>Event Description</strong> : {this.state.activeEvent["event_description"]}</p>
							      { this.state.activeEvent.solution_link && <p><strong> Best Solution Provided</strong> : <a href={this.state.activeEvent.solution_link}>{this.state.activeEvent.solution_link}</a></p>}
							      { this.state.activeEvent.event_link && <p> Event Link : <a href={this.state.activeEvent.event_link}>{this.state.activeEvent.event_link}</a></p>}
							      <div className={this.state.activeEvent.event_result ? 'event-result' : ''}>
							      { this.state.activeEvent.event_result && this.state.activeEvent.event_result.split(',').map((item, index) => {
							      		return <p> {(index == 0 ? 'Winner' : (index == 1 ? 'First Runnerup' : 'Second Runner up')) + ' : ' + item}</p>
							      })
							  		}
							  		</div>
							    </div>
							    <div className="panel-footer">
							    	{(this.props.location.pathname == '/upcomingEvents' && (!userType || userType == 'Guest')) && <button className="btn btn-primary" style={{marginTop: '15px'}} onClick={this.handleEnroll}>Enroll</button>}
							      	{(userType && (userType == 'Admin')) && <a href={'/enrollments/'+this.state.activeEvent["event_id"]} className="btn btn-primary" style={{marginTop: '15px'}}>View Enrollments</a>}
							      	{((this.props.location.pathname == '/upcomingEvents') && userType && (userType == 'Judge')) && <a href={'/enrollments/'+this.state.activeEvent["event_id"]} style={{marginTop: '15px'}} className="btn btn-primary">Judge Teams</a>}
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
				</div>	  

		)
	}
}

EventsDashboard.propTypes = {
	events: PropTypes.array.isRequired
}


function mapStateToProps(state) {
	return {
		events: state.events,
		userType: state.appUser
	}
}

export default connect(mapStateToProps, {getEvents})(EventsDashboard);
