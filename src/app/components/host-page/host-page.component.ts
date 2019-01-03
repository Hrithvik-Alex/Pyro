import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})
export class HostPageComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  handleCode(event: Event, code: string){
    console.log("Hello " + code + "!");
    this.login(code);

  }

  login(code: string){
    this.firebaseService.loginAnon(true, code);
  }
}
