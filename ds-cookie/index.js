const $overlay = document.querySelector('.js-overlay')
const $closeButton = document.querySelector('.js-close')

if(Cookies.get('closed')){
    $overlay.classList.remove('is-open')
}

$closeButton.addEventListener('click', function() {
    Cookies.set('closed',true, {expires: 7})

    $overlay.classList.remove('is-open')
})