import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  activeBtn: any;
  ngOnInit(): void {
  }
  toggle:boolean = false;
  menuVariable:boolean = false;
  openMenu(){
    this.toggle = !this.toggle;
    this.menuVariable = ! this.menuVariable
    // console.log(this.toggle);
    // console.log(this.menuVariable, "sdfdf")
    
  }

}
