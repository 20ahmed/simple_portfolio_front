import { Component, inject } from '@angular/core';
import { IHome, IntroService } from '../intro/intro.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  homeInfo!: IHome;
  introService = inject(IntroService);

  ngOnInit() {
    this.introService.getHomeInfo().subscribe((res) => {
      this.homeInfo = res.data[0];
    });
  }
}
