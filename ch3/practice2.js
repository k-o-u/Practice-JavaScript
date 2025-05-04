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
