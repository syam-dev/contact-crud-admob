import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../classes/contact.class';
import { ContactService } from '../../services/contact.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';



@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  contacts: Contact = new Contact();

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {

  }

  onSave(){
    let loader = this.loadingCtrl.create({content: 'Please wait..'});
    loader.present();
    this.contactService.save(this.contacts).subscribe(output=>{
    loader.dismiss();
    this.navCtrl.pop();
    this.alertHandler('Success','Contact saved');
    }, error=>{
      loader.dismiss();
      this.alertHandler('Error', error);
    })
  }
  

	alertHandler(title, messages){
		const alert = this.alertCtrl.create({title: title, message:messages, buttons: ['OK']});
		alert.present();
	}

}
