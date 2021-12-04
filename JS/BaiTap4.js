/**
 * Khối 1:input
 * chieuDai
 * chieuRong
 * 
 * Khối 2: Các bước xử lý
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện vào lập công thức
 *  dienTich = chieuDai * chieuRong;
 *  chuVi = (chieuDai + chieuRong) * 2;
 *  
 * Khối 3: output
 * dienTich
 * chuVi
 * 
 */

function tinhCS() {
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("txtChuVi").innerHTML = "Diện tích của hình chữ nhật là: " + dienTich;
    document.getElementById("txtDienTich").innerHTML = "Chu vi của hình chữ nhật là: " + chuVi;
}
