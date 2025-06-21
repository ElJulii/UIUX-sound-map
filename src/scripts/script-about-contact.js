// Buttons and Dialogs
const buttonAbout = document.querySelector('.about');
const buttonContact = document.querySelector('.contact');
const dialogIntro = document.querySelector('.dialog-intro');
const dialogAbout = document.querySelector('.dialog-about');
const dialogContact = document.querySelector('.dialog-contact');
const country = document.querySelector('.section-country-info');
const centralMessage = document.querySelector('.message');
const exploreButton = dialogIntro.querySelector('button');

// Helper Functions
function resetButtonToOriginal(button, originalText, originalHandler) {
    if (button.innerHTML.toLowerCase().includes('home')) {
        button.innerHTML = `<span>${originalText}</span>`;
        button.removeEventListener('click', goToHome);
        button.addEventListener('click', originalHandler);
    }
}

function goToHome() {
    dialogIntro.open = true;
    dialogAbout.open = false;
    dialogContact.open = false;
    country.style.display = 'none';
    centralMessage.style.display = 'none';

    resetButtonToOriginal(buttonAbout, 'about us', handleAboutClick);
    resetButtonToOriginal(buttonContact, 'contact us', handleContactClick);
}

// Event Handlers
function handleAboutClick(e) {
    e.preventDefault();

    country.style.display = 'none';
    dialogContact.open = false;
    dialogAbout.open = true;
    dialogIntro.open = false;

    centralMessage.style.display = 'none';

    resetButtonToOriginal(buttonContact, 'contact us', handleContactClick);

    buttonAbout.innerHTML = '<span>home</span>';
    buttonAbout.removeEventListener('click', handleAboutClick);
    buttonAbout.addEventListener('click', goToHome);
}

function handleContactClick(e) {
    e.preventDefault();

    country.style.display = 'none';
    dialogAbout.open = false;
    dialogContact.open = true;
    dialogIntro.open = false;

    centralMessage.style.display = 'none';

    resetButtonToOriginal(buttonAbout, 'about us', handleAboutClick);

    buttonContact.innerHTML = '<span>home</span>';
    buttonContact.removeEventListener('click', handleContactClick);
    buttonContact.addEventListener('click', goToHome);
}

function handleExploreClick(e) {
    e.preventDefault();

    dialogIntro.open = false;

    centralMessage.style.display = 'block';
    centralMessage.style.opacity = '1';

    setTimeout(() => {
        centralMessage.style.opacity = '0';
    }, 50);

    setTimeout(() => {
        centralMessage.style.display = 'none';
    }, 7000 + 50);

    resetButtonToOriginal(buttonAbout, 'about us', handleAboutClick);
    resetButtonToOriginal(buttonContact, 'contact us', handleContactClick);
}

// Initial Event Listeners
buttonAbout.addEventListener('click', handleAboutClick);
buttonContact.addEventListener('click', handleContactClick);

if (exploreButton) {
    exploreButton.addEventListener('click', handleExploreClick);
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    goToHome();
});