/**
 * Khối 1: input
 * tiGiaUSD
 * soTienUSD
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo biến và gán giá trị
 * B2: soQuyDoiVND = soTienUSD  * tiGiaUSD;
 * 
 * Khối 3: output
 * soQuyDoiVND
 * 
 * 
 */

function quyDoi() {
    var tiGiaUSD = 23500;
    var soTienUSD = Number(document.getElementById("soTienUSD").value);
    var soQuyDoiVND = soTienUSD * tiGiaUSD;
    document.getElementById("txtTienQuyDoi").innerHTML = "Số tiền được quy đổi là: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(soQuyDoiVND) + " VNĐ";
}