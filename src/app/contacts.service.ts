import { Injectable } from '@angular/core';
import {CONTACT_DATA} from "./data/contact-data";
import {Http} from "@angular/http";
import {Contact} from "./models/contact";
import {Subject} from "rxjs";

@Injectable()
export class ContactsService {
  API_ENDPOINT = 'http://localhost:4201/api';

  //ja kan ook injecteren met @Inject bvb als de url omdat dit een String is en je geen class hebt
  // ook toevoegen in  app.modules als provider
  constructor(private http: Http) { }

  getContacts() {
    // api kan ook met ` en ${API_ENDPOINT}, ${id}
    // map kan in 1 keer res.json().items
    return this.http.get(this.API_ENDPOINT + '/contacts')
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string){
    return this.http.get(this.API_ENDPOINT + '/contacts/' + id)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    let url = this.API_ENDPOINT + '/contacts/' + contact.id;
    console.log('saving contact ' + url + ' city: ' + contact.address.city);
    return this.http.put(url, contact);

  }

  search(term: string) {
    return this.http.get(this.API_ENDPOINT + '/search?text=' + term)
      .map(res => res.json())
      .map(data => data.items);
  }

  searchMetSubject(terms$: Subject<string>) {
    return terms$.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.search(term))
      .merge(this.getContacts());
  }

  addContact(contact: Contact) {
      console.log('add contact ' + contact.name);
      return this.http.post(this.API_ENDPOINT + '/contacts/', contact);
  }

  isEmailAvailable(email: string) {
    let map = this.http.get(this.API_ENDPOINT + '/check-email?email=' + email)
      .map(res => res.json());
    console.log('isEmailAvailable : ' + map);
    return map;
  }
}
