/**
 * Khối 1: input
 * tiGiaUSD
 * soTienUSD
 * 
 * Khối 2: Các bước xử lý
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện vào lập công thức
 *     soQuyDoiVND = soTienUSD  * tiGiaUSD;
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