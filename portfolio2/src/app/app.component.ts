import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  router = inject(Router);
  dashboardActive = false;

  ngDoCheck() {
    if (this.router.url.includes('/dashboard')) {
      this.dashboardActive = true;
    } else {
      this.dashboardActive = false;
    }
  }
}
