import { Component } from '@angular/core';
import { GeodataCoreComponent } from '../../../../libs/geodata-core/src/lib/geodata-core.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GeodataCoreComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo-app';
}
