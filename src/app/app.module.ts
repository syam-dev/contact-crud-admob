import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactService } from '../services/contact.service';
import { HttpModule } from '@angular/http'; 
import { AddPage } from '../pages/add/add';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';
import { SearchPage } from '../pages/search/search';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    DetailPage,
    EditPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    DetailPage,
    EditPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
