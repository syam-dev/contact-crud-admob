import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../classes/contact.class';
import { ContactService } from '../../services/contact.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';




@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  contacts: Contact = new Contact();

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {

  }

  onUpdate(){
    let loader = this.loadingCtrl.create({content: 'Please wait..'});
    loader.present();
    this.contactService.update(this.contacts).subscribe(output=>{
      loader.dismiss();
      this.navCtrl.pop();
      this.alertHandler('Success','Contact updated');
    },error=>{
      loader.dismiss();
      this.alertHandler('Error', error);
    })
  }

  ionViewWillEnter() {
    this.contacts = this.navParams.data;
  }

  alertHandler(title, messages){
		const alert = this.alertCtrl.create({title: title, message:messages, buttons: ['OK']});
		alert.present();
	}

}
