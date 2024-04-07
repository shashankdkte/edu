import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {
  @Input() imageUrl: string = ""
  @Input() userName: string = ""
  @Input() userLink: string = '#';
}
