/*
  You should write the code in this file
*/

const getUniqueTypes = pokemons => {

    let uniqueTypes = [];
    pokemons.forEach((pokemon) => {
      if (!uniqueTypes.includes(pokemon.type)) {
        uniqueTypes.push(pokemon.type)
      }
    });
    
    return uniqueTypes
  };


const orderByPower = pokemons => {

    return pokemons.sort((a,b) => a.power - b.power)
  
};



const filterByType = (type, pokemons) => {

  return pokemons.filter((pokemon) => {
      return pokemon.type === type
  });

};

const getPokemonNamesForType = (type, pokemons) => {
  let pokeName = pokemons.filter(pokemon => pokemon.type === type)
  return pokeName.map(pokemon => pokemon.name)
  
};


const getTotalPokemonPowerForType = (type, pokemons) => {
  let pokeTypePower = pokemons.filter(pokemon => pokemon.type ===type);
  return pokeTypePower.reduce((acc, poke) => acc += poke.power, 0);
};


const getTypeAggregatedInformation = ( type, pokemons) => {
  //Doesn't work, I have to fixed it.
  let pokeObj = pokemons.reduce((acc,elem) => {
    if (elem.type == type){
       return {
        names: acc.names + ", " + elem.name,
        plusPower: acc.plusPower + elem.power}
       }},{names: "", plusPower: 0})
    
        return pokeObj
    
};

export const utils = {
  getUniqueTypes,
  orderByPower,
  filterByType,
  getPokemonNamesForType,
  getTotalPokemonPowerForType,
  getTypeAggregatedInformation
};
