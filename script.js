function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; 
    audio.play();
    key.classList.add(`playing${keyCode}`);
    setTimeout(function() {
        key.classList.remove(`playing${keyCode}`);
    }, 200);
}


window.addEventListener('keydown', function(e) {
    playSound(e.keyCode);
});


const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function() {
        const keyCode = this.getAttribute('data-key');
        playSound(keyCode);
    });
});
