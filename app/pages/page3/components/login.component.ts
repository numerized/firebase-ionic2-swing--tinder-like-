/**
 * Created by colinjlacy on 6/5/16.
 */
import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { UserService } from '../../../user/user.service';

@Component({
    selector: 'login',
    template: `
    <h3>Login to see some stuff using these creds:</h3>
    <dl>
    <dt>Email:</dt>
    <dd>cave@aperture.com</dd>
    <dt>Password:</dt>
    <dd>notneverbutnow</dd>
    </dl>
    <form (ngSubmit)="login()">
        <ion-list>
            <ion-item>
                <ion-label stacked>Email</ion-label>
                <ion-input [(ngModel)]="userEmail"
                           type="email"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label stacked>Password</ion-label>
                <ion-input [(ngModel)]="userPassword"
                           type="password"></ion-input>
            </ion-item>

            <hr/>
            <button type="submit">Login!</button>
        </ion-list>
    </form>`,
    directives: [FORM_DIRECTIVES],
    providers: [UserService]
})
export class LoginComponent {
    public userEmail: string;
    public userPassword: string;

    constructor(private _user: UserService) {}

    public login() {
        this._user.login(this.userEmail, this.userPassword)
    }
}
