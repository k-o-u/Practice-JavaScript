function calcTriangle(base, height) {
    return base * height / 2;
}
let area = calcTriangle(50, 3);
console.log(area);


// 関数リテラル
let doubleNum = function(num) {
    return num * 2;
}
console.log(doubleNum(4));


// アロー関数
let doubleNum2 = (num) => {
    return num * 2;
}
console.log(doubleNum2(7));

// 関数本体が1文の場合、{}とreturnは省略可能
let doubleNum3 = (num) => num * 2;
console.log(doubleNum3(10));

// 引数が1つの場合、()を省略できる
let doubleNum4 = num => num * 2;
console.log(doubleNum4(20));


//即時関数 変数のスコープを最小限にする
(function() {
    var str = 'test';  // varはブロックスコープを持たない
    console.log(str);
}).call(this);   // その場で実行、ブロック外からstrを参照させない