import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // ngstyle directive
  heading:number=3;
  username:string="Ashok";
// example1
 public courses = [
   {
  coursename:"angular",
  version:11,
  framework:"javascript",
  duration:"45 days",
   },
   {
    coursename:"React Js",
    version:2,
    framework:"javascript library",
    duration:"35 days",
     },
     {
      coursename:"node js",
      version:6,
      framework:"server side",
      duration:"40 days",
       }
 ];

// example2
 employees: any[] = [
  {
 empid:"emp01",
 empname:"Ashok",
 empsalary:10000,
 empgender:"Male",
  },
  {
    empid:"emp02",
    empname:"Chandu",
    empsalary:15000,
    empgender:"Male",
     },
    {
      empid:"emp03",
      empname:"Nikhil",
      empsalary:20000,
      empgender:"Male",
       },
];


// example3

public colors = ['red','blue','green','yellow','blue'];

  constructor() { }

  ngOnInit(): void {
  }

}
