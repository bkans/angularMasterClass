import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable, Subject} from "rxjs";
import {merge} from "rxjs/observable/merge";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService, private eventBusService: EventBusService){
  }

  ngOnInit() {
    this.contacts = this.contactsService.searchMetSubject(this.terms$);
    this.eventBusService.emit('appTitleChange', '');
   // this.contacts = this.terms$.debounceTime(400)
   //     .distinctUntilChanged()
   //     .switchMap(term => this.contactsService.search(term))
   //     .merge(this.contactsService.getContacts());
  }

  //ngOnInit() {
  //  this.contacts = this.contactsService.getContacts();
    //   .subscribe(contacts => this.contacts = contacts); -> niet meer nodig omwille van async pipe in html
  //  this.terms$.debounceTime(400)
   //   .distinctUntilChanged()
   //   .subscribe(term => this.search(term));
  //}

  //search(term: string) {
  //  this.contacts = this.contactsService.search(term);
  //}

}
