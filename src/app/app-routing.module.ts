import { ClientSpaceRecipientsComponent } from './components/client-space-recipients/client-space-recipients.component';
import { ClientSpaceHomeComponent } from './components/client-space-home/client-space-home.component';
import { ClientSpaceComponent } from './client-space/client-space.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSpaceHistoryComponent } from './components/client-space-history/client-space-history.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signIn", component:LoginComponent},
  {path:"MonEspace",component:ClientSpaceComponent,
  children:[
    {path:"",component:ClientSpaceHomeComponent},
    {path:"history",component:ClientSpaceHistoryComponent},
    {path:"recipients",component:ClientSpaceRecipientsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
