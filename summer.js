// const cardNames = document.getElementsByClassName("card-name");

// for (let cardName of cardNames) {
//     cardName.addEventListener('click', function (event) {
//         console.log(event);
//     })
// }
function getPreviousTotalPrice(fieldId) {
    const previousTotalPriceField = document.getElementById(fieldId);
    const previousTotalPriceString = previousTotalPriceField.innerText;
    const previousTotalPriceNumber = parseFloat(previousTotalPriceString);
    return previousTotalPriceNumber;
}

const cardTitleContainer = document.getElementById("title-container");

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
    const newTotalPrice = newProductPrice + previousTotalPrice;
    const newTotalPriceDecimal = newTotalPrice.toFixed(2);
    document.getElementById("total-price-container").innerText = newTotalPriceDecimal;

}