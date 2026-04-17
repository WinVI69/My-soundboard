const buttons = document.querySelectorAll('.theButton');

buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const audio = buttons.nextElementSibling;

        if(audio && audio.tagName === 'AUDIO'){
        audio.play();
        }
    })
})
