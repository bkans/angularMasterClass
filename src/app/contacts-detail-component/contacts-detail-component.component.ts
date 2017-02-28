import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable} from "rxjs";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-detail-component',
  templateUrl: './contacts-detail-component.component.html',
  styleUrls: ['./contacts-detail-component.component.css']
})
export class ContactsDetailComponentComponent implements OnInit {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {

  }


}
