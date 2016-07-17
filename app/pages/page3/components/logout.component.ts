/**
 * Created by colinjlacy on 6/5/16.
 */
import { Component } from '@angular/core';
import { UserService } from '../../../user/user.service';

@Component({
    selector: 'logout',
    template: `<button (click)='logout()'>Logout</button>`,
    providers: [UserService]
})
export class LogoutComponent {
    constructor(private _user: UserService) {}

    public logout() {
        this._user.logout()
    }
}