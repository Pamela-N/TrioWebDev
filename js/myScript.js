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