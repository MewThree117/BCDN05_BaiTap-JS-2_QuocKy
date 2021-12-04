/**
 * Khối 1:
 * 5 số thực (float)
 * 
 * Khối 2:
 * trungBinh = (num1 + num2 + num3 + num4 + num5)/5
 * 
 * Khối 3: giá trị trung bình của 5 số thực
 */

function tinhTB() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var num4 = Number(document.getElementById("number4").value);
    var num5 = Number(document.getElementById("number5").value);
    var trungBinh = (num1 + num2 + num3 + num4 + num5)/5;
    document.getElementById("txtTb").innerHTML = "Giá trị trung bình là: " + trungBinh;
}
