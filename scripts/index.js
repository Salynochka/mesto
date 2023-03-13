const formButton = document.querySelector('.popup__form');

const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const addFormButton = document.querySelector('.popup-add__form')

const nameCardInput = document.querySelector('.popup__item_type_name-card');
const linkInput = document.querySelector('.popup__item_type_link');


//Открытие попапов через кнопки изменения и добавления
const editPopup = document.querySelector('.popup-edit');
const addPopup = document.querySelector('.popup-add');

  const formElement = document.querySelector('.profile__changes');
  formElement.addEventListener('click', handleEditPopup)

  const addElement = document.querySelector('.profile__button-add');
  addElement.addEventListener('click', handleAddPopup)

    function handleEditPopup(){openPopup(editPopup)}
    function handleAddPopup(){openPopup(addPopup)}

      function openPopup(popup) {
        popup.classList.add('popup_opened');
      }

//Закрытие попапов на крестик
const closeButton = document.querySelectorAll('.popup__button-close')

  closeButton.forEach(function(item){
    item.addEventListener('click', handleCloseButton)
  })

  function closePopup(close) {
    close.classList.remove('popup_opened');
    };

  function handleCloseButton(event){
    const closeButton = event.target.closest('.popup')
    closePopup(closeButton)
  }

formElement.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  handleEditPopup;
});

formButton.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  closePopup(editPopup)
});

addFormButton.addEventListener('submit', function (evt) {
  evt.preventDefault();
  handleAddCard;
  closePopup(addPopup)
});

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

  //Создание новых карточек
  addFormButton.addEventListener('submit', handleAddCard)

  function handleAddCard(evt){
    evt.preventDefault()
    const addFormButton = evt.target;
    const nameCardInput = addFormButton.querySelector('.popup__item_type_name-card').value;
    const linkInput = addFormButton.querySelector('.popup__item_type_link').value;
    const newCard = {
      name: nameCardInput,
      alt: nameCardInput,
      link: linkInput
    }
    createCards(newCard);
    closePopup(addPopup)
    addFormButton.reset();
    return newCard;
  }

  //Появление карточек из JavaScript
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
      cardPhoto.addEventListener('click', () => handleIncreasePhoto(card.name, card.link));
      cards.prepend(cardTemplate);
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
  
  //Увеличение фото
  const increasePopup = document.querySelector('.popup-increase');
  const cardPhoto = document.querySelector('.card__photo');
  const cardTitle = document.querySelector('.card__title');

  const popupIncreasePhoto = increasePopup.querySelector('.popup-increase__photo');
  const popupIncreaseHeading = increasePopup.querySelector('.popup-increase__heading');

  function handleIncreasePhoto(name, link){
    popupIncreasePhoto.src = link;
    popupIncreasePhoto.alt = name;
    popupIncreaseHeading.textContent = name;
    increasePopup.classList.add('popup-increase_opened');
  }