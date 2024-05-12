const distanceElement = document.querySelector('input#user-distance');
const ageElement = document.querySelector('input#user-age');

const discountPercentageEl = document.querySelector('span#discount-percentage');
const priceDiscountEl = document.querySelector('span#price-discount');
const totalPriceEl = document.querySelector('span#total-price');

document.querySelector('#ticket-generator').addEventListener('click', function(){
    const distance = Number.parseFloat(distanceElement.value, 10);
    const age = Number.parseInt(ageElement.value, 10);
    const pricePerUnit = 0.267113;
    let discount = 0;

    if ( isNaN(distance) || isNaN(age)){
        console.error('Given inputs are not numbers');
    } else if ( age >= 63 ){
        discount = 37.893;
        let totalDiscount = (pricePerUnit * distance) / 100 * discount;
        let total = (pricePerUnit * distance) - totalDiscount;
        discountPercentageEl.innerHTML = discount + '%';
        priceDiscountEl.innerHTML = totalDiscount.toFixed(2) + '$';
        totalPriceEl.innerHTML = total.toFixed(2) + '$';
    
        console.log(total, totalDiscount);
    } else if (age < 21){
        discount = 24.552;
        let totalDiscount = (pricePerUnit * distance) / 100 * discount;
        let total = (pricePerUnit * distance) - totalDiscount;
        discountPercentageEl.innerHTML = discount + '%';
        priceDiscountEl.innerHTML = totalDiscount.toFixed(2) + '$';
        totalPriceEl.innerHTML = total.toFixed(2) + '$';
    }else{
        console.log('nnoo discount')
        let total = (pricePerUnit * distance);
        discountPercentageEl.innerHTML = 0 + '%';
        priceDiscountEl.innerHTML = 0 + '$';
        totalPriceEl.innerHTML = total.toFixed(2) + '$';
    }
});

// ! RESET BUTTON
document.querySelector('#reset-ticket').addEventListener('click', function(){
    distanceElement.value = '';
    ageElement.value = '';
    discountPercentageEl.innerHTML = 0 + '%';
    priceDiscountEl.innerHTML = 0.00 + '$';
    totalPriceEl.innerHTML = 0.00 + '$';
});