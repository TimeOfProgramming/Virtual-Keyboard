import KeyUpRemoveStyleClass from '../keyboard/KeyUpRemoveStyleClass.js';

export default class MouseDownAddText extends KeyUpRemoveStyleClass {
  constructor(up, down, capsLock, ru, en, obj, textarea) {
    super(up, down, capsLock, ru, en);
    this.obj = obj;
    this.textarea = textarea;
  }

  handleEvent(e) {
    const div = e.target.closest('div');
    if (div.className === 'wrapper2') {
      return;
    }
    const arrClasses = div.className.split(' ');
    const key = arrClasses[1];

    if (key !== 'CapsLock') {
      div.classList.add('active');
    }
    switch (key) {
      case 'Backspace': this.Backspace();
        break;
      case 'Tab': this.Tab();
        break;
      case 'Delete': this.Delete();
        break;
      case 'Enter': this.Enter();
        break;
      case 'Space': this.Space();
        break;
      case 'CapsLock':
        if (this.capsLock.classList.contains('active')) {
          this.runCaps(this.up);
          this.runCaps(this.down);
          div.classList.remove('active');
        } else {
          this.runTrue(this.up);
          this.runFalse(this.down);
          div.classList.add('active');
        }
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.capsLock.classList.contains('active')) {
          this.runTrue(this.down);
          this.runFalse(this.up);
          div.classList.add('active');
        } else {
          this.runTrue(this.up);
          this.runFalse(this.down);
          div.classList.add('active');
        }
        break;
      default: this.Any(key);
    }
  }

  Backspace() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd - 1;
    let str = this.textarea.value;
    str = str.substring(0, start - 1) + str.substring(start);
    this.textarea.value = str;
    this.textarea.focus();
    this.textarea.setSelectionRange(start, end);
  }

  Delete() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    let str = this.textarea.value;
    str = str.substring(0, start) + str.substring(end + 1);
    this.textarea.value = str;
    this.textarea.focus();
    this.textarea.setSelectionRange(start, end);
  }

  Tab() {
    const str = this.textarea.value;
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    this.textarea.value = `${str.substring(0, start)}\t${str.substring(end)}`;
    this.textarea.selectionStart = start + 1;
    this.textarea.selectionEnd = start + 1;
    return this.textarea.focus();
  }

  Enter() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    let str = this.textarea.value;
    str = `${str.substring(0, start)}\n${str.substring(end)}`;
    this.textarea.value = str;
    this.textarea.selectionStart = start + 1;
    this.textarea.selectionEnd = end + 1;
    return this.textarea.focus();
  }

  Space() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    let str = this.textarea.value;
    str = `${str.substring(0, start)} ${str.substring(end)}`;
    this.textarea.value = str;
    this.textarea.selectionStart = start + 1;
    this.textarea.selectionEnd = end + 1;
    return this.textarea.focus();
  }

  Any(e) {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    let str = this.textarea.value;
    str = str.substring(0, start) + this.lang(e) + str.substring(end);
    this.textarea.value = str;
    this.textarea.selectionStart = start + 1;
    this.textarea.selectionEnd = start + 1;
    return this.textarea.focus();
  }

  lang(key) {
    const word = this.obj.get(key);
    if (this.ru[0].hidden) {
      if (this.up[0].hidden) {
        return word[2];
      } return word[1];
    }
    if (this.up[0].hidden) {
      return word[4];
    } return word[3];
  }
}
