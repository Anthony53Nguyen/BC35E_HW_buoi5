// Ko yc vẽ sơ đồ khối

document.getElementById("go").onclick = function () {
    var name = document.getElementById("name").value;
    var kw = document.getElementById("kw").value*1;
    
    var pay = 0;

    if(kw < 0) {
        alert("Số kw tiêu thụ không thể nhỏ hơn 0");
    } else if(kw <= 50) {
        pay = kw*500;
    } else if(kw <= 100) {
        pay = 50*500 + (kw-50)*650;
    } else if(kw <= 200) {
        pay = 50*500 + 50*650 + (kw - 100)*850;
    } else if(kw <= 350) {
        pay = 50*500 + 50*650 + 100*850 + (kw - 200)*1100;
    } else {
        pay = 50*500 + 50*650 + 100*850 + 150*1100 + (kw - 350)*1300;
    }
    
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var res = "<p>Name: " + name + "<br>Tiền điện: " + currentFormat.format(pay) + " đồng </p>";

    document.getElementById("res").innerHTML = res;

}
