import { Component } from '@angular/core';

import { UserService } from './common/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    userService: UserService
  ) {
    userService.generateDefaultUsers();
  }
}
