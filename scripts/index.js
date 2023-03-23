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

const cardPhoto = document.querySelector('.card__photo');
const cardTitle = document.querySelector('.card__title');

const popupIncreasePhoto = popupWithPhoto.querySelector('.popup-increase__photo');
const popupIncreaseHeading = popupWithPhoto.querySelector('.popup-increase__heading');

//Открытие попапов через кнопки изменения и добавления

buttonChangeProfile.addEventListener('click', handleEditPopup);
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

function handleAddCard(evt, config){
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

initialCards.forEach(renderCard)


function handleDeleteButton(event){
  const buttonDelete = event.target; 
  const card = buttonDelete.closest('.card');
  card.remove();
};

function handleToggleLike(event){
  const likeButton = event.target;
  likeButton.classList.toggle('card__like_active');
};
  
//Увеличение фото
function handleIncreasePhoto(link, name){
  popupIncreasePhoto.src = link;
  popupIncreasePhoto.alt = name;
  popupIncreaseHeading.textContent = name;
  openPopup(popupWithPhoto)
}

function closePopupEsc(e) {
  if (e.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen);
  }
}

formAddCard.addEventListener('submit', handleAddCard)