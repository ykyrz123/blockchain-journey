let balancePromise = new Promise(function (resolve, reject){
    setTimeout(function() {
        resolve(2500); 
    }, 2000);
});

async function getBalance() {
    try {
        console.log("開始查詢餘額");
        
        let balance = await balancePromise

        console.log("USDT 餘額：", balance);
        console.log("查詢完成");
    } catch (error) {
        console.log("查詢失敗: ", error.message);
    }
}

getBalance();
console.log("讓成程式繼續執行");