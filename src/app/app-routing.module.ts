import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHelpPageComponent } from './angular-help-page/angular-help-page.component';
import { HomePageComponent} from "./home-page/home-page.component";
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // Did this so we have a page to always start with and not an empty page, this allows footer to stay at bottom.
  {path: 'home', component: HomePageComponent},
  {path: 'help', component: AngularHelpPageComponent},
  {path: 'projects/:name', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
