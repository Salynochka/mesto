import {FormValidator, variablesForValidation} from './FormValidator.js';
import {Card} from './Card.js';

const popupList = document.querySelectorAll('.popup')
const formEditProfile = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.popup-add__form')

const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const cards = document.querySelector('.cards');
const nameCardInput = document.querySelector('.popup__item_type_name-card');
const linkInput = document.querySelector('.popup__item_type_link');

const popupEditProfile = document.querySelector('.popup-edit');
const popupAddCard = document.querySelector('.popup-add');

const buttonChangeProfile = document.querySelector('.profile__changes');
const buttonAddNewCard = document.querySelector('.profile__button-add');
const buttonCloseList = document.querySelectorAll('.popup__button-close');

const cardTemplate = document.querySelector('.card__template').content;

const popupWithPhoto = document.querySelector('.popup-increase');
const popupIncreasePhoto = popupWithPhoto.querySelector('.popup-increase__photo');
const popupIncreaseHeading = popupWithPhoto.querySelector('.popup-increase__heading');

const inputList =  Array.from(formAddCard.querySelectorAll('.popup__item'));
const buttonSubmit = formAddCard.querySelector('.popup__button');
const buttonDisabled = formAddCard.querySelector('popup__button_disabled');

//Открытие попапов через кнопки изменения и добавления

buttonChangeProfile.addEventListener('click', handleEditPopup);
buttonAddNewCard.addEventListener('click', handleAddPopup);

function handleEditPopup(){
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;

  //profileValidation.resetValidation(inputList, buttonSubmit, variablesForValidation)
}
function handleAddPopup(popup){
  openPopup(popupAddCard)
};

export function openPopup(popup) {
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

const initialCards = [
  {
    name: 'Эверест',
    link: 'images/everest.jpg'
  },
  {
    name: 'Национальный парк Секвойа',
    link: 'images/sequoia.jpg'
  },
  {
    name: 'Красное море',
    link: 'images/red_sea.jpg'
  },
  {
    name: 'Антилопа Каньон',
    link: 'images/antelope_canyon.jpg'
  },
  {
    name: 'Озеро Брайес',
    link: '/images/braies_lake.jpg'
  },
  {
    name: 'Мачу Пикчу',
    link: 'images/machu_picchu.jpg'
  }
]; 

export function handleIncreasePhoto(name, link){
  popupIncreasePhoto.src = link;
  popupIncreasePhoto.alt = name;
  popupIncreaseHeading.textContent = name;
  openPopup(popupWithPhoto)
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cards.append(cardElement);
  })

//Создание новых карточек

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
  
  //newCardValidation.toggleButtonState(buttonSubmit, inputList, buttonDisabled);
  
  return newCard;
}

function renderCard(card){
  const cardTemplate = createCard(card);
  cardsContainer.prepend(cardTemplate);
}

const cardsContainer = document.querySelector('.cards');

formAddCard.addEventListener('submit', handleAddCard)

function createCard(card){
  const newCard = new Card(card, cardTemplate, handleIncreasePhoto);
  return newCard.generateCard();
}

const profileValidation = new FormValidator(variablesForValidation, '.popup-edit__form')
const newCardValidation = new FormValidator(variablesForValidation, formAddCard)
profileValidation.enableValidation()
newCardValidation.enableValidation()