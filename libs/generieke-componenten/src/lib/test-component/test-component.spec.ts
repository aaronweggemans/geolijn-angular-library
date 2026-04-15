import { GeolijnTestComponent } from './test-component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

describe('GeolijnTestComponent', () => {
  let spectator: Spectator<GeolijnTestComponent>;

  const createComponent = createComponentFactory(GeolijnTestComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
