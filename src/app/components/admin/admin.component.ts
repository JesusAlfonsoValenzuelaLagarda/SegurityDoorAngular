import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionCloseDoor: Subscription;

  door = {
    doorState: false
  }

  constructor(private rabbitMqService: RxStompService) {
    this.door
  }

  ngOnInit(): void {
    this.subscription = this.rabbitMqService.watch("/topic/DataFromAspNetCore")
      .subscribe(data => {
        console.log("Data", data.body);
        //Convertimos el string a un objeto en JavaScript
        let body = JSON.parse(data.body);
        //Preguntamos el valor que se agregará
        if (body.v > 80) {
          this.door.doorState = true;
        }
      });

      this.subscriptionCloseDoor = this.rabbitMqService.watch("/topic/SegurityDoorCloseDoor")
      .subscribe(data => {
        this.door.doorState = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionCloseDoor.unsubscribe();
  }

}
