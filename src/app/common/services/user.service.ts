import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users = [];

    generateDefaultUsers() {
        this.users.push({ id: 1, username: 'parth', password: '123', firstname: 'parth', lastname: 'vakharia', email: 'parth.vakharia@cuelogic.com' });
        this.users.push({ id: 1, username: 'demo', password: '123', firstname: 'demo', lastname: 'testing', email: 'demo.testing@cuelogic.com' });
    }

    getUsers() {
        return this.users;
    }

    registerUser(user) {
        // this.users.push(new this.User(user.name, user.password, user.email, user.firstname, user.lastname, user.address, user.gender))
    }

    getUser(credentials) {
        return this.users.find((user) => {
            if (user.username === credentials.username && user.password === credentials.password) {
                return user;
            }
        })
    }
}