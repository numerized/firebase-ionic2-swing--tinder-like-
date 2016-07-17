import { Page } from 'ionic-angular';
import { NgIf } from '@angular/common'
import { DataService } from '../../data/data.service';
import { UserService } from '../../user/user.service';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';


@Page({
    templateUrl: 'build/pages/page3/page3.html',
    providers: [DataService, UserService],
    directives: [LoginComponent, LogoutComponent, NgIf]
})
export class Page3 {
    public private: string;
    public isAuth: boolean;

    constructor(private _data: DataService, private _user: UserService) {}

    onPageDidEnter() {
        this._user.auth.onAuthStateChanged(user => this.isAuth = !!user);

        this._data.db.child('private').on('value', data => {
            this.private = data.val();
        });
    }
}
