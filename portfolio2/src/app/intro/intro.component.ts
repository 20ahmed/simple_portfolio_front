import { Component, inject } from '@angular/core';
import { IHome, IntroService } from './intro.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  homeInfo!: IHome;
  introService = inject(IntroService);

  ngOnInit() {
    this.introService.getHomeInfo().subscribe((res) => {
      this.homeInfo = res.data[0];
    });
  }
}
