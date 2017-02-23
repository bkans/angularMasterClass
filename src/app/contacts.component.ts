import { Component } from '@angular/core';
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";
import {ContactsService} from "./contacts.service";
import {EventBusService} from "./event-bus.service";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {
  contacts;
  title: string = "";

  constructor(private contactsService: ContactsService,
      private eventBusService: EventBusService){
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.eventBusService.observe('appTitleChange')
      .subscribe(title => this.title = title);
  }
}
