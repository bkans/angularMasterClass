import {Directive, forwardRef} from '@angular/core';
import {ContactsService} from "./contacts.service";
import {FormControl, NG_ASYNC_VALIDATORS} from "@angular/forms";

export function checkEmailAvailability(contactsService: ContactsService) {
  console.log("In checkEmailAvailability");
  return (c: FormControl) => {return contactsService.isEmailAvailable(c.value)
    .map(response => !response.error ? null : { emailTaken: true });
    };
}

@Directive({
  selector: '[trmEmailAvailabilityValidator] [ngModel]',
  providers : [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAvailabilityValidatorDirective),
      multi: true
    }
  ]
})
export class EmailAvailabilityValidatorDirective {
  _validate: Function;

  constructor(contactsService: ContactsService ) {
    this._validate = checkEmailAvailability(contactsService);
  }

  validate(c: FormControl) {
        return this._validate(c);
      }

}


