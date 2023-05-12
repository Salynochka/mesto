export class UserInfo {
    constructor({name, about, avatar}){
      this._name = name;
      this._about = about;
      this._avatar = avatar;
    }
  
    getUserInfo(){
      return {
        profileName: this._name.textContent,
        profileDescription: this._about.textContent,
        profilePhoto: this._avatar,
      };
    }
  
    setUserInfo(data){
      this._name.textContent = data.name;
      this._about.textContent = data.about;
      this._avatar.src = data.avatar;
      this._avatar.alt = data.name;
      this._id = data._id
    }
  }
  