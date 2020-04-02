let section = document.createElement('section');
document.body.append(section);

let h1 = document.createElement('h1');
h1.classList.add("tittle");
h1.innerHTML = "RSS Виртуальная клавиатура";
section.append(h1);

let textarea = document.createElement('textarea');
textarea.classList.add('entry-field');
section.append(textarea);

let keyboardСontainer = document.createElement('div');
keyboardСontainer.classList.add('keyboard-container');
section.append(keyboardСontainer);



  for(let i = 0; i < 5; i++) {
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboardСontainer.append(keyboardRow);
  }
