import React, { Component } from 'react';
import withRouter from 'react-router/withRouter';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

import propsTypes from 'prop-types';

class MasterLayout extends Component {
    static props = {
        active: propsTypes.string,
    }

    static defaultProps = {
        active: '',
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));

        return (
            <div>
                <Header active={this.props.active}/>
                <div>{childrenWithProps}</div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MasterLayout));
