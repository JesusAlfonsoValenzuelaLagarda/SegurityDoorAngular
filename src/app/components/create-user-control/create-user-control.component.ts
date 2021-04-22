import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-access-control',
  templateUrl: './add-access-control.component.html',
  styleUrls: ['./add-access-control.component.css']
})
export class AddAccessControlComponent implements OnInit {

  constructor(private userService: UserService, private rabbitMqService: RxStompService) { }

  ngOnInit(): void {
  }

  createUser() {
    //this.rabbitMqService.publish("/topic/")
    const data = { "Id": "5ff922479b7b12712737d6af", "UserName": "Tamaulipas", "Password": 1234 };
    this.userService.CreateUser(data);

  }

}
