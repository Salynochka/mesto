import {Popup} from './Popup.js'

export class PopupWithImage extends Popup{
    constructor(popup){
      super(popup);
      this._popupIncreasePhoto = this._popup.querySelector('.popup-increase__photo')
      this._popupIncreaseHeading = this._popup.querySelector('.popup-increase__heading');
    }
  
    open = (item) => {
      super.open();
      this._popupIncreasePhoto.src = item.link;
      this._popupIncreasePhoto.alt = item.name;
      this._popupIncreaseHeading.textContent = item.name;
    }
  }