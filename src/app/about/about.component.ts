import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loader = true;

  constructor() {
  	setTimeout(() => {
  			this.loader = false;
        }, 2000);
   }

  ngOnInit() {
  }

}
