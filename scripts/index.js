let formElement = document.querySelector('.profile__changes');

formElement.addEventListener('click', function handleFormSubmit (evt) {
    evt.preventDefault();
    let editProfile = document.querySelector('.popup');
    editProfile.classList.add('popup_opened');
    console.log(editProfile);
});

let closeButton = document.querySelector('.popup__button-close');

closeButton.addEventListener('click', function handleFormClose (evt) {
    evt.preventDefault();
    let closeProfile = document.querySelector('.popup');
    closeProfile.classList.remove('popup_opened');
    console.log(closeProfile);
});

let saveButton = document.querySelector('.popup__button-save');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

saveButton.addEventListener('click', function handleFormSave (evt) {
    evt.preventDefault();
    console.log(nameInput.value);
    console.log(jobInput.value);  
    profileName.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    let saveProfile = document.querySelector('.popup');
    saveProfile.classList.remove('popup_opened');
});