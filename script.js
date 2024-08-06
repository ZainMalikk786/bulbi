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

const butterfly1 = document.getElementById('butterfly1');
const butterfly2 = document.getElementById('butterfly2');

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 2000);
}

function updateParticles() {
    const rect1 = butterfly1.getBoundingClientRect();
    const rect2 = butterfly2.getBoundingClientRect();

    createParticle(rect1.left + rect1.width / 2, rect1.top + rect1.height / 2);
    createParticle(rect2.left + rect2.width / 2, rect2.top + rect2.height / 2);
}

setInterval(updateParticles, 500);
