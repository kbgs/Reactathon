import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class AppLayout extends Component {
	render() {
		return (
			<div  className='container-fluid'>
				<div className="card-columns">
				  	<a href='/upcomingEvents'>
					  <div className="card">
					    <div className="card-body">
					      <h5 className="card-title">Upcoming Events</h5>
					      <p className="card-text"> Dashboard for all the Upcoming Events happens in Organisation.</p>
					    </div>
					  </div>
					</a>
				  <div className="card">
				    <div className="card-body">
				      <h5 className="card-title">Historic Events</h5>
				      <p className="card-text">Dashboard for all the Past Events happened in Organisation..</p>
				    </div>
				  </div>
				</div>				
			</div>
			
		)
	}
}

export default AppLayout;
