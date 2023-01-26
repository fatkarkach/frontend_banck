import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientSpaceComponent } from './client-space/client-space.component';
import { ClientSpaceHomeComponent } from './components/client-space-home/client-space-home.component';
import { ClientSpaceHistoryComponent } from './components/client-space-history/client-space-history.component';
import { ClientSpaceRecipientsComponent } from './components/client-space-recipients/client-space-recipients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    ClientSpaceComponent,
    ClientSpaceHomeComponent,
    ClientSpaceHistoryComponent,
    ClientSpaceRecipientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
