import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  constructor( private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  
  async foo(){
    // alert('sdhd');
    
    const alert = await this.alertcontroller.create({
      header: '',
      subHeader: 'Transaction Successful!',
      message: 'You can edit or cancel your purchase from manage orders',
      buttons: ['MANAGE ORDERS']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  } 

}
