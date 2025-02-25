document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('animatedVideo');
    const audio = document.getElementById('backgroundAudio');
    const speedControl = document.getElementById('speedControl');
    const speedValue = document.getElementById('speedValue');
    const playSoundButton = document.getElementById('playSound');

    if (!video || !audio || !speedControl || !speedValue || !playSoundButton) {
        console.error("One or more elements not found in the DOM!");
        return;
    }

    playSoundButton.addEventListener('click', () => {
        video.muted = false; 
        audio.play(); 
        video.play();
        playSoundButton.style.display = 'none';
    });

    speedControl.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        
        if (speed === 0) {
            video.pause();  
        } else {
            if (video.paused) video.play();  
            video.playbackRate = speed;  
        }

        speedValue.textContent = speed + "x";
    });
});
