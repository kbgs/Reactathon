import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from 'style.scss';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  	<a className="navbar-brand" href="#">Vz Events Portal</a>
			  	<button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarSupportedContent" ariacontrols="navbarSupportedContent" ariaexpanded="false" arialabel="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>

			  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
			    	<ul className="navbar-nav mr-auto">
				      	<li className="nav-item active">
				        	<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      	</li>
				      	<li className="nav-item">
				        	<a className="nav-link" href="#">Link</a>
				     	</li>
				      	<li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" datatoggle="dropdown" ariahaspopup="true" ariaexpanded="false">
					          Dropdown
					        </a>
					        <div className="dropdown-menu" arialabelledby="navbarDropdown">
					         	<a className="dropdown-item" href="#">Action</a>
					          	<a className="dropdown-item" href="#">Another action</a>
					          	<div className="dropdown-divider"></div>
					          	<a className="dropdown-item" href="#">Something else here</a>
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
