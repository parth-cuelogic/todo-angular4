import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../common/services/user.service';
import { AuthenticationService } from '../../common/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    credential = {
        invalid: false
    }

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) { }

    login(e) {
        if (e) e.preventDefault();

        let self = this;

        let user = self.userService.getUser(self.credential);

        if (!user) {
            self.credential.invalid = true;
            return;
        }

        self.authenticationService.setUser(user);
        self.credential.invalid = false;
        self.router.navigate(['/pages/home']);
    }
}
