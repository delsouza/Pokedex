const btnRetroceder = document.querySelector('.prev');
const btnAvancar = document.querySelector('.next');
const form = document.querySelector('.form');
let index = 1;

const obterPokemon = async (pokemon) =>
{
    const pokemonApi = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();
    return pokemonApi;
}

const processarPokemon = async (pokemon) =>
{
    const dadosPokemon = await obterPokemon(pokemon);

    document.querySelector('.pokemon_name').innerHTML = dadosPokemon.name;
    document.querySelector('.pokemon_number').innerHTML = dadosPokemon.id;
    document.querySelector('.pokemon_imagem').src = dadosPokemon['sprites']['versions']['generation-v']['black-white']['front_default'];
}

form.addEventListener('submit', (event) => {
    //TODO
});

btnRetroceder.addEventListener('click', () => 
{
    console.log(index);
    index = index == 1 ? 1 : index -= 1; //Evitar out of bound
    processarPokemon(index);
});

btnAvancar.addEventListener('click', () => 
{
    console.log(index);
    index = index == 898 ? 898 : index += 1; //TODO
    processarPokemon(index);
});

processarPokemon(index);
