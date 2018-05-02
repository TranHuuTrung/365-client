import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

// import { MasterLayout } from '../../components/layouts';
// import avatar from '../../assets/images/avatar.jpg'

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
                <header id="header-navbar" className="content-mini content-mini-full">
                    <ul className="nav-header pull-right">
                        <li>
                            <div className="btn-group">
                                <button className="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
                                    <img src="assets/img/avatars/avatar10.jpg" alt="Avatar" />
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-header">Profile</li>
                                    <li>
                                        <a tabIndex="-1" href="base_pages_inbox.html">
                                            <i className="si si-envelope-open pull-right"></i>
                                            <span className="badge badge-primary pull-right">3</span>Inbox
                                    </a>
                                    </li>
                                    <li>
                                        <a tabIndex="-1" href="base_pages_profile.html">
                                            <i className="si si-user pull-right"></i>
                                            <span className="badge badge-success pull-right">1</span>Profile
                                    </a>
                                    </li>
                                    <li>
                                        <a tabIndex="-1" href="javascript:void(0)">
                                            <i className="si si-settings pull-right"></i>Settings
                                    </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li className="dropdown-header">Actions</li>
                                    <li>
                                        <a tabIndex="-1" href="base_pages_lock.html">
                                            <i className="si si-lock pull-right"></i>Change password
                                    </a>
                                    </li>
                                    <li>
                                        <a tabIndex="-1" href="base_pages_login.html">
                                            <i className="si si-logout pull-right"></i>Log out
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </header>

                <div className="push-30-t push-30 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 user-profile">
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

                <footer id="page-footer" className="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
                    <div className="pull-right">
                        Crafted with <i className="fa fa-heart text-city"></i> by <a className="font-w600" href="http://goo.gl/vNS3I" target="_blank">pixelcave</a>
                    </div>
                    <div className="pull-left">
                        <a className="font-w600" href="http://goo.gl/6LF10W" target="_blank">OneUI 3.1</a> © <span className="js-year-copy">2015-18</span>
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

