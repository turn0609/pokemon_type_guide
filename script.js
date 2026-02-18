console.log("starting script");

//Pokeball Cursor

const pokeCursor = document.querySelector('#pokeCursor');

document.addEventListener('mousemove', (event) => {
        pokeCursor.style.position = 'fixed';
        pokeCursor.style.left = event.clientX + 'px';
        pokeCursor.style.top = event.clientY + 'px';

    });

//Dark mode

const Checkbox = document.querySelector('#toggle-dark');

Checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', Checkbox.checked);
    });


//Battle animations

const battleButton = document.getElementById('battlebutton');
const battleSteps = document.querySelectorAll('.battle-player, .battle-opponent');

battleButton.addEventListener('click', function() {
    battleButton.textContent = 'Restart Battle';
    battleSteps.forEach(row => row.classList.remove('battle-active'));
    battleSteps.forEach((row, index) => {
        setTimeout(function () {row.classList.add('battle-active');}, index * 2000);
    });
});

