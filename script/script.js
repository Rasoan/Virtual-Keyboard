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
keyboardСontainer.id = "keyboard-id";
section.append(keyboardСontainer);

  for(let i = 0; i < 5; i++) {
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboardСontainer.append(keyboardRow);
  }


  let rows = document.getElementsByClassName('keyboard-row');
  let keys = [];






               let object_keys = {
                  buttons: [
                 [
                {code: 'Backquote', en: '`', ru: 'ё', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit1', en: '1', ru: '1', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit2', en: '2', ru: '2', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit3', en: '3', ru: '3', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit4', en: '4', ru: '4', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit5', en: '5', ru: '5', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit6', en: '6', ru: '6', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit7', en: '7', ru: '7', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit8', en: '8', ru: '8', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit9', en: '9', ru: '9', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Digit0', en: '0', ru: '0', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Minus', en: '-', ru: '-', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Equal', en: '=', ru: '=', print: true,    returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                {code: 'Backspace', en: 'Backspace', ru: 'Backspace', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} } 
                 ],
                 [
                { code: 'Tab', en: 'Tab', ru: 'Tab', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} }, 
                { code: 'KeyQ', en: 'q', ru: 'й', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyW', en: 'w', ru: 'ц', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyE', en: 'e', ru: 'у', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyR', en: 'r', ru: 'к', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyT', en: 't', ru: 'е', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyY', en: 'y', ru: 'н', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyU', en: 'u', ru: 'г', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyI', en: 'i', ru: 'ш', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyO', en: 'o', ru: 'щ', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyP', en: 'p', ru: 'з', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'BracketLeft', en: '[', ru: 'х', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} }, 
                { code: 'BracketRight', en: ']', ru: 'ъ', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Backslash', en: '\\', ru: '\\', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} }
                 ],
                 [
                { code: 'CapsLock', en: 'CapsLk', ru: 'CapsLk', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyA', en: 'a', ru: 'ф', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyS', en: 's', ru: 'ы', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyD', en: 'd', ru: 'в', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyF', en: 'f', ru: 'а', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyG', en: 'g', ru: 'п', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyH', en: 'h', ru: 'р', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyJ', en: 'j', ru: 'о', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyK', en: 'k', ru: 'л', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyL', en: 'l', ru: 'д', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Semicolon', en: ';', ru: 'ж', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Quote', en: '\'', ru: 'э', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Enter', en: 'Enter', ru: 'Enter', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} }
                 ],
                 [
                { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyZ', en: 'z', ru: 'я', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyX', en: 'x', ru: 'ч', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyC', en: 'c', ru: 'с', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyV', en: 'v', ru: 'м', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyB', en: 'b', ru: 'и', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyN', en: 'n', ru: 'т', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'KeyM', en: 'm', ru: 'ь', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Comma', en: ',', ru: 'б', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Period', en: '.', ru: 'ю', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Slash', en: '\/', ru: '.', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'ArrowUp', en: '▲', ru: '▲', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'ShiftRight', en: 'Shift', ru: 'Shift', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} }
                 ],
                 [
                { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'MetaLeft', en: '&#65794;&#65794;<br>&#65794;&#65794;', ru: '&#65794;&#65794;<br>&#65794;&#65794;', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'AltLeft', en: 'Alt', ru: 'Alt', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Space', en: ' ', ru: ' ', print: true, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'AltRight', en: 'Alt', ru: 'Alt', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'ArrowLeft', en: '◄', ru: '◄', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'ArrowDown', en: '▼', ru: '▼', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'ArrowRight', en: '►', ru: '►', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} },
                { code: 'Delete', en: 'Del', ru: 'Del', print: false, returns(argument) { if (argument == "en") return this.en; else return this.ru} }
                 ]
                ]          
               };
               
        
               //alert(object_keys.buttons[3][6].returns("ru"));

             





function inner_html(language) {


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



    let count_shift = 0;
    let count_alt = 0;
    for (let i = 0; i < end; i++) {
      keys.push(document.createElement('div'));
      keys[i].innerHTML = object_keys.buttons[gg][i].returns(language);
      switch (object_keys.buttons[gg][i].returns(language)) {
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
            if (count_shift == 0) {
              keys[i].classList.add('key', 'key-special', 'key-shift-left');
              count_shift++;             
              }
              else {
                keys[i].classList.add('key', 'key-special', 'key-shift-right');
                count_shift--;
              }
          break;
          case "▲":
            keys[i].classList.add('key', 'key-special', 'key-top');
          break;
          case "Ctrl":
            keys[i].classList.add('key', 'key-special', 'key-ctrl');
          break;
          case "&#65794;&#65794;<br>&#65794;&#65794;":
            keys[i].classList.add('key', 'key-special', 'key-win');
          break;
          case "Alt":
            if (count_alt == 0) {
              keys[i].classList.add('key', 'key-special', 'key-alt-left');
              count_alt++;             
              }
              else {
                keys[i].classList.add('key', 'key-special', 'key-alt-right');
                count_alt--;
              }
          break;
          case " ":
            keys[i].classList.add('key', 'key-special', 'key-nbsp');
          break;
          case "◄":
            keys[i].classList.add('key', 'key-special', 'key-left');
          break;
          case "▼":
            keys[i].classList.add('key', 'key-special', 'key-bottom');
          break;
          case "►":
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


}
 // добавить все клавиши

window.addEventListener("load", function() {
  if (localStorage.language == "ru" || localStorage.language == "en") {
    inner_html(localStorage.language);
  }
  else inner_html("en");


  document.querySelector('.entry-field').focus();
});

let body = document.querySelector('body');

body.addEventListener('click', function(e){
  document.querySelector('.entry-field').focus();
});




let flag = false;
let key_div;
  



     
document.addEventListener('keydown', function(e) { 

  if ( e.shiftKey == true && e.altKey == true &&  e.ctrlKey == true) {
  

    document.querySelectorAll('.key').forEach( element => {

      if (element.classList.contains('key-shift') || element.classList.contains('key-ctrl') || element.classList.contains('key-alt') ) {
       element.classList.add('key-active');
      }
    });

  }

   
 });

     


      
      

      document.addEventListener('keydown', function(e) { 

       if ( e.shiftKey == true && e.altKey == true && flag == false  && e.ctrlKey != true) {

        key_div = document.querySelectorAll('.keyboard-row');

        key_div.forEach(element => {
         element.innerHTML = "";
        });
        
        
         localStorage.language = "ru";
         inner_html("ru");
         flag = true;
         return;
       }
       
       if ( e.shiftKey == true && e.altKey == true && flag == true && e.ctrlKey != true ) {
        key_div = document.querySelectorAll('.keyboard-row');
        key_div.forEach(element => {
       element.innerHTML = "";
     });
        document.getElementsByClassName('keyboard-container').innerHTML = "";
        localStorage.language = "en";
        inner_html("en");
        flag = false;
        return;
       }

        
      });

      


      document.addEventListener('keydown', function(e) { 
        document.querySelectorAll('.key').forEach( element => {

          if (element.innerHTML == e.key.toLowerCase() && element.innerHTML != "Shift" && element.innerHTML != "Alt")
           element.classList.add('key-active');

           if (element.innerHTML == "Tab"  && e.code == "Tab") {
            e.preventDefault();
            element.classList.add('key-active');
           }

           if( element.innerHTML == "𐄂𐄂<br>𐄂𐄂" && e.code == "MetaLeft") 
           element.classList.add('key-active');

           if ( element.innerHTML == "CapsLk" && e.code == "CapsLock")
           element.classList.add('key-active');

           if (element.innerHTML == "▲" && e.code == "ArrowUp")
           element.classList.add('key-active');
           
           
           if (element.classList.contains('key-shift-left')  && e.code == "ShiftLeft")
           element.classList.add('key-active');

           if (element.classList.contains('key-shift-right')  && e.code == "ShiftRight")
           element.classList.add('key-active');

           if (element.innerHTML == "Ctrl"  && e.code == "ControlLeft")
           element.classList.add('key-active');

           if (element.classList.contains('key-alt-left')  && e.code == "AltLeft")
           element.classList.add('key-active');

           if (element.classList.contains('key-alt-right')  && e.code == "AltRight")
           element.classList.add('key-active');

           if (element.innerHTML == '◄' && e.code == "ArrowLeft")
           element.classList.add('key-active');

           if (element.innerHTML == '▼' && e.code == "ArrowDown")
           element.classList.add('key-active');

           if (element.innerHTML == '►' && e.code == "ArrowRight")
           element.classList.add('key-active');

           if (element.classList.contains('key-del')  && e.code == "Delete")
           element.classList.add('key-active');

           if (element.classList.contains('key-backspace')  && e.code == "Backspace")
           element.classList.add('key-active');

           if (element.classList.contains('key-enter')  && e.code == "Enter")
           element.classList.add('key-active');
        });
        console.log(e.code);
      });

      document.addEventListener('keyup', function(e) { 
        document.querySelectorAll('.key').forEach( element => {
           element.classList.remove('key-active');
        });
      });

      
      
      
      document.addEventListener('keydown', function(e) {
         if (e.code == "CapsLock") {
          document.querySelectorAll('.key').forEach( element => {

            if (!element.classList.contains('key-special'))
              element.classList.toggle('key-style-toupper')
          });


         }
      });
      



// pul

 