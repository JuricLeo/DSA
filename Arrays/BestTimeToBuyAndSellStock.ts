function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    const profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}
