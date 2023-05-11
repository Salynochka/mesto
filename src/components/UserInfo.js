export class UserInfo {
    constructor({name, description, avatar}){
      this._name = name;
      this._description = description;
      this._avatar = avatar;
    }
  
    getUserInfo(){
      return {
        profileName: this._name.textContent,
        profileDescription: this._description.textContent,
        profilePhoto: this._avatar.textContent,
      };
    }
  
    setUserInfo(data){
        this._name.textContent = data.name;
        this._description.textContent = data.job;
        this._avatar.src = data.link;
        this._avatar.alt = data.name;
    }
  }
  