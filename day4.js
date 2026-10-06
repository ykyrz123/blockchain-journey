let name = "Ethanyuan";
let age = 27;
let USDT = 1100;
let NXPC = 1000;
let isBanned = false;

console.log("姓名:", name);
console.log("年齡:", age);
console.log("USDT:", USDT);
console.log("NXPC:", NXPC);
console.log("是否被禁止:", isBanned);

if (age >= 18 && USDT >= 500 && !isBanned) {
    console.log("可以購買");
} else{
    console.log("不可以購買");
}

if (USDT >= 1000 || NXPC >= 5000) {
    console.log("可以加入VIP");
} else{
    console.log("一般會員");
}