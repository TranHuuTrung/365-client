import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom';

import { MasterLayout } from '../../components/layouts';
import { ContactMe, CarouselCustom, ModalCustom } from '../../components/elements';

class ProductPage extends Component {
    state = {
        barArray: [
            { key: 'in_uv', text: 'in uv', bold: true },
            { key: 'in_kinh', text: 'In Kính', bold: false },
            { key: 'in_mica', text: 'In Mica', bold: false },
            { key: '', text: 'In Formex', bold: false },
            { key: '', text: 'In Aluminium', bold: false },
            { key: '', text: 'In Gỗ', bold: false },

            { key: 'chu_noi', text: 'Chữ nổi', bold: true },
            { key: 'chu_noi_mica', text: 'Chữ nổi Mica', bold: false },
            { key: 'chu_noi_aluminium', text: 'Chữ nổi Aluminium', bold: false },
            { key: '', text: 'Chữ nổi Inox', bold: false },

            { key: 'in_mica', text: 'Tranh Tường', bold: true },
            { key: '', text: 'Tranh UV', bold: false },
            { key: '', text: 'Tranh trang trí', bold: false },

            { key: 'in_mica', text: 'Biển hiệu quảng cáo', bold: true },
            { key: '', text: 'Biển Aluminium', bold: false },
            { key: '', text: 'Biển bạt Hiflex', bold: false },
            { key: '', text: 'Biển bạt 3M', bold: false },
            { key: '', text: 'Biển Mica', bold: false },
            { key: '', text: 'Biển treo trần', bold: false },
            { key: '', text: 'Biển vẫy', bold: false },
            { key: '', text: 'Backdrop Quảng cáo', bold: false },

            { key: 'in_mica', text: 'Biển inox', bold: true },
            { key: '', text: 'Biển Inox ăn mòn', bold: false },
            { key: '', text: 'Biển chức danh', bold: false },

            { key: 'in_mica', text: 'Hộp đèn', bold: true },
            { key: '', text: 'Hộp đèn siêu mỏng', bold: false },
            { key: '', text: 'Hộp đèn UV', bold: false },
            { key: '', text: 'Hộp đèn Led', bold: false },

            { key: 'in_mica', text: 'In phun & Decal', bold: true },
            { key: '', text: 'Decal mờ', bold: false },
            { key: '', text: 'Decal PP', bold: false },
            { key: '', text: 'Decal oto', bold: false },
            { key: '', text: 'Decal trong', bold: false },
            { key: '', text: 'Decal trang trí', bold: false },
            { key: 'in_mica', text: 'Vật tư quảng cáo', bold: true },
            { key: '', text: 'Nguồn & Led', bold: false },
            { key: '', text: 'Standee & Giá chữ X', bold: false },
        ],

        productArray: [
            { key: 'in_uv', specialProd: true },
        ]
    }

    actionButtons = [
		{ className: 'btn-danger', text: 'Hủy', action: () => { this.child.closeModal() } },
		{ className: 'btn-primary', text: 'Tạo', action: () => { this.props.history.push('/books') } }
    ];
    
    render() {
        return (
            <MasterLayout active='product'>
                <ModalCustom
                    ref={instance => { this.child = instance; }}
                    title='Tạo mới Sản phẩm'
                    actionButtons={this.actionButtons}>
                    <h5 className="push-10 text-warning">Are you sure you want to permanently delete this book?</h5>
                </ModalCustom>

                <section className="products-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 left-bar-part">
                                <div className="left-bar">
                                    <div className="bar-name">Danh mục sản phẩm</div>
                                    {
                                        this.state.barArray.map((item, key) =>
                                            <div className={item.bold ? 'title-text' : 'normal-text'} key={key}>{item.text}</div>
                                        )
                                    }
                                </div>
                                <div className="left-bar">
                                    <div className="bar-name">Dịch vụ khách hàng</div>
                                    <div className="normal-text"><Link to={'price'}>BÁO GIÁ VẬT LIỆU</Link></div>
                                    <div className="normal-text"><Link to={'warranty'}>DỊCH VỤ BẢO HÀNH</Link></div>
                                </div>
                            </div>
                            <div className="col-9 right-part">
                                <div className="photo-slider">
                                    <CarouselCustom />
                                </div>

                                <div className="prod-galaxy">
                                    <div className="title-block">
                                        Quảng cáo > <span>SẢN PHẨM NỔI BẬT</span>
                                        <button className="btn" onClick={ () => this.child.openModal()}><i className="fa fa-plus-circle"></i></button>
                                        
                                    </div>
                                    <div className="row change-padding-margin">
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/uv.jpg" alt="" />
                                                    <div className="name-prod">HỘP ĐÈN UV</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Hộp đèn siêu mỏng không viền in UV với mực in UV cao cấp, làm khô ngay lập tức bằng tia UV cho chất lượng thành phẩm sắc
														nét, màu sắc bền vững.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/projects/san-bay.jpg" alt="" />
                                                    <div className="name-prod">BIỂN ALU CHỮ NỔI</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Biển Aluminium chữ nổi có tính thẩm mỹ và độ bền cao là sựa lựa chọn của nhiều khách hàng khi đến với chúng tôi.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/backdrop.jpg" alt="" />
                                                    <div className="name-prod">BACKDROP</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Backdrop không còn xa lạ với nhiều công ty, văn phòng, cửa hàng khi sản phẩm mang đến sự sang trọng và thương hiệu của mỗi
														cá nhân, tổ chức.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/mica.jpg" alt="" />
                                                    <div className="name-prod">CHỮ NỔI MICA</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Ưu điểm có độ bóng cao, nhiều màu sắc dễ thi công, nhưng độ bền không cao, nhiệt độ cao dễ bị biến dạng. Không thích hợp
														làm cho những bộ chữ trên cao.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/decal.jpg" alt="" />
                                                    <div className="name-prod">DECAL</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Decal luôn là sản phẩm thuận tiện cho quảng bá hình ảnh và thương hiệu của mỗi công ty, tổ chức.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/mica1.jpg" alt="" />
                                                    <div className="name-prod">BIỂN MICA</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Biển Mica cho độ bóng cao mang lại chất lượng sản phẩm rõ nét.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/bien.jpg" alt="" />
                                                    <div className="name-prod">BIỂN HIỆU ALUMINIUM</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Ưu điểm có độ bền cao, dễ thi công là sựa lựa chọn của nhiều khách hàng.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/tren-cao.jpg" alt="" />
                                                    <div className="name-prod">CHỮ OUT LED</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Chất liệu tôn lá dày 1.2mm có độ bền cao, chống chịu thời tiết khắc nghiệt thích hợp làm cho những bộ chữ trên cao.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="prod-elms">
                                                <div className="photo-area">
                                                    <img src="images/home-page/products/led.jpg" alt="" />
                                                    <div className="name-prod">BIỂN LED MA TRẬN</div>
                                                </div>
                                                <div className="text-area">
                                                    <div className="desc-prod">
                                                        Biển led ma trận cho nội dung quảng cáo đa dạng thay đổi theo yêu cầu khách hàng, mật độ led dày cho áng sáng tốt nhất ngay
														cả khi trời sáng.
                                                    </div>
                                                    <div className="xem-them">
                                                        <a href="">Xem Thêm...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactMe />
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
)(ProductPage);

