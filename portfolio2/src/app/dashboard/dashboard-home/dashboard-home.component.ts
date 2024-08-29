import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IHome, IntroService } from '../../intro/intro.service';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
})
export class DashboardHomeComponent {
  editArray: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  homeService = inject(IntroService);
  homeInfo!: IHome;
  editForm!: FormGroup;
  uploadService = inject(UploadService);

  ngOnInit() {
    this.homeService.getHomeInfo().subscribe((res) => {
      this.homeInfo = res.data[0];
      this.editForm = new FormGroup({
        name: new FormControl(this.homeInfo.name, Validators.required),
        firstTitle: new FormControl(
          this.homeInfo.firstTitle,
          Validators.required
        ),
        secondTitle: new FormControl(
          this.homeInfo.secondTitle,
          Validators.required
        ),
        address: new FormControl(this.homeInfo.address, Validators.required),
        firstDescription: new FormControl(
          this.homeInfo.description1,
          Validators.required
        ),
        secondDescription: new FormControl(
          this.homeInfo.description2,
          Validators.required
        ),
        resumeLink: new FormControl(
          this.homeInfo.resumeLink,
          Validators.required
        ),
        image: new FormControl(this.homeInfo.image, Validators.required),
      });
    });
  }

  edit(index: number) {
    this.editArray[index] = !this.editArray[index];
    switch (index) {
      case 0:
        this.homeInfo.name = this.editForm.value.name;
        this.save();
        break;
      case 1:
        this.homeInfo.firstTitle = this.editForm.value.firstTitle;
        this.save();
        break;
      case 2:
        this.homeInfo.secondTitle = this.editForm.value.secondTitle;
        this.save();
        break;
      case 3:
        this.homeInfo.address = this.editForm.value.address;
        this.save();
        break;
      case 4:
        this.homeInfo.description1 = this.editForm.value.firstDescription;
        this.save();
        break;
      case 5:
        this.homeInfo.description2 = this.editForm.value.secondDescription;
        this.save();
        break;
      case 6:
        this.homeInfo.resumeLink = this.editForm.value.resumeLink;
        this.save();
        break;
      case 7:
        const el = document.getElementById('file') as HTMLInputElement;
        const file = el.files![0];
        this.uploadService.uploadFile(file).subscribe((res) => {
          this.homeInfo.image = res.filepath;
          this.save();
        });
        break;
      default:
        break;
    }
  }

  save() {
    this.homeService.updateHomeInfo(this.homeInfo).subscribe((res) => {
      this.homeService.getHomeInfo().subscribe((res) => {
        this.homeInfo = res.data[0];
      });
    });
  }
}
