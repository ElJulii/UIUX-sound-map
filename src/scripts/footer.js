document.addEventListener('DOMContentLoaded', function() {
    const footerContent = document.querySelector('.footer__content');
    const date = new Date();
    const year = date.getFullYear();

    footerContent.textContent += ` ${year} Terra Trivia. All rights reserved.`;
});