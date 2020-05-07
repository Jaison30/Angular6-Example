import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

isShow = false;
 
  menuDisplay(event) {
  	event.preventDefault();
    this.isShow = !this.isShow;
    if ($(".tm-nav-links").hasClass("open")) {
            $(".tm-nav-links").fadeOut();
          } else {
            $(".tm-nav-links").fadeIn();
          }

          $(".tm-nav-links").toggleClass("open");
  }

  constructor() { }

  ngOnInit() {
  }

}
