import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { SafariViewController } from '@awesome-cordova-plugins/safari-view-controller/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  AppRate,
    SafariViewController],
  bootstrap: [AppComponent],
})
export class AppModule {}
