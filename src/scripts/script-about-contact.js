//Buttons
const buttonAbout = document.querySelector('.about');
const buttonContact = document.querySelector('.contact');

//Dialogs
const dialogAbout = document.querySelector('.dialog-about');
const dialogContact = document.querySelector('.dialog-contact');

//country container
const country = document.querySelector('.section-country-info');

//Central message
const centralMessage = document.querySelector('.message');

setTimeout(() => {
    centralMessage.style.opacity = '0'
}, 0)

setTimeout(() => {
    centralMessage.style.display = 'none'
}, 8000)

buttonAbout.addEventListener('click', (e) => {
    e.preventDefault();

    country.style.display = 'none';
    dialogContact.open = false;
    dialogAbout.open = true;

    centralMessage.style.display = 'none'

})

buttonContact.addEventListener('click', (e) => {
    e.preventDefault();

    country.style.display = 'none';
    dialogAbout.open = false;
    dialogContact.open = true;

    centralMessage.style.display = 'none'

})

