//click button to set function
function extraElements(isExtra, textField, cost) {
    const extraCost = document.getElementById(textField + '-cost');
    if (isExtra == 0) {
        extraCost.innerText = cost;
    }
    else if (isExtra == 1) {
        extraCost.innerText = cost;
    }
    else {
        extraCost.innerText = cost;
    }
}

//total amount calculation function
function totalAmount() {
    const bestPrice = document.getElementById('best-price');
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('shipping-cost');
    const totalPrice = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCharge.innerText);
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
}

//calculate discount amount
function discountCalculation(){
    const grandTotal = document.getElementById('grand-total');
    const grandTotalAfterDiscount = parseInt(grandTotal.innerText) - parseInt(grandTotal.innerText) * 0.2;
    grandTotal.innerText = grandTotalAfterDiscount;
    document.getElementById('promo-input').value = '';
    document.getElementById('promo-button').disabled = true; //promo code should use on once.
    document.getElementById('wrong-promo-code').innerText = ''; //if earlier attempt(s) is wrong then enter correct code to remove this text. 
}

//extra memory buttons
document.getElementById('no-extra-memory').addEventListener('click', function () {
    extraElements(0, 'extra-memory', 0);
});
document.getElementById('extra-memory').addEventListener('click', function () {
    extraElements(1, 'extra-memory', 180);
});
//extra ssd buttons
document.getElementById('first-ssd').addEventListener('click', function () {
    extraElements(0, 'extra-storage', 0);
});
document.getElementById('second-extra-ssd').addEventListener('click', function () {
    extraElements(1, 'extra-storage', 100);
});
document.getElementById('third-extra-ssd').addEventListener('click', function () {
    extraElements(2, 'extra-storage', 180);
});
//delivery buttons
document.getElementById('free-delivery').addEventListener('click', function () {
    extraElements(0, 'shipping', 0);
});
document.getElementById('urgent-delivery').addEventListener('click', function () {
    extraElements(1, 'shipping', 20);
});
//click each button to update total price
const buttons = document.getElementsByClassName('total')
for (const button of buttons) {
    button.addEventListener('click', function () {
        totalAmount();
    });
}

//promo code verify
document.getElementById('promo-button').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    if(promoInput.value == 'stevekaku'){
        discountCalculation();
    }
    else{
        document.getElementById('wrong-promo-code').innerText = '! Invalid Promo Code';
    }
});