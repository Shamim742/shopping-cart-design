let serial = 0;
// for third card 
document.getElementById('first-card').addEventListener('click', function () {
    // get the data from html 
    serial += 1;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal)
});

document.getElementById('second-card').addEventListener('click', function(event){
    // console.log(e.target.parentNode.parentNode.children[0].innerText)
    serial += 1;
    const pName = event.target.parentNode.parentNode.children[0].innerText;
    const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productName, productPrice, productQuantity)
    
    const sumTotal = parseInt(pPrice) + parseInt(pQuantity)
    
    displayData(pName, pPrice, pQuantity,sumTotal)
})

document.getElementById('third-card').addEventListener('click', function () {
    // get the data from html 
    serial += 1;
    const productName = document.getElementById('third-title').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal)
});
function displayData(nameOfp, priceOfp, quantityOfp, priceTotal) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfp}</td>
    <td>${priceOfp}</td>
    <td>${quantityOfp}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
};