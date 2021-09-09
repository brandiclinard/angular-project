import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHelpPageComponent } from './angular-help-page/angular-help-page.component';
import { HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'help', component: AngularHelpPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
