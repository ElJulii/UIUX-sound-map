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

buttonAbout.addEventListener('click', (e) => {
    e.preventDefault();

    country.style.display = 'none';
    dialogContact.open = false;
    dialogAbout.open = true;
    dialogIntro.open = false;

    centralMessage.style.display = 'none'

})

buttonContact.addEventListener('click', (e) => {
    e.preventDefault();

    country.style.display = 'none';
    dialogAbout.open = false;
    dialogContact.open = true;
    dialogIntro.open = false;

    centralMessage.style.display = 'none'

})

