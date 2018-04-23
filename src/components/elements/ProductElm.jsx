import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'

class ProductElm extends Component {
	render() {
		return (
            <div className="content bg-gray-lighter">
                <div className="row items-push">

                    <div className="col-sm-3 hidden-xs">
                        <ol className="breadcrumb push-10-t">
                            <li>{this.props.currentPagePath}</li>
                            <li><Link to={`/${this.props.nextPageUrl}`} className="link-effect" href="">{this.props.nextPageUrl}</Link></li>
                        </ol>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-heading">
                            {this.props.pageName}
                        </h1>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductElm);
