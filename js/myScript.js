// const whole = document.querySelector('.involved');
// const donate = document.querySelector('.fa-shopping-basket');
// const banking = document.querySelector('.details');
// const exit = document.querySelector('.close');
// const reg = document.querySelector('.register');
// const male = document.querySelector('.fa-male');


// banking.style.display = 'none';
// reg.style.display = 'none';


// donate.addEventListener('click', () => {
//     whole.style.display = 'none';
//     banking.style.display = 'block';
// });


// male.addEventListener('click', () => {
//     whole.style.display = 'none';
//     reg.style.display = 'block';
// });



// exit.addEventListener('click', () => {
//     banking.style.display = 'none';
//     reg.style.display = 'none';
//     whole.style.display = 'block';
// });


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