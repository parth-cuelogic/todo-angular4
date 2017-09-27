import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../common/services/user.service';
import { User } from '../../common/classes/user.class';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    user = <User>{};

    regFail: boolean = false;
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    register() {
        let self = this;

        let user = self.userService.registerUser(self.user);

        if (user) {
            self.regFail = false;
            self.router.navigate(['/login']);
            return;
        }

        self.regFail = true;
    }

    passwordChangeHandler(key, ngForm) {
        let self = this;
        console.log(ngForm)
        if (!self.user.c_password || !self.user.password) return;

        if (self.user.c_password !== self.user.password) {
        }
    }
}
