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
  const formEdit = document.querySelector(config.formEditSelector)
  const formEditList = formEdit.querySelectorAll(config.inputSelector)
  const buttonSaveSubmit = formEdit.querySelector(config.submitSaveButtonSelector)

  setEventListeners(formEdit, formEditList, config.inputErrorEditTemplate, config.errorActiveClass, buttonSaveSubmit, config.inactiveSaveButtonClass)

  const formAdd = document.querySelector(config.formAddSelector)
  const formAddList = formAdd.querySelectorAll(config.inputSelector)
  const buttonCreateSubmit = formAdd.querySelector(config.submitCreateButtonSelector)
  
  setEventListeners(formAdd, formAddList, config.inputErrorAddTemplate, config.errorActiveClass, buttonCreateSubmit, config.inactiveCreateButtonClass)
}


enableValidation({
  formEditSelector: '.popup__form',
  formAddSelector: '.popup-add__form',
  inputSelector: '.popup__item',
  inputErrorEditTemplate: '.popup__form-error_type_',
  inputErrorAddTemplate: '.popup-add__form-error_type_',
  errorActiveClass: 'popup__form-error',
  submitSaveButtonSelector: '.popup__button-save',
  submitCreateButtonSelector: '.popup-add__button-create',
  inactiveSaveButtonClass: 'popup__button-save_disabled',
  inactiveCreateButtonClass: 'popup-add__button-create_disabled'
});