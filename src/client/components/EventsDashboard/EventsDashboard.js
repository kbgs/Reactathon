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
		this.setState({activeEvent: activeEvent, isEnroll: false, isJudgement: false});
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
								<div className="panel-title"> {this.state.activeEvent["event_name"]}</div>
				    			<div className="panel-body">
							      <p> Start Date : {this.state.activeEvent["start_date"]} - End Date : {this.state.activeEvent["end_date"]}</p>
							      <p>{this.state.activeEvent["event_description"]}</p>
							    </div>
							    <div className="panel-footer">
							      	<button className="btn btn-primary" onClick={this.handleEnroll}>Enroll</button>
							      	<a href={'/enrollments/'+this.state.activeEvent["event_id"]} className="btn btn-primary">Judge Teams</a>
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
		events: state.events
	}
}

export default connect(mapStateToProps, {getEvents})(EventsDashboard);
