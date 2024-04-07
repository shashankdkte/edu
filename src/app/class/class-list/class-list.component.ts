import { Component, OnInit } from '@angular/core';
import { Class } from '../../models/class';



@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent implements OnInit {
  classes: Class[] = [];
  
  ngOnInit() {
    // Fetch or simulate fetching classes from a service
    this.classes = [
      // Example class objects
      
    ];
  }
}
