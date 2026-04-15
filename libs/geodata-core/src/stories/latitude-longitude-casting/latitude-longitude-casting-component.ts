import { Component, Input, OnChanges } from '@angular/core';
import { latitudeLongitudeCasting } from '../../lib/latitude-longitude-casting/latitude-longitude-casting';
import { Coordinaten } from '../../lib/type-helper';

@Component({
  selector: 'geolijn-wrapper',
  standalone: true,
  template: `
    <div class="w-100">
      <p>De latitude: {{ coords[0] }}</p>
      <p>De longitude: {{ coords[1] }}</p>
    </div>
  `,
})
export class WrapperComponent implements OnChanges {
  protected coords: Coordinaten = [51.83206, 5.34657];
  @Input() coordinaten: Coordinaten = [51.83206, 5.34657];

  ngOnChanges() {
    this.coords = latitudeLongitudeCasting(this.coordinaten);
  }
}
