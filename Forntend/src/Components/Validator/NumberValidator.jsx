import { contactInfo } from "../../cardComponets/ReduxComponents/slice";

import { useSelector } from "react-redux";


// const mobile = useSelector((state) => state.info.Mobile);

export default class MobileNumberValidator {
  constructor(mobileNumber) {
    this.mobileNumber = mobileNumber;
    this.isValid = this.validateMobileNumber();
  }

  // Regular expression for a valid Indian mobile number format
  validateMobileNumber() {
    const regex = /^[6-9]\d{9}$/; // Starts with 6, 7, 8, or 9 and contains exactly 10 digits
    
    if (!regex.test(this.mobileNumber)) {
      console.log("Invalid mobile number format.");
      return false;
    }
    
    // Check for 4 or more repeating digits
    const repeatingDigitsRegex = /(\d)\1{3,}/;  // Matches any digit repeated 4 or more times consecutively
    if (repeatingDigitsRegex.test(this.mobileNumber)) {
      console.log("Invalid mobile number: contains 4 or more consecutive repeating digits.");
      return false;
    }

    console.log("Valid mobile number.");
    return true;
  }
}

// Example usage
//const validNumber = new MobileNumberValidator(Number); // Valid
// const invalidNumber = new MobileNumberValidator('9999555123'); // Invalid: 4 repeating digits "9999"
// const invalidFormat = new MobileNumberValidator('1234567890'); // Invalid format (doesn't start with 6-9)
