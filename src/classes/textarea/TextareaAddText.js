import MouseUpRemoveStyle from '../mouse/MouseUpRemoveStyle.js';

export default class TextareaAddText extends MouseUpRemoveStyle {
  constructor(up, down, ru, obj, textarea){
    super(up, down),
    this.ru = ru,
    this.obj = obj,
    this.textarea = textarea
}
handleEvent(e){
    e.preventDefault();
    switch (e.code) {
        case "Backspace": this.Backspace();
        break;
        case "Tab": this.Tab();
        break;
        case "Delete": this.Delete();
        break;
        case "Enter": this.Enter();
        break;
        case "Space": this.Space();
        break;
        default: this.Any(e.code)
    }
}

}