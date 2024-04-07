import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-brand-link',
  templateUrl: './brand-link.component.html',
  styleUrl: './brand-link.component.css'
})
export class BrandLinkComponent {
  @Input() logoUrl: string = '';
  @Input() altText: string = 'Brand Logo';
  @Input() brandText: string = '';
}