var productsPrices = [2.98, 4.50, 9.98, 4.49, 6.87];

function populatePrices(prices) {
  for (var i = 0; i < prices.length; i++) {
    document.getElementById(`price_${i + 1}`).value = prices[i].toFixed(2);
  }
}

function process() {
  var total = 0;
  var price;
  var qty;
  var productId;
  for (var i = 0; i < 5; i++) {
    productId = parseInt(document.getElementById(`prod_${i + 1}`).value);
    switch (productId) {
      case 1:
        price = productsPrices[0];
        break;
      case 2:
        price = productsPrices[1];
        break;
      case 3:
        price = productsPrices[2];
        break;
      case 4:
        price = productsPrices[3];
        break;
      case 5:
        price = productsPrices[4];
        break;
      default:
        price = 0;
    }

    // price = document.getElementById(`price_${productId}`).value;

    qty = document.getElementById(`qty_${productId}`).value;
    if (isNaN(parseInt(qty))) {
      alert(`Please use integers to input the quantity - Error at product ${productId}`);
      qty = 0;
    }
    amount = price * qty;
    total += amount;
    document.getElementById(`amount_${productId}`).value = amount.toFixed(2);
  }
  document.getElementById(`total_sold`).value = total.toFixed(2);
}

function resetForm() {
  for (var i = 0; i < 5; i++) {
    document.getElementById(`qty_${i + 1}`).value = 0;
    document.getElementById(`amount_${i + 1}`).value = 0;
  }
  populatePrices(productsPrices);
}

resetForm();

document.getElementById('retailPrices').addEventListener('reset', function(e) {
  e.preventDefault();
  resetForm();
})
