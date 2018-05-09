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
                            <Link to={'home'}>
                                <img src={logo} alt="logo" />
                            </Link>
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
                            <div className="dropdown" style={{position: "absolute", right: "5px", top: "20px"}}>
                                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                    <img src={avatar} alt="" style={{width: "25px"}}/>
                                </button>
                                <div className="dropdown-menu" style={{right: "0", left: "auto"}}>
                                    <Link to={'profile'} className="dropdown-item">
                                        <div>
                                            Profile<i className="si si-user pull-right"></i>
                                        </div>
                                    </Link>
                                    <Link to={'report'} className="dropdown-item">
                                        <div>
                                            Client report<i className="si si-bubble pull-right"></i>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to={'login'} className="dropdown-item">
                                        <div>
                                            Log out<i className="si si-logout pull-right"></i>
                                        </div>
                                    </Link>
                                </div>
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