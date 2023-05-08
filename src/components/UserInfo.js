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
      };
    }
  
    setUserInfo(data){
      this._name.textContent = data.name;
      this._description.textContent = data.job;
    }

    setAvatarInfo(avatar){
      this._avatar.src = avatar;
    }
  }
  