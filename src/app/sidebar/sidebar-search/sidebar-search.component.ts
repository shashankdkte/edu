import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export class SidebarSearchComponent {
  @Input() placeholderText: string = 'Search';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchEvent.emit(value);
  }
}