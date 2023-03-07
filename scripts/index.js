const formButton = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const cardTitle = document.querySelector('.card__title');
const cardPhoto = document.querySelector('.card__photo');
//const nameCardInput = document.querySelector('.popup__item_type_name-card');
//const linkInput = document.querySelector('.popup__item_type_link');

//Открытие попапов через кнопки изменения и добавления

const formElement = document.querySelector('.profile__changes');
formElement.addEventListener('click', openEditProfilePopup)

  function openEditProfilePopup() {
    const openEditPopup = document.querySelector('.popup-edit');
    openEditPopup.classList.add('popup-edit_opened');
  }

const addElement = document.querySelector('.profile__button-add');
addElement.addEventListener('click', openAddCardPopup)

  function openAddCardPopup() {
    const openAddPopup = document.querySelector('.popup-add');
    openAddPopup.classList.add('popup-add_opened');
  }

const closeButton = document.querySelectorAll('.popup__button-close');

  closeButton.forEach(function (element){
    element.addEventListener('click', handleCloseButton)
  })

  function handleCloseButton(event){
    const closedPopup = event.target.closest('.popup');
    closePopup(closedPopup);
  };

  function closePopup(close) {
    close.classList.remove('popup_opened');
    };

formElement.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openEditProfilePopup;
  /*const editProfile = document.querySelector('.popup');
  editProfile.classList.add('popup_opened');*/
});

formButton.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  closeButton
  console.log(closeButton)
  /*const editProfile = document.querySelector('.popup');
  editProfile.classList.remove('popup_opened');*/
});

/*addElement.addEventListener('click', function () {
  initialCards.name = nameCardInput.textContent;
  initialCards.link = linkInput.link;
  //openProfilePopup()
});*/

const addFrom = document.querySelector('.popup-add__form')
addFrom.addEventListener('submit', handleAddForm)

function handleAddForm(evt){
  evt.preventDefault()
  const addForm = evt.target;
  const nameCardInput = addForm.querySelector('.popup__item_type_name-card').value;
  const linkInput = addForm.querySelector('.popup__item_type_link').value;
  const card = {
    name: nameCardInput,
    alt: nameCardInput,
    link: linkInput
  }
  const cardTemplate = document.querySelector('.card__template').content.cloneNode(true);
  cards.prepend(cardTemplate);
}

const initialCards = [
    {
      name: 'Озеро Брайес',
      link: 'images/braies_lake.jpg'
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
      name: 'Эверест',
      link: 'images/everest.jpg'
    },
    {
      name: 'Мачу Пикчу',
      link: 'images/machu_picchu.jpg'
    }
  ]; 

  const cards = document.querySelector('.cards');

  //Настройка появления карточек из JavaScript
  function createCards(card){
    const cardTemplate = document.querySelector('.card__template').content.cloneNode(true);
    const cardTitle = cardTemplate.querySelector('.card__title');
    cardTitle.textContent = card.name;
    const cardPhoto = cardTemplate.querySelector('.card__photo');
    cardPhoto.setAttribute('src', card.link);
    cardPhoto.setAttribute('alt', card.name);
    const cardDeleteButton = cardTemplate.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', handleDeleteButton);
    const likeButton = cardTemplate.querySelector('.card__like');
    likeButton.addEventListener('click', handleActiveLike);
    cardPhoto.addEventListener('click', handleIncreasedPhoto);
    cards.append(cardTemplate); 
  }

  initialCards.forEach(createCards)

  function handleDeleteButton(event){
    const deleteButton = event.target; 
    const card = deleteButton.closest('.card');
    card.remove();
  };

  function handleActiveLike(event){
    const likeButton = event.target; 
    const like = likeButton.closest('.card__like');
    like.classList.toggle('card__like_active');
  };

  //const increaseCard = document.querySelector('.popup-increase')
  //increaseCard.addEventListener('click', handleIncreasedPhoto)
  
  function handleIncreasedPhoto(card){
    card.preventDefault()
    const increaseCard = card.target;
    const popupIncreasePhoto = increaseCard.querySelector('.popup-increase__photo')
    const popupIncreaseHeding = increaseCard.querySelector('.popup-increase__heading')
    //popupIncreasePhoto.scr = cardPhoto.value;
    //popupIncreaseHeding.textContent = cardTitle.value;
    const openPopupIncrease = document.querySelector('.popup-increase');
    openPopupIncrease.classList.add('popup-increase_opened');
    console.log(card.name)
  }
