import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS} from "@angular/forms";

export function validateEmail(c: FormControl) {
  var VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  var valid = VALID_EMAIL.test(c.value) || c.value === '';

  return (!valid)
    ? {validateEmail: {valid: false}}
    : null;
}

@Directive({
  //ngModel staat hier en zort ervoor dat je trmValidateEmail in je html niet kan gebruiken zonder ngModel
  selector: '[trmValidateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      //multi omdat je een extra validator wil toevoegen
      multi: true
    }
  ]
})
export class EmailValidatorDirective {



}
