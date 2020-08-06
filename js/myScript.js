// Community section
const recipeBtn = document.querySelector('.recipe');
const fullRec = document.querySelector('.fullRecipe');
const hide = document.querySelector('.exit');

fullRec.style.display = 'none';

recipeBtn.addEventListener('click', () => {
    recipeBtn.style.display = 'none';
    fullRec.style.display = 'block';
});

fullRec.addEventListener('click', () => {
    recipeBtn.style.display = 'block';
    fullRec.style.display = 'none';
});

// End of Community section

