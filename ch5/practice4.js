let str = 'helloおはよう';
console.log(str.length);  //9文字

let str2 = 'Hello';
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

console.log(str.charAt(4));  // o
console.log(str.substring(5)); // おはよう
console.log(str.substring(5, 7)); //おは
console.log(str.slice(5)); // おはよう
console.log(str.slice(5, 7)); //おは

console.log(str.substring(7, 5));  // 数字入れ替え：おは
console.log(str.slice(7, 5)); // 空文字列を返す

console.log(str.substring(5, -3));  // マイナスは0とみなす
console.log(str.slice(5, -2)); // 末尾からの文字数とみなす：おは


//文字列検索
let str3 = 'abcdefghijabcd';
console.log(str3.indexOf('bc')); // 1
console.log(str3.lastIndexOf('bc')); // 11
console.log(str3.indexOf('cb')); // -1
console.log(str3.indexOf('bc', 4)); // 11
console.log(str3.lastIndexOf('ij', 5)); // -1 指定した場所から前方向に検索する
console.log(str3.indexOf('', 4)); // 4 指定した数字をそのまま返す

// 特定の文字列が含まれているか判断
console.log(str3.includes('bc')); //true
console.log(str3.startsWith('bc')); //false
console.log(str3.endsWith('cd')); //true
console.log(str3.includes('fg', 10)); //false

//空白除去
let str4 = '  hello ';
console.log(`${str4.trim()}`); //hello
console.log(`${str4.trimStart()}`); //hello_
console.log(`${str4.trimEnd()}`); //__hello

//置き換え
console.log(str3.replace('bc', 'XX')); //最初の一つだけ
console.log(str3.replaceAll('bc', 'XX')); //全て

//分割
let str5 = 'abcXXdefXXghiXX';
console.log(str5.split('XX')); //['abc', 'def', 'ghi', '']
console.log(str5.split('XX', 2)); //['abc', 'def']

//桁を揃える
let str6 = '98.765';
console.log(str6.padStart(10)); //____98.765
console.log(str6.padStart(10, '0')); //000098.765
console.log(str6.padEnd(10, '0')); //98.7650000

//繰り返し
console.log(str6.repeat(3)); //98.76598.76598.765

//数値の形式変換
let num = 987.6543;
let format = Intl.NumberFormat(
    'ja-JP',
    {
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'symbol'
    }
);
console.log(format.format(num));  // ¥988


// 文字列⇨数値
let n = '999aaa';
console.log(Number(n)); //NaN
console.log(Number.parseFloat(n));  // 999  先頭から連続している数値のみ
console.log(Number.parseInt(n));  // 999
console.log(Number.parseFloat('aaa999')); // 先頭が数値じゃないのでNaN

let d = new Date();
console.log(Number(d)); // 経過ミリ秒に換算した値
console.log(Number.parseFloat(d)); //NaN parseIntも


// 数学の演算機能はMathオブジェクト