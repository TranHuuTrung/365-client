import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { MasterLayout } from '../../components/layouts';
import avatar from '../../assets/images/avatar.jpg'

class UserProfile extends Component {
	state = {
		onEditing: false,
		form: {
			first_name: this.props.userProfile.first_name || '',
			last_name: this.props.userProfile.last_name || '',
		}
	}

	toggleEditing = (value) => {
		let upComingValue = value !== undefined ? value : !this.state.onEditing;
		this.setState(
			{ onEditing: upComingValue }
		);
	}

	handleChangeInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			form: {
				...this.state.form,
				[name]: value
			}
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.form.first_name !== this.props.userProfile.first_name ||
			this.state.form.last_name !== this.props.userProfile.last_name ||
			(this.props.userProfile.first_name === null && this.props.userProfile.first_name === null))
		{
			this.props.actions.updateUserProfile(this.state.form)
				.then(() => {
					this.toggleEditing(false);
					alert('Edit user profile successfully');
				})
				.catch(err => {
					console.log(err);
				});
		} else {
			this.toggleEditing(false);
		}
	}

	render() {
		const { userProfile } = this.props;
		return (
			<MasterLayout>
				<div className="push-30-t push-30 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 user-profile">
					{
						this.state.onEditing ?
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="firstName">First Name</label>
									<input type="text"
										className="form-control"
										id="firstName"
										name="first_name"
										placeholder="First Name"
										value={this.state.form.first_name}
										onChange={this.handleChangeInput} />
								</div>
								<div className="form-group">
									<label htmlFor="lastName">Last Name</label>
									<input type="text"
										className="form-control"
										id="lastName"
										name="last_name"
										placeholder="Last Name"
										value={this.state.form.last_name}
										onChange={this.handleChangeInput} />
								</div>
								<div className="form-group push-30-t">
									<div className="col-xs-12 col-sm-6 offset-sm-3 col-md-4 offset-md-4">
										<button className="btn btn-sm btn-block btn-danger"
											type="button" onClick={() => this.toggleEditing()}>Cancel</button>
										<button className="btn btn-sm btn-block btn-primary" type="submit">Submit</button>
									</div>
								</div>
							</form>
							:
							<div className="showInfo">
								<div className="row">
									<div className="col-10">
										<div className="row push-10">
											<div className="col-4">Email: </div>
											<div className="col-8 font-w600">{userProfile.email}</div>
										</div>
										<div className="row push-10">
											<div className="col-4">First Name: </div>
											<div className="col-8 font-w600">{userProfile.first_name}</div>
										</div>
										<div className="row push-10">
											<div className="col-4">Last Name: </div>
											<div className="col-8 font-w600">{userProfile.last_name}</div>
										</div>
									</div>
									<div className="col-2">
										<button className="btn btn-primary" onClick={() => this.toggleEditing()}><i className="fa fa-edit 2x" /></button>
									</div>
								</div>


							</div>
					}
				</div>

			</MasterLayout>
		);
	}
}

const mapStateToProps = state => ({
	userProfile: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfile);

