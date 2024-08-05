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
