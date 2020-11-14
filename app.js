// DOM Objects seclections
const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');



fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mainScreen.classList.remove('hide');
        pokeName.textContent = data.name;
        pokeId.textContent = data.id;
        pokeHeight.textContent = data.height;
        pokeWeight.textContent = data.weight;

        const dataTypes = data.types;
        pokeTypeOne.textContent = dataTypes[0].type.name;
        pokeTypeTwo.textContent = dataTypes[1] ? dataTypes[1].type.name : '';
    });