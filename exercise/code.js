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
  return pokeTypePower.reduce((acc, poke) =>  { console.log(acc) 
    return acc += poke.power}, 0);
};


const getTypeAggregatedInformation = (type, pokemons) => {
  
        /*let pokeFilt = pokemons.filter(pokemon => pokemon.type ===type);
        //console.log(pokeFilt); 
        let pokePower = pokeFilt.reduce((acc, poke) => acc += poke.power, 0)
        console.log(pokePower)
        let pokeNames = pokeFilt.reduce((acc,poke) => acc = acc + '' + poke.name + ' ,', " " );
        console.log(pokeNames)

        const pokeObj = {
              type: type,
              pokemons: [pokeNames],
              power: pokePower
          }
      console.log(pokeObj)
        return pokeObj
        */
        return pokemons.reduce((acc, pokemon) => {
          
          if(pokemon.type===type){
           acc.pokemons.push(pokemon.name);
           acc.power+=pokemon.power;
          return acc;
          }
          return acc;
       }, {type, pokemons: [], power: 0})

       
};



export const utils = {
  getUniqueTypes,
  orderByPower,
  filterByType,
  getPokemonNamesForType,
  getTotalPokemonPowerForType,
  getTypeAggregatedInformation
};
