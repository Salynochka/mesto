fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Salynochka',
    about: 'Smart and exclusive'
  })
})
.then(res => res.json())

fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
  }
  })
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 


fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
  method: 'POST',
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Waterton park',
    link: 'https://images.unsplash.com/photo-1683130461729-9b91e65b6997?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
  })
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 

fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
  method: 'POST',
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Sydney',
    link: 'https://images.unsplash.com/photo-1682834818789-fdd3fd6c93fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
  })
})



const cards = document.querySelector('.cards') 

class Api {
  constructor(mainUrl, headers){
    this._mainUrl = mainUrl;
    this._headers = headers;
  }

  getInitialCards() {
    fetch(`${this._mainUrl}/cards`, {
      headers: this._headers,
    })
    .then((res) => {
      return res.json
    })
    /*.then(
      this._checkStatus
    )*/
    /*.then(
      cards.prepend(createCard())
    )
    .catch((err) => {
      console.log(err);
    }); */
  }

  createNewCard(id) {
    fetch(`${this._mainUrl}/cards/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({value}),
    })
    .then(
      createCard(id)
    )
  }

  removeCard(id){
    fetch(`${this._mainUrl}/${id}`, {
      method: 'DELETE',
    })
    .then(this._checkStatus)
  }

  _checkStatus(res){
    if(!res.ok){
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo(){
    fetch(`${this._mainUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkStatus)
  }

  saveNewUserInformation(){

  }

  addLikeCard(cardId) {
    fetch(`${this._mainUrl}/cards/cardId/likes`, {
      method: 'PUT'
    })
    .then(this._checkStatus)
  }

  deleteLikeCard(cardId) {
    fetch(`${this._mainUrl}/cards/cardId/likes`, {
      method: 'DELETE'
    })
    .then(this._checkStatus)
  }

  editAvatarPhoto(avatar){
    fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar
      })
    })
    .then(this._checkStatus)
  };

}

const api = new Api({
  mainUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
    'Content-Type': 'application/json'
  }
}); 

api.getInitialCards()
/*
Promise.all(api.getUserInfo(), api.getInitialCards())
.then((userInfo, cards) => {

})*/

import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {
  //initialCards, 
  variablesForValidation, 
  formEditProfile, formAddCard, formUpdateProfile, 
  nameInput, jobInput, profileName, profileDescription, profilePhoto,
  popupEditProfile, popupAddCard, popupUpdateProfile, popupConfirmation, 
  buttonChangeProfile, buttonAddNewCard,
  cardTemplate, popupWithPhoto} from '../utils/constants.js';

// Экземпляры классов валидации всех модальных окон
export const profileValidation = new FormValidator(variablesForValidation, formEditProfile)
const newCardValidation = new FormValidator(variablesForValidation, formAddCard)
const updateProfileValidation = new FormValidator(variablesForValidation, formUpdateProfile)
profileValidation.enableValidation()
newCardValidation.enableValidation()
updateProfileValidation.enableValidation()

// Слушатели
buttonChangeProfile.addEventListener('click', () => {
  const currentProfileInfo = profileInfo.getUserInfo();
  nameInput.value = currentProfileInfo.profileName;
  jobInput.value = currentProfileInfo.profileDescription;
  profilePopup.open()
})
 
buttonAddNewCard.addEventListener('click', () => {
  newCardValidation.toggleButtonState();
  newCardPopup.open();
  newCardValidation.resetValidation();
})

profilePhoto.addEventListener('click', () => {
  updateProfileValidation.toggleButtonState();
  updateProfilePopup.open();
  updateProfileValidation.resetValidation();
})

//Экзамепляр класса увеличения карточки
const increasePopup = new PopupWithImage(popupWithPhoto)
increasePopup.setEventListeners();

//Экземпляр класса попапа подтверждения удаления карточки
export const confirmationPopup = new Popup(popupConfirmation)
confirmationPopup.setEventListeners();

const createCard = (item) => {
  const card = new Card(item, cardTemplate, () => increasePopup.open(item))
  return card.generateCard()
}

const cardSection = new Section({
  //items: initialCards,
  renderer: (item) => {
    cardSection.addItem(createCard(item))
  }
}, '.cards' )

//cardSection.renderedItems();

// Создание экземпляра классов модальных окон
// редактирования профиля и добавления карточки
const profilePopup = new PopupWithForm({
  popup: popupEditProfile, 
  submitForm: (data) => {
    profileInfo.setUserInfo(data)
  }
})

const newCardPopup = new PopupWithForm({
  popup: popupAddCard, 
  submitForm: (item) => {
    newCardPopup.renderLoading(true)
    api.createNewCard(item)
      .then((res) => {
        cardSection.addItem(createCard(res));
       })
      .catch((err) => console.error(`Ошибка: ${err}`))
      .finally(() => newCardPopup.renderLoading(false));

    //cardSection.addItem(createCard(item));
    newCardPopup.close();
    formAddCard.reset();
  }
})

profilePopup.setEventListeners();
newCardPopup.setEventListeners();

// Обновление фото профиля
const profileInfo = new UserInfo({
  name: profileName, 
  description: profileDescription,
  avatar: profilePhoto,
})

const updateProfilePopup = new PopupWithForm({
  popup: popupUpdateProfile, 
  submitForm: () => {
    profileInfo.setAvatarInfo(updateProfileInput);
  }
})

updateProfilePopup.setEventListeners();

