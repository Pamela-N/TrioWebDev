
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


                         
const show = document.querySelector('.ReadMore');
const butto = document.querySelector('.but');
const read = document.querySelector('.AboutOne');
const showTwo = document.querySelector('.ReadMoreTwo');

show.style.display = 'none';
// This function make the full information on the about page display when you click on the read more button
butto.addEventListener('click', () => {
    butto.style.display = 'none';
    show.style.display = 'block';
});

show.addEventListener('click', () => {
    butto.style.display = 'block';
    show.style.display = 'none';
});

