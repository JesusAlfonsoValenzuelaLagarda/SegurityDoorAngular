import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user-control',
  templateUrl: './create-user-control.component.html',
  styleUrls: ['./create-user-control.component.css']
})
export class CreateUserControlComponent implements OnInit {

  constructor(private userService: UserService, private rabbitMqService: RxStompService) { }

  ngOnInit(): void {
  }

  createUser() {
    //this.rabbitMqService.publish("/topic/")
    const data = { "Id": "5ff922479b7b12712737d6af", "UserName": "Tamaulipas", "Password": 1234 };
    this.userService.CreateUser(data);

  }

}
