import { Component, Input } from '@angular/core';
import { MenuItem } from '../nav/nav.component';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() menu: MenuItem = { link:"",icon:"",text:"M"};
}
