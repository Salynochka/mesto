//import {confirmationPopup} from '../pages/index.js';
//import {popupConfirmation} from '../utils/constants.js';
export class Card {
    constructor({data, cardTemplate, handleCardClick, userId, handleDeleteClick, handleLikeClick}) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._likes = data.likes;
        this._cardTemplate = cardTemplate;
        this.handleCardClick = handleCardClick;

        this.ownerId = data.ownerId;
        this._cardId = data.id
        this._userId = userId;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
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

        //this.setLikes();
        this.checkOwner();
       // this.likedCard();

        this._setEventListeners();

        return this._element;
        }

    /*likeCounter(res){
      this._likeCount.textContent = `${res.like.length}`
    }*/

    setLikes(res){
      this._likeCount = this._element.querySelector('.card__like-counter')
      this._likeCount.textContent = `${res.like.length}`
      this.likedCard()
    }

    checkOwner(){
      if (this.ownerId !== this._userId){
        this._deleteButton.classList.add('card__delete-button_hidden');
      }
    }

    addLike(){
      this._likeButton.classList.add('card__like_active');
    }

    removeLike(){
      this._likeButton.classList.remove('card__like_active');
    }

    likedCard() {
      //const hasLikeCard = this._likes.contain((user) => user._id === this._userId)
     this._likes.forEach((cardId) => {
        if (cardId._id === this._userId) {
          this.addLike()
        } else {
          this.removeLike()
        }
      })
    }
     /* this._likeCount.forEach((cardId) => {
        if (cardId._id === this._userId) {
          this.addLike()
        } else {
          this.removeLike()
        }
      })
    }*/

    deleteCard(){
      this._element.remove()
      this._element = null
    };

    _setEventListeners() {
      this._likeButton.addEventListener('click', () => {
        this._handleLikeClick(this._cardId);
       /* if (this._likeButton.classList.contains('card__like_active')) {
          this.removeLike()
        } else {
          this.addLike()
        }*/
      });

      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteClick(this._cardId);
      });

      this._cardPhoto.addEventListener('click', () => {
        this.handleCardClick();
      });
    }
  }