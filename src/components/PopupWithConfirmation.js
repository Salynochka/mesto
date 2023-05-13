import {Popup} from './Popup.js'

export class PopupWithConfirmation extends Popup{
    constructor({popup, submitForm}){
      super(popup);
      this._submitForm = submitForm;
    }

    open(data){
        super.open();
        this.data = data
    }

    submitForm(newSubmitForm){
        this._submitForm = newSubmitForm
    }

    setEventListeners(){
        super.setEventListeners();
    
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this.data)
        })
      }
  }