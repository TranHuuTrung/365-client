import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';
import { ContactMe } from '../../components/elements';

class PricePage extends Component {
    render() {
        return (
            <MasterLayout>
                <section id="table-baohanh">
                    <div className="container">
                        <div className="table">
                            <div className="baohanh">
                                <span>Quảng cáo </span>
                                <span className="dichvu"> > BÁO GIÁ SẢN PHẨM</span>
                                <div id="hr"> </div>
                            </div>
                            <div className="col-11 txt-baobanh">
                                <p>Trước khi chọn mua bất kỳ 1 sản phẩm hay dịch vụ nào vấn đề đầu tiên ảnh hưởng đến quyết định của khách
                                    hàng là giá thành. Sản phẩm giấy dán kính cũng không ngoại lệ, tuy nhiên vì còn là sản phẩm mới,
                                    nên giá giấy dán kính đã và đang bị 1 số của hàng, đại lý kinh doanh không lành mạnh làm nhũng loạn.
                                    Như chúng tôi được biết, có rất nhiều cửa hàng, đại lý nhập những hàng kém chất lượng, không rõ nguồn
                                    gốc về bán với giá rẻ nhằm đánh lừa khách hàng. Bên cạnh đó cũng có những đại lý đẩy giá lên cao
                                    nhằm chuộc lợi trên sự mập mờ của giá thành sản phẩm này.</p>
                                <br />
                                <p>
                                    Chính vì điều đó, công ty chúng tôi luôn cố gắng cập nhập tình hình giá thành giấy dán kính trên thị trường để đưa ra báo
                                    giá tốt nhất . Với nhiều năm hoạt động trong lĩnh vực giấy dán kính, chúng tôi đã và đang là đơn
                                    vị cung cấp giấy dán kính uy tín nhất tại Hà Nội.
                                </p>
                                <br />
                                <p>
                                    Sau đây chúng tôi xin gửi tới quý khách hàng tham khảo báo giá giấy dán kính được niêm yết công khai và rõ ràng của chúng
                                    tôi, cam kết với các bạn chúng tôi là một trong những đơn vị cung cấp và thi công giấy dán kính rẻ
                                    nhất Hà Nội. Đảm bảo khi các bạn đến với giấy dán kính của công ty 365, sẽ có cho mình 1 sản phẩm
                                    chất lượng nhất, với giá thành phải chăng và dịch vụ tốt nhất.
                                </p>
                                <br />
                                <br />
                                <br />
                                <p>
                                    Dưới đây là bảng báo giá chi tiết các sản phẩm chính được cung cấp và thi công bởi chúng tôi xin được gửi tới các bạn tham
                                    khảo:
                                </p>
                                <br />
                                <br />
                                <br />
                                <div className="baogia-1">
                                    Báo giá sản phẩm Decal dán kính
                                </div>
                                <br />
                                <div>
                                    <table className="tg tb-baogia" style="undefined;table-layout: fixed; width: 672px">
                                        <colgroup>
                                            <col style="width: 264px" />
                                            <col style="width: 153px" />
                                            <col style="width: 129px" />
                                            <col style="width: 126px" />
                                        </colgroup>
                                        <tr>
                                            <th className="tg-oy06" rowspan="2">SẢN PHẨM
                                                <br />
                                            </th>
                                            <th className="tg-cs16" rowspan="2">QUY CÁCH
                                                <br />(cuộn)</th>
                                            <th className="tg-cs16" rowspan="2">ĐƠN VỊ
                                                <br />(mét dài)</th>
                                            <th className="tg-cs16" rowspan="2">GIÁ (VNĐ)</th>
                                        </tr>
                                        <tr>
                                        </tr>
                                        <tr>
                                            <td className="tg-uys7">Decal dán kính trang trí</td>
                                            <td className="tg-uys7">0.9m x 50m</td>
                                            <td className="tg-uys7">m</td>
                                            <td className="tg-quj4">40.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-uys7">Decal dán kính mờ</td>
                                            <td className="tg-uys7">1.2m x 45m</td>
                                            <td className="tg-uys7">m</td>
                                            <td className="tg-quj4">40.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-uys7">Phim cách nhiệt Đài Loan</td>
                                            <td className="tg-uys7">1.0m x 50m</td>
                                            <td className="tg-uys7">m</td>
                                            <td className="tg-quj4">70.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-uys7">Phim cách nhiệt Đài Loan</td>
                                            <td className="tg-uys7">1.5m x 50m</td>
                                            <td className="tg-uys7">m</td>
                                            <td className="tg-quj4">130.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-uys7">Phim cách nhiệt Hàn Quốc</td>
                                            <td className="tg-uys7">1.5m x 31m</td>
                                            <td className="tg-uys7">m</td>
                                            <td className="tg-quj4">210.000 </td>
                                        </tr>
                                    </table>
                                </div>
                                <br />
                                <p>
                                    Lưu ý:
                                    <br /> Báo giá trên chưa bao gồm 10% VAT
                                    <br /> Báo giá sản phẩm được tính theo mét dài cắt ra thi công, không bao gồm cắt theo yêu cầu.
                                    <br />
                                </p>
                                <br />
                                <div className="baogia-1">
                                    Báo giá thi công sản phẩm Decal dán kính
                                </div>
                                <br />
                                <div>
                                    <table className="tg tb-baogia" style="undefined;table-layout: fixed; width: 669px">
                                        <colgroup>
                                            <col style="width: 264px" />
                                            <col style="width: 180px" />
                                            <col style="width: 129px" />
                                            <col style="width: 96px" />
                                        </colgroup>
                                        <tr>
                                            <th className="tg-oy06" rowspan="2">SẢN PHẨM
                                                <br />
                                            </th>
                                            <th className="tg-q84z" rowspan="2">SỐ LƯỢNG</th>
                                            <th className="tg-q84z" colspan="2" rowspan="2">ĐƠN GIÁ
                                                <br />(VNĐ)</th>
                                        </tr>
                                        <tr>
                                        </tr>
                                        <tr>
                                            <td className="tg-g327" rowspan="2"> Decal dán kính trang trí
                                                <br />
                                                <br />
                                                <br /> Decal dán kính mờ</td>
                                            <td className="tg-mp1f">Trên 10m2</td>
                                            <td className="tg-ivcs" colspan="2">22.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-mp1f">Dưới 10m2</td>
                                            <td className="tg-ivcs" colspan="2">Trọn gói 200.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-g327" rowspan="2"> Phim cách nhiệt
                                                <br />
                                                <br />
                                                <br /> Decal dán kính phản quang</td>
                                            <td className="tg-mp1f">1.0m x 50m</td>
                                            <td className="tg-ivcs" colspan="2">25.000 </td>
                                        </tr>
                                        <tr>
                                            <td className="tg-mp1f">1.5m x 50m</td>
                                            <td className="tg-ivcs" colspan="2">Trọn gói 200.000 </td>
                                        </tr>
                                    </table>
                                </div>
                                <br />
                                <p>
                                    Lưu ý:
                                    <br /> Báo giá trên chưa bao gồm 10% VAT
                                    <br /> Báo giá trên không bao gồm cắt theo yêu cầu và phụ phí khác. Báo giá được tính theo m2 thực tế trên
                                    kính.
                                    <br />
                                </p>
                                <br />
                                <p>
                                    Quý khách hàng có thắc mắc gì về dịch vụ vui lòng liên hệ với chúng tôi theo số hotline để được tư vấn.
                                </p>
                                <br />
                                <br />
                                <br />
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
)(PricePage);

