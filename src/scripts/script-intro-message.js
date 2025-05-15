//Dialog intro
const dialogIntro = document.querySelector('.dialog-intro');
//Button dialog intro EXPLORE
const buttonIntro = document.querySelector('.button--intro');

buttonIntro.addEventListener('click', (e) => {
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