import {Component} from 'angular2/core';
import 'rxjs/add/operator/map'; // crappy shim
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Contact, ContactComponent} from './contact/contact.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    viewProviders: [HTTP_PROVIDERS],
    directives: [ContactComponent]
})
export class AppComponent {
  contacts: Contact[] = new Array<Contact>()
  constructor(http: Http) {
    http.get('seed.json')
    .map(res => res.json())
    .subscribe((contacts : {contacts: Contact[]}) => {
      for (let c of contacts.contacts) {
        this.contacts.push(c)
      }
      console.log(this.contacts)
    })
  }
}
