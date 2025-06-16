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
console.log(str.slice(5, -2)); // 末尾からの文字数とみなす：
