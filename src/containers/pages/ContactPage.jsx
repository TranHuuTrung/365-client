import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';

class ContactPage extends Component {
	render() {
		return (
			<MasterLayout active='contact'>
				<section>
					<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8856.580165777508!2d105.76469970421!3d21.043356491161294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c43099bf19%3A0x7e69cbe3e4c9de1b!2zMzI5IEhvw6BuZyBDw7RuZyBDaOG6pXQsIFBow7ogRGnhu4VuLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1523904292860"
							width="100%" height="300" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
					</div>
					<div className="container">
						<div className="row wrap" id="lienhe1">
							<div className="col-4">
								<i className="fas fa-map-marker-alt"></i> 329 Hoàng Công Chất, Từ Liêm, Hà Nội
                            </div>
							<div className="col-4">
								<i className="fas fa-envelope"></i> quangcao365.ad@gmail.com
                            </div>
							<div className="col-4">
								<i className="fas fa-phone"></i> Mr.Dương: 097 611 8623
                            </div>
						</div>
					</div>

					<div id="lienhe-2">
						<div className="container">
							<div className="row wrap">
								<div className="col-4">
									<div className="lienhe-hl">
										<p className="lienhe-hl-1">HOTLINE</p>
										<p className="lienhe-hl-2">Kinh doanh: 097 611 8623</p>
										<p className="lienhe-hl-2">Kỹ Thuật: 0916 195 705</p>
										<p className="lienhe-hl-2">Thiết kế: 01652 755 095</p>
									</div>
									<br />
									<br />
									<div className="lienhe1-hl">
										<p className="lienhe1-hl-1">TNHH TƯ VẤN & QUẢNG CÁO 365</p>
										<p className="lienhe1-hl-2">Đ/c: Số 329 Hoàng Công Chất,
                    <br /> Bắc Từ Liêm, Hà Nội</p>
										<p className="lienhe1-hl-3">Email:
                    <span>quangcao365.ad@gmail.com</span>
										</p>
										<p className="lienhe1-hl-3">Phone:
                    <span>097 611 8623</span>
										</p>
									</div>
								</div>
								<div className="col-8" id="inp-thongdiep">
									<div className="phanhoi">Gửi phản hồi cho chúng tôi</div>
									<form>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputEmail4">Tên Bạn</label>
												<input type="name" className="form-control" id="inputEmail4" placeholder="Tên" />
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputPassword4">Email của bạn</label>
												<input type="password" className="form-control" id="inputPassword4" placeholder="Email" />
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputAddress">Số điện thoại của bạn</label>
												<input type="text" className="form-control" id="inputAddress" placeholder="" />
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="inputAddress2">Thông điệp</label>
											<textarea type="text" className="form-control thongdiep" id="inputAddress2" placeholder=""></textarea>
										</div>
										<div><button type="submit" className="btn" id="gui">Gửi</button></div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className="tuvan-thietke">
						Tư vấn | Thiết kế | In ấn | Thi công quảng cáo | Sản phẩm quảng cáo
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
)(ContactPage);

