
let weight = Number(prompt("Nhập vào cân nặng"));
let height = Number(prompt("Nhập vào chiều cao"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    alert("Gầy");
} else if (bmi < 25) {
    alert("Bình thường");
} else {
    alert("Thừa cân");
    if (bmi < 30) {
        alert("Tiền béo phì");
    } else if (bmi < 35) {
        alert("Béo phì cấp độ 1");
    } else if (bmi < 40) {
        alert("Béo phì cấp độ 2");
    } else {
        alert("Béo phì cấp độ 3");
    }
}
