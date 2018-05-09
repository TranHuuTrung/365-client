import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';
import { Link } from 'react-router-dom'

class UserProfile extends Component {
    state = {
        onEditing: false,
        form: {
            phone_kinh_doanh: this.props.phoneInfo.kinh_doanh || '',
            phone_ky_thuat: this.props.phoneInfo.ky_thuat || '',
            phone_thiet_ke: this.props.phoneInfo.thiet_ke || '',
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

        if (this.state.form.phone_kinh_doanh !== this.props.phoneInfo.kinh_doanh ||
            this.state.form.phone_ky_thuat !== this.props.phoneInfo.ky_thuat ||
            this.state.form.phone_thiet_ke !== this.props.phoneInfo.thiet_ke
        ) {
            this.props.actions.updatePhoneInfo(this.state.form)
                .then(() => {
                    this.props.actions.getPhoneInfo();
                    this.toggleEditing(false);
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
            <div>
                <header id="header-navbar" className="auth-header">
                    <div>
                        <Link to={"product"} className="inline">Edit Content</Link>
                        <Link to={"report"} className="inline">Client Feedback</Link>
                        <Link to={"profile"} className="inline active">Profile</Link>
                        <Link to={"login"} className="inline" style={{ float: "right" }}>Logout</Link>
                    </div>
                </header>

                <div className="push-30-t push-30 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 user-profile" style={{ minHeight: "85vh" }}>
                    {
                        this.state.onEditing ?
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="phone_kinh_doanh">Phone kinh doanh</label>
                                    <input type="text"
                                        className="form-control"
                                        id="phone_kinh_doanh"
                                        name="phone_kinh_doanh"
                                        value={this.state.form.phone_kinh_doanh}
                                        onChange={this.handleChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone_ky_thuat">Phone kỹ thuật</label>
                                    <input type="text"
                                        className="form-control"
                                        id="phone_ky_thuat"
                                        name="phone_ky_thuat"
                                        value={this.state.form.phone_ky_thuat}
                                        onChange={this.handleChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone_thiet_ke">Phone thiết kế</label>
                                    <input type="text"
                                        className="form-control"
                                        id="phone_thiet_ke"
                                        name="phone_thiet_ke"
                                        value={this.state.form.phone_thiet_ke}
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
                                            <div className="col-4">Phone kinh doanh: </div>
                                            <div className="col-8 font-w600">{this.props.phoneInfo.kinh_doanh}</div>
                                        </div>
                                        <div className="row push-10">
                                            <div className="col-4">Phone kỹ thuật: </div>
                                            <div className="col-8 font-w600">{this.props.phoneInfo.ky_thuat}</div>
                                        </div>
                                        <div className="row push-10">
                                            <div className="col-4">Phone thiết kế: </div>
                                            <div className="col-8 font-w600">{this.props.phoneInfo.thiet_ke}</div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-primary" onClick={() => this.toggleEditing()}><i className="fa fa-edit 2x" /></button>
                                    </div>
                                </div>
                            </div>
                    }
                </div>

                <footer id="page-footer" className="content-mini content-mini-full bg-gray-lighter clearfix" style={{ minHeight: "60px", color: "#f25c2a" }}>
                    <div className="text-center">
                        quangcao365 website -- version 1.0
                   </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userProfile: state.auth.user,
    phoneInfo: state.generalInfo.phoneInfo || {},
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);

