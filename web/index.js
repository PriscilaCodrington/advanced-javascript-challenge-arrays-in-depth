import { utils } from '../exercise/code.js';
import { POKEMONS, EXPECTATION_ITEMS } from '../data/expectations.js';

const grid = document.querySelector('#grid');

Object.entries(EXPECTATION_ITEMS).forEach(([functionName, content]) => {
  const row = document.createElement('div');
  const name = document.createElement('div');
  const expected = document.createElement('div');
  const result = document.createElement('div');

  name.innerText = content.name;
  name.title = functionName;

  row.appendChild(name);
  row.appendChild(expected);
  row.appendChild(result);
  grid.appendChild(row);
})

