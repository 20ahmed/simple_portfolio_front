import { Component, inject } from '@angular/core';
import {
  IWork,
  WorksService,
} from '../dashboard/dashboard-works/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent {
  worksService = inject(WorksService);
  works!: IWork[];
  ngOnInit() {
    this.worksService.getAllWorks().subscribe((res) => {
      this.works = res.data;
    });
  }
}
