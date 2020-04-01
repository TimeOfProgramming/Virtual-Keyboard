export default class KeyDownAddStyleClass {
  constructor(up, down, capsLock, ru, en) {
    this.up = up;
    this.down = down;
    this.capsLock = capsLock;
    this.ru = ru;
    this.en = en;
  }

  handleEvent(event) {
    if ((event.ctrlKey && event.altKey) || (event.metaKey && event.altKey)) {
      for (let i = 0; i < this.ru.length; i++) {
        this.ru[i].hidden = !this.ru[i].hidden;
      }
      for (let i = 0; i < this.en.length; i++) {
        this.en[i].hidden = !this.en[i].hidden;
      }
    }
    if (this.ru[0].hidden) {
      localStorage.setItem('lang', 'en');
    } else localStorage.setItem('lang', 'ru');
    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.capsLock.classList.contains('active')) {
          this.runTrue(this.down);
          this.runFalse(this.up);
          this.addClass(event.code);
        } else {
          this.runTrue(this.up);
          this.runFalse(this.down);
          this.addClass(event.code);
        }
        break;
      case 'CapsLock':
        if (this.capsLock.classList.contains('active')) {
          this.runCaps(this.up);
          this.runCaps(this.down);
          this.removeClass(event.code);
        } else {
          this.runTrue(this.up);
          this.runFalse(this.down);
          this.addClass(event.code);
        }
        break;
      default: this.addClass(event.code);
    }
  }

  runCaps(d) {
    d.forEach((element) => {
      element.hidden = !element.hidden;
    });
  }

  runTrue(arrUp) {
    arrUp.forEach((element) => {
      element.hidden = true;
    });
  }

  runFalse(arrDown) {
    arrDown.forEach((element) => {
      element.hidden = false;
    });
  }

  addClass(code) {
    const a = `.${code}`;
    const test = document.querySelector(a);
    test.classList.add('active');
  }

  removeClass(code) {
    const a = `.${code}`;
    const test = document.querySelector(a);
    test.classList.remove('active');
  }
}
