import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom';

import { MasterLayout } from '../../components/layouts';
import { ContactMe, CarouselCustom } from '../../components/elements';

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../assets/images/home-page', false, /\.(png|jpe?g|svg)$/));

class ProductPage extends Component {
   
	render() {
		return (
			<MasterLayout active='product'>
				<section className="products-page">
					<div className="container">
						<div className="row">
							<div className="col-3 left-bar-part">
								<div className="left-bar">
									<div className="bar-name">Danh mục sản phẩm</div>
									<div className="title-text">in uv</div>
									<div className="normal-text">In Kính</div>
									<div className="normal-text">In Mica</div>
									<div className="normal-text">In Formex</div>
									<div className="normal-text">In Aluminium</div>
									<div className="normal-text">In Gỗ</div>

									<div className="title-text">Chữ nổi</div>
									<div className="normal-text">Chữ nổi Mica</div>
									<div className="normal-text">Chữ nổi Aluminium</div>
									<div className="normal-text">Chữ nổi Inox</div>

									<div className="title-text">Tranh Tường</div>
									<div className="normal-text">Tranh UV</div>
									<div className="normal-text">Tranh trang trí</div>

									<div className="title-text">Biển hiệu quảng cáo</div>
									<div className="normal-text">Biển Aluminium</div>
									<div className="normal-text">Biển bạt Hiflex</div>
									<div className="normal-text">Biển bạt 3M</div>
									<div className="normal-text">Biển Mica</div>
									<div className="normal-text">Biển treo trần</div>
									<div className="normal-text">Biển vẫy</div>
									<div className="normal-text">Backdrop Quảng cáo</div>

									<div className="title-text">Biển inox</div>
									<div className="normal-text">Biển Inox ăn mòn</div>
									<div className="normal-text">Biển chức danh</div>

									<div className="title-text">Hộp đèn</div>
									<div className="normal-text">Hộp đèn siêu mỏng</div>
									<div className="normal-text">Hộp đèn UV</div>
									<div className="normal-text">Hộp đèn Led</div>

									<div className="title-text">In phun & Decal</div>
									<div className="normal-text">Decal mờ</div>
									<div className="normal-text">Decal PP</div>
									<div className="normal-text">Decal oto</div>
									<div className="normal-text">Decal trong</div>
									<div className="normal-text">Decal trang trí</div>

									<div className="title-text">Vật tư quảng cáo</div>
									<div className="normal-text">Nguồn & Led</div>
									<div className="normal-text">Standee & Giá chữ X</div>
								</div>

								<div className="left-bar">
									<div className="bar-name">Dịch vụ khách hàng</div>
									<div className="normal-text">BÁO GIÁ VẬT LIỆU</div>
									<div className="normal-text">DỊCH VỤ BẢO HÀNH</div>
								</div>
							</div>
							<div className="col-9 right-part">
                                <div className="photo-slider">
                                    <CarouselCustom />
                                </div>

								<div className="prod-galaxy">
									<div className="title-block">
										Quảng cáo > <span>SẢN PHẨM NỔI BẬT</span>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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
														<a href="#">Xem Thêm...</a>
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

