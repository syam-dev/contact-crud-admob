import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from '../../classes/contact.class';
import { ContactService } from '../../services/contact.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AddPage } from '../../pages/add/add';
import { DetailPage } from '../../pages/detail/detail';
import { SearchPage } from '../../pages/search/search';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	contacts: Contact[] = [];
	

  constructor(public navCtrl: NavController, private contactService: ContactService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {

	}
	
	ionViewWillEnter(){
		console.log('Test');
		let loader = this.loadingCtrl.create({content: 'Please Wait..'});
		loader.present();
		this.contactService.findAll().subscribe(output=>{
			loader.dismiss();
			this.contacts = output;

		}, error=>{
			loader.dismiss();
			this.alertHandler('Error', error);
		})
	}
	
	onGotoAddContact(){
		this.navCtrl.push(AddPage);
	}

	GoDetailContact(contacts){
		this.navCtrl.push(DetailPage, contacts);
	}

	onGotoSearchPage(){
    this.navCtrl.push(SearchPage);
	}
	


	alertHandler(title, messages){
		const alert = this.alertCtrl.create({title: title, message:messages, buttons: ['OK']});
		alert.present();
	}




}
