let name = "Ethanyuan";
let age = 27;
let USDT = 1100;
let NXPC = 1000;


console.log("姓名:",name);
console.log("年齡:",age);
console.log("USDT:",USDT);
console.log("NXPC:",NXPC);

if (USDT >= 1000) {
    console.log("可以買更高級商品");
} else if (USDT >=500 ) {
    console.log("可以買普通商品");
} else {
    console.log("USDT不足");
}
