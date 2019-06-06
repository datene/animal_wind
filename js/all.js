const allAnimals = ["🦖","🦕","🦐","🐡","🐠","🐟","🐬","🐋","🦈","🐅","🐆","🦓","🦍","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🐈","🐓","🦝","🦡","🦔"];

const animal = allAnimals[Math.floor(Math.random()*allAnimals.length)];
const animalTarget = document.querySelector('#set-emoji');

document.addEventListener('DOMContentLoaded', (event) => {
  animalTarget.innerHTML = animal;
})