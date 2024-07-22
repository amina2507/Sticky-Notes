function getRandomColour() {
  const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
  const randomIndex = Math.floor(Math.random() * colours.length);
  return colours[randomIndex];
}

function note() {
  let newnote = document.querySelector('#new-note')
  let text = newnote.value;
  if (text === '') {
    alert('Note cannot be empty');
    return;
  }
  const notecard = document.createElement('div')
  const del = document.createElement('button')
  notecard.classList.add('sticky-note')
  notecard.style.backgroundColor = getRandomColour();
  del.classList.add('delete-button');
  del.innerText = 'X';
  del.addEventListener('click', () => {
    notecard.remove();
  })
  const noteContent = document.createElement('p');
  noteContent.innerText = text;

  notecard.appendChild(del);
  notecard.appendChild(noteContent);
  const notesContainer = document.querySelector('.sticky-notes');
  notesContainer.appendChild(notecard);

  newnote.value = '';
}

let but = document.querySelector('.add-button');

but.addEventListener('click', note);
