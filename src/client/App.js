import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<div  className='container-fluid'>
				<Header />
				<div className="jumbotron">
					<div className="container">
						<h1 className="display-3 red">Vz Events Portal</h1>
						<h4> All the events information like Hackathons, Brown bags, Gusto etc of the Organisation are availabe here .</h4>
						<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
					</div>
				</div>				
				{this.props.children}			
			</div>			
		)
	}
}

export default App;
