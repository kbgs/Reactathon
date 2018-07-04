import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {submitJudgement, submitJudgementSuccess} from './action';

class JudgementForm extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleJudgement = this.handleJudgement.bind(this);
		this.state = {
			judgementData: {}
		}
	}

	onChange(e) {
		let judgementData = this.state.judgementData;
		judgementData[e.target.name] = e.target.value;
		this.setState({judgementData: judgementData});
	}

	handleJudgement(e) {
		e.preventDefault();
		let judgementData = this.state.judgementData;
		if(Object.keys(this.state.judgementData).length) {
			judgementData['group_name'] = this.props.groupName;
			this.props.submitJudgement(judgementData);
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.judgementMsg != this.props.judgementMsg) {
			let thisObj = this;
			setTimeout(function(){ thisObj.props.submitJudgementSuccess('');  }, 3000);
		}
	}
	render() {
		return (
			<div className="panel panel-default">
			    <div className="panel-body">
			     	<form className='judgement-form'>
			     		{(this.props.judgementMsg.length && this.props.judgementMsg[0].data) ? <p style={{color: 'green'}}>{this.props.judgementMsg[0].data.data.message}</p> : null}
						<div className="form-group">
						  <label htmlFor="validationServer01">Score</label>
						  <input type="text" name="score" className="form-control" id="validationServer01" value={this.state.score}  onChange={this.onChange} required />
						</div>
						<div className="form-group">
						  <label htmlFor="validationServer02">End Result</label>
						  <input type="text" name="end_result" className="form-control" id="validationServer02" placeholder="Winner/First Runnerup"  onChange={this.onChange} value={this.state.end_result} required />
						  
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">Comments</label>
							<textarea name="comments" className="form-control" id="exampleFormControlTextarea1" rows={this.state.comments} onChange={this.onChange} ></textarea>
						</div>
					  	<button className="btn btn-primary" onClick={this.handleJudgement}>Submit</button>
					</form>
				</div>
			</div>
		)
	}
}


JudgementForm.propTypes = {
	submitJudgement: PropTypes.func.isRequired
}


function mapStateToProps(state) {
	return {
		judgementMsg: state.judgementMsg
	}
}

export default connect(mapStateToProps, {submitJudgement, submitJudgementSuccess})(JudgementForm);
