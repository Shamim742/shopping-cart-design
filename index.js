let serial = 0;
function getElementInnerText(id){
    const inputValue = document.getElementById(id).innerText;
    return inputValue;
}

function getInputFieldValue(id){
    const inputValueString = document.getElementById(id).value;
    inputValue = parseInt(inputValueString);
    inputValue.value = '';
    return inputValue;
}
document.getElementById('first-card').addEventListener('click', function () {
    // get the data from html 
    serial += 1;
    const productName = getElementInnerText('first-name');
    const productPrice = getElementInnerText('first-price');
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

// for third card 
document.getElementById('third-card').addEventListener('click', function () {
    // get the data from html 
    serial += 1;
    const productName = document.getElementById('third-title').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal)
});

document.getElementById('forth-card').addEventListener('click', function(){
    serial += 1;
    const productName = getElementInnerText('forth-title');
    const productPrice = getInputFieldValue('forth-price');
    document.getElementById('forth-price').value = '';
    const productQuantity = getInputFieldValue('forth-quantity')
    document.getElementById('forth-quantity').value = '';
    const division = parseInt(productPrice) / parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, division)
})
document.getElementById('fifth-card').addEventListener('click', function(){
    serial += 1;
    const productName = getElementInnerText('fifth-title');
    const productPrice = getInputFieldValue('fifth-price');
    document.getElementById('fifth-price').value = '';
    const productQuantity = getInputFieldValue('fifth-quantity')
    document.getElementById('fifth-quantity').value = '';
    const multiplication = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, multiplication)
})
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