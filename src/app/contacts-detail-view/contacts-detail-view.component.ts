import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";
import {Observable} from "rxjs";
import {ContactsService} from "../contacts.service";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(private router: Router, private activateRoute: ActivatedRoute,
              private contactsService: ContactsService, private eventBusService: EventBusService ) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id'];
    this.contactsService
      .getContact(id)
      .subscribe(contact => {this.contact = contact;
                  this.eventBusService.emit('appTitleChange', contact.name);});

  }
  navigateToEditor(contact: Contact) {
    this.router.navigateByUrl('contact/' + contact.id + '/edit');
    //kan ook zoncer contact.id door bij de huidige url edit toe te voegen
    //this.router.navigate(['edit'], {relativeTo: this.route});
  }

  navigateToList() {
    this.router.navigateByUrl('contact');
  }

}
