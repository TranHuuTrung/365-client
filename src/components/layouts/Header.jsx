import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import propsTypes from 'prop-types';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/home-page/logo.jpg'
import avatar from '../../assets/images/avatar.jpg'

class Header extends React.Component {
    static props = {
        active: propsTypes.string,
    }

    static defaultProps = {
        active: '',
    }

    state = {
		showDown: false
	}

	toggleShowDown = () => {
		this.setState({
			showDown: !this.state.showDown
		});
	}

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row header-row">
                        <div className="col-4 head-logo">
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="col-8 head-bar">
                            <div className="row link-elms">
                                <Link to={'home'} className={`col-3 ${this.props.active === 'home' ? 'active' : ''}`}>
                                    <p>trang chủ</p>
                                </Link>
                                <Link to={'intro'} className={`col-3 ${this.props.active === 'intro' ? 'active' : ''}`}>
                                    <p>giới thiệu</p>
                                </Link>
                                <Link to={'product'} className={`col-3 ${this.props.active === 'product' ? 'active' : ''}`}>
                                    <p>sản phẩm</p>
                                </Link>
                                <Link to={'contact'} className={`col-3 ${this.props.active === 'contact' ? 'active' : ''}`}>
                                    <p>liên hệ</p>
                                </Link>
                            </div>
                        </div>

                        {this.props.userProfile &&
                            <div className="row">
                                <h2 className="col-4 offset-4 text-center"><Link to={'/books'}>Dashboard</Link></h2>
                                <ul className="nav-header col-4">
                                    <div className="pull-right">
                                        <div className="btn-group">
                                            <button className="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button" onClick={this.toggleShowDown}>
                                                <img src={avatar} alt="Avatar" />
                                                <span className="caret"></span>
                                            </button>
                                            {this.state.showDown &&
                                                <ul className="dropdown-menu-custom">
                                                    <li>
                                                        <Link to={'/profile'}>
                                                            <div>
                                                                Profile<i className="si si-user pull-right"></i>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'/profile'} onClick={() => this.props.actions.userLogout()}>
                                                            <div>
                                                                Log out<i className="si si-logout pull-right"></i>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </header>
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
)(Header);