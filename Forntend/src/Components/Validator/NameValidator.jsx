export default class NameValidation{
    constructor(name){
        this.name=name;
        this.NameValidator=this.NameValidator()
    }
     NameValidator() {
        const regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
        if(regex.test(this.name)&& this.name.length>=3){
            return true;
        }
        else{
            return false;
        }
    }
}