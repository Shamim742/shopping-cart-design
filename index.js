// for first card 
document.getElementById('first-card').addEventListener('click', function () {
    // get the data from html 
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal)
});

document.getElementById('second-card').addEventListener('click', function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText)
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    console.log(productName, productPrice, productQuantity)
})























function displayData(productName, productPrice, productQuantity, priceTotal) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
};