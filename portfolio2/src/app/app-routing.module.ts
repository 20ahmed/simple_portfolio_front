import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardAboutComponent } from './dashboard/dashboard-about/dashboard-about.component';
import { DashboardWorksComponent } from './dashboard/dashboard-works/dashboard-works.component';
import { DashboardContactComponent } from './dashboard/dashboard-contact/dashboard-contact.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'works',
    component: WorksComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
  },
  {
    path: 'dashboard/about',
    component: DashboardAboutComponent,
  },
  {
    path: 'dashboard/works',
    component: DashboardWorksComponent,
  },
  {
    path: 'dashboard/contact',
    component: DashboardContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
