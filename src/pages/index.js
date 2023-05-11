fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 

import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {variablesForValidation, 
  formEditProfile, formAddCard, formUpdateProfile, 
  nameInput, jobInput, profileName, profileDescription, profilePhoto, profileCover,
  popupEditProfile, popupAddCard, popupUpdateProfile, popupConfirmation, 
  buttonChangeProfile, buttonAddNewCard,
  cardTemplate, popupWithPhoto} from '../utils/constants.js';

let userId

const api = new Api({
  mainUrl: 'https://mesto.nomoreparties.co/v1/cohort-65', 
  headers: {
    authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
    'Content-Type': 'application/json'
  },
}); 

//Создание карточек
const createCard = (item) => {
  const card = new Card({
    data: item,
    cardTemplate: cardTemplate,
    handleCardClick: () => increasePopup.open(item),
    userId: userId,
    handleDeleteClick: (cardId) => {
      confirmationPopup.open(card)
      confirmationPopup.handleSubmit(()=>{
        api.removeCard(cardId)
          .then(() => {
            card.deleteCard()
            confirmationPopup.close()
          })
      })
    },
    handleLikeClick: (cardId) => {
      if(card.likedCard){
        api.addLike(cardId)
        .then(res=>{
          card.setLikes(res.likes)
        })
      } else {
        api.deleteLike(cardId)
        .then(res =>{
          card.setLikes(res.likes)
        })
      }
    }
  })
  return card.generateCard()
}

const cardSection = new Section({
  renderer: (item) => {
    cardSection.addItem(createCard(item))
  }
}, '.cards' )


api.getCards()
  .then((data) => {
      const card = createCard({data});
      cardSection.renderedItems(card)
    })
  //.catch((err) => console.error(`Ошибка: ${err}`))

api.getUserInfo()
    .then((res)=>{
      profileInfo.setUserInfo(res)
    })
/*const renderCard = (data) => {
  const card = createCard(data)
}*/

// Экземпляры классов валидации всех модальных окон
export const profileValidation = new FormValidator(variablesForValidation, formEditProfile)
const newCardValidation = new FormValidator(variablesForValidation, formAddCard)
const updateProfileValidation = new FormValidator(variablesForValidation, formUpdateProfile)
profileValidation.enableValidation()
newCardValidation.enableValidation()
updateProfileValidation.enableValidation()

//Экзамепляр класса увеличения карточки
const increasePopup = new PopupWithImage(popupWithPhoto)
increasePopup.setEventListeners();

//Экземпляр класса попапа подтверждения удаления карточки
export const confirmationPopup = new Popup(popupConfirmation)
confirmationPopup.setEventListeners();

// Создание экземпляра классов модальных окон
// редактирования профиля и добавления карточки
const profilePopup = new PopupWithForm({
  popup: popupEditProfile, 
  submitForm: (data) => {
    api.editProfile(data.name, data.job)
    .then((res) => {
      profileInfo.setUserInfo(res)
    }) 
    profilePopup.close()
  }
})

profilePopup.setEventListeners();

const newCardPopup = new PopupWithForm({
  popup: popupAddCard, 
  submitForm: (item) => {
    api.createNewCard(item.name, item.link)
      .then((res) => {
        const card = createCard({res
          /*name: res.name,
          link: res.link,
          like: res.likes,
          userId: userId,
          cardId: res._id,
          ownerId: res.owner._id*/
        });   
      cardSection.addItem(card);
      newCardPopup.close();
      formAddCard.reset();
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
  }
})

newCardPopup.setEventListeners();

const updateProfilePopup = new PopupWithForm({
  popup: popupUpdateProfile, 
  submitForm: (data) => {
    api.editAvatarPhoto(data.avatar)
      .then((res)=>{
        profileInfo.setUserInfo(res);
      })
  }
})

updateProfilePopup.setEventListeners();

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

profileCover.addEventListener('click', () => {
  updateProfileValidation.toggleButtonState();
  updateProfilePopup.open();
  updateProfileValidation.resetValidation();
})

// Обновление фото профиля
const profileInfo = new UserInfo({
  name: profileName, 
  description: profileDescription,
  avatar: profilePhoto,
})

/*Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userInfo, cards]) => {
    profileInfo.setUserInfo(userInfo)
    userId = userInfo._id
    cardSection.renderedItems(cards)
  })
  .catch((err) => console.error(`Ошибка: ${err}`))*/
