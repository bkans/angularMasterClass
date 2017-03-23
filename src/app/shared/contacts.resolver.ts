import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactsService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactsService
      .getContact(route.params['id']);
  }
}
