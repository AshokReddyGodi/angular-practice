import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// interpolation binding or attribute binding
  coursename: string = "Angular";
  version: number = 11;
  duration: string = "45days";

  // event data binding
  evtClicked:boolean;
// property binding
firstname:string = "Ashok";
imgpath: string = "assets/images/banner1.jpeg";

// two way binding

twowaybinding:string="Ashok";

  constructor() { }

  ngOnInit(): void {
    // interpolation
  setTimeout(()=>{
    this.coursename="Hello";
  },2000);
  }
// event binding
  btnClicked() {
    console.log("button clicked");

    this.evtClicked = !this.evtClicked;
    
  }

}
