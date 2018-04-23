import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-3">
                            <div className="title-ft">Về chúng tôi:</div>
                            <div className="content-ft">
                                <li>Về công ty</li>
                                <li>Giá trị cốt lõi</li>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="title-ft">Liên hệ:</div>
                            <div className="content-ft">
                                <li className="no-deco">
                                    <i className="fas fa-map-marker-alt"></i> 329 Hoàng Công Chất
                                    <br /> - Bắc Từ Liêm Hà Nội</li>
                                <li className="no-deco">
                                    <i className="fas fa-phone"></i> 097 611 8623</li>
                                <li className="no-deco">
                                    <i className="fas fa-envelope"></i> quangcao365.ad@gmail.com</li>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="title-ft">DÀNH CHO KHÁCH HÀNG:</div>
                            <div className="content-ft">
                                <li>Chính sách bảo hành</li>
                                <li>Quy tắc trong quảng cáo</li>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="title-ft">CHÍNH SÁCH ƯU ĐÃI:</div>
                            <div className="content-ft">
                                <li>Tư vấn tận nơi</li>
                                <li>Miễn phí thiết kế</li>
                                <li>Bảo hành sản phẩm</li>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
