import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardAboutComponent } from './dashboard/dashboard-about/dashboard-about.component';
import { DashboardWorksComponent } from './dashboard/dashboard-works/dashboard-works.component';
import { DashboardContactComponent } from './dashboard/dashboard-contact/dashboard-contact.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    WorksComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    DashboardHomeComponent,
    DashboardHeaderComponent,
    DashboardAboutComponent,
    DashboardWorksComponent,
    DashboardContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
