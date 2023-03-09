import isEqual from 'https://esm.run/lodash.isequal';

import { utils } from '../exercise/code.js';
import { POKEMONS, EXPECTATION_ITEMS } from '../data/expectations.js';

const grid = document.querySelector('#grid');

const formatJson = output => JSON.stringify(output, null, 2)

const createOutput = (content, functionName) => {
  const wrapper = document.createElement('div');
  
  const pre = document.createElement('pre');
  const code = document.createElement('code');

  const splittedContent = content.split('\n');

  wrapper.className = 'col adv__code';
  wrapper.appendChild(pre);

  if (splittedContent.length > 4) {
    const toggle = document.createElement('a');
    const collapsedPre = document.createElement('pre');
    const collapsedCode = document.createElement('code');
    const contentToShow = splittedContent.splice(0, 4);
    collapsedPre.className = 'collapse';
    collapsedPre.id = `${functionName}-collapse`;
    toggle.dataset.bsToggle = 'collapse';
    toggle.href = `#${collapsedPre.id}`;
    toggle.innerText = 'Show/Hide output';

    collapsedCode.innerText = splittedContent.join('\n');
    code.innerText = contentToShow.join('\n');

    collapsedPre.appendChild(collapsedCode);

    wrapper.appendChild(collapsedPre);
    wrapper.appendChild(toggle);
  } else {
    code.innerText = content;
  }

  pre.appendChild(code);

  return wrapper;
};

const createOption = (name, value) => `<option value="${value}">${name.join(', ')}</option>`;

const createInput = expectations => {
  const wrapper = document.createElement('div');
  wrapper.className = 'col';

  if(expectations.length > 1) {
    const select = document.createElement('select');
    select.className = 'form-select';
    select.innerHTML = expectations.map((expectation, i) => createOption(expectation.input, i));
    wrapper.appendChild(select);
  } else {
    wrapper.innerHTML = 'N/A';
  }
  
  return wrapper;
}

const createRow = () => {
  const row = document.createElement('div');
  row.className = 'row';

  return row;
};

const createName = (functionName, description) => {
  const name = document.createElement('div');
  name.innerText = functionName;
  name.title = description;
  name.className = 'col';

  return name;
};

const createResult = (handleClick) => {
  const result = document.createElement('div');
  const button = document.createElement('button')
  button.type = 'button';
  button.className = 'btn btn-primary';
  button.innerText = 'Run!';
  button.addEventListener('click', handleClick);

  result.className = 'col';
  result.appendChild(button);

  return result;
}

Object.entries(EXPECTATION_ITEMS).forEach(([functionName, content]) => {
  const { input, output } = content.expectations[0];

  const handleRunClick = () => {
    const executionResult = utils[functionName](...[...input, POKEMONS]);

    const button = result.querySelector('button');

    if (isEqual(executionResult,output)) {
      button.className = 'btn btn-success';
      button.innerText = 'Success ✔️';
    } else {
      button.className = 'btn btn-danger';
      button.innerText = 'Not equal ⛌';
    }

    const showResult = createOutput(formatJson(executionResult) || 'undefined', `result-${functionName}`);
    result.appendChild(showResult);
  }

  const row = createRow();
  const inputContent = createInput(content.expectations);
  const expected = createOutput(formatJson(output), functionName);
  const name = createName(functionName, content.name);
  const result = createResult(handleRunClick);
  
  row.appendChild(name);
  row.appendChild(inputContent);
  row.appendChild(expected);
  row.appendChild(result);
  grid.appendChild(row);
})

