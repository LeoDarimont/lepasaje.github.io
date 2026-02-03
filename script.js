document.querySelectorAll('[data-carousel]').forEach(card => {
    let index = 0;
    const images = card.querySelector('.carousel-images');
    const dots = card.querySelectorAll('.carousel-dot');

    card.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % dots.length;
        update();
    });

    card.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + dots.length) % dots.length;
        update();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            update();
        });
    });

    function update() {
        images.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
    }
});
