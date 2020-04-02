import CreateKeyboardHTML from './src/classes/createHTML/CreateKeyboardHTML.js';
import KeyDownAddStyleClass from './src/classes/keyboard/KeyDownAddStyleClass.js';
import KeyUpRemoveStyleClass from './src/classes/keyboard/KeyUpRemoveStyleClass.js';
import MouseDownAddText from './src/classes/mouse/MouseDownAddText.js';
import MouseUpRemoveStyle from './src/classes/mouse/MouseUpRemoveStyle.js';
import TextareaAddText from './src/classes/textarea/TextareaAddText.js';
import MouseOver from './src/classes/mouse/MouseOver.js';

const virtualKeyboardHtml = new CreateKeyboardHTML();
virtualKeyboardHtml.createHTML();


const textarea = document.querySelector('.textarea');
const wrapper2 = document.querySelector('.wrapper2');
const up = document.querySelectorAll('.caseUp');
const down = document.querySelectorAll('.caseDown');
const ru = document.querySelectorAll('.ru');
const en = document.querySelectorAll('.en');
const capsLock = document.querySelector('.CapsLock');

document.addEventListener('keydown', () => {
  textarea.focus();
});

const obj = {
  Backquote: {
    1: '`', 2: '~', 3: 'ё', 4: 'Ё',
  },
  Digit1: {
    1: '1', 2: '!', 3: '2', 4: '!',
  },
  Digit2: {
    1: '2', 2: '@', 3: '2', 4: '"',
  },
  Digit3: {
    1: '3', 2: '#', 3: '3', 4: '№',
  },
  Digit4: {
    1: '4', 2: '$', 3: '4', 4: ';',
  },
  Digit5: {
    1: '5', 2: '%', 3: '5', 4: '%',
  },
  Digit6: {
    1: '6', 2: '^', 3: '6', 4: ':',
  },
  Digit7: {
    1: '7', 2: '&', 3: '7', 4: '?',
  },
  Digit8: {
    1: '8', 2: '*', 3: '8', 4: '*',
  },
  Digit9: {
    1: '9', 2: '(', 3: '9', 4: '(',
  },
  Digit0: {
    1: '0', 2: ')', 3: '0', 4: ')',
  },
  Minus: {
    1: '-', 2: '_', 3: '-', 4: '_',
  },
  Equal: {
    1: '=', 2: '+', 3: '=', 4: '+',
  },
  KeyQ: {
    1: 'q', 2: 'Q', 3: 'й', 4: 'Й',
  },
  KeyW: {
    1: 'w', 2: 'W', 3: 'ц', 4: 'Ц',
  },
  KeyE: {
    1: 'e', 2: 'E', 3: 'у', 4: 'У',
  },
  KeyR: {
    1: 'r', 2: 'R', 3: 'к', 4: 'К',
  },
  KeyT: {
    1: 't', 2: 'T', 3: 'е', 4: 'Е',
  },
  KeyY: {
    1: 'y', 2: 'Y', 3: 'н', 4: 'Н',
  },
  KeyU: {
    1: 'u', 2: 'U', 3: 'г', 4: 'Г',
  },
  KeyI: {
    1: 'i', 2: 'I', 3: 'ш', 4: 'Ш',
  },
  KeyO: {
    1: 'o', 2: 'O', 3: 'щ', 4: 'Щ',
  },
  KeyP: {
    1: 'p', 2: 'P', 3: 'з', 4: 'З',
  },
  BracketLeft: {
    1: '[', 2: '{', 3: 'х', 4: 'Х',
  },
  BracketRight: {
    1: ']', 2: '}', 3: 'ъ', 4: 'Ъ',
  },
  Backslash: {
    1: '\\', 2: '|', 3: '\\', 4: '/',
  },
  KeyA: {
    1: 'a', 2: 'A', 3: 'ф', 4: 'Ф',
  },
  KeyS: {
    1: 's', 2: 'S', 3: 'ы', 4: 'Ы',
  },
  KeyD: {
    1: 'd', 2: 'D', 3: 'в', 4: 'В',
  },
  KeyF: {
    1: 'f', 2: 'F', 3: 'а', 4: 'А',
  },
  KeyG: {
    1: 'g', 2: 'G', 3: 'п', 4: 'П',
  },
  KeyH: {
    1: 'h', 2: 'H', 3: 'р', 4: 'Р',
  },
  KeyJ: {
    1: 'j', 2: 'J', 3: 'о', 4: 'О',
  },
  KeyK: {
    1: 'k', 2: 'K', 3: 'л', 4: 'Л',
  },
  KeyL: {
    1: 'l', 2: 'L', 3: 'д', 4: 'Д',
  },
  Semicolon: {
    1: ';', 2: ':', 3: 'ж', 4: 'Ж',
  },
  Quote: {
    1: '\'', 2: '"', 3: 'э', 4: 'Э',
  },
  ShiftLeft: {
    1: '', 2: '', 3: '', 4: '',
  },
  ShiftRight: {
    1: '', 2: '', 3: '', 4: '',
  },
  ControlLeft: {
    1: '', 2: '', 3: '', 4: '',
  },
  ControlRight: {
    1: '', 2: '', 3: '', 4: '',
  },
  MetaLeft: {
    1: '', 2: '', 3: '', 4: '',
  },
  AltLeft: {
    1: '', 2: '', 3: '', 4: '',
  },
  AltRight: {
    1: '', 2: '', 3: '', 4: '',
  },
  CapsLock: {
    1: '', 2: '', 3: '', 4: '',
  },
  KeyZ: {
    1: 'z', 2: 'Z', 3: 'я', 4: 'Я',
  },
  KeyX: {
    1: 'x', 2: 'X', 3: 'ч', 4: 'Ч',
  },
  KeyC: {
    1: 'c', 2: 'C', 3: 'с', 4: 'С',
  },
  KeyV: {
    1: 'v', 2: 'V', 3: 'м', 4: 'М',
  },
  KeyB: {
    1: 'b', 2: 'B', 3: 'и', 4: 'И',
  },
  KeyN: {
    1: 'n', 2: 'N', 3: 'т', 4: 'Т',
  },
  KeyM: {
    1: 'm', 2: 'M', 3: 'ь', 4: 'Ь',
  },
  Comma: {
    1: ',', 2: '<', 3: 'б', 4: 'Б',
  },
  Period: {
    1: '.', 2: '>', 3: 'ю', 4: 'Ю',
  },
  Slash: {
    1: '/', 2: '?', 3: '.', 4: ',',
  },
  ArrowUp: {
    1: '▲', 2: '▲', 3: '▲', 4: '▲',
  },
  ArrowLeft: {
    1: '◄', 2: '◄', 3: '◄', 4: '◄',
  },
  ArrowDown: {
    1: '▼', 2: '▼', 3: '▼', 4: '▼',
  },
  ArrowRight: {
    1: '►', 2: '►', 3: '►', 4: '►',
  },
};

