import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { Link } from 'react-router-dom'
import { MasterLayout } from '../../components/layouts';
import { ContactMe } from '../../components/elements';

class WarrantyPage extends Component {
    render() {
        return (
            <MasterLayout>
                <section id="table-baohanh">
                    <div className="container">
                        <div className="table">
                            <div className="baohanh">
                                <span>Quảng cáo </span>
                                <span className="dichvu"> > DỊCH VỤ BẢO HÀNH</span>
                                <div id="hr"> </div>
                                <span className="dichvu">IN, DECAL</span>
                            </div>
                            <div id="table-1">
                                <table className="tg">
                                    <colgroup>
                                        <col style={{ width: "37px" }} />
                                        <col style={{ width: "208px" }} />
                                        <col style={{ width: "197px" }} />
                                        <col style={{ width: "252px" }} />
                                        <col style={{ width: "53px" }} />
                                        <col style={{ width: "108px" }} />
                                        <col style={{ width: "189px" }} />
                                    </colgroup>
                                    <tr>
                                        <th className="tg-uys7" colspan="7">QUY ĐỊNH BẢO HÀNH</th>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow"></td>
                                        <td className="tg-c3ow">
                                            <br />
                                            <br />HẠNG MỤC</td>
                                        <td className="tg-c3ow">
                                            <br />
                                            <br />CÁC LỖI ĐƯỢC BẢO HÀNH</td>
                                        <td className="tg-c3ow">
                                            <br />
                                            <br />CÁC LỖI KHÔNG ĐƯỢC BẢO HÀNH</td>
                                        <td className="tg-c3ow">
                                            <br />
                                            <br />ĐVT</td>
                                        <td className="tg-c3ow">THỜI GIAN BẢO HÀNH (Tính từ thời điểm thi công xong có ảnh chụp)</td>
                                        <td className="tg-c3ow">XÁC ĐỊNH LỖI</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">I</td>
                                        <td className="tg-p8bj">Decal PP trong nhà</td>
                                        <td className="tg-p8bj">Phai màu, keo không dính</td>
                                        <td className="tg-7btt">Xước, vào nước, nhòe mực do ẩm</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt">3</td>
                                        <td className="tg-p8bj">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt; 30%</td>
                                        <td className="tg-c3ow">Phai màu &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Tăng sáng file lên 30% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Keo</td>
                                        <td className="tg-us36">Keo không dính</td>
                                        <td className="tg-c3ow">Dùng hóa chất tẩy rửa mạnh khi dán(nước rửa bát, nước lau kính)</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">II</td>
                                        <td className="tg-p8bj">Decal PP ngoài trời</td>
                                        <td className="tg-p8bj">Phai màu, keo không dính</td>
                                        <td className="tg-7btt">Xước</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt">6</td>
                                        <td className="tg-p8bj">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt; 30%</td>
                                        <td className="tg-c3ow">Phai màu &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">Tăng sáng file lên 30% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Keo</td>
                                        <td className="tg-us36">Keo không dính</td>
                                        <td className="tg-c3ow">Dùng hóa chất tẩy rửa mạnh khi dán(nước rửa bát, nước lau kính)</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">III</td>
                                        <td className="tg-p8bj">Decal PP Oto</td>
                                        <td className="tg-p8bj">Phai màu, keo không dính</td>
                                        <td className="tg-7btt">Xước, vào nước, nhòe mực do ẩm</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt">3</td>
                                        <td className="tg-p8bj">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt; 30%</td>
                                        <td className="tg-c3ow">Phai màu &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Tăng sáng file lên 30% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Keo</td>
                                        <td className="tg-us36">Keo không dính</td>
                                        <td className="tg-c3ow">Dùng hóa chất tẩy rửa mạnh khi dán(nước rửa bát, nước lau kính)</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">IV</td>
                                        <td className="tg-p8bj">Decal PP trong ngoài trời</td>
                                        <td className="tg-p8bj">Phai màu, keo không dính</td>
                                        <td className="tg-7btt">Xước, vào nước, nhòe mực do ẩm</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt">3</td>
                                        <td className="tg-p8bj">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt; 30%</td>
                                        <td className="tg-c3ow">Phai màu &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Tăng sáng file lên 30% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Keo</td>
                                        <td className="tg-us36">Keo không dính</td>
                                        <td className="tg-c3ow">Dùng hóa chất tẩy rửa mạnh khi dán(nước rửa bát, nước lau kính)</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">V</td>
                                        <td className="tg-p8bj">Decal PP Lưới</td>
                                        <td className="tg-p8bj">Phai màu, keo không dính</td>
                                        <td className="tg-7btt">Xước, vào nước, nhòe mực do ẩm t</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt">3</td>
                                        <td className="tg-p8bj">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt; 30%</td>
                                        <td className="tg-c3ow">Phai màu &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Tăng sáng file lên 30% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Keo</td>
                                        <td className="tg-us36">Keo không dính</td>
                                        <td className="tg-c3ow">Dùng hóa chất tẩy rửa mạnh khi dán(nước rửa bát, nước lau kính)</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">VI</td>
                                        <td className="tg-p8bj">In UV</td>
                                        <td className="tg-p8bj">Phai màu, bong tróc</td>
                                        <td className="tg-7btt">Xước, nứt, vỡ vật liệu, bong tróc do KH tự xử lý bằng sơn, cồn, dung môi khác,keo, băng dính
                                        vào bề mặt</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt">từ 12 -- 24 tháng</td>
                                        <td className="tg-p8bj">Mắt thường, xác định điềukiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt; 30%</td>
                                        <td className="tg-c3ow">Phai màu &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">24</td>
                                        <td className="tg-us36">Tăng sáng file lên 30% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Độ bám dính</td>
                                        <td className="tg-us36">Bong tự nhiên, không có tác nhân con người</td>
                                        <td className="tg-c3ow">Do cọ xát, tác động vật lý</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">12</td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Vật liệu</td>
                                        <td className="tg-us36">không bảo hành</td>
                                        <td className="tg-c3ow">Vỡ, nứt vật liệu</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow"></td>
                                        <td className="tg-us36">Mắt thường xác định điều kiện thi công</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <br />
                        <div className="table">
                            <div className="baohanh">
                                <span>Quảng cáo </span>
                                <span className="dichvu"> > DỊCH VỤ BẢO HÀNH</span>
                                <div id="hr"> </div>
                                <span className="dichvu">HỘP ĐÈN</span>
                            </div>
                            <div id="table-2">
                                <table className="tg">
                                    <colgroup>
                                        <col style={{ width: "38px" }} />
                                        <col style={{ width: "209px" }} />
                                        <col style={{ width: "196px" }} />
                                        <col style={{ width: "252px" }} />
                                        <col style={{ width: "52px" }} />
                                        <col style={{ width: "109px" }} />
                                        <col style={{ width: "188px" }} />
                                    </colgroup>
                                    <tr>
                                        <th className="tg-uys7" colspan="7">QUY ĐỊNH BẢO HÀNH</th>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7"></td>
                                        <td className="tg-uys7">HẠNG MỤC</td>
                                        <td className="tg-uys7">CÁC LỖI ĐƯỢC BẢO HÀNH</td>
                                        <td className="tg-uys7">CÁC LỖI KHÔNG ĐƯỢC BẢO HÀNH</td>
                                        <td className="tg-uys7">ĐVT</td>
                                        <td className="tg-uys7">THỜI GIAN BẢO HÀNH (Tính từ thời điểm thi công xong có ảnh chụp)</td>
                                        <td className="tg-uys7">XÁC ĐỊNH LỖI</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-88nc">I</td>
                                        <td className="tg-8m2u">Hộp đèn siêu mỏng</td>
                                        <td className="tg-8m2u">Cháy adapter, đứt dây đèn, bung mối hàn</td>
                                        <td className="tg-8m2u">Tiếp xúc với nước, tường ẩm, chập điện, di chuyển biển xước vỡ, phai màu poster (in mực trong
                                nhà), nhăn poster</td>
                                        <td className="tg-88nc">tháng</td>
                                        <td className="tg-88nc">12</td>
                                        <td className="tg-8m2u">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">1</td>
                                        <td className="tg-l711">Đèn LED</td>
                                        <td className="tg-l711">Hỏng, Giảm sáng &gt; 30%</td>
                                        <td className="tg-l711">Giảm sáng &lt;30 %</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">12</td>
                                        <td className="tg-l711">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">2</td>
                                        <td className="tg-l711">Adapter</td>
                                        <td className="tg-l711">Không hoạt động, cháy</td>
                                        <td className="tg-l711">Chập điện, nước vào, ẩm</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">12</td>
                                        <td className="tg-l711">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">3</td>
                                        <td className="tg-l711">Kết cấu chữ</td>
                                        <td className="tg-l711">Khung, tấm dẫn sáng</td>
                                        <td className="tg-l711">Xước, vỡ</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">12</td>
                                        <td className="tg-l711">Mắt thường, xác định điều kiện thi công</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-88nc">II</td>
                                        <td className="tg-8m2u">Hộp đèn UV không viền</td>
                                        <td className="tg-8m2u">Cháy đèn, adapter, phai màu</td>
                                        <td className="tg-8m2u">Xước, thủng, vỡ, chập điện</td>
                                        <td className="tg-88nc">tháng</td>
                                        <td className="tg-88nc">12</td>
                                        <td className="tg-8m2u"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">1</td>
                                        <td className="tg-l711">Đèn LED</td>
                                        <td className="tg-l711">Giảm sáng &gt; 30%</td>
                                        <td className="tg-l711">Giảm sáng &lt;30 %</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">6</td>
                                        <td className="tg-l711">So sánh độ sáng khi xuất xưởng và độ sáng tại thời điểm hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">2</td>
                                        <td className="tg-l711">Màu sắc</td>
                                        <td className="tg-l711">Phai màu &gt;20%</td>
                                        <td className="tg-l711">Phai màu &lt;= 20%</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">12</td>
                                        <td className="tg-l711">tăng sáng file 20% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">3</td>
                                        <td className="tg-l711">Kết cấu chữ</td>
                                        <td className="tg-l711">Khung kết cấu cong vênh, hỏng do lỗi sản xuất</td>
                                        <td className="tg-l711">Khung sắt han (do tác động thiên nhiên)</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">6</td>
                                        <td className="tg-l711"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7">4</td>
                                        <td className="tg-l711">Adapter, thiết bị điện, aptomat, khởi động từ, timer</td>
                                        <td className="tg-l711">Hỏng, không hoạt động</td>
                                        <td className="tg-l711">Thiên tai, chập điện, sự cố khách quan</td>
                                        <td className="tg-uys7">tháng</td>
                                        <td className="tg-uys7">12</td>
                                        <td className="tg-l711"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <br />
                        <div className="table">
                            <div className="baohanh">
                                <span>Quảng cáo </span>
                                <span className="dichvu"> > DỊCH VỤ BẢO HÀNH</span>
                                <div id="hr"> </div>
                                <span className="dichvu">CHỮ NỔI</span>
                            </div>
                            <div id="table-3">
                                <table className="tg">
                                    <colgroup>
                                        <col style={{ width: "39px" }} />
                                        <col style={{ width: "208px" }} />
                                        <col style={{ width: "196px" }} />
                                        <col style={{ width: "252px" }} />
                                        <col style={{ width: "54px" }} />
                                        <col style={{ width: "109px" }} />
                                        <col style={{ width: "187px" }} />
                                    </colgroup>
                                    <tr>
                                        <th className="tg-uys7" colspan="7">QUY ĐỊNH BẢO HÀNH</th>
                                    </tr>
                                    <tr>
                                        <td className="tg-uys7"></td>
                                        <td className="tg-uys7">HẠNG MỤC</td>
                                        <td className="tg-uys7">CÁC LỖI ĐƯỢC BẢO HÀNH</td>
                                        <td className="tg-uys7">CÁC LỖI KHÔNG ĐƯỢC BẢO HÀNH</td>
                                        <td className="tg-uys7">ĐVT</td>
                                        <td className="tg-uys7">THỜI GIAN BẢO HÀNH (Tính từ thời điểm thi công xong có ảnh chụp)</td>
                                        <td className="tg-uys7">XÁC ĐỊNH LỖI</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-88nc">I</td>
                                        <td className="tg-8m2u">Chữ nổi SL (chữ nổi chân alu, formex)</td>
                                        <td className="tg-8m2u">Không sáng</td>
                                        <td className="tg-8m2u">Bẩn do bụi, nước mưa</td>
                                        <td className="tg-88nc">tháng</td>
                                        <td className="tg-88nc">từ 6 -- 12tháng</td>
                                        <td className="tg-8m2u"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Đèn LED</td>
                                        <td className="tg-us36">Giảm sáng &gt; 30%</td>
                                        <td className="tg-us36">Giảm sáng &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">So sánh độ sáng khi xuất xưởng và độ sáng tại thời điểm hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt;20%</td>
                                        <td className="tg-us36">Phai màu &lt;= 20%</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">tăng sáng file 20% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Kết cấu chữ</td>
                                        <td className="tg-us36">Rơi, vỡ, nứt ( do lỗi sản xuất)</td>
                                        <td className="tg-us36">Do thiên tai dịch họa</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">II</td>
                                        <td className="tg-p8bj">Chữ nổi SLI (chữ nổi mặt mica, alu, chânmica, chân inox)</td>
                                        <td className="tg-p8bj">Không sáng</td>
                                        <td className="tg-p8bj">Bẩn do bụi, nước mưa</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt"></td>
                                        <td className="tg-p8bj"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Đèn LED</td>
                                        <td className="tg-us36">Giảm sáng &gt; 30%</td>
                                        <td className="tg-us36">Giảm sáng &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">So sánh độ sáng khi xuất xưởng và độ sáng tại thời điểm hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt;20%</td>
                                        <td className="tg-us36">Phai màu &lt;= 20%</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">tăng sáng file 20% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Kết cấu chữ</td>
                                        <td className="tg-us36">Rơi, vỡ, nứt ( do lỗi sản xuất)</td>
                                        <td className="tg-us36">Do thiên tai dịch họa</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">4</td>
                                        <td className="tg-us36">Adapter, thiết bị điện, aptomat, khởi động từ, timer</td>
                                        <td className="tg-us36">Hỏng, không hoạt động</td>
                                        <td className="tg-us36">Vào nước, thiên tai</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">12</td>
                                        <td className="tg-us36"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-7btt">III</td>
                                        <td className="tg-p8bj">Chữ nổi OUT LED</td>
                                        <td className="tg-p8bj">Không sáng</td>
                                        <td className="tg-p8bj">Bẩn do bụi, nước mưa</td>
                                        <td className="tg-7btt">tháng</td>
                                        <td className="tg-7btt"></td>
                                        <td className="tg-p8bj"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">1</td>
                                        <td className="tg-us36">Đèn LED</td>
                                        <td className="tg-us36">Giảm sáng &gt; 30%</td>
                                        <td className="tg-us36">Giảm sáng &lt;30 %</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">So sánh độ sáng khi xuất xưởng và độ sáng tại thời điểm hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">2</td>
                                        <td className="tg-us36">Màu sắc</td>
                                        <td className="tg-us36">Phai màu &gt;20%</td>
                                        <td className="tg-us36">Phai màu &lt;= 20%</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36">tăng sáng file 20% in lại và so sánh</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">3</td>
                                        <td className="tg-us36">Kết cấu chữ</td>
                                        <td className="tg-us36">Rơi, vỡ, nứt ( do lỗi sản xuất)</td>
                                        <td className="tg-us36">Do thiên tai dịch họa</td>
                                        <td className="tg-c3ow">tháng</td>
                                        <td className="tg-c3ow">6</td>
                                        <td className="tg-us36"></td>
                                    </tr>
                                    <tr>
                                        <td className="tg-c3ow">4</td>
                                        <td className="tg-us36">Adapter, thiết bị điện, aptomat, khởi động từ, timer</td>
                                        <td className="tg-us36">Hỏng, không hoạt động</td>
                                        <td className="tg-us36">Vào nước, thiên tai</td>
                                        <td className="tg-us36">tháng</td>
                                        <td className="tg-c3ow">12</td>
                                        <td className="tg-us36"></td>
                                    </tr>
                                </table>
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
)(WarrantyPage);

