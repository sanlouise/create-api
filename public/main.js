const url = '/api';

fetch(url).then(res => res.json())
  .then(json => {
  console.log(json);

  // Front end and back end come together
  let container = document.createElement('div');
  container.textContent = json.name;
  let output = document.query.querySelector('#output');
  output.appendChild(container);
})
