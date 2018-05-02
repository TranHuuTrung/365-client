import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';
import propsTypes from 'prop-types';

import { ClientReportItem } from '../../components/elements';


class ClientReport extends Component {
    static props = {
        clientReport: propsTypes.object,
    }

    static defaultProp = {
        clientReport: [],
    }

    state = {
        isAllChecked: false,
    };

    componentDidMount = () => {
        this.props.actions.getClientReport();
    }

    render() {
        const { clientReport } = this.props;
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
                                            <i className="si si-lock pull-right"></i>Lock Account
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
                        <li>
                            <button className="btn btn-default" data-toggle="layout" data-action="side_overlay_toggle" type="button">
                                <i className="fa fa-tasks"></i>
                            </button>
                        </li>
                    </ul>


                    <ul className="nav-header pull-left">
                        <li className="hidden-md hidden-lg">
                            <button className="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                                <i className="fa fa-navicon"></i>
                            </button>
                        </li>
                        <li className="hidden-xs hidden-sm">
                            <button className="btn btn-default" data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
                                <i className="fa fa-ellipsis-v"></i>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-default pull-right" data-toggle="modal" data-target="#apps-modal" type="button">
                                <i className="si si-grid"></i>
                            </button>
                        </li>
                        <li className="visible-xs">
                            <button className="btn btn-default" data-toggle="class-toggle" data-target=".js-header-search" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </li>
                        <li className="js-header-search header-search">
                            <form className="form-horizontal" action="base_pages_search.html" method="post">
                                <div className="form-material form-material-primary input-group remove-margin-t remove-margin-b">
                                    <input className="form-control" type="text" id="base-material-text" name="base-material-text" placeholder="Search.." />
                                    <span className="input-group-addon"><i className="si si-magnifier"></i></span>
                                </div>
                            </form>
                        </li>
                    </ul>
                </header>



                <div className="container book-list">
                    <div className="list-group push-30-t push-20">
                        {
                            clientReport.map((item, key) =>
                                <ClientReportItem
                                    key={key}
                                    data={item} />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    clientReport: state.report.report || [],
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientReport);

