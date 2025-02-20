document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.style.opacity = 0;
    header.style.transition = 'opacity 2s';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 100);
});