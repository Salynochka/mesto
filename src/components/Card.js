export class Card {
    constructor(data, cardTemplate, handleIncreasePhoto) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._cardTemplate = cardTemplate;
        this.handleIncreasePhoto = handleIncreasePhoto;
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
     
        this._setEventListeners();

        return this._element;
        }

    _handleLike() {
      this._likeButton.classList.toggle('card__like_active');
      };

    _handleDelete() {
      this._element.remove();
    };

    _setEventListeners() {
      this._likeButton.addEventListener('click', () => {
        this._handleLike();

      });
      this._deleteButton.addEventListener('click', () => {
        this._handleDelete();
      });

      this._cardPhoto.addEventListener('click', () => {
        this.handleIncreasePhoto();
      });
}
}