/**
 * Khối 1:input
 * chieuDai
 * chieuRong
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và khai báo biến
 * B2: dienTich = chieuDai * chieuRong;
 * B3: chuVi = (chieuDai + chieuRong) * 2;
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
