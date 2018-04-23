import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import $ from 'jquery';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../assets/images/home-page', false, /\.(png|jpe?g|svg)$/));
const iconImg = importAll(require.context('../../assets/images/icon', false, /\.(png|jpe?g|svg)$/));

class HomePage extends Component {
    componentDidMount = () => {
        $("#bank-slide #carousel .slide").clone().appendTo("#bank-slide #carousel");
        $('#bank-slide #next').click(function () {
            shiftSlide(-1, '#bank-slide #carousel');
        })
        $('#bank-slide #prev').click(function () {
            shiftSlide(1, '#bank-slide #carousel');
        })
    
        // productions slider
        $("#product-slide #carousel .slide").clone().appendTo("#product-slide #carousel");
        $('#product-slide #next').click(function () {
            shiftSlide(-1, '#product-slide #carousel');
        })
        $('#product-slide #prev').click(function () {
            shiftSlide(1, '#product-slide #carousel');
        })

        autoRunSlide('#product-slide #carousel');
        autoRunSlide('#bank-slide #carousel');

        fixTable();
        $(document).on('scroll', fixTable);

        function fixTable() {
            let topOffset = $(this).scrollTop();
            if (topOffset > 1975 && topOffset < 6175) {
                $('#fix-table').removeClass().addClass('position-mid');
                return;
            } else {
                $('#fix-table').removeClass().addClass('position-top');
            }
        }
    
        function shiftSlide(direction, id) {
            var carouselProd = $(`${id}`);
            if (direction === 1) {
                var slideWidth = $(`${id} .slide:first`).width() + $(`${id} .slide:nth-child(2)`).width() + $(`${id} .slide:nth-child(3)`).width();
    
                $(document).off('mouseup')
                carouselProd.off('mousemove')
                    .addClass('transition')
                    .css('transform', 'translateX(' + (slideWidth) + 'px)');
                setTimeout(function () {
                    $(`${id} .slide:first`).before($(`${id} .slide:last`));
                    carouselProd.removeClass('transition')
                    carouselProd.css('transform', 'translateX(0px)');
                }, 700)
    
            } else if (direction === -1) {
                var slideWidth = $(`${id} .slide:first`).width();
    
                $(document).off('mouseup')
                carouselProd.off('mousemove')
                    .addClass('transition')
                    .css('transform', 'translateX(' + (-slideWidth) + 'px)');
                setTimeout(function () {
                    $(`${id} .slide:last`).before($(`${id} .slide:first`));
                    $(`${id} .slide:last`).before($(`${id} .slide:first`));
                    $(`${id} .slide:last`).before($(`${id} .slide:first`));
                    carouselProd.removeClass('transition')
                    carouselProd.css('transform', 'translateX(0px)');
                }, 3400)
            }
        }
    
        function autoRunSlide(id) {
            var carouselProd = $(`${id}`);
            setInterval(function () {
                var slideWidth = $(`${id} .slide:first`).width() + $(`${id} .slide:nth-child(2)`).width() + $(`${id} .slide:nth-child(3)`).width();
    
                $(document).off('mouseup')
                carouselProd.off('mousemove')
                    .addClass('transition')
                    .css('transform', 'translateX(' + (-slideWidth) + 'px)');
                setTimeout(function () {
                    $(`${id} .slide:last`).before($(`${id} .slide:first`));
                    $(`${id} .slide:last`).before($(`${id} .slide:first`));
                    $(`${id} .slide:last`).before($(`${id} .slide:first`));
                    carouselProd.removeClass('transition')
                    carouselProd.css('transform', 'translateX(0px)');
                }, 3400)
            }, 3450);
        }
    }

