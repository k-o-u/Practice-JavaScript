let str = 's';

switch(str) {
    case 'aaa' :
        console.log('aaaです');
        break;
    case 'bbb' :
        console.log('bbbです');
        break;
    case 'ccc' :
        console.log('cccです');
        break;
    default :
        console.log('default');
        break;
}

// for ~ in 仮変数にはキーまたはインデックスが入る
let fruit = {
    apple: 100,
    orange: 200,
    lemon: 300
};

for (let key in fruit) {
    console.log(`${key} = ${fruit[key]}`)
};

// for ~ of 仮変数に要素が入る
let nums = [10, 20, 30];
for (let val of nums) {
    console.log(val);
}

// list.foreach
nums.forEach(function(value, index, array) {
    console.log(`value=${value}, index=${index}, array=${array}`);
});