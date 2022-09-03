// Ko yc vẽ sơ đồ khối

document.getElementById("go").onclick = function () {
    var chuan = document.getElementById("chuan").value*1;
    var num1 = document.getElementById("num1").value*1;
    var num2 = document.getElementById("num2").value*1;
    var num3 = document.getElementById("num3").value*1;
    var kv = document.getElementById("kv").value;
    var dt = document.getElementById("dt").value;

    var score = num1 + num2 + num3;
    var warning = ""

    if(kv == "A") {
        score += 2;
    } else if(kv == "B") {
        score += 1;
    } else if(kv == "C") {
        score += 0.5;
    } else if(kv == "O") {
        pass;
    } else {
        warning = "Invalid input"
    }
    if(dt == "1") {
        score += 2.5;
    } else if(kv == "2") {
        score += 1.5;
    } else if(kv == "3") {
        score += 1;
    } else if(kv == "0") {
        pass;
    } else {
        warning = "Invalid input"
    }


    var res = "<p>Tổng điểm: " + score + ".  You " + (score >= chuan ? "pass" : "fail") + ".</p>";
   

    var output = warning? warning : res;

    document.getElementById("res").innerHTML = output;

}
