let str = "testtest"
let str2 = `hello ${str}
hooooooo`;
console.log(str2);

let data = ["first", "second", "third"];
console.log(data[1]);

let book = {
    title: 'book title',
    author: 'book author',
    price: 200
};

console.log(book.author);
console.log(book['title']);

book.price = 500;

console.log(book.price);