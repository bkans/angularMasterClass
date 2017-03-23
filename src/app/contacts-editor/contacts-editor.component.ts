import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit, OnChanges {

  contact: Contact;
  confirmationNeeded: boolean;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService,
  private router: Router, private eventBusService: EventBusService) {
    this.confirmationNeeded = true;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.route.data.map(data => data['contact'])
      .subscribe(contact => {this.contact = contact;
      this.eventBusService.emit('appTitleChange', contact.name);});
    this.eventBusService.emit('appTitleChange', this.contact.name);
  }

  ngOnChanges() {

  }

  save (contact: Contact) {
    this.confirmationNeeded = false;
    this.contactsService.updateContact(contact)
      .subscribe(() => this.goToDetails(contact));
  }

  private goToDetails (contact: Contact) {
    this.router.navigate(['/contact', contact.id ]);
  }

  cancel(contact: Contact) {

  }

}
