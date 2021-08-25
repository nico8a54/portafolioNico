const precioApagar = document.getElementById("precioApagar");
const coupon = document.getElementById("inputCoupon");
const precioApagarCoupon = document.getElementById("precioApagarCoupon");

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;
    const porcentajePrecioConDescuento = 100 - discount;
    const precioConDescuento = (price * porcentajePrecioConDescuento)/100;
    const descuentoConCoupon = (precioConDescuento * (100 - coupon.value))/100;
    precioApagar.innerHTML = "$ " + precioConDescuento;
    precioApagarCoupon.innerHTML = "$ " + descuentoConCoupon;
};
