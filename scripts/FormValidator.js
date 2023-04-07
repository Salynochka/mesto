//Валидация
const variablesForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  inputErrorTemplate: '.popup__form-error_type_',
  errorActiveClass: 'popup__form-error',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  errorPopupItemClass: 'popup__item_error',
};



/*class FormValidator {
  constructor(variablesForValidation, errorText, validationMessage, buttonSubmit) {
    this._variables = variablesForValidation;
    this._errorText = errorText;
    this._validationMessage = validationMessage;
    this._buttonSubmit = buttonSubmit;
}



  _showError() {
    this._errorText.textContent = this._validationMessage;
    this._errorText.classList.add(this._variables.errorActiveClass);
    console.log(this._variables.errorActiveClass);
  }
  
  _hideError() {
    this._errorText.classList.remove(this._variables.errorActiveClass);
    this._errorText.textContent = ''
  }
  
  _disableButton() {
    this._buttonSubmit.classList.add(this._variables.inactiveButtonClass);
    this._buttonSubmit.disabled = true;
  }
  
  _enableButton () {
    this._buttonSubmit.classList.remove(this._variables.inactiveButtonClass);
    this._buttonSubmit.disabled = false;
  }

  _checkInputValidity(input) {
    this._errorText = document.querySelector(`${this._variables.inputErrorTemplate}${input.name}`)
    if (!input.validity.valid) {
      this._showError();
      input.classList.add(this._variables.errorPopupItemClass);
    } else {
      this._hideError();
      input.classList.remove(this._variables.errorPopupItemClass);
    }
  }
  
  _hasInvalidInput (inputList) {
    return Array.from(inputList).some((input) => !input.validity.valid);
  }
  
  _toggleButtonState (inputList) {
    if (!hasInvalidInput(inputList)){
      enableButton()
    } else {
      disableButton()
    }
  }
  
  _setEventListeners(form, inputList) {
    form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    })
     
    toggleButtonState(inputList)
  
    inputList.forEach((input) => {
      input.addEventListener('input', (e) =>{
        checkInputValidity(input)
        toggleButtonState(inputList);
      })
    })
  }
  
  _enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
      const inputList =  Array.from(form.querySelectorAll(config.inputSelector));
      const buttonSubmit = form.querySelector(config.submitButtonSelector)
      setEventListeners(form, inputList, config.inputErrorTemplate, config.errorActiveClass, buttonSubmit, config.inactiveButtonClass, config.errorPopupItemClass)
    });
  }

  enableValidation(variablesForValidation)
  
}*/





 /* const showError = (errorText, validationMessage, errorActiveClass) => {
    errorText.textContent = validationMessage;
    errorText.classList.add(errorActiveClass);
  }
  
  const hideError = (errorText, errorActiveClass) => {
    errorText.classList.remove(errorActiveClass);
    errorText.textContent = ''
  }
  
  const disableButton = (buttonSubmit, inactiveButtonClass) => {
    buttonSubmit.classList.add(inactiveButtonClass);
    buttonSubmit.disabled = true;
  }
  
  const enableButton = (buttonSubmit, inactiveButtonClass) => {
    buttonSubmit.classList.remove(inactiveButtonClass);
    buttonSubmit.disabled = false;
  }
  
  const checkInputValidity = (input, inputErrorTemplate, errorActiveClass, errorPopupItemClass) => {
    const errorText = document.querySelector(`${inputErrorTemplate}${input.name}`)
    if (!input.validity.valid) {
      showError(errorText, input.validationMessage, errorActiveClass);
      input.classList.add(errorPopupItemClass);
    } else {
      hideError(errorText, errorActiveClass);
      input.classList.remove(errorPopupItemClass);
    }
  }
  
  const hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((input) => !input.validity.valid);
  }
  
  const  toggleButtonState = (buttonSubmit, inactiveButtonClass, inputList) => {
    if (!hasInvalidInput(inputList)){
      enableButton(buttonSubmit, inactiveButtonClass)
    } else {
      disableButton(buttonSubmit, inactiveButtonClass)
    }
  }
  
  const setEventListeners = (form, inputList, inputErrorTemplate, errorActiveClass,  buttonSubmit, inactiveButtonClass, errorPopupItemClass) => {
    form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    })
     
    toggleButtonState(buttonSubmit, inactiveButtonClass, inputList)
  
    inputList.forEach((input) => {
      input.addEventListener('input', (e) =>{
        checkInputValidity(input, inputErrorTemplate, errorActiveClass, errorPopupItemClass)
        toggleButtonState(buttonSubmit, inactiveButtonClass, inputList);
      })
    })
  }
  
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
      const inputList =  Array.from(form.querySelectorAll(config.inputSelector));
      const buttonSubmit = form.querySelector(config.submitButtonSelector)
      setEventListeners(form, inputList, config.inputErrorTemplate, config.errorActiveClass, buttonSubmit, config.inactiveButtonClass, config.errorPopupItemClass)
    });
  }
  
  enableValidation (variablesForValidation);*/