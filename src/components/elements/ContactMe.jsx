import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'

class ContactMe extends Component {
    render() {
        return (
            <div className="row" id="ft-lienhe">
                <div className="col-md-7">
                    <em>
                        Liên Hệ Với Chúng Tôi Để Biết Thêm Chi Tiết!
                    </em>
                </div>
                <div className="col-md-5">
                    <button className="btn" id="btn-lienhe">
                        <Link to={'contact'}>
                            <em>Liên Hệ</em>
                        </Link> 
                    </button>
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
)(ContactMe);
