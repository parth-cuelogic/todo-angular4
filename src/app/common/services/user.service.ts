import { Injectable } from '@angular/core';

import { User } from '../classes/user.class';

@Injectable()
export class UserService {
    userUniqueCount = 1;
    users = [];

    generateDefaultUsers() {
        let self = this;

        self.users.push(new User(self.userUniqueCount++, 'parth', '123', 'parth', 'vakharia', 'parth.vakharia@cuelogic.com', '', 'M'));
        self.users.push(new User(self.userUniqueCount++, 'demo', '123', 'demo', 'testing', 'demo@testing.com', '', 'F'));

    }

    getUsers() {
        return this.users;
    }

    registerUser(user: User) {
        let self = this;

        let userFound = self.users.find((item) => {
            if (item.username == user.username) return item;
        })

        if (!userFound) {
            user.id = self.userUniqueCount++;
            self.users.push(new User(user.id, user.username, user.password, user.firstname, user.lastname, user.email, user.address, user.gender));
            return user;
        }

        return undefined;
    }

    getUser(credentials) {
        let self = this;

        return self.users.find((user) => {
            if (user.username === credentials.username && user.password === credentials.password) {
                return user;
            }
        })
    }
}