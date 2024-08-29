import { Component, inject } from '@angular/core';
import { ContactService, IMessage } from './contact.service';

@Component({
  selector: 'app-dashboard-contact',
  templateUrl: './dashboard-contact.component.html',
  styleUrl: './dashboard-contact.component.css',
})
export class DashboardContactComponent {
  contactService = inject(ContactService);
  messages: IMessage[] = [];

  ngOnInit() {
    this.contactService.getMessages().subscribe((res) => {
      this.messages = res.data;
    });
  }

  deleteMessage(_id: string | undefined): void {
    this.contactService.deleteMessage(_id).subscribe((res) => {
      this.contactService.getMessages().subscribe((res) => {
        this.messages = res.data;
      });
    });
  }
}