const date = new Map(Object.entries(obj));

const set = () => {
  let a = '';
  if (localStorage.length !== 0) {
    a = localStorage.getItem('lang');
    if (a === 'ru') {
      for (let i = 0; i < ru.length; i += 1) {
        ru[i].hidden = false;
      }
      for (let i = 0; i < en.length; i += 1) {
        en[i].hidden = true;
      }
    } else {
      for (let i = 0; i < ru.length; i += 1) {
        ru[i].hidden = true;
      }
      for (let i = 0; i < en.length; i += 1) {
        en[i].hidden = false;
      }
    }
  }
  return;
};

set();

const keydownAddStyle = new KeyDownAddStyleClass(up, down, capsLock, ru, en);
const keyUpRemoveStyle = new KeyUpRemoveStyleClass(up, down, capsLock, ru, en);
const mouseDownAddText = new MouseDownAddText(up, down, capsLock, ru, en, date, textarea);
const mouseUpRemoveStyle = new MouseUpRemoveStyle(up, down, capsLock, textarea);
const textareaAddText = new TextareaAddText(up, down, ru, date, textarea);
const mouseOverRemoveStyle = new MouseOver(up, down, capsLock, textarea);
document.addEventListener('keydown', keydownAddStyle);
document.addEventListener('keyup', keyUpRemoveStyle);
wrapper2.addEventListener('mousedown', mouseDownAddText);
wrapper2.addEventListener('mouseup', mouseUpRemoveStyle);
document.addEventListener('keydown', textareaAddText);
wrapper2.addEventListener('mouseout', mouseOverRemoveStyle);