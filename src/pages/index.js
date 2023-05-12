import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
//import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {variablesForValidation, 
  formEditProfile, formAddCard, formUpdateProfile, 
  nameInput, jobInput, avatarInput, profileName, profileDescription, profilePhoto, profileCover,
  popupEditProfile, popupAddCard, popupUpdateProfile, popupConfirmation, 
  buttonChangeProfile, buttonAddNewCard, buttonSubmit,
  cardTemplate, popupWithPhoto} from '../utils/constants.js';

  let userId

  const api = new Api({
    mainUrl: 'https://mesto.nomoreparties.co/v1/cohort-65', 
    headers: {
      authorization: '9783f066-fc5b-47ba-8b84-b37b6039aee0',
      'Content-Type': 'application/json'
    },
  }); 
  
  //Экземпляр новых данных профиля
  const profileInfo = new UserInfo({
    name: profileName, 
    about: profileDescription,
    avatar: profilePhoto,
  })

  //Экзамепляр класса увеличения карточки
  const increasePopup = new PopupWithImage(popupWithPhoto)
  increasePopup.setEventListeners();
  
  //Создание карточек
  const createCard = (item) => {
    const card = new Card({
      data: item,
      cardTemplate: cardTemplate,
      handleCardClick: () => increasePopup.open(item),
      userId: userId,
      handleDeleteClick: () => {
        confirmationPopup.open(card)
        confirmationPopup.submitForm(()=>{
          handleConfirmationSubmit(card)
        })
      },
      like: () => {
        api.addLike(item._id)
        .then(res => {
          card.addLike()
          card.setLikes(res)
        })
      },
      dislike: () => {
        api.deleteLike(item._id)
        .then(res =>{
          card.removeLike()
          card.setLikes(res)
        })
      }
    })
    return card.generateCard()
  }
  
  const cardSection = new Section({
    renderer: (item) => {
      cardSection.addItem(createCard(item))
    }
  }, '.cards' )
  
  // Экземпляры классов валидации всех модальных окон
  export const profileValidation = new FormValidator(variablesForValidation, formEditProfile)
  const newCardValidation = new FormValidator(variablesForValidation, formAddCard)
  const updateProfileValidation = new FormValidator(variablesForValidation, formUpdateProfile)
  profileValidation.enableValidation()
  newCardValidation.enableValidation()
  updateProfileValidation.enableValidation()
  
  //Экземпляр класса попапа подтверждения удаления карточки
  const confirmationPopup = new PopupWithConfirmation({
    popup: popupConfirmation, 
    submitForm: handleConfirmationSubmit
  })
  confirmationPopup.setEventListeners();
  
  //Редактирование профиля
  const handleProfileSubmit = (data) => {
    const {name, about} = data
    buttonSubmit.textContent = "Сохранение..."
    api.editProfile({name, about})
      .then((res) => {
        profileInfo.setUserInfo(res)
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
      .finally(()=> buttonSubmit.textContent = "Сохранить")
    profilePopup.close()
  }
  
  //Изменение аватара
  const handleAvatarSubmit = (data) => {
    const {avatar} = data
    buttonSubmit.textContent = "Сохранение..."
    api.editAvatarPhoto({avatar})
      .then((res) => {
        profileInfo.setUserInfo(res)
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
      .finally(()=> buttonSubmit.textContent = "Сохранить")
    profilePopup.close()
  }
  
  //Подтверждение удаления карточки
  const handleConfirmationSubmit = (card) => {
    buttonSubmit.textContent = "Удаление..."
    api.removeCard(card._id)
      .then(() => {    
        card.deleteCard()
      })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(()=> buttonSubmit.textContent = "Да")
    confirmationPopup.close()
  }

  //Добавление карточки
  const handleCardSubmit = (data) => {
    buttonSubmit.textContent = "Сохранение..."
    api.createNewCard(data)
      .then((res)=> {
        const card = createCard(res)
        cardSection.addItem(card)
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
      .finally(()=> buttonSubmit.textContent = "Сохранить")
    
    newCardPopup.close();
    formAddCard.reset();
  }
  
  // Создание экземпляра классов модальных окон
  // редактирования профиля и добавления карточки
  const profilePopup = new PopupWithForm({
    popup: popupEditProfile, 
    submitForm: handleProfileSubmit 
  })
  
  profilePopup.setEventListeners();
  
  const newCardPopup = new PopupWithForm({
    popup: popupAddCard, 
    submitForm: handleCardSubmit
  })
  
  newCardPopup.setEventListeners();
  
  const updateProfilePopup = new PopupWithForm({
    popup: popupUpdateProfile, 
    submitForm: handleAvatarSubmit
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
    const currentProfileInfo = profileInfo.getUserInfo();
    avatarInput.value = currentProfileInfo.profilePhoto;
    updateProfileValidation.toggleButtonState();
    updateProfilePopup.open();
    updateProfileValidation.resetValidation();
  })
  
  Promise.all([api.getUserInfo(), api.getCards()])
    .then(([userInfo, cards]) => {
      userId = userInfo._id
      profileInfo.setUserInfo(userInfo)
      cardSection.renderedItems(cards)
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
  