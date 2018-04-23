import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'

class UserLogin extends Component {
    state = {
        form: {
            email: '',
            password: ''
        },
        errors: {
            email: null,
            password: null
        }
    }

    componentWillMount = () => {
        if (this.props.auth.token) this.props.actions.userLogout();
    }

    handleChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            },
            errors: {
                email: null,
                password: null
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.form.email.trim() === '') {
            return this.setState({
                errors: {
                    email: 'Email is required',
                    password: null
                }
            });
        }

        if (this.state.form.password.trim() === '') {
            return this.setState({
                errors: {
                    email: null,
                    password: 'Password is required'
                }
            });
        }

        this.props.actions.userLogin(this.state.form)
            .then(() => {
                this.props.history.push('/home');
            })
            .catch(err => {
                this.setState({
                    errors: {
                        password: err.message
                    }
                });
            });
    }

    render() {
        return (
            <div className="content content-boxed overflow-hidden">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <div className="push-30-t push-50 animated fadeIn">
                            <div className="text-center">
                                <i className="fa fa-2x fa-circle-o-notch text-primary"></i>
                                <h1 className="h3 push-10-t">Login Page</h1>
                            </div>
                            <form className="form-horizontal push-30-t" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-primary floating">
                                            <input type="email"
                                                className="form-control"
                                                id="login-email"
                                                name="email"
                                                value={this.state.form.email}
                                                onChange={this.handleChangeInput} />
                                            <label htmlFor="login-email">Username</label>
                                            {
                                                this.state.errors.email &&
                                                <div className="has-error">
                                                    <span className="help-block">{this.state.errors.email}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-primary floating">
                                            <input type="password"
                                                className="form-control"
                                                id="login-password"
                                                name="password"
                                                value={this.state.form.password}
                                                onChange={this.handleChangeInput} />
                                            <label htmlFor="login-password">Password</label>
                                            {
                                                this.state.errors.password &&
                                                <div className="has-error">
                                                    <span className="help-block">{this.state.errors.password}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group push-30-t">
                                    <div className="col-xs-12 col-sm-6 offset-sm-3 col-md-4 offset-md-4">
                                        <button className="btn btn-sm btn-block btn-primary" type="submit">Log in</button>
                                    </div>
                                </div>
                            </form>

                            <div className="text-center">
                                <div className="push-10-t">I don't have any account, </div>
                                <Link to={"./register"}>
                                    <div> go to Register Page</div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth || {}
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLogin);
