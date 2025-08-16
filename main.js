const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const navBar = document.querySelector('#navbar');

if(bar) {
    bar.addEventListener('click', () => {
        navBar.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        navBar.classList.remove('active');
    })
}
