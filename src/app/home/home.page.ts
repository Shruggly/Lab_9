import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stories: any[] = [];

  myStatus: string = "";

  constructor(private storage: Storage) {

  }

  async ionViewWillEnter() {
    this.myStatus = await this.storage.get('status');
  }

}
