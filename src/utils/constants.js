export const variablesForValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    inputErrorTemplate: '.popup__form-error_type_',
    errorActiveClass: 'popup__form-error_active',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    errorPopupItemClass: 'popup__item_error',
  };

import Everest from '../images/everest.jpg';
import Sequoia from '../images/sequoia.jpg';
import RedSea from '../images/red_sea.jpg';
import AntelopeKanyon from '../images/antelope_canyon.jpg';
import Brayes from '../images/braies_lake.jpg';
import MachuPikchu from '../images/machu_picchu.jpg';

export const initialCards = [
    {
      name: 'Эверест',
      link: Everest
    },
    {
      name: 'Национальный парк Секвойа',
      link: Sequoia
    },
    {
      name: 'Красное море',
      link: RedSea
    },
    {
      name: 'Антилопа Каньон',
      link: AntelopeKanyon
    },
    {
      name: 'Озеро Брайес',
      link: Brayes
    },
    {
      name: 'Мачу Пикчу',
      link: MachuPikchu
    }
]; 

export const formEditProfile = document.querySelector('.popup-edit__form');
export const formAddCard = document.querySelector('.popup-add__form')

export const nameInput = document.querySelector('.popup__item_type_name');
export const jobInput = document.querySelector('.popup__item_type_job');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');

export const popupEditProfile = document.querySelector('.popup-edit');
export const popupAddCard = document.querySelector('.popup-add');

export const buttonChangeProfile = document.querySelector('.profile__changes');
export const buttonAddNewCard = document.querySelector('.profile__button-add');

export const cardTemplate = document.querySelector('.card__template').content;

export const popupWithPhoto = document.querySelector('.popup-increase');