import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  selectedSubscription!: string;


  selectSubscription(subscription: string) {
    this.selectedSubscription = subscription;
  }
}
