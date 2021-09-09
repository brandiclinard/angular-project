import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-help-page',
  templateUrl: './angular-help-page.component.html',
  styleUrls: ['./angular-help-page.component.css']
})
export class AngularHelpPageComponent implements OnInit {

  constructor() { }

  title = 'Angular Project';


  ngOnInit(): void {
  }

}
