function getPreviousTotalPrice(fieldId) {
    const previousTotalPriceField = document.getElementById(fieldId);
    const previousTotalPriceString = previousTotalPriceField.innerText;
    const previousTotalPriceNumber = parseFloat(previousTotalPriceString);
    return previousTotalPriceNumber;
}

function getInputFieldValue(inptfieldId) {
    const inputField = document.getElementById(inptfieldId);
    const inputFieldvalueString = inputField.value;
    return inputFieldvalueString;
}

const cardTitleContainer = document.getElementById("title-container");

let newTotalPrice;
function addToCard(event) {

    const productName = event.childNodes[3].childNodes[3].innerText;
    const count = cardTitleContainer.childElementCount;
    const paragraph = document.createElement("P");
    paragraph.classList.add("py-1");
    paragraph.innerText = `${count + 1}. ${productName}`;
    cardTitleContainer.appendChild(paragraph);

    const productPrice = event.childNodes[3].childNodes[5].childNodes[0].innerText;
    const newProductPrice = parseFloat(productPrice);

    const previousTotalPrice = getPreviousTotalPrice("total-price-container");
    newTotalPrice = newProductPrice + previousTotalPrice;

    const makePurchaseButton = document.getElementById("btn-make-purchase");

    if (newTotalPrice > 0) {
        makePurchaseButton.removeAttribute("disabled");
    } else {
        makePurchaseButton.setAttribute("disabled", true);
    }

    const buttonApply = document.getElementById("btn-apply");
    if (newTotalPrice >= 200) {
        buttonApply.removeAttribute("disabled");
    } else {
        buttonApply.setAttribute("disabled", true);
    }

    const newTotalPriceDecimal = newTotalPrice.toFixed(2);
    document.getElementById("total-price-container").innerText = newTotalPriceDecimal;
    document.getElementById("total-after-discount").innerText = newTotalPriceDecimal;
}

document.getElementById("btn-apply").addEventListener("click", function () {
    const couponCode = getInputFieldValue("apply-input-field");
    if (couponCode === "SELL200") {
        const discountPrice = newTotalPrice * .20;
        const discountPriceDecimal = discountPrice.toFixed(2);
        document.getElementById("discount-container").innerText = discountPriceDecimal;
        document.getElementById("total-after-discount").innerText = (newTotalPrice - discountPrice).toFixed(2);
    } else {
        alert("Please fill up the coupon code input field with SELL200 text.")
    }

})

document.getElementById("go-home-btn").addEventListener("click", function () {
    location.reload();
})