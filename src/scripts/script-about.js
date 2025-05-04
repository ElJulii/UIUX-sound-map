const button = document.querySelector('.about');
const dialogAbout = document.querySelector('.dialog-about');
const country = document.querySelector('.section-country-info')

button.addEventListener('click', (e) => {
    e.preventDefault();

    country.style.display = 'none';
    dialogAbout.open = true
})