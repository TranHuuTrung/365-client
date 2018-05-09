import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';
import propsTypes from 'prop-types';

import { Link } from 'react-router-dom'

class ClientReport extends Component {
    static props = {
        clientReport: propsTypes.object,
    }

    static defaultProp = {
        clientReport: [],
    }

    componentDidMount = () => {
        this.props.actions.getClientReport();
    }

    deleteReport = (reportId) => {
        this.props.actions.deleteClientReport(reportId)
            .then(() => {
                this.props.actions.getClientReport();
            })
    }

    render() {
        const { clientReport } = this.props;
        return (
            <div>
                <header id="header-navbar" className="auth-header">
                    <div>
                        <Link to={"product"} className="inline">Edit Content</Link>
                        <Link to={"report"} className="inline active">Client Feedback</Link>
                        <Link to={"profile"} className="inline">Profile</Link>
                        <Link to={"login"} className="inline" style={{ float: "right" }}>Logout</Link>
                    </div>
                </header>

                <div className="block push-30 push-30-t" style={{ minHeight: "85vh" }}>
                    <div className="block-header" style={{ textAlign: "center" }}>
                        <h3 className="block-title">Phản hồi của khách hàng</h3>
                    </div>
                    <div className="block-content">
                        <table className="table table-striped table-vcenter" style={{ marginLeft: "0" }}>
                            <thead>
                                <tr>
                                    <th>Tên</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th className="text-center">Thông điệp</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clientReport.map((item, key) =>
                                        <tr key={key}>
                                            <td className="font-w600">{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                {item.description}
                                            </td>
                                            <td className="text-center">
                                                <div className="btn-group">
                                                    <button onClick={() => this.deleteReport(item.id)} className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client">
                                                        <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
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
    clientReport: state.report.report || [],
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientReport);

