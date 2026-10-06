function add(a, b) {
    return a + b;
}

let result = add(10 ,20);
let result1 = add(100, 500);
let result2 = add(1000, 2000);
console.log(result);
console.log(result1);
console.log(result2);

function checkBalance(USDT) {
    if ( USDT >= 500 ) {
    return "可以購買";
    } else{
    return "USDT不足";
    }
}

let result3 = checkBalance(600);
let result4 = checkBalance(300);
let result5 = checkBalance(1000);

console.log(result3);
console.log(result4);
console.log(result5);