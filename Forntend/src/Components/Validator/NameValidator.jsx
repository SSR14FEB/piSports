export default class NameValidation{
    constructor(name){
        this.name=name;
        this.NameValidator=this.NameValidator()
    }
     NameValidator() {
        const regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
        if(regex.test(this.name)){
            return true;
        }
        else{
            return false;
        }
    }
}