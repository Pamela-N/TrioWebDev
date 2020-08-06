// Community section
const recipeBtn = document.querySelector('.recipe');
const fullRec = document.querySelector('.fullRecipe');
const hide = document.querySelector('.exit');
const show = document.querySelector('.member');
const butto = document.querySelector('.but');
const read = document.querySelector('.AboutOne');


fullRec.style.display = 'none';
show.style.display = 'none';

recipeBtn.addEventListener('click', () => {
    recipeBtn.style.display = 'none';
    fullRec.style.display = 'block';
});

fullRec.addEventListener('click', () => {
    recipeBtn.style.display = 'block';
    fullRec.style.display = 'none';
});

// End of Community section
// About Section functions 
// This function make the full information on the about page display when you click on the read more button
butto.addEventListener('click', () => {
    butto.style.display = 'none';
    show.style.display = 'block';
});

show.addEventListener('click', () => {
    butto.style.display = 'block';
    show.style.display = 'none';
});