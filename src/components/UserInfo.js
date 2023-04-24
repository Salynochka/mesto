export class UserInfo {
    constructor({name, description}){
      this._name = name;
      this._description = description;
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
  }
  