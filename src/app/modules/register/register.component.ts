import { Component } from '@angular/core';

import { UserService } from '../../common/services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    user: any = {};

    constructor(
        userService: UserService
    ) { }

    register() {
        let self = this;

        console.log(self.user);
    }

    passwordChangeHandler(key, ngForm) {
        let self = this;
        console.log(ngForm)
        if (!self.user.c_password || !self.user.password) return;

        if (self.user.c_password !== self.user.password) {
        }
    }
}
