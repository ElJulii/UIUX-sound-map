//Buttons
const buttonAbout = document.querySelector('.about');
const buttonContact = document.querySelector('.contact');

//Dialogs
const dialogAbout = document.querySelector('.dialog-about');
const dialogContact = document.querySelector('.dialog-contact');

const aboutLinkSpan = buttonAbout ? buttonAbout.querySelector('span') : null;
const contactLinkSpan = buttonContact ? buttonContact.querySelector('span') : null;


//country container
const country = document.querySelector('.section-country-info');

//Central message
const centralMessage = document.querySelector('.message');


// --- Function to update header button texts based on dialog state ---
function updateHeaderButtonText() {
    if (!aboutLinkSpan || !contactLinkSpan) return;

    if (dialogAbout.open) {
        aboutLinkSpan.textContent = 'home';
        contactLinkSpan.textContent = 'contact us';
    } else if (dialogContact.open) {
        aboutLinkSpan.textContent = 'about us';
        contactLinkSpan.textContent = 'home';
    } else {
        aboutLinkSpan.textContent = 'about us';
        contactLinkSpan.textContent = 'contact us';
    }
}


buttonAbout.addEventListener('click', (e) => {
    e.preventDefault();

    // --- Logic for the About button (toggles About dialog and text) ---
    if (dialogAbout.open) {
        dialogAbout.open = false;
        updateHeaderButtonText();
        centralMessage.style.display = 'block';
        country.style.display = 'none';
    } else {
        dialogContact.open = false;
        country.style.display = 'none';
        centralMessage.style.display = 'none';

        dialogAbout.open = true;
        updateHeaderButtonText();
    }
});


buttonContact.addEventListener('click', (e) => {
    e.preventDefault();

    // --- Logic for the Contact button (toggles Contact dialog and text) ---
    if (dialogContact.open) {
        dialogContact.open = false;
        updateHeaderButtonText();
        centralMessage.style.display = 'block';
        country.style.display = 'none';
    } else {
        dialogAbout.open = false;
        country.style.display = 'none';
        centralMessage.style.display = 'none';

        dialogContact.open = true;
        updateHeaderButtonText();
    }
});


// --- Listen for dialog closing (as a fallback or for other close methods) ---
if (dialogAbout && dialogContact) {
    dialogAbout.addEventListener('close', () => {
        if (!dialogAbout.open && !dialogContact.open) {
             centralMessage.style.display = 'block';
             country.style.display = 'none';
             updateHeaderButtonText();
        }
    });

    dialogContact.addEventListener('close', () => {
         if (!dialogAbout.open && !dialogContact.open) {
             centralMessage.style.display = 'block';
             country.style.display = 'none';
             updateHeaderButtonText();
         }
    });
}


// --- Initial State ---
updateHeaderButtonText();