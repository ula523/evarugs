const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play__wrap');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');

    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
});