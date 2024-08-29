import { Component, inject } from '@angular/core';
import { IWork, WorksService } from './works.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-dashboard-works',
  templateUrl: './dashboard-works.component.html',
  styleUrl: './dashboard-works.component.css',
})
export class DashboardWorksComponent {
  worksService = inject(WorksService);
  worksInfo!: IWork[];
  editMode = false;
  editForm!: FormGroup;
  currentIndex = 0;
  addMode = false;
  addForm!: FormGroup;
  uploadService = inject(UploadService);

  ngOnInit() {
    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
      link: new FormControl('', Validators.required),
    });
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
    });
    this.worksService.getAllWorks().subscribe((res) => {
      this.worksInfo = res.data;
    });
  }

  edit(work: IWork, index: number) {
    this.editMode = true;
    this.editForm.patchValue({
      title: work.title,
      description: work.description,
      link: work.link,
    });
    this.currentIndex = index;
  }

  saveEdit() {
    this.worksInfo[this.currentIndex] = {
      ...this.worksInfo[this.currentIndex],
      title: this.editForm.value.title,
      description: this.editForm.value.description,
      link: this.editForm.value.link,
    };
    if (this.editForm.value.image) {
      const el = document.getElementById('file') as HTMLInputElement;
      const file = el.files![0];
      this.uploadService.uploadFile(file).subscribe((res) => {
        this.worksInfo[this.currentIndex].image = res.filepath;
        this.worksService
          .updateWork(this.worksInfo[this.currentIndex])
          .subscribe((res) => {
            this.worksService.getAllWorks().subscribe((res) => {
              this.worksInfo = res.data;
            });
          });
        this.editMode = false;
      });
    } else {
      this.worksService
        .updateWork(this.worksInfo[this.currentIndex])
        .subscribe((res) => {
          this.worksService.getAllWorks().subscribe((res) => {
            this.worksInfo = res.data;
          });
        });
      this.editMode = false;
    }
  }

  addWork() {
    const el = document.getElementById('file') as HTMLInputElement;
    const file = el.files![0];
    this.uploadService.uploadFile(file).subscribe((res) => {
      const newWork: IWork = {
        title: this.addForm.value.title,
        description: this.addForm.value.description,
        image: res.filepath,
        link: this.addForm.value.link,
      };
      this.worksService.addWork(newWork).subscribe((res) => {
        this.worksService.getAllWorks().subscribe((res) => {
          this.worksInfo = res.data;
        });
      });
      this.addMode = false;
    });
  }

  add() {
    this.addMode = true;
  }

  deleteWork(id: string | undefined) {
    if (id) {
      this.worksService.deleteWork(id).subscribe((res) => {
        this.worksService.getAllWorks().subscribe((res) => {
          this.worksInfo = res.data;
        });
      });
    }
  }
}
