import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {initialCards, variablesForValidation, formEditProfile, formAddCard, nameInput, jobInput, profileName, profileDescription, popupEditProfile, popupAddCard, buttonChangeProfile, buttonAddNewCard, cardTemplate, popupWithPhoto} from '../utils/constants.js';

export const profileValidation = new FormValidator(variablesForValidation, formEditProfile)
const newCardValidation = new FormValidator(variablesForValidation, formAddCard)
profileValidation.enableValidation()
newCardValidation.enableValidation()

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

const increasePopup = new PopupWithImage(popupWithPhoto)
increasePopup.setEventListeners();

const createCard = (item) => {
  const card = new Card(item, cardTemplate, () => increasePopup.open(item))
  return card.generateCard()
}

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    cardSection.addItem(createCard(item))
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
    cardSection.addItem(createCard(item));

    formAddCard.reset();
  }
})

profilePopup.setEventListeners();
newCardPopup.setEventListeners();

const profileInfo = new UserInfo({
  name: profileName, 
  description: profileDescription,
})