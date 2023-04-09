import {FormValidator, variablesForValidation} from './FormValidator.js';
import {Card, cardTemplate, cardPhoto, cardTitle} from './Card.js';

const popupList = document.querySelectorAll('.popup')
const formEditProfile = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.popup-add__form')

const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const nameCardInput = document.querySelector('.popup__item_type_name-card');
const linkInput = document.querySelector('.popup__item_type_link');

const popupEditProfile = document.querySelector('.popup-edit');
const popupAddCard = document.querySelector('.popup-add');

const buttonChangeProfile = document.querySelector('.profile__changes');
const buttonAddNewCard = document.querySelector('.profile__button-add');
const buttonCloseList = document.querySelectorAll('.popup__button-close');

//Открытие попапов через кнопки изменения и добавления

buttonChangeProfile.addEventListener('click', handleEditPopup);
buttonAddNewCard.addEventListener('click', handleAddPopup);

function handleEditPopup(){
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function handleAddPopup(popup){
  openPopup(popupAddCard)
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

//Закрытие попапов на оверлэй

popupList.forEach(function(popup){
    popup.addEventListener('click', closePopupByOverlay)
})

function closePopupByOverlay(evt) {
    if(evt.target.classList.contains('popup_opened')){
      closePopup(evt.target);
    }
  }

function closePopupEsc(e) {
  if (e.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen);
  }
}
//Закрытие попапов на крестик

buttonCloseList.forEach(function(button){
  button.addEventListener('click', handleCloseButton);
})

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc)
};

function handleCloseButton(event){
  const popupClose = event.target.closest('.popup');
  closePopup(popupClose);
}

formEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  closePopup(popupEditProfile)
});

//Создание новых карточек

const validation = new FormValidator(variablesForValidation)

function handleAddCard(evt, variablesForValidation){
  evt.preventDefault()
  const formAddCard = evt.target;
  const newCard = {
    name: nameCardInput.value,
    alt: nameCardInput.value,
    link: linkInput.value
  }
  renderCard(newCard);
  closePopup(popupAddCard);
  formAddCard.reset();

  const inputList =  Array.from(formAddCard.querySelectorAll('.popup__item'));
  const buttonSubmit = formAddCard.querySelector('.popup__button');
  const buttonDisabled = formAddCard.querySelector('popup__button_disabled');
  validation.toggleButtonState(buttonSubmit, inputList, buttonDisabled);

  return newCard;
}

function renderCard(card){
  const cardTemplate = createCard(card);
  cardsContainer.prepend(cardTemplate);
}

const cardsContainer = document.querySelector('.cards');

formAddCard.addEventListener('submit', handleAddCard)

function createCard(card){
  cardTitle.textContent = card.name;
  cardPhoto.setAttribute('src', card.link);
  cardPhoto.setAttribute('alt', card.name);
      
  return cardTemplate;
}