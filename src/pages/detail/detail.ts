import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../classes/contact.class';
import { ContactService } from '../../services/contact.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { EditPage } from '../../pages/edit/edit';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  contacts: Contact = new Contact();

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.contacts = this.navParams.data;
  }

  confirmRemove(){
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure want to delete'+ this.contacts.full_name,
      buttons: [
        {
          text: 'No',
          handler: () =>{
            console.log('do nothing');
          }
        },
        {
          text: 'Yes',
          handler: () =>{
            this.onRemove();
          }
        }
      ]
    });
    confirm.present();
  }

  onRemove(){
    this.contactService.removeById(this.contacts.id).subscribe(output=>{
    this.navCtrl.pop();
    this.alertHandler('Success', 'Contact deleted');
    }, error=>{
        this.alertHandler('Error', error);
    });
  }

  onGotoeditPage(){
    this.navCtrl.push(EditPage, this.contacts);
  }

  alertHandler(title, messages){
		const alert = this.alertCtrl.create({title: title, message:messages, buttons: ['OK']});
		alert.present();
	}
}
