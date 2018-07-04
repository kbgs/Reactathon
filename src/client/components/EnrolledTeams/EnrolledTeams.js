import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import JudgementForm from '../JudgementForm/JudgementForm';

import { getTeams } from './action';

class EnrolledTeams extends Component {
	constructor(props) {
		super(props);
		this.setactiveTeam = this.setactiveTeam.bind(this);
		this.handleJudgement = this.handleJudgement.bind(this);
		this.state = {
			isJudgement: false,
			teams: [],
			activeTeam: {}
		};
	}

	componentDidMount() {
		console.log("didmount props ", this.props);
		this.props.getTeams(this.props.params.id);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps != this.props && nextProps.teams.length) {
			console.log("nextprops ", nextProps);
			this.setState({teams: nextProps.teams[0].data, activeTeam: nextProps.teams[0].data[0]});
		}
	}

	setactiveTeam(groupName) {
		let activeTeam = {};
		this.state.teams.map((team) => {
			if(team['group_name'] == groupName) {
				activeTeam = team;
				return;
			}
		})
		this.setState({activeTeam: activeTeam, isJudgement: false});
	}

	handleJudgement() {
		this.setState({ isJudgement: true });
	}

	render() {
		let userType = this.props.userType.length ? this.props.userType[0].data : '';
		return (
				<div>
					<h4> Enrolled teams list </h4>
					<div className='row'>
						<div className='col-md-4'>
							<div className='teams-list left-panel'>
								{
									this.state.teams.length && this.state.teams.map((item, index) =>  {
										return <div key={index} className={this.state.activeTeam['group_name'] == item['group_name'] ? 'card active' : 'card'} onClick={(e) => this.setactiveTeam(item['group_name'], e)}>
										    <div className="card-body">
										      <h2 className="card-title">{item["group_name"]}</h2>
										    </div>
										</div>
									})
								}
							</div>
						</div>
						<div className='col-md-8'>	
							<div className="right-panel">
								{this.state.teams.length && this.state.activeTeam
									?
									<div className="panel panel-default">
										<h3 className="panel-title text-center"> {this.state.activeTeam["group_name"]}</h3>
						    			<div className="panel-body">
						    				<p><strong>Participants List</strong></p>
						    				<ul>
							    			  	{
													this.state.activeTeam && this.state.activeTeam.participants.map((item, index) =>  {
														return <li key={index}>{item}</li>
													})
												}
											</ul>
									    </div>
									    <div className="panel-footer">
									      {(userType && userType == 'Judge') && <button className="btn btn-primary" onClick={this.handleJudgement}>Judge Team</button>}
									    </div>
									</div>
									:
									null
								}
								
								{this.state.isJudgement
									?
									<JudgementForm groupName={this.props.params.id} />
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

EnrolledTeams.propTypes = {
	getTeams: PropTypes.func.isRequired,
	teams: PropTypes.array.isRequired
}


function mapStateToProps(state) {
	return {
		teams: state.teams,
		userType: state.appUser
	}
}

export default connect(mapStateToProps, {getTeams})(EnrolledTeams);
