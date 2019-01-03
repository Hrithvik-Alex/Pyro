import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';


@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  handleCode(event: Event, code: string){
    console.log("Hello " + code + "!");
    this.login(code);

  }

  login(code: string){
    this.firebaseService.loginAnon(false, code);
  }

}
