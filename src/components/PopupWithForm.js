import {Popup} from './Popup.js';
import {profileValidation} from '../index.js';

export class PopupWithForm extends Popup{
    constructor({popup, submitForm}){
      super(popup);
      this._submitForm = submitForm;
      this._form = this._popup.querySelector('.popup__form')
      this._inputList = this._form.querySelectorAll('.popup__item');
    }
  
    _getInputValues(){
      const formValues = {};
      this._inputList.forEach(input => {
        //const value = input.value;
       // const name = input.name
        formValues[input.name] = input.value;
      })
      return formValues;
    }
  
    setEventListeners(){
      super.setEventListeners();
  
      this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          const inputValues = this._getInputValues();
          this._submitForm(inputValues);
          
          this.close();
      })
    }
  
    close(){
      super.close()
      profileValidation.resetValidation()
    }
  }