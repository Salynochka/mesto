import {Popup} from './Popup.js';

export class PopupWithForm extends Popup{
    constructor({popup, submitForm, validation, submitButton}){
      super(popup);
      this._submitForm = submitForm;
      this._validation = validation;
      this.submitButton = submitButton;
      this._form = this._popup.querySelector('.popup__form')
      this._inputList = this._form.querySelectorAll('.popup__item');
    }
  
    _getInputValues(){
      const formValues = {};
      this._inputList.forEach(input => {
        const value = input.value;
        const name = input.name
        formValues[name] = value;
      })
      return formValues;
    }
  
    setEventListeners(){
      super.setEventListeners();
  
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        // перед запросом сохраняем изначальный текст кнопки
        const initialText = evt.submitter.textContent
        // меняем его, чтобы показать пользователю ожидание
        evt.submitter.textContent = "Сохранение..."
        this._submitForm(this._getInputValues())
        .then(() => {
          this.close()
          this._form.reset()
        }) // закрывается попап в `then`
        .finally(() => {
          evt.submitter.textContent = initialText; // в любом случае меняется текст кнопки обратно на начальный в `finally
        });
      })
    }

    close(){
      super.close()

      this._validation.resetValidation()
    }
  }