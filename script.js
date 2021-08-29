// creating constants to pick up the classes and their innehall and use JS on them
// getElementById picks up the open and close ID
// queryselector picks up the class container

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// addEventListener as click and fat arrow to tell what action to perform
// classList.add and .remove will do so to the class .show-nav when clicked on

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));