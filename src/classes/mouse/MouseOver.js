import TextareaAddText from '../textarea/TextareaAddText.js';

export default class MouseOver extends TextareaAddText {
  constructor(up, down, capsLock, textarea) {
    super(up, down);
    this.capsLock = capsLock;
    this.textarea = textarea;
  }

  handleEvent(e) {
    const div = e.target.closest('div');
    const arrClasses = div.className.split(' ');

    const key = arrClasses[1];

    switch (key) {
      case 'wrapper2': return;
      case 'CapsLock': return this.textarea.focus();
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.capsLock.classList.contains('active')) {
          this.runTrue(this.up);
          this.runFalse(this.down);
          div.classList.remove('active');
        } else {
          this.runTrue(this.down);
          this.runFalse(this.up);
          div.classList.remove('active');
        }


        break;
      default: div.classList.remove('active');
        return this.textarea.focus();
    }
  }
}