//Валидация
export const variablesForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  inputErrorTemplate: '.popup__form-error_type_',
  errorActiveClass: 'popup__form-error',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  errorPopupItemClass: 'popup__item_error',
};

export class FormValidator {
  constructor(variablesForValidation){
    this._variablesForValidation = variablesForValidation;
    this._form = document.querySelector(this._variablesForValidation.formSelector);
    this._inputList =  Array.from(this._form.querySelectorAll(this._variablesForValidation.inputSelector));
    this._buttonSubmit = this._form.querySelector(this._variablesForValidation.submitButtonSelector)
  }

  _showError (errorText, validationMessage, variablesForValidation) {
    errorText.textContent = validationMessage;
    errorText.classList.add(this._variablesForValidation.errorActiveClass);
  }
  
  _hideError(errorText, variablesForValidation) {
    errorText.classList.remove(this._variablesForValidation.errorActiveClass);
    errorText.textContent = ''
  }
  
  _disableButton(buttonSubmit, variablesForValidation) {
    buttonSubmit.classList.add(this._variablesForValidation.inactiveButtonClass);
    buttonSubmit.disabled = true;
  }
  
  _enableButton(buttonSubmit, variablesForValidation) {
    buttonSubmit.classList.remove(this._variablesForValidation.inactiveButtonClass);
    buttonSubmit.disabled = false;
  }
  
  _checkInputValidity (input, variablesForValidation) {
    const errorText = document.querySelector(`${this._variablesForValidation.inputErrorTemplate}${input.name}`)
    if (!input.validity.valid) {
      this._showError(errorText, input.validationMessage, variablesForValidation);
      input.classList.add(this._variablesForValidation.errorPopupItemClass);
    } else {
      this._hideError(errorText, variablesForValidation);
      input.classList.remove(this._variablesForValidation.errorPopupItemClass);
    }
  }
  
  _hasInvalidInput(inputList, variablesForValidation) {
    return Array.from(inputList).some((input) => !input.validity.valid);
  }
  
  toggleButtonState(buttonSubmit, inputList, variablesForValidation) {
    if (!this._hasInvalidInput(inputList)){
      this._enableButton(buttonSubmit, variablesForValidation)
    } else {
      this._disableButton(buttonSubmit, variablesForValidation)
    }
  }
  
  resetValidation(buttonSubmit, inputList, variablesForValidation) {
    this.toggleButtonState(buttonSubmit, inputList, variablesForValidation);

    this._inputList.forEach((input) => {
      const errorText = document.querySelector(`${this._variablesForValidation.inputErrorTemplate}${input.name}`)
      this._hideError(errorText, variablesForValidation);
      input.classList.remove(this._variablesForValidation.errorPopupItemClass);
    });

  }
  
  _setEventListeners (form, inputList, buttonSubmit, variablesForValidation) {
    form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    })
     
    this.toggleButtonState(buttonSubmit, inputList, variablesForValidation)
  
    inputList.forEach((input) => {
      input.addEventListener('input', (e) =>{
        this._checkInputValidity(input)
        this.toggleButtonState(buttonSubmit, inputList, variablesForValidation);
      })
    })
  }
  
  enableValidation (variablesForValidation) {
      this._setEventListeners(this._form, this._inputList, this._buttonSubmit, variablesForValidation)
  }
}