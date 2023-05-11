export class Api {
    constructor({mainUrl, headers}){
      this._mainUrl = mainUrl;
      this._headers = headers;
      console.log(mainUrl)
      console.log(headers)
    }

    //Получение карточек с сервера
    getCards() {
      return fetch(`${this._mainUrl}/cards`, {
        headers: this._headers,
      })
      .then(res => {this._checkStatus(res)})
    }

    //Добавление карточек
    createNewCard(name, link) {
      return fetch(`${this._mainUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link,
        }),
      }) 
      .then(res => {this._checkStatus(res)})
    }
  
    //Удаление карточки
    removeCard(cardId){
      return fetch(`${this._mainUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(res => {this._checkStatus(res)})
    }

    //Получение данных о пользователе
    getUserInfo(){
      return fetch(`${this._mainUrl}/users/me`, {
        headers: this._headers,
      })
      .then(res => {this._checkStatus(res)})
    }

    //Добавление данных о пользователе
    editProfile(name, about){
      return fetch(`${this._mainUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        })
      })
      .then(res => {this._checkStatus(res)})
    };
  
    //Добавление лайка
    addLike(cardId) {
      return fetch(`${this._mainUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(res => {this._checkStatus(res)})
    }
  
    //Удаление лайка
    deleteLike(cardId) {
      return fetch(`${this._mainUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(res => {this._checkStatus(res)})
    }

    //Редактирование фото профиля
    editAvatarPhoto(avatar){
      return fetch(`${this._mainUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar
        })
      })
      .then(res => {this._checkStatus(res)})
    };

    //Проверка ответа от сервера
    _checkStatus(res){
      if(res.ok){
        return res.json();
      } 
      return Promise.reject(`Ошибка: ${res.status}`)
    }

  }