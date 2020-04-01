import KeyDownAddStyleClass from './KeyDownAddStyleClass.js';

export default class KeyUpRemoveStyleClass extends KeyDownAddStyleClass {
  constructor(up, down, capsLock, ru, en) {
    super(up, down, capsLock, ru, en);
  }

  handleEvent(event) {
    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.capsLock.classList.contains('active')) {
          this.runTrue(this.up);
          this.runFalse(this.down);
          this.removeClass(event.code);
        } else {
          this.runTrue(this.down);
          this.runFalse(this.up);
          this.removeClass(event.code);
        }
        break;
      case 'CapsLock': return;
        break;
      default:
        let add = event.code;
        let a = `.${add}`;
        let test = document.querySelector(a);
        test.classList.remove('active');
    }
  }
}
