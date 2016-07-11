import { Component } from '@angular/core';

@Component({
    selector: 'main-navbar',
    templateUrl: 'app/navbar.component.html'
})

export class NavbarComponent {
    signedIn: boolean = false;
}