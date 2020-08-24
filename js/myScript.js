// Community section
const recipeLink = document.querySelector('.recipe');
const avoLink = document.querySelector('.avo');
const churroLink = document.querySelector('.churr');
const fullQuasa = document.querySelector('.fullQuasa');
const fullOnion = document.querySelector('.fullOnion');
const fullChurro = document.querySelector('.fullChurro');
const hide = document.querySelector('.exit1');
const hide2 = document.querySelector('.exit2');
const hide3 = document.querySelector('.exit3');

fullQuasa.style.display = 'none';
fullOnion.style.display = 'none';
fullChurro.style.display = 'none';

recipeLink.addEventListener('click', e => {
    e.stopPropagation();
    recipeLink.style.display = 'none';
    fullQuasa.style.display = 'block';
});

avoLink.addEventListener('click', e => {
    e.stopPropagation();
    avoLink.style.display = 'none';
    fullOnion.style.display = 'block';
});

churroLink.addEventListener('click', e => {
    e.stopPropagation();
    churroLink.style.display = 'none';
    fullChurro.style.display = 'block';
});

hide.addEventListener('click', () => {
    recipeLink.style.display = 'block';
    fullQuasa.style.display = 'none';
});

hide2.addEventListener('click', () => {
    avoLink.style.display = 'block';
    fullOnion.style.display = 'none';
});

hide3.addEventListener('click', () => {
    churroLink.style.display = 'block';
    fullChurro.style.display = 'none';
});

// End of Community section


const show = document.querySelector('.member');
const butto = document.querySelector('.but');
const read = document.querySelector('.AboutOne');
const showTwo = document.querySelector('.ReadMoreTwo');

show.style.display = 'none';

butto.addEventListener('click', () => {
    butto.style.display = 'none';
    show.style.display = 'block';
});

show.addEventListener('click', () => {
    show.style.display = 'none';
    butto.style.display = 'block';
});

// Get Involved
const donate = document.querySelector('.donateBtn');
const volunteer = document.querySelector('.volBtn');
const sponsor = document.querySelector('.sponsBtn');
const volForm = document.querySelector('.register');

volForm.style.display = 'none';


