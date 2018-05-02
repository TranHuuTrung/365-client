import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import propsTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

class ClientReportItem extends Component {
    static props = {
        data: propsTypes.object.isRequired,
    }

    static defaultProps = {
        data: {},
    }

    state = {
        isHidden: true,
    };

    toggleShow = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    deleteReport = (reportId) => {
        this.props.actions.deleteClientReport(reportId)
            .then(() => {
                this.props.actions.getClientReport(this.props.auth.user);
            });
    }

    render() {
        const { data } = this.props;

        return (
            <div className="col-sm-12 col-lg-12">
                <div className="alert alert-info alert-dismissable" >
                    <button type="button" className="close" aria-hidden="true"
                        onClick={() => this.deleteReport(data.id)}>&times;</button>
                    <h3 className="font-w300 push-15">Name: {data.name}</h3>
                    <i>Phone: {data.phone}</i>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientReportItem);
