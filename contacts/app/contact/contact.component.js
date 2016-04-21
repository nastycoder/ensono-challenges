System.register(['angular2/core', '@angular2-material/button', '@angular2-material/card'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_1, card_1;
    var Contact, ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact() {
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
            ContactComponent = (function () {
                function ContactComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Contact)
                ], ContactComponent.prototype, "contact", void 0);
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: './app/contact/contact.component.html',
                        styleUrls: ['./app/contact/contact.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map