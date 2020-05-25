import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../environments/environment'

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { ShowItemsService } from './services/show-items.service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'easy-store-app'),
    AngularFirestoreModule
  ],
  providers: [ShowItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
