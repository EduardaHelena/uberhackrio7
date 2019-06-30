import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open :boolean = false;
  openNav() {
    this.open = true;
    // document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    this.open = false;

    // document.getElementById("mySidenav").style.width = "0";
  }

}