    render() {
        return (
            <MasterLayout active='home'>
                <section className="home-page">
                    <img className="home-photo-part" src={images['home-photo.jpg']} alt="" />

                    <div className="slogan-part">
                        <div className="container">
                            <div className="slogan">nhanh hơn, đẹp hơn, tối ưu hơn</div>
                            <div className="slide-wrap" id="bank-slide">
                                <span id="prev">
                                    <img src={iconImg['left-slide.png']} alt="" />
                                </span>
                                <div className="window">
                                    <div id="carousel">
                                        <span className="slide" id="b1">
                                            <img className="homepage-img" src={images['acb-bank.jpg']} alt="" />
                                        </span>
                                        <span className="slide" id="b2">
                                            <img className="homepage-img" src={images['bidv-bank.jpg']} alt="" />
                                        </span>
                                        <span className="slide" id="b3">
                                            <img className="homepage-img" src={images['mb-bank.jpg']} alt="" />
                                        </span>
                                        <span className="slide" id="b4">
                                            <img className="homepage-img" src={images['tp-bank.jpg']} alt="" />
                                        </span>
                                        <span className="slide" id="b5">
                                            <img className="homepage-img" src={images['vba-bank.jpg']} alt="" />
                                        </span>
                                        <span className="slide" id="b6">
                                            <img className="homepage-img" src={images['vietcom-bank.jpg']} alt="" />
                                        </span>
                                        <span className="slide" id="b7">
                                            <img className="homepage-img" src={images['viettin-bank.jpg']} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <span id="next">
                                    <img src={iconImg['right-slide.png']} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="special-prod-part">
                        <div className="container">
                            <div className="title">
                                Sản phẩm <b>nổi bật</b>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['uv.jpg']} alt="" />
                                        <div className="name-prod">HỘP ĐÈN UV</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Hộp đèn siêu mỏng không viền in UV với mực in UV cao cấp, làm khô ngay lập tức bằng tia UV cho chất lượng thành phẩm sắc
                                                nét, màu sắc bền vững.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['mica.jpg']} alt="" />
                                        <div className="name-prod">CHỮ NỔI MICA</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Ưu điểm có độ bóng cao, nhiều màu sắc dễ thi công, nhưng độ bền không cao, nhiệt độ cao dễ bị biến dạng. Không thích hợp
                                                làm cho những bộ chữ trên cao.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['bien.jpg']} alt="" />
                                        <div className="name-prod">BIỂN ALUMINIUM</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Thường được dùng cho biển hiệu vừa và lớn ngoài trời, có khả năng chịu nhiệt cao, màu sắc bền bỉ.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['bien-vay.jpg']} alt="" />
                                        <div className="name-prod">BIỂN VẪY HÚT NỔI</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Ưu điểm có độ bóng cao, thể hiện tối đa hình ảnh, chất lượng ánh sáng đều.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['decal.jpg']} alt="" />
                                        <div className="name-prod">DECAL</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Decal PP là một loại giấy trong ngành in kỹ thuật số, mặt sau có keo hoặc không keo. Sau khi in được phủ lên một lớp bảo
                                                vệ mực in.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['chi-dan.jpg']} alt="" />
                                        <div className="name-prod">BIỂN TREO TRẦN</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Biển treo trần hay còn gọi là biển phân khu. Chất liệu Aluinium hoặc Mica
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['backdrop.jpg']} alt="" />
                                        <div className="name-prod">LOGO BACKDROP</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Chất liệu Mica, Decal, Alu, Formex tùy theo mục đích sử dụng của khách hàng. Là thương hiệu của ngân hàng, công ty, tổ chức
                                                ...
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['chu-noi.jpg']} alt="" />
                                        <div className="name-prod">CHỮ NỔI</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Backdrop không còn xa lạ với nhiều công ty, văn phòng, cửa hàng khi sản phẩm mang đến sự sang trọng và thương hiệu của mỗi
                                                cá nhân, tổ chức.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['dekan-kinh.jpg']} alt="" />
                                        <div className="name-prod">DECAL KÍNH</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Chúng tôi đã có nhiều kinh nghiệm dán kính, decal trang trí văn phòng và công trình quảng cáo
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['hop-den.jpg']} alt="" />
                                        <div className="name-prod">HỘP ĐÈN SIÊU MỎNG</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Chúng tôi đã có nhiều kinh nghiệm dán kính, decal trang trí văn phòng và công trình quảng cáo Ứng dụng công nghệ màn hình
                                                LGD và LED hiện nay. Hộp đèn siêu mỏng có kích thước nhỏ gọn sáng đều trên bề mặt, dễ
                                                dàng thay thế hình ảnh và tiết kiệm điện
                                                </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['tren-cao.jpg']} alt="" />
                                        <div className="name-prod">CHỮ NỔI TRÊN CAO</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Chất liệu tôn lá dày 1.2mm có độ bền cao, khả năng chịu nhiệt tốt chỉ thích hợp làm cho những bộ chữ trên cao.
                                            </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="prod-elms">
                                        <img src={images['out-led.jpg']} alt="" />
                                        <div className="name-prod">BIỂN VẪY OUT LED</div>
                                        <div className="text-area">
                                            <div className="desc-prod">
                                                Chúng tôi đã có nhiều kinh nghiệm dán kính, decal trang trí văn phòng và công trình quảng cáo
                                </div>
                                            <div className="xem-them">
                                                <a href="#">Xem Thêm...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="special-prod-part">
                        <div className="container">
                            <div className="title">
                                công trình <b>đã hoàn thành</b>
                            </div>
                        </div>
                    </div>

                    <div className="special-prod-part2" id="start-production">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <div className="finish-prod">
                                        <img src={images['banh-ngot.jpg']} alt="" />
                                        <div>
                                            Hoàn thành các hạng mục tại cửa hàng bánh ngọt Pháp 163 Tô Hiệu.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="finish-prod">
                                        <img src={images['san-bay.jpg']} alt="" />
                                        <div>
                                            Hoàn thành các hạng mục tại sân bay Nội Bài.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="finish-prod">
                                        <img src={images['tra-sua.jpg']} alt="" />
                                        <div>
                                            Hoàn thành các hạng mục chuỗi của hàng trà sữa POZAA TEA tại ĐH Hà Nội.
                            </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="finish-prod">
                                        <img src={images['mika.jpg']} alt="" />
                                        <div>
                                            Xuất xưởng bộ chữ MICA tại cty Quảng Cáo 365
                            </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="finish-prod">
                                        <img src={images['benh-vien.jpg']} alt="" />
                                        <div>
                                            Hoàn thành bộ chữ trên cao bệnh viện đa khoa Kinh Bắc, Bắc Ninh
                            </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="finish-prod">
                                        <img src={images['y-duoc.jpg']} alt="" />
                                        <div>
                                            Hoàn thành biển hiệu tập đoàn y dược Bảo Long
                            </div>
                                    </div>
                                </div>
                                <div className="col-8" id="end-production">
                                    <div className="finish-prod">
                                        <img src={images['cuahang.jpg']} alt="" />
                                        <div>
                                            Hoàn thành cổng led nhà hàng Cua Vàng Phạm Văn Đồng
                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="fix-table">
                            <div className="row">
                                 <div className="col-12">
                                <div className="right-bar">
                                    <div className="title">
                                        hỗ trợ trực tuyến
                                    </div>
                                    <div className="content top-block">
                                        <div className="col-12">
                                            <img src={iconImg['list-icon.png']} alt="" /> HOTLINE 24/7</div>
                                        <div className="col-12">
                                            <img src={iconImg['list-icon.png']} alt="" />Kinh Doanh: 097 611 8623</div>
                                        <div className="col-12">
                                            <img src={iconImg['list-icon.png']} alt="" />Kỹ Thuật: 091619 5705</div>
                                        <div className="col-12">
                                            <img src={iconImg['list-icon.png']} alt="" />Thiết Kế: 01652 755 095</div>
                                        <div className="col-12">
                                            <img src={iconImg['list-icon.png']} alt="" />quangcao365.ad@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" >
                                <div className="right-bar">
                                    <div className="title">
                                        dịch vụ bán hàng
                                    </div>
                                    <div className="content bottom-block">
                                        <div className="col-12">
                                            <img src={iconImg['list-icon.png']} alt="" />
                                            <a href="baogia.html">BÁO GIÁ VẬT LIỆU</a>
                                        </div>
                                        <div className="col-12" href="gioithieu.html">
                                            <img src={iconImg['list-icon.png']} alt="" />
                                            <a href="baohanh.html">DỊCH VỤ BẢO HÀNH</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                    </div>

                    <div className="bottom-part" >
                        <div className="row">
                            <div className="col-3 facebook-area">
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAdveDesign%2F&tabs=page&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="340" height="214" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true"
                                    allow="encrypted-media"></iframe>
                            </div>
                            <div className="col-9">
                                <div className="prod-slide-area">
                                    <div className="service">
                                        <span>thiết kế</span>
                                        <span>thi công</span>
                                        <span>sản xuất bảng quảng cáo</span>
                                        <span>in ấn</span>
                                        <span>tư vấn quảng cáo</span>
                                    </div>
                                    <div className="slide-area">
                                        <div className="slide-wrap" id="product-slide">
                                            <span id="prev">
                                                <img src={iconImg['left-slide.png']} alt="" />
                                            </span>
                                            <div className="window">
                                                <div id="carousel">
                                                    <span className="slide" id="p1">
                                                        <img className="homepage-img" src={images['cong-ty.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p2">
                                                        <img className="homepage-img" src={images['giay.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p3">
                                                        <img className="homepage-img" src={images['khien.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p4">
                                                        <img className="homepage-img" src={images['maketing.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p5">
                                                        <img className="homepage-img" src={images['paga.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p6">
                                                        <img className="homepage-img" src={images['session.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p7">
                                                        <img className="homepage-img" src={images['trasua.jpg']} alt="" />
                                                    </span>
                                                    <span className="slide" id="p8">
                                                        <img className="homepage-img" src={images['vp-bank.jpg']} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                            <span id="next">
                                                <img src={iconImg['right-slide.png']} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
)(HomePage);

