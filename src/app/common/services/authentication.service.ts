import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    user = undefined;

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}