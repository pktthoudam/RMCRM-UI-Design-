import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ["../../../assets/images/Banner1.jpg","../../../assets/images/Banner2.jpg","../../../assets/images/Banner3.jpg","../../../assets/images/Banner4.jpg","../../../assets/images/Banner5.jpg","../../../assets/images/Banner6.jpg","../../../assets/images/Banner7.jpg"];

  showNavigationIndicators:boolean= false
  constructor() { }

  ngOnInit(): void {
  }

}
