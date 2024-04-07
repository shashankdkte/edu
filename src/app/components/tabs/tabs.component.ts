import { Component } from '@angular/core';
import { Class } from '../../models/class';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  selectedTabIndex = 0;

  // Function to change tabs
  selectTab(index: number) {
    this.selectedTabIndex = index;
  }
  classes: Class[] = []
  constructor(private classService: ClassService) { }
  ngOnInit() {
    this.classService.getClasses().subscribe(data => {
      this.classes = data;
    });
  }
 
  get ongoingClasses(): Class[] {
    return this.classes.filter(c => c.status === 'ongoing');
  }

  get completedClasses(): Class[] {
    return this.classes.filter(c => c.status === 'completed');
  }
  get upcomingClasses(): Class[] {
    return this.classes.filter(c => c.status === 'upcoming');
  }
}
