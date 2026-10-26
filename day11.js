let USDT = 1000;

console.log("開始查詢餘額");
console.log("USDT 餘額", USDT);
console.log("查詢完成");


try {
    console.log("開始查詢餘額");
    
    let result = notExisFunction();

    console.log("查詢成功");    
} catch (error) {
    console.log("查詢失敗");
    console.log("錯誤原因：", error.message);
    
}

console.log("程式結束");

function checkBalance(USDT) {
    try {
        if (USDT < 0) {
            throw new Error("USDT 不能小於 0");
        }

        console.log("目前 USDT 餘額：", USDT);
    } catch (error) {
        console.log("餘額檢查失敗");
        console.log("錯誤原因：", error.message);
    }
}

checkBalance(1000);
checkBalance(-100);
