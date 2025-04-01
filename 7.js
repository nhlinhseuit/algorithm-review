//? Best Time to Buy and Sell Stock
//? https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.'

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    console.log("📈 Bắt đầu duyệt mảng giá:", prices);
    console.log("--------------------------------");

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (price < minPrice) {
            minPrice = price;
            console.log(`🟡 Ngày ${i}: Cập nhật giá mua thấp nhất = ${minPrice}`);
        } else {
            let profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
                console.log(`✅ Ngày ${i}: Có thể bán, lợi nhuận = ${price} - ${minPrice} = ${profit}`);
            } else {
                console.log(`🔹 Ngày ${i}: Lợi nhuận ${price - minPrice}, không lớn hơn ${maxProfit}`);
            }
        }
        console.log(`    maxProfit hiện tại = ${maxProfit}`);
        console.log("--------------------------------");
    }

    console.log("🏁 Kết quả lợi nhuận lớn nhất:", maxProfit);
    return maxProfit;
};

maxProfit([7,1,5,3,6,4]);
