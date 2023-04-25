import './index.css';
import {FormValidator} from './components/FormValidator.js';
import {Card} from './components/Card.js';
import {Popup} from './components/Popup.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {Section} from './components/Section.js';
import {UserInfo} from './components/UserInfo.js';
import {initialCards, variablesForValidation, formEditProfile, formAddCard, nameInput, jobInput, profileName, profileDescription, popupEditProfile, popupAddCard, buttonChangeProfile, buttonAddNewCard, cardTemplate, popupWithPhoto} from './utils/Constants.js';

export const profileValidation = new FormValidator(variablesForValidation, formEditProfile)
const newCardValidation = new FormValidator(variablesForValidation, formAddCard)
profileValidation.enableValidation()
newCardValidation.enableValidation()

const editPopup = new Popup(popupEditProfile)
editPopup.setEventListeners()
const addPopup = new Popup(popupAddCard)
addPopup.setEventListeners()

buttonChangeProfile.addEventListener('click', () => {
  const currentProfileInfo = profileInfo.getUserInfo();
  nameInput.value = currentProfileInfo.profileName;
  jobInput.value = currentProfileInfo.profileDescription;
  editPopup.open()
})
 
buttonAddNewCard.addEventListener('click', () => {
  addPopup.open()
  newCardValidation.toggleButtonState();
}) 

const increasePopup = new PopupWithImage(popupWithPhoto)
increasePopup.setEventListeners();


const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardTemplate, () => increasePopup.open(item))
    const cardElement = card.generateCard()
    cardSection.addItem(cardElement)
  }
}, '.cards' )

cardSection.renderedItems();

const profilePopup = new PopupWithForm({
  popup: popupEditProfile, 
  submitForm: (data) => {
    profileInfo.setUserInfo(data)
  }
})

const newCardPopup = new PopupWithForm({
  popup: popupAddCard, 
  submitForm: (item) => {
    const card = new Card(item, cardTemplate, () => increasePopup.open(item))
    const cardElement = card.generateCard()
    cardSection.addItem(cardElement);
  }
})

profilePopup.setEventListeners();
newCardPopup.setEventListeners();

const profileInfo = new UserInfo({
  name: profileName, 
  description: profileDescription,
})