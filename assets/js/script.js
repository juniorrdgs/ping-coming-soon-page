let regex = /^([A-z0-9._-]{2,})\@([A-z0-9]{2,})\.([A-z0-9]{2,})(\.[A-z0-9]{2,})?$/g

let form = document.querySelector('form');
let input = document.querySelector('#email');
let error = document.querySelector('.error');

function clearError() {
    error.style.visibility = 'hidden';
}

form.addEventListener('submit', (e) => {
    clearError();
    e.preventDefault();
    if (input.value == '') {
        alert('Insert an valid email')
    } else if (!regex.test(input.value)) {
        error.style.visibility = 'visible';
        input.style.border = '1px solid var(--lightRed)';
    } else {
        form.submit();
    }
})