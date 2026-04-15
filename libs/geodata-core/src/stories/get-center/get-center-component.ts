import { Component, Input, OnChanges } from '@angular/core';
import { getCenter } from '../../lib/get-center/get-center';

@Component({
  selector: 'geolijn-wrapper',
  standalone: true,
  template: `
    <div class="w-100">
      <p>Het centrum is: {{ center }}</p>
      <p>De latitude: {{ center[0] }}</p>
      <p>De longitude: {{ center[1] }}</p>
    </div>
  `,
})
export class WrapperComponent implements OnChanges {
  protected center: [number, number] = [52, 6];

  @Input() polygon: number[][] = [
    [54.0, 3.0],
    [54.0, 8.0],
    [50.0, 8.0],
    [50.0, 3.0],
  ];

  ngOnChanges() {
    this.center = getCenter(this.polygon);
  }
}
