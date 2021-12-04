/**
 * Khối 1: input
 * luongMoiNgay
 * soNgayLam
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * B2: tính tiền lương
 * 
 * Khối 3: ouput
 * tongLuong
 * 
 */


function tinhLuong() {
    var luongMoiNgay = Number(document.getElementById("luongMoiNgay").value);
    var soNgayLam = Number(document.getElementById("ngayLam").value);
    var tongLuong = luongMoiNgay * soNgayLam;
    document.getElementById("txtTong").innerHTML = "Tiền lương tháng này là: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(tongLuong) + " VNĐ";

}
