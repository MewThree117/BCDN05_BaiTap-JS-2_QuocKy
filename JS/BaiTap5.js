/**
 * Khối 1: input
 * number
 * 
 * Khối 2: các bước xử lý
 * B1: tạo và khai báo biến
 * B2: 
 * ten = Math.floor(number/10);
 * unit = number%10;
 * tong = ten + unit;
 * 
 * Khối 3: output
 * tong
 */

function tong2KySo() {
    var num = Number(document.getElementById("soBatKy").value);
    var ten = Math.floor(num/10);
    var unit = num%10;
    var tong = ten + unit;
    document.getElementById("txtTong2KySo").innerHTML = "Tổng 2 kí số là:" + tong;
}