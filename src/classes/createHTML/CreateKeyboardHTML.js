export default class CreateKeyboardHTML {
  createHTML() {
    const divMain = document.createElement('div');
    const wrapper = document.createElement('div');
    const keyboard = document.createElement('div');
    const wrapperTwo = document.createElement('div');
    const text = document.createElement('textarea');
    const body = document.querySelector('body');
    divMain.className = 'keyboard';
    wrapper.className = 'wrapper';
    text.className = 'textarea';
    keyboard.className = 'keyboard__wrapper';
    wrapperTwo.className = 'wrapper2';

    text.setAttribute('name', 'place');
    text.setAttribute('cols', '100');
    text.setAttribute('rows', '15');


    body.append(divMain);
    divMain.append(wrapper);
    wrapper.append(text);
    wrapper.append(keyboard);
    keyboard.append(wrapperTwo);
    const arrClass = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
      'Minus', 'Equal', 'Backspace btn_visual-not-symbol', 'Tab btn_visual-not-symbol', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
      'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete btn_visual-not-symbol', 'CapsLock btn_visual-not-symbol', 'KeyA',
      'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter btn_visual-not-symbol',
      'ShiftLeft btn_visual-not-symbol', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
      'ArrowUp btn_visual-not-symbol', 'ShiftRight btn_visual-not-symbol', 'ControlLeft btn_visual-not-symbol', 'MetaLeft btn_visual-not-symbol',
      'AltLeft btn_visual-not-symbol', 'Space', 'AltRight btn_visual-not-symbol', 'ArrowLeft btn_visual-not-symbol',
      'ArrowDown btn_visual-not-symbol', 'ArrowRight btn_visual-not-symbol', 'ControlRight btn_visual-not-symbol'];
    const arrRuCaseUp = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у',
      'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
      'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;',
      '&#9658;', 'Ctrl'];
    const arrRuCaseDown = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У',
      'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',
      'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;',
      '&#9658;', 'Ctrl'];
    const arrEnCaseUp = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e',
      'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'',
      'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;',
      '&#9658;', 'Ctrl'];
    const arrEnCaseDown = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E',
      'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',
      'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '&#9668;', '&#9660;',
      '&#9658;', 'Ctrl'];

    let j = 0;
    let k = 0;
    let l = 0;
    let o = 0;
    let d = 0;

    for (let i = 0; i < 64; i++) {
      const div = document.createElement('div');
      div.className = `btn-small ${arrClass[j]}`;
      div.innerHTML = `<span class="ru" hidden><span class="caseUp">${arrRuCaseUp[k]}</span>
                   <span class="caseDown" hidden>${arrRuCaseDown[l]}</span></span>
                   <span class="en"><span class="caseUp">${arrEnCaseUp[o]}</span><span class="caseDown" hidden>${arrEnCaseDown[d]}</span>
                   </span>`;
      j++;
      k++;
      l++;
      o++;
      d++;
      wrapperTwo.append(div);
    }
  }
}
