//import {FormValidator} from './FormValidator.js';
//import {Card} from './Card.js';

/*export const popupElement = document.querySelector('.popup');
export const buttonClose = document.querySelector('.popup__button-close');

export const likeButton = document.querySelector('.card__like');
export const cardPhoto = document.querySelector('.card__photo');*/

const popupList = document.querySelectorAll('.popup').content

class Popup{
  constructor(selector, link){
    this._link = link;
    this._selector = undefined;
  }

  _getTemplate(){
    const popupSelectorList = popupList.querySelectorAll('.popup').cloneNode(true);
    
    return popupSelectorList
    }

  generatePopup(){
    this._selector = this._getTemplate();

    this._buttonChangeProfile = this._selector.querySelector('.profile__changes');
    this._buttonAddNewCard = this._selector.querySelector('.profile__button-add');
    this._buttonClose = this._selector.querySelector('.popup__button-close');
 
    this._setEventListeners();

    return this._selector;
  }

  _closePopupEsc(e) {
    if (e.key === 'Escape') {
      this._closePopup()
    }
  }

  _openPopup(){
    this._selector.classList.add('popup_opened');
   /* document.addEventListener('keydown', () => {
        this._closePopupEsc();
      })*/
  }

  _closePopup(){
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', () => {
      this._closePopupEsc();
    })
  }

  _setEventListeners(){
    this._buttonClose.addEventListener('click', () => {
      this._closePopup();
    });

    this._buttonChangeProfile.addEventListener('click', () => {
      this._openPopup();
    });

    this._buttonAddNewCard.addEventListener('click', () => {
      this._openPopup();
    });
  }
}



/*class popupInPhoto extends Popup{
  constructor(selector, link, name){
    super(selector)
    this._link = link;
    this._name = name;
  }

  generatePopup(){
    super.generatePopup();
    this._cardPhoto = this._element.querySelector('.card__photo')
    this._setEventListeners();
  }

  openPopup(){
    super.openPopup();

  }

  _setEventListeners(){
    this._buttonClose.addEventListener('click', () => {
      this._closePopup();
    });

    this._buttonChangeProfile.addEventListener('click', () => {
      this._openPopup();
    });
  }
}*/
/*
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
const popupWithPhoto = document.querySelector('.popup-increase');

const buttonChangeProfile = document.querySelector('.profile__changes');
const buttonAddNewCard = document.querySelector('.profile__button-add');
const buttonCloseList = document.querySelectorAll('.popup__button-close');


const popupIncreasePhoto = popupWithPhoto.querySelector('.popup-increase__photo');
const popupIncreaseHeading = popupWithPhoto.querySelector('.popup-increase__heading');
*/
//Открытие попапов через кнопки изменения и добавления

/*buttonChangeProfile.addEventListener('click', handleEditPopup);
buttonAddNewCard.addEventListener('click', handleAddPopup);

function handleEditPopup(){
  openPopup(popupEditProfile)
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function handleAddPopup(config){
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

/*function handleAddCard(evt, config){
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
  const buttonSubmit = formAddCard.querySelector('.popup__button')
  toggleButtonState(buttonSubmit, variablesForValidation.inactiveButtonClass, inputList);

  return newCard;
}

const cardsContainer = document.querySelector('.cards');

//Появление карточек из JavaScript
const cardForTemplate = document.querySelector('.card__template').content;

function createCard(card){
  const cardTemplate = cardForTemplate.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.card__title');
  const cardPhoto = cardTemplate.querySelector('.card__photo');
  const cardDeleteButton = cardTemplate.querySelector('.card__delete-button');
  const likeButton = cardTemplate.querySelector('.card__like');
      
  cardTitle.textContent = card.name;
  cardPhoto.setAttribute('src', card.link);
  cardPhoto.setAttribute('alt', card.name);
    
  cardDeleteButton.addEventListener('click', handleDeleteButton);
  likeButton.addEventListener('click', handleToggleLike);
  cardPhoto.addEventListener('click', () => handleIncreasePhoto(card.link, card.name));
      
  return cardTemplate;
}

function renderCard(card){
  const cardTemplate = createCard(card);
  cardsContainer.prepend(cardTemplate);
}

initialCards.forEach(renderCard)*/


/*function handleDeleteButton(event){
  const buttonDelete = event.target; 
  const card = buttonDelete.closest('.card');
  card.remove();
};

function handleToggleLike(event){
  const likeButton = event.target;
  likeButton.classList.toggle('card__like_active');
};*/
  
//Увеличение фото
function handleIncreasePhoto(link, name){
  popupIncreasePhoto.src = link;
  popupIncreasePhoto.alt = name;
  popupIncreaseHeading.textContent = name;
  openPopup(popupWithPhoto)
}

//formAddCard.addEventListener('submit', handleAddCard)