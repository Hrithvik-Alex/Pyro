import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})
export class HostPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleText(event: Event, example: string){
    console.log("Hello " + example + "!");
  }
}
