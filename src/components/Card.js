import {confirmationPopup} from '../pages/index.js';
import {popupConfirmation} from '../utils/constants.js';
export class Card {
    constructor(data, cardTemplate, handleCardClick, userId) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._like = data.like;
        this._userId = userId;
        this._ownerId = data.ownerId;
        this._cardId = data.cardId
        this._cardTemplate = cardTemplate;
        this.handleCardClick = handleCardClick;
    }
    
    _getTemplate(){
      const cardElement = this._cardTemplate.querySelector('.card').cloneNode(true);

      return cardElement
    }

    generateCard() {
        this._element = this._getTemplate();
              
        this._cardPhoto = this._element.querySelector('.card__photo')
        this._cardPhoto.src =  this._link;
        this._cardPhoto.alt =  this._name;

        this._cardHeading = this._element.querySelector('.card__title');
        this._cardHeading.textContent = this._name;
        
        this._likeButton = this._element.querySelector('.card__like');
        this._deleteButton = this._element.querySelector('.card__delete-button');

        this.likeCounter();
        this.checkOwner();

        this._setEventListeners();

        return this._element;
        }

    likeCounter(){
    }

    checkOwner(){
      if (!this._ownerId){
        this._deleteButton.classList.add('card__delete-button_hidden');
      }
    }

    addLike(){

    }

    removeLike(){

    }

    _handleLike() {
      this._likeButton.classList.toggle('card__like_active');
    };

    _handleDelete() {
      this._element.remove();
      this._element = null;
    };

    _setEventListeners() {
      const submitButton = popupConfirmation.querySelector('.popup__button');

      this._likeButton.addEventListener('click', () => {
        this._handleLike();

      });
      this._deleteButton.addEventListener('click', () => {
        confirmationPopup.open();
        //this._handleDelete();
      });

      this._cardPhoto.addEventListener('click', () => {
        this.handleCardClick();
      });

      submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        confirmationPopup.close();
        _handleDelete();
      })
}
}