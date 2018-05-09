import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { MasterLayout } from '../../components/layouts';
import { ContactMe, CarouselCustom, ModalCustom } from '../../components/elements';

class ProductPage extends Component {
    state = {
        barArray: [
            { value: 'in_uv', label: 'in uv', bold: true },
            { value: 'in_kinh', label: 'In Kính', bold: false },
            { value: 'in_mica', label: 'In Mica', bold: false },
            { value: 'in_formex', label: 'In Formex', bold: false },
            { value: 'in_aluminium', label: 'In Aluminium', bold: false },
            { value: 'in_go', label: 'In Gỗ', bold: false },

            { value: 'chu_noi', label: 'Chữ nổi', bold: true },
            { value: 'chu_noi_mica', label: 'Chữ nổi Mica', bold: false },
            { value: 'chu_noi_aluminium', label: 'Chữ nổi Aluminium', bold: false },
            { value: 'chu_noi_inox', label: 'Chữ nổi Inox', bold: false },

            { value: 'tranh_tuong', label: 'Tranh Tường', bold: true },
            { value: 'tranh_uv', label: 'Tranh UV', bold: false },
            { value: 'tranh_trang_tri', label: 'Tranh trang trí', bold: false },

            { value: 'bien_hieu_quang_cao', label: 'Biển hiệu quảng cáo', bold: true },
            { value: 'bien_aluminium', label: 'Biển Aluminium', bold: false },
            { value: 'bien_bat_hiflex', label: 'Biển bạt Hiflex', bold: false },
            { value: 'bien_bat_3m', label: 'Biển bạt 3M', bold: false },
            { value: 'bien_mica', label: 'Biển Mica', bold: false },
            { value: 'bien_treo_tran', label: 'Biển treo trần', bold: false },
            { value: 'bien_vay', label: 'Biển vẫy', bold: false },
            { value: 'backdrop_quang_cao', label: 'Backdrop Quảng cáo', bold: false },

            { value: 'bien_inox', label: 'Biển inox', bold: true },
            { value: 'bien_inox_an_mon', label: 'Biển Inox ăn mòn', bold: false },
            { value: 'bien_chuc_danh', label: 'Biển chức danh', bold: false },

            { value: 'in_mica', label: 'Hộp đèn', bold: true },
            { value: 'hop_den_sieu_mong', label: 'Hộp đèn siêu mỏng', bold: false },
            { value: 'hp_den_uv', label: 'Hộp đèn UV', bold: false },
            { value: 'hop_den_led', label: 'Hộp đèn Led', bold: false },

            { value: 'in_phun_decal', label: 'In phun & Decal', bold: true },
            { value: 'decal_mo', label: 'Decal mờ', bold: false },
            { value: 'decal_pp', label: 'Decal PP', bold: false },
            { value: 'decal_oto', label: 'Decal oto', bold: false },
            { value: 'decal_trong', label: 'Decal trong', bold: false },
            { value: 'decal_trang_tri', label: 'Decal trang trí', bold: false },
            { value: 'vat_tu_quang_cao', label: 'Vật tư quảng cáo', bold: true },
            { value: 'nguon_led', label: 'Nguồn & Led', bold: false },
            { value: 'standee_gia_chu_x', label: 'Standee & Giá chữ X', bold: false },
        ],
        image: null,
        articleParams: {
            value: '',
            title: '',
            content: '',
            specialProd: false
        }
    }

    actionButtons = [
        { className: 'btn-danger', text: 'Hủy', action: () => { this.child.closeModal() } },
        { className: 'btn-primary', text: 'Tạo', action: () => { this.uploadArticle() } }
    ];

    uploadArticle = () => {
        let formData = new FormData();
        formData.append("image", this.state.image);
        this.props.actions.uploadArticle(this.state.articleParams, formData);
    }

    handleChangeImage = (e) => {
        let selectorFiles = e.target.files;
        // let reader = new FileReader();
        // if (!selectorFiles) return;
        // reader.readAsDataURL(selectorFiles[0]);
        // reader.onload = () => {
        this.setState({ image: selectorFiles })
        // }
    }

    handleChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            articleParams: {
                ...this.state.articleParams,
                [name]: value
            }
        });
    }

    handleChangeSelect = (newValue) => {
        this.setState({
            articleParams: {
                ...this.state.articleParams,
                value: newValue
            }
        });
    }

    handleChangeCheckbox = (newValue) => {
        let data = this.state.articleParams.specialProd;
        this.setState({
            articleParams: {
                ...this.state.articleParams,
                specialProd: !data
            }
        });
    }

    render() {
        return (
            <MasterLayout active='product'>
                <ModalCustom
                    ref={instance => { this.child = instance; }}
                    title='Tạo mới Sản phẩm'
                    actionButtons={this.actionButtons}>
                    <div className="form-group">
                        <label htmlFor="kind-of-prod">Loại sản phẩm</label>
                        <Select id="kind-of-prod"
                            name="value"
                            ref={(ref) => { this.select = ref; }}
                            onBlurResetsInput={false}
                            onSelectResetsInput={false}
                            autoFocus
                            options={this.state.barArray}
                            simpleValue
                            clearable={true}
                            value={this.state.articleParams.value}
                            onChange={this.handleChangeSelect}
                            searchable={this.state.searchable}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image-of-prod" style={{ width: "100%" }}>Hình ảnh sản phẩm</label>
                        <input id="image-of-prod"
                            type="file"
                            onChange={this.handleChangeImage}
                        />
                    </div>
                    <div className="form-group">
                        <label className="css-input switch switch-sm switch-success" style={{ width: '100%', fontSize: '14px' }}>
                            <input type="checkbox" id="register1-terms" name="register1-terms" checked={this.state.articleParams.specialProd}
                                onChange={this.handleChangeCheckbox} /><span></span> Sản phẩm nổi bật
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-of-prod">Tên sản phẩm</label>
                        <input id="name-of-prod"
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Tên sản phẩm"
                            value={this.state.articleParams.title}
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content-of-prod">Mô tả sản phẩm</label>
                        <textarea
                            id="content-of-prod"
                            type="text"
                            className="form-control"
                            name="content"
                            placeholder=""
                            value={this.state.articleParams.content}
                            onChange={this.handleChangeInput}>
                        </textarea>
                    </div>
                </ModalCustom>

                <section className="products-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 left-bar-part">
                                <div className="left-bar">
                                    <div className="bar-name">Danh mục sản phẩm</div>
                                    {
                                        this.state.barArray.map((item, key) =>
                                            <div className={item.bold ? 'title-text' : 'normal-text'} key={key}>{item.label}</div>
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
                                        {
                                            this.props.userProfile &&
                                            <button className="btn" onClick={() => this.child.openModal()}><i className="fa fa-plus-circle"></i></button>
                                        }
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
    userProfile: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPage);

