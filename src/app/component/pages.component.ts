import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../common/services/authentication.service';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PagesComponent {
    user = undefined;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        let self = this;

        self.user = authenticationService.getUser();
        if(!self.user){
            self.router.navigate(['../login']);
        }
    }

    logout() {
        let self = this;

        self.authenticationService.setUser(undefined);
        self.router.navigate(['../login']);
    }
}
