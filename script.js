document.addEventListener('DOMContentLoaded', () => {
    const butterflies = document.querySelectorAll('.butterfly');

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    butterflies.forEach(butterfly => {
        butterfly.addEventListener('animationiteration', () => {
            const rect = butterfly.getBoundingClientRect();
            createParticle(rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
    });
});
