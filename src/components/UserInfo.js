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
      //if(data.name){
        this._name.textContent = data.name;
      //}
      //if(data.job){
        this._description.textContent = data.job;
      //}
      //if(data.link){
        this._avatar.src = data.link;
        this._avatar.alt = data.name;
      //}
    }
  }
  