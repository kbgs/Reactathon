import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from 'style.scss';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleUsers : false,
			userType : null
		}
		this.toggleMenu = this.toggleMenu.bind(this);
		this.getTypeOfUser = this.getTypeOfUser.bind(this);
	}

	toggleMenu ()  {
		this.setState({toggleUsers : !this.state.toggleUsers});
	}

	getTypeOfUser (e, user) {
		this.setState({userType:user});
		this.toggleMenu();
	}

	render() {
		let classNamedropDown = this.state.toggleUsers == true?"show":"hide";
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  	<a className="navbar-brand" href="/">Home</a>
			  	<button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarSupportedContent" ariacontrols="navbarSupportedContent" ariaexpanded="false" arialabel="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>

			  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
			    	<ul className="navbar-nav mr-auto">
				      	<li className="nav-item active">
				        	<a className="nav-link" href="/"> <span className="sr-only">(current)</span></a>
				      	</li>
				      	{
				      		this.state.userType == "Admin" 
				      		?
				      		<li className="nav-item">
					        	<a className="nav-link" href="/addEvent"> <b>Host Event</b></a>
					      	</li>
					      	:
					      	null
				      	}
				      	
				    </ul>
				    <ul className="navbar-nav">
				    	<li className="nav-item dropdown show">
							<a className="nav-link dropdown-toggle" onClick={this.toggleMenu} id="dropdownPremium" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								<i className="fal fa-star"></i>									
							</a>
							<div className={"dropdown-menu dropdown-menu-right "+classNamedropDown} aria-labelledby="dropdownPremium">
								<a className="dropdown-item" onClick={(e)=> this.getTypeOfUser(e, "Guest")}>
									<span>Guest </span>
								</a>	
								<a className="dropdown-item" onClick={(e)=> this.getTypeOfUser(e, "Admin")}>
									<span>Admin</span>
								</a>
								<a className="dropdown-item" onClick={(e)=> this.getTypeOfUser(e, "Judge")}>
									<span>Judge</span>
								</a>
							</div>
						</li>
					</ul>
			    	<form className="form-inline my-2 my-lg-0">
			      		<label> Welcome, Guest </label>
			    	</form>
			  </div>	
			</nav>			
		)
	}
}

export default Header;
