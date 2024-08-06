document.addEventListener('DOMContentLoaded', (event) => {
    const discordLink = document.querySelector('.discord-link');
    const youtubeLink = document.querySelector('.youtube-link');

    discordLink.addEventListener('mouseenter', () => {
        discordLink.style.transition = 'transform 0.3s ease';
        discordLink.style.transform = 'scale(1.2)';
    });

    discordLink.addEventListener('mouseleave', () => {
        discordLink.style.transform = 'scale(1)';
    });

    youtubeLink.addEventListener('mouseenter', () => {
        youtubeLink.style.transition = 'transform 0.3s ease';
        youtubeLink.style.transform = 'scale(1.2)';
    });

    youtubeLink.addEventListener('mouseleave', () => {
        youtubeLink.style.transform = 'scale(1)';
    });
});
const butterfly = document.getElementById('butterfly');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = butterfly.offsetLeft + 20 + 'px';
    particle.style.top = butterfly.offsetTop + 20 + 'px';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 2000);
}

setInterval(createParticle, 200);
