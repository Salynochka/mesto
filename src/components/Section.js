export class Section {
    constructor({renderer}, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }
  
    renderedItems(item) {
      //item.forEach((element) => {
        this._renderer(item);
      //})
    }
  
    addItem(element) {
      this._container.prepend(element)
    }
  }
  