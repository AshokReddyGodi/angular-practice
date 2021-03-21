import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent implements OnInit {
  // to display date 
  public todaysDate: Date = new Date();
  // to display number in us, inr
  public number: Number = 3.14; 
  // to display uppercase, lowercase
  name:string = "AshokKumar";

  // custom pipes
  public students: any;// this variable holds the list of students  
  public searchText: any; 

  constructor() { 

    this.students = [  
      { Id: 1, Name: "Ashok", Address: "Badvel", Gender: "Male" },  
      { Id: 2, Name: "Nikhil", Address: "Tirupati", Gender: "Male" },  
      { Id: 3, Name: "Chandu", Address: "Tirupati", Gender: "Male" },  
      { Id: 4, Name: "Jaya", Address: "Chittoor", Gender: "Male" },  
      { Id: 5, Name: "Nitesh", Address: "Tirupati", Gender: "male" }  
  ]; 
  }

  ngOnInit(): void {
  }

}
