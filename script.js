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


//Battle animations

const charmanderMove = [
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)" },
];

const charmanderTiming = {
    duration: 3000,
    iterations: Infinity,
};

document.getElementById('charmanderAni').animate(charmanderMove, charmanderTiming);
console.log('Starting animation');