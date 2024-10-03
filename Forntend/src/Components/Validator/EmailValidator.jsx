export default class EmailValidator {
  constructor(email) {
    this.email = email;
  }

  // Method to validate email and return true or false
  validateEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(this.email)) {
      return true;  // Return true if the email is valid
    } else {
      return false; // Return false if the email is invalid
    }
  }
}

  // Example usage
 
  