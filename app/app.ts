import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {
    FIREBASE_PROVIDERS, defaultFirebase,
    AngularFire, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from 'angularfire2';

@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    providers: [
        FIREBASE_PROVIDERS,
        // Initialize Firebase app  
        defaultFirebase({
            apiKey: "YOUR-API-KEY",
            authDomain: "clearlyinnovative-firebasestarterapp.firebaseapp.com",
            databaseURL: "https://clearlyinnovative-firebasestarterapp.firebaseio.com",
            storageBucket: "clearlyinnovative-firebasestar.appspot.com",
        }),
        firebaseAuthConfig({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
            remember: 'default',
            scope: ['email']
        })
    ],
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage: any = TabsPage; 

    constructor(platform: Platform) {

        platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }
}
