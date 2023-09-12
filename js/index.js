var arrayNumber = [];
document.querySelector('#array').innerHTML = arrayNumber;
function handleNumber() {
    var number = +document.querySelector('#number').value;
    arrayNumber.push(number);
    document.querySelector('#array').innerHTML = arrayNumber;
}
// 1: Tính Tổng Số Dương Trong Mảng
function sumNumber() {
    var sum = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            sum += arrayNumber[i];
        }
    }
    document.querySelector('#result').innerHTML = 'Tổng các số dương trong mảng: ' + sum;
}
// 2: Đếm Có Bao Nhiêu Số Dương Trong Mảng
function countNumber() {
    var count = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            count++;
        }
    }
    document.querySelector('#result2').innerHTML = 'Có tổng: ' + count + ' số dương trong mảng: ';
}
// 3: Tìm Số Nhỏ Nhất Trong Mảng
function findMin() {
    var min = Math.min(...arrayNumber);
    document.querySelector('#result3').innerHTML = 'Số nhỏ nhất trong mảng: ' + min;
}
// 4: Tìm Số Dương Nhỏ Nhất Trong Mảng
function findMinPositive() {
    var minPositive = Math.min(...arrayNumber.filter(number => number > 0));
    document.querySelector('#result4').innerHTML = 'Số dương nhỏ nhất trong mảng: ' + minPositive;
}
// 5: Tìm Số Chẵn Cuối Cùng Trong Mảng, Nếu Số Cuối Không Phải Số Chẵn Thì Trả Về Giá Trị -1\
function findLastEven() {
    var lastEven = -1;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 === 0) {
            lastEven = arrayNumber[i];
        }
        document.querySelector('#result5').innerHTML = 'Số chẵn cuối cùng trong mảng: ' + lastEven;
    }
}
// 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
function swapArrayElements() {
    var [pos1, pos2] = document.getElementById('swapPositions').value.split(',').map(Number);
    [arrayNumber[pos1], arrayNumber[pos2]] = [arrayNumber[pos2], arrayNumber[pos1]];
    document.querySelector('#result6').innerHTML = 'Mảng sau khi đã hoán đổi: ' + arrayNumber.join(', ');
}
// 7 : Sắp xếp mảng theo thứ tự tăng dần.
function sortArray() {
    arrayNumber.sort((a, b) => a - b);
    document.querySelector('#result7').innerHTML = 'Mảng sau khi sắp xếp tăng dần là: ' + arrayNumber;
}
// 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
function findFirstPrime() {
    var firstPrime = arrayNumber.find(isPrime);
    document.querySelector('#result8').innerHTML = 'Số nguyên tố đầu tiên trong mảng là: ' + (firstPrime || -1 + ' (Không có số nguyên tố)');
}
// 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrayNumber2 = [];
function handleNumber2() {
    var number = +document.querySelector('#addIntegers').value;
    arrayNumber2.push(number);
    document.querySelector('#array2').innerHTML = arrayNumber2;
}
function countIntegers() {
    // var ArrayNumber2 = document.getElementById('addIntegers').value.split(',').map(Number); => Cách add mảng trực tiếp khác form hướng dẫn
    var integerCount = 0;
    for (var i = 0; i < arrayNumber2.length; i++) {
        if (Number.isInteger(arrayNumber2[i])) {
            integerCount++;
        }
    }
    document.getElementById('result9').innerText = 'Số lượng số nguyên trong mảng: ' + integerCount;
}
// 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function comparePosNeg() {
    var posNumber = arrayNumber.filter(num => num > 0).length;
    var negNumber = arrayNumber.filter(num => num < 0).length;
    if (posNumber > negNumber) {
        document.querySelector('#result10').innerHTML = 'Số dương nhiều hơn số âm';
    } else if (posNumber < negNumber) {
        document.querySelector('#result10').innerHTML = 'Số dương ít hơn số âm';
    } else {
        document.querySelector('#result10').innerHTML = 'Số dương và số âm bằng nhau';
    }

}