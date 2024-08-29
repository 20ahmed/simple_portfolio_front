import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../dashboard/dashboard-contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm!: FormGroup;
  contactService = inject(ContactService);
  sent = false;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  sendMessage() {
    const newMessage = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };
    this.contactService.createMessage(newMessage).subscribe((res) => {
      this.contactForm.reset();
      this.sent = true;
    });
  }
}
