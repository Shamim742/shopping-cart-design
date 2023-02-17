// for first card 
document.getElementById('first-card').addEventListener('click', function () {
    // get the data from html 
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    const container = document.getElementById('table-container');

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);

});