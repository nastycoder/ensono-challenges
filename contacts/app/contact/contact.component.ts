import {Component, Input} from 'angular2/core';
import {MdButton} from '@angular2-material/button'
import {MD_CARD_DIRECTIVES, MdCard} from '@angular2-material/card'
import {MD_LIST_DIRECTIVES} from '@angular2-material/list'

export class Contact {
  id: number
  name: string
  phone: string
  email: string
  birthday: string
  avatar: string
}

@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html',
    styleUrls: ['app/contact/contact.component.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton, MD_LIST_DIRECTIVES]
})
export class ContactComponent {
  @Input() contact: Contact
}
