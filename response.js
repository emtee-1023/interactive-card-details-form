document.querySelector('#number').oninput = () => {
    document.querySelector('.card-front__number').innerText = document.querySelector('#number').value;
}

document.querySelector('#name').oninput = () => {
    document.querySelector('.card-front__name').innerText = document.querySelector('#name').value;
}

document.querySelector('#cvv').oninput = () => {
    document.querySelector('.card-back__cvv').innerText = document.querySelector('#cvv').value;
}

document.querySelector('#expiryMonth').oninput = () => {
    document.querySelector('.card-front__expiryMonth').innerText = document.querySelector('#expiryMonth').value;
}

document.querySelector('#expiryYear').oninput = () => {
    document.querySelector('.card-front__expiryYear').innerText = document.querySelector('#expiryYear').value;
}

