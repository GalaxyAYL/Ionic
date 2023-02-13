import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['style.css']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  openFilters() {
    let alert = this.alertController.create({
        title: 'Example',
        subTitle: 'Example subtitle',
        buttons: ['OK']
    });

    alert.present();
}
  title :any
}
