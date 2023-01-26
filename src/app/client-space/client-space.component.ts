import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-space',
  templateUrl: './client-space.component.html',
  styleUrls: ['./client-space.component.scss']
})
export class ClientSpaceComponent implements OnInit {

  openDetails:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
}
