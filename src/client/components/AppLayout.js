import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class AppLayout extends Component {
	render() {
		return (
			<div  className='row'>
				<div  className='col-md-6'>
					<div className="card-columns">
					  	<a href='/upcomingEvents'>
						  <div className="card">
						  	<div className="card-header">
							    Upcoming Events
							</div>
						    <div className="card-body">
						      	<p className="card-text"> Dashboard for all the Upcoming Events happens in Organisation.</p>
						    </div>
						  </div>
						</a>				  		
					</div>	
				</div>				
				<div  className='col-md-6'>
					<div className="card-columns">
						<a href='/historicEvents'>
						  	<div className="card">
						  		<div className="card-header">
								    Historic Events
								</div>
							    <div className="card-body">
							      	<p className="card-text">Dashboard for all the Past Events happened in Organisation..</p>
							    </div>
							</div>
						</a>
					</div>	
				</div>
			</div>
			
		)
	}
}

export default AppLayout;
