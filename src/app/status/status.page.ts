import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(private storage:Storage, private nacCntrl:NavController) { }

  myStatus:string = "";

  ngOnInit() {
  }

  async onSave() {
    await this.storage.create();
    await this.storage.set("status", this.myStatus);
    await this.nacCntrl.navigateBack('/home');
  }

  async ionViewWillEnter() {
    this.myStatus = await this.storage.get('status');
  }
  

}
