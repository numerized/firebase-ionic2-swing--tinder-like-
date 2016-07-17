import {Page} from 'ionic-angular';
import { DataService } from '../../data/data.service';

@Page({
    templateUrl: 'build/pages/page2/page2.html',
    providers: [DataService]
})
export class Page2 {

    public message: string;
    public direct: string;

    constructor(private _data: DataService) {}

    onPageDidEnter() {
        // this can probably be improved with observables
        Promise.all([this.fetchMessage(), this.fetchDirect()]);
    }

    private fetchMessage() {
        return new Promise(res => {
            // this method...
            this._data.db.child('static').on('value', data => {
                this.message = data.val();
                res();
            });
        });
    }

    private fetchDirect() {
        return new Promise(res => {
            // ...fetches the same data as this method
            this._data.staticData.on('value', data => {
                this.direct = data.val();
                res();
            });
        });
    }
}
