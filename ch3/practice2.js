let data = [1, "xxx", 3];
console.log(data[0]);
console.log(data[1]);

let [x0, x1, x2, x3] = data;
console.log(x0);
console.log(x3);

let a = 0;
let b = 10;
console.log(`a: ${a}, b: ${b}`);
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);


let book = {
    title: 'book title',
    author: 'book author',
    price: 200
};

let {author, date, price, memo='memoooo'} = book;
console.log(author, date, price, memo);


console.log(1 == '1'); //true
console.log(1 === '1'); //false 型も判定する


// 配列の要素を削除
let data2 = ['aaa', 'bbb', 'ccc'];
console.log(delete data2[0]); // true
console.log(data2); // [なし, 'bbb', 'ccc']
console.log(data2.length); // 3

// オブジェクトのプロパティを削除
let langs = {
    primary: 'japanese',
    secondary: 'english'
}
console.log(delete langs.secondary); // true
console.log(langs); // {primary: 'japanese'}
console.log(delete langs.hoge); // true 関係ないものを指定してもtrue

// プロパティ値が他で定義されたオブジェクトの場合
let book2 = {
    title: 'aaa',
    author: 'bbb',
    language: langs
}
console.log(delete book2.language); // true
console.log(book2); // {title: 'aaa', author: 'bbb'}
console.log(langs); // 参照先のオブジェクトは消えない

// 型変換
console.log(Boolean('false')); // true
console.log(Boolean(0)) // false
console.log(String(100) + 10); // 10010
console.log(Number('100') + 10); // 110
console.log(Number('aaa')); // NaN