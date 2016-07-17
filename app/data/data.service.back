/**
 * Created by colinjlacy on 6/5/16.
 */
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DataService {
    public db: any;
    public staticData: any;
    constructor() {
        this.db = firebase.database().ref('/');
        this.staticData = firebase.database().ref('/static');
    }
}