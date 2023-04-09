const initialCards = [
    {
      name: 'Эверест',
      link: 'images/everest.jpg'
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
      name: 'Озеро Брайес',
      link: '/images/braies_lake.jpg'
    },
    {
      name: 'Мачу Пикчу',
      link: 'images/machu_picchu.jpg'
    }
]; 

export const cardTemplate = document.querySelector('.card__template').content;

export const cardPhoto = cardTemplate.querySelector('.card__photo');
export const cardTitle = cardTemplate.querySelector('.card__title');

const popupWithPhoto = document.querySelector('.popup-increase');
const popupIncreasePhoto = popupWithPhoto.querySelector('.popup-increase__photo');
const popupIncreaseHeading = popupWithPhoto.querySelector('.popup-increase__heading');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function handleIncreasePhoto(name, link){
  popupIncreasePhoto.src = link;
  popupIncreasePhoto.alt = name;
  popupIncreaseHeading.textContent = name;
  openPopup(popupWithPhoto)
}

export class Card {
    constructor(data, templateSelector, handleIncreasePhoto) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this.templateSelector = templateSelector;
        this.handleIncreasePhoto = handleIncreasePhoto;
    }
    
    _getTemplate(){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    return cardElement
    }

    generateCard() {
        this._element = this._getTemplate();
              
        this._cardPhoto = this._element.querySelector('.card__photo')
        this._cardPhoto.src =  this._link;
        this._cardPhoto.alt =  this._name;

        this._cardHeading = this._element.querySelector('.card__title')
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
        this.handleIncreasePhoto(this._name, this._link);
      });
}
}

initialCards.forEach((item) => {
    const card = new Card(item, cardTemplate, handleIncreasePhoto);
    const cardElement = card.generateCard();

    document.querySelector('.cards').append(cardElement);
    })