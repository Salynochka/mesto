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

const checkInputValidity = (input, errorTemplate, errorActiveClass) => {
  const errorText = document.querySelector(`${errorTemplate}${input.name}`)
  if (!input.validity.valid) {
    showError(errorText, input.validationMessage, errorActiveClass);
    input.classList.add('popup__item_error');
  } else {
    hideError(errorText, errorActiveClass);
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

const setEventListeners = (form, inputList, errorTemplate, errorActiveClass,  buttonSubmit, inactiveButtonClass) => {
  form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
  })
   
  toggleButtonState(buttonSubmit, inactiveButtonClass, inputList)

  inputList.forEach((input) => {
    input.addEventListener('input', (e) =>{
      checkInputValidity(input, errorTemplate, errorActiveClass)
      toggleButtonState(buttonSubmit, inactiveButtonClass, inputList);
    })
  })
}

const enableValidation = (config) => {
  const form = document.querySelector(config.formSelector)
  const formList = form.querySelectorAll(config.inputSelector)
  const buttonSaveSubmit = form.querySelector(config.submitButtonSelector)

  setEventListeners(form, formList, config.inputErrorTemplate, config.errorActiveClass, buttonSaveSubmit, config.inactiveSaveButtonClass)

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
  inactiveSaveButtonClass: 'popup__button-save_disabled',
  inactiveCreateButtonClass: 'popup-add__button-create_disabled'
});