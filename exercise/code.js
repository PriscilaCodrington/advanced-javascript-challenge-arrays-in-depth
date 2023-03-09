/*
  You should write the code in this file
*/

const getUniqueTypes = pokemons => {
  // *********************************
  // Write your code here
  // *********************************
  return [
    "water",
    "electric",
    "fire"
  ]
};


const orderByPower = pokemons => {
  // *********************************
  // Write your code here
  // *********************************
  return [
    {
      "name": "Charmander",
      "type": "fire",
      "power": 10
    },
    {
      "name": "Voltorb",
      "type": "electric",
      "power": 10
    },
    {
      "name": "Squirtle",
      "type": "water",
      "power": 20
    },
    {
      "name": "Zapdos",
      "type": "electric",
      "power": 30
    },
    {
      "name": "Raichu",
      "type": "electric",
      "power": 40
    },
    {
      "name": "Pikachu",
      "type": "electric",
      "power": 50
    },
    {
      "name": "Ponyta",
      "type": "fire",
      "power": 50
    }
  ]
};


const filterByType = (type, pokemons) => {
  // *********************************
  // Write your code here
  // *********************************
};


const getPokemonNamesForType = (type, pokemons) => {
  // *********************************
  // Write your code here
  // *********************************
};


const getTotalPokemonPowerForType = (type, pokemons) => {
  // *********************************
  // Write your code here
  // *********************************
};


const getTypeAggregatedInformation = (type, pokemons) => {
  // *********************************
  // Write your code here
  // *********************************
};

export const utils = {
  getUniqueTypes,
  orderByPower,
  filterByType,
  getPokemonNamesForType,
  getTotalPokemonPowerForType,
  getTypeAggregatedInformation
};
