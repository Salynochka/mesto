const formElement = document.querySelector('.profile__changes');
const closeButton = document.querySelector('.popup__button-close');
const formButton = document.querySelector('.popup__form');
/*const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');*/

const addElement = document.querySelector('.profile__button-add');
const formEditButton = document.querySelector('.popup__form-edit');
/*const cardTitle = document.querySelector('.card__title');
const cardPhoto = document.querySelector('.card__photo');
const nameCardInput = document.querySelector('.popup__item_type_name-card');
const linkInput = document.querySelector('.popup__item_type_link');*/

const likeButton = document.querySelector('.card__like');


/*formElement.addEventListener('click', function handleFormSubmit () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    const editProfile = document.querySelector('.popup');
    editProfile.classList.add('popup_opened');
});

closeButton.addEventListener('click', function handleFormClose () {
    const closeProfile = document.querySelector('.popup');
    closeProfile.classList.remove('popup_opened');
});

formButton.addEventListener('submit', function handleFormSave (evt) {
    evt.preventDefault();
    profileName.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    const saveProfile = document.querySelector('.popup');
    saveProfile.classList.remove('popup_opened');
});

addElement.addEventListener('click', function editFormSubmit () {
    nameCardInput.value = cardTitle.textContent;
    linkInput.value = cardPhoto.textContent;
    const addCard = document.querySelector('.popup');
    addCard.classList.add('popup_opened');
});

formEditButton.addEventListener('submit', function editFormSave (evt) {
    evt.preventDefault();
    cardTitle.value = nameCardInput.textContent;
    cardPhoto.value = linkInput.textContent;
    const createCard = document.querySelector('.popup');
    createCard.classList.add('popup_opened');
});

/*likeButton.addEventListener('click', function () {
  likeActive.target.classList.toggle('cars__like_active');
  const likeActive = document.querySelector('.card__like_active');
  likeActive.setAttribute('disabled', false)
  return likeActive;
});*/

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

  //console.log(cardTemplate)

  initialCards.forEach(function(card){
    const cardTemplate = document.querySelector('.card__template').content.cloneNode(true);
    const cardTitle = cardTemplate.querySelector('.card__title');
    cardTitle.textContent = card.name;
    const cardPhoto = cardTemplate.querySelector('.card__photo');
    cardPhoto.setAttribute('src', card.link);
    cardPhoto.setAttribute('alt', card.name);
    cards.append(cardTemplate)
  })

  const popupCards = [
    {
      heading: 'Редактировать профиль',
      button: 'Сохранить'
    },
    {
      heading: 'Новое место',
      button: 'Создать'
    }
  ]; 

  const popup = document.querySelector('.popup');

  popupCards.forEach(function(popupCard){
    const popupTemplate = document.querySelector('.popup__template').content.cloneNode(true);
    const popupHeading = popupTemplate.querySelector('.popup__heading');
    popupHeading.textContent = popupCard.heading;
    const popupButton = popupTemplate.querySelector('.popup__button-save')
    popupButton.setAttribute('button', popupCard.button);
    popupCards.append(popupTemplate);
  })
  