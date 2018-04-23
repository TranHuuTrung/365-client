import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

class IntroPage extends Component {
    render() {
        return (
            <MasterLayout active='intro'>
                <section className="intro-page">
                    <div className="container">
                        <div id="about">
                            Về chúng tôi...
                        </div>

                        <div className="row wrap">
                            <div className="col-md-8" id="about-1">
                                <p>
                                    Công ty TNHH Tư Vấn Và Quảng Cáo 365 được thành lập vào cuối năm 2013 vào thời điểm kinh tế khó khăn. Tuy nhiên đánh giá
                                    được những khó khăn, thị trường quảng cáo. Công ty TNHH Tư Vấn Và Quảng Cáo 365 đã có những bước
                                    đi mới trong ngành quảng cáo, nhằm đón đầu, sáng tạo phương pháp dựa trên nền tảng công nghệ và nhân
                                    lực. Bước đầu thành công, Công Ty TNHH Tư Vấn Và Quảng Cáo 365 đã và đang là đối tác chiến lược của
                                    nhiều khách hàng.
                                </p>
                            </div>
                            <div className="col-md-4" id="about-2">
                                <div id="hotline">
                                    HOTLINE
                                </div>
                                <div id="thongtin">
                                    <div>
                                        Kinh doanh: 097 611 8623
                                    </div>
                                    <div>
                                        Thiết Kế: 01652 755 095
                                    </div>
                                    <div>
                                        Kỹ thuật: 091 619 5705
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" id="about-3">
                                <p>
                                    Với nỗ lực sáng tạo, học hỏi không ngừng nghỉ để đêm lại cho quý khách hàng sự hài lòng cũng như chất lượng sản phẩm và dịch
                                    vụ tốt nhất. Công Ty TNHH Tư Vấn Và Quảng Cáo 365 mong muốn đem đến những sản phẩm, dịch vụ hậu mãi
                                    mới với những dòng sản phẩm mới phục vụ nhu cầu của khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </MasterLayout>
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
)(IntroPage);

