console.log("starting script");

//Pokeball Cursor

const pokeCursor = document.querySelector('#pokeCursor');

document.addEventListener('mousemove', function (event) {
    pokeCursor.style.position = 'fixed';
    pokeCursor.style.left = event.clientX + 'px';
    pokeCursor.style.top = event.clientY + 'px';

});

//Dark mode

const Checkbox = document.querySelector('#toggle-dark');

Checkbox.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', Checkbox.checked);
});


//Battle animations -> will move to css eventually

const battleButton = document.getElementById('battlebutton');
const battleRows = document.querySelectorAll('.battle-player, .battle-opponent');

battleButton.addEventListener('click', function() {
    battleRows.forEach(row => row.classList.remove('battle-active'));

    battleButton.textContent = 'Restart Battle';

    battleRows.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add('battle-active');
        }, index * 2000);
    });
});

