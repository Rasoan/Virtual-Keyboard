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


  let rows = document.getElementsByClassName('keyboard-row');
  let keys = [];
  let text = [ ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
               ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\"],
               ["CapsLk", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
               ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".",  "&#9650", "Shift"],
               ["Ctrl", "&#65794;&#65794;<br>&#65794;&#65794;", "Alt", "&nbsp;", "Alt", "&#9668;", "&#9660;", "&#9658;","Del"]];
  for(let gg = 0; gg < 5; gg++) {
    let end;
    if( gg == 0 || gg == 1) {
      end = 14;
    }
    else if( gg == 2 || gg == 3) {
      end = 13;
    }
    else if( gg == 4) {
      end = 9;
    }


    for (let i = 0; i < end; i++) {
      keys.push(document.createElement('div'));
      keys[i].innerHTML = text[gg][i];
      switch (text[gg][i]) {
        case "Backspace":
          keys[i].classList.add('key', 'key-special', 'key-backspace');
          break;
        case "Tab":
          keys[i].classList.add('key', 'key-special', 'key-tab');
          break;
        case "CapsLk":
          keys[i].classList.add('key', 'key-special', 'key-capslk');
          break;
          case "Enter":
            keys[i].classList.add('key', 'key-special', 'key-enter');
          break;
          case "Shift":
            keys[i].classList.add('key', 'key-special', 'key-shift');
          break;
          case "&#9650":
            keys[i].classList.add('key', 'key-special', 'key-top');
          break;
          case "Ctrl":
            keys[i].classList.add('key', 'key-special', 'key-ctrl');
          break;
          case "&#65794;&#65794;<br>&#65794;&#65794;":
            keys[i].classList.add('key', 'key-special', 'key-win');
          break;
          case "Alt":
            keys[i].classList.add('key', 'key-special', 'key-alt');
          break;
          case "&nbsp;":
            keys[i].classList.add('key', 'key-special', 'key-nbsp');
          break;
          case "&#9668;":
            keys[i].classList.add('key', 'key-special', 'key-left');
          break;
          case "&#9660;":
            keys[i].classList.add('key', 'key-special', 'key-bottom');
          break;
          case "&#9658;":
            keys[i].classList.add('key', 'key-special', 'key-right');
          break;
          case "Del":
            keys[i].classList.add('key', 'key-special', 'key-del');
          break;
        default:
          keys[i].classList.add('key');
      }









      rows[gg].append(keys[i]);
    }
    keys.length = 0;

  }


  

  



  


