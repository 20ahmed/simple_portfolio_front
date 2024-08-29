import { Component, inject } from '@angular/core';
import {
  AboutService,
  IAbout,
} from '../dashboard/dashboard-about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutService = inject(AboutService);
  aboutInfo!: IAbout;

  ngOnInit() {
    this.aboutService.getAbout().subscribe((res) => {
      this.aboutInfo = res.data[0];
    });
  }
}
