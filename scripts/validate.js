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

const showError = (errorText, validationMessage, errorActiveClass) => {
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

enableValidation (variablesForValidation);

//Деактивация кнопки сабмита
/*const resetInput = (popup, config) => {
  const form = popup.querySelector(config.formSelector);
  const inputList = popup.querySelectorAll(config.inputSelector);
  inputList.forEach((input) => {
    const errorText = form.querySelector(`${input.name}-error`);
    hideError(errorText, errorActiveClass);
  });
}

const setDefaultButton = (popup, config) => {
  //const form = popup.querySelector(config.formSelector);
  const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
  //const buttonSubmit = popup.querySelector(config.submitButtonSelector);
  toggleButtonState(config.submitButtonSelector, config.inactiveButtonClass, inputList);
}*/

