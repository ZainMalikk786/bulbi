document.addEventListener('DOMContentLoaded', () => {
    const butterfly = document.querySelector('.butterfly');
    let butterflyX = window.innerWidth / 2;
    let butterflyY = window.innerHeight / 2;
    let butterflySpeed = 5;

    function updateButterflyPosition() {
        butterfly.style.left = `${butterflyX}px`;
        butterfly.style.top = `${butterflyY}px`;
    }

    function moveButterfly(e) {
        const { clientX: x, clientY: y } = e;
        const rect = butterfly.getBoundingClientRect();
        const centerX = x - rect.width / 2;
        const centerY = y - rect.height / 2;

        if (centerX > 0 && centerX < window.innerWidth - rect.width) {
            butterflyX = centerX;
        }
        if (centerY > 0 && centerY < window.innerHeight - rect.height) {
            butterflyY = centerY;
        }

        updateButterflyPosition();
    }

    document.addEventListener('mousemove', moveButterfly);
    updateButterflyPosition();
});
