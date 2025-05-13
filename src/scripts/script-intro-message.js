//Dialog intro
const dialogIntro = document.querySelector('.dialog-intro');
//Button dialog intro EXPLORE
const button = document.querySelector('.button--intro');

button.addEventListener('click', (e) => {
    e.preventDefault();

    centralMessage.style.display = 'block';

    dialogIntro.open = false;

    setTimeout(() => {
        centralMessage.style.opacity = '0'
    }, 0)

    setTimeout(() => {
        centralMessage.style.display = 'none'
    }, 8000)
})