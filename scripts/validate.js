//Валидация

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

const setEventListeners = (formList, inputList, inputErrorTemplate, errorActiveClass,  buttonSubmit, inactiveButtonClass, errorPopupItemClass) => {
  formList.addEventListener('submit', (evt) =>{
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
  const formList = document.querySelectorAll(config.formSelector);
  const inputList =  document.querySelectorAll(config.inputSelector);
  const buttonSubmit = document.querySelectorAll(config.submitButtonSelector)

  setEventListeners(formList, inputList, config.inputErrorTemplate, config.errorActiveClass, buttonSubmit, config.inactiveButtonClass, config.errorPopupItemClass)

 /* const formAdd = document.querySelector(config.formAddSelector)
  const formAddList = formAdd.querySelectorAll(config.inputSelector)
  const buttonCreateSubmit = formAdd.querySelector(config.submitCreateButtonSelector)
  
  setEventListeners(formAdd, formAddList, config.inputErrorAddTemplate, config.errorAddActiveClass, buttonCreateSubmit, config.inactiveCreateButtonClass)*/
}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  inputErrorTemplate: '.popup__form-error_type_',
  errorActiveClass: 'popup__form-error',
  submitButtonSelector: '.popup__button',
  //submitCreateButtonSelector: '.popup-add__button-create',
  inactiveButtonClass: 'popup__button_disabled',
  //inactiveCreateButtonClass: 'popup-add__button-create_disabled'
  errorPopupItemClass: 'popup__item_error'
});