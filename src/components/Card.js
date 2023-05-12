export class Card {
    constructor({data, cardTemplate, handleCardClick, userId, handleDeleteClick, like, dislike}) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._likes = data.likes;
        this._cardTemplate = cardTemplate;
        this.handleCardClick = handleCardClick;

        this._ownerId = data.owner._id;
        this._id = data._id
        this._userId = userId;
        this._handleDeleteClick = handleDeleteClick;
        this._like = like;
        this._dislike = dislike
    }
    
    _getTemplate(){
      const cardElement = this._cardTemplate.querySelector('.card').cloneNode(true);

      return cardElement
    }

    setLikes(res){
      this._likeCount.textContent = `${res.likes.length}`
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
        
        this.checkOwner();

        this._likeCount = this._element.querySelector('.card__like-counter')
        this._likeCount.textContent = this._likes.length

        this.likedCard();
        this._setEventListeners();

        return this._element;
        }

    checkOwner(){
      if (this._ownerId !== this._userId){
        this._deleteButton.remove()
      }
    }

    likedCard() {
      this._likes.forEach((id) => {
        if (id._id === this._userId) {
          this.addLike()
        } else {
          this.removeLike()
        }
      })
    }

    addLike(){
      this._likeButton.classList.add('card__like_active');
    }

    removeLike(){
      this._likeButton.classList.remove('card__like_active');
    }

    deleteCard(){
      this._element.remove()
      this._element = null
    };

    _setEventListeners() {
      this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like_active')) {
          this._dislike()
        } else {
          this._like()
        }
      });

      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteClick(this._id);
      });

      this._cardPhoto.addEventListener('click', () => {
        this.handleCardClick();
      });
    }
  }