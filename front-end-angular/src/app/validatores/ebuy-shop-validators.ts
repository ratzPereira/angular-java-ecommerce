import { FormControl, ValidationErrors } from '@angular/forms';

export class EBuyShopValidators {
  //whitespace validation
  static notOnlyWhiteSpaces(control: FormControl): ValidationErrors {
    //check if the string only contains white spaces
    if (control.value != null && control.value.trim().length === 0) {
      //invalid, return error object
      return { notOnlyWhiteSpace: true };
    } else {
      //valid, return null
      return null;
    }
  }
}
