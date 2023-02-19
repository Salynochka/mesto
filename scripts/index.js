let formElement = document.querySelector('.profile__changes');
let closeButton = document.querySelector('.popup__button-close');
let formButton = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

formElement.addEventListener('click', function handleFormSubmit () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    let editProfile = document.querySelector('.popup');
    editProfile.classList.add('popup_opened');
});

closeButton.addEventListener('click', function handleFormClose () {
    let closeProfile = document.querySelector('.popup');
    closeProfile.classList.remove('popup_opened');
});

formButton.addEventListener('submit', function handleFormSave (evt) {
    evt.preventDefault();
    profileName.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    let saveProfile = document.querySelector('.popup');
    saveProfile.classList.remove('popup_opened');
});