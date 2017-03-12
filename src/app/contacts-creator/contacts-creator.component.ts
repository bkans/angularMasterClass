import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validateEmail} from "../email-validator.directive";
import {checkEmailAvailability} from "../email-availability-validator.directive";

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  form : FormGroup;

  constructor(private contactsService: ContactsService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', validateEmail, checkEmailAvailability(this.contactsService)],
      phone: '',
      birthday: '',
      website: '',
      image: '',
      address: this.formBuilder.group({
        street: '',
        city: '',
        zip: '',
        country: ''
      })
    });
  }

  save(contact) {
    this.contactsService.addContact(contact).subscribe(res => this.router.navigateByUrl('contact/0'));
  }
}
