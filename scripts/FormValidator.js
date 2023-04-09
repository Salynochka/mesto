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

class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._inputErrorTemplate = data.inputErrorTemplate;
    this._errorActiveClass = data.errorActiveClass;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._errorPopupItemClass = data.errorPopupItemClass;

    this._form = form;
    this._inputList =  Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._form.querySelector(this._submitButtonSelector)
}

_showError(errorText, validationMessage) {
  errorText.textContent = validationMessage;
  errorText.classList.add(this._errorActiveClass);
}

_hideError(errorText) {
  errorText.classList.remove(this._errorActiveClass);
  errorText.textContent = ''
}

_disableButton() {
  this._buttonSubmit.classList.add(this._inactiveButtonClass);
  this._buttonSubmit.disabled = true;
}

_enableButton() {
  this._buttonSubmit.classList.remove(this._inactiveButtonClass);
  this._buttonSubmit.disabled = false;
}

_checkInputValidity(input) {
  const errorText = document.querySelector(`${this._inputErrorTemplate}${input.name}`)
  if (!input.validity.valid) {
    _showError(errorText, input.validationMessage, this._errorActiveClass);
    input.classList.add(this._errorPopupItemClass);
  } else {
    _hideError(errorText, this._errorActiveClass);
    input.classList.remove(this._errorPopupItemClass);
  }
}

_hasInvalidInput () {
  return Array.from(this._inputList).some((input) => !input.validity.valid);
}

_toggleButtonState () {
  if (!hasInvalidInput(this._inputList)){
    _enableButton()
  } else {
    _disableButton()
  }
}

setEventListeners(form) {
  form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
  })
   
  _toggleButtonState()

  inputList.forEach((input) => {
    input.addEventListener('input', () =>{
      _checkInputValidity(input)
      _toggleButtonState();
    })
  })
}

enableValidation() {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((form) => {
    //const inputList =  Array.from(form.querySelectorAll(config.inputSelector));
    //const buttonSubmit = form.querySelector(config.submitButtonSelector)
    setEventListeners(form)
  });
}

enableValidation (variablesForValidation);
}





/*const showError = (errorText, validationMessage, errorActiveClass) => {
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