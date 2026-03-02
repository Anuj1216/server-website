const fireAudio = new Audio('fire-crackling.mp3');
fireAudio.loop = true;
fireAudio.volume = 0.3;

let soundEnabled = false;

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && soundEnabled) {
            fireAudio.play().catch(() => { });
        } else {
            fireAudio.pause();
        }
    });
}, { threshold: 0.3 });

heroObserver.observe(document.getElementById('hero'));

function toggleFireSound() {
    const btn = document.getElementById('soundToggle');
    if (soundEnabled) {
        fireAudio.pause();
        btn.textContent = '🔇 Sound Off';
        soundEnabled = false;
    } else {
        fireAudio.play().catch(() => { });
        btn.textContent = '🔥 Sound On';
        soundEnabled = true;
    }
}