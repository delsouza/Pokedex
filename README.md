# Pokédex

Este é um projeto que usa a API PokeAPI para exibir informações sobre Pokémon.

## Constantes

    btnRetroceder: Refere-se ao elemento HTML com a classe "prev".
    btnAvancar: Refere-se ao elemento HTML com a classe "next".
    form: Refere-se ao elemento HTML com a classe "form".
    input: Refere-se ao elemento HTML com a classe "input_search".
    index: Armazena o índice do Pokémon atual. Inicialmente definido como 1.

## Funções

    obterPokemon: Faz uma chamada à API PokeAPI com o nome do Pokémon especificado como argumento e retorna as informações sobre esse Pokémon.
    processarPokemon: Obtém as informações sobre o Pokémon usando a função obterPokemon e, em seguida, atualiza as informações exibidas na página.

## Event Listeners

    Form Submit: Adicionado ao formulário, impede sua submissão padrão e, em vez disso, chama a função processarPokemon com o valor digitado no campo de entrada.
    Botão "Retroceder" Click: Adicionado ao botão "Retroceder", atualiza o índice e, em seguida, chama a função processarPokemon com o índice atualizado.
    Botão "Avançar" Click: Adicionado ao botão "Avançar", atualiza o índice e, em seguida, chama a função processarPokemon com o índice atualizado.

## Inicialização

A função processarPokemon é chamada com o índice inicial de 1 para exibir informações sobre o primeiro Pokémon.

## Notas adicionais

    O índice máximo de Pokémon é 898. O código impede que o índice ultrapasse esse valor.
    O código usa a chamada fetch para obter dados da API PokeAPI. O resultado da chamada é transformado em um objeto JSON usando .json().
    O código atualiza vários elementos HTML com informações sobre o Pokémon, incluindo o nome, o número e a imagem do Pokémon.

## Potenciais melhorias

    Adicionar validação para garantir que o valor digitado no campo de entrada seja um nome de Pokémon válido.
    Adicionar suporte para exibir informações adicionais sobre o Pokémon, como tipo e habilidades.
    Melhorar a responsividade.
