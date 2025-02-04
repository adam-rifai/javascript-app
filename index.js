const standardShippingCost = 5;
const discountShippingCost = 3;
const freeShippingCost = 0;
let totalPrice;
function calculateShippingCost(totalShopping) {
  let shippingCost;
  if (totalShopping <= 10) {
    shippingCost = standardShippingCost;
  } else if (totalShopping <= 20) {
    shippingCost = discountShippingCost;
  } else {
    shippingCost = freeShippingCost;
  }
  // console.log("Shipping cost is $ " + shippingCost);
  console.log(`shipping cost is $${shippingCost}.`);
}
totalPrice = 45;
totalPrice = 5;
totalPrice = 15;
calculateShippingCost(totalPrice);
