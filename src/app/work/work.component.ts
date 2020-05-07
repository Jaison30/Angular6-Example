import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  loader = true;

  constructor() {
  	setTimeout(() => {
  			this.loader = false;
        }, 2000);
   }

  ngOnInit() {
  }

}
