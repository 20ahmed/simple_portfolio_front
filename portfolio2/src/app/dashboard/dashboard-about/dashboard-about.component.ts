import { Component, inject } from '@angular/core';
import { AboutService, IAbout } from './about.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-dashboard-about',
  templateUrl: './dashboard-about.component.html',
  styleUrl: './dashboard-about.component.css',
})
export class DashboardAboutComponent {
  editArray: boolean[] = [false, false, false];
  aboutService = inject(AboutService);
  uploadService = inject(UploadService);
  editForm!: FormGroup;
  aboutInfo!: IAbout;

  ngOnInit() {
    this.editForm = new FormGroup({
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      resumeLink: new FormControl('', Validators.required),
    });
    this.aboutService.getAbout().subscribe((res) => {
      this.aboutInfo = res.data[0];
      this.editForm.patchValue({
        description: this.aboutInfo.description,
        resumeLink: this.aboutInfo.resumeLink,
      });
    });
  }

  edit(index: number) {
    this.editArray[index] = !this.editArray[index];
    switch (index) {
      case 0:
        this.aboutInfo.description = this.editForm.value.description;
        this.save();
        break;
      case 1:
        const el = document.getElementById('file') as HTMLInputElement;
        const file = el.files![0];
        this.uploadService.uploadFile(file).subscribe((res) => {
          this.aboutInfo.image = res.filepath;
          this.save();
        });
        break;
      case 2:
        this.aboutInfo.resumeLink = this.editForm.value.resumeLink;
        this.save();
        break;
      default:
        break;
    }
  }

  save() {
    this.aboutService.updateAbout(this.aboutInfo).subscribe((res) => {
      this.aboutService.getAbout().subscribe((res) => {
        this.aboutInfo = res.data[0];
      });
    });
  }
}
