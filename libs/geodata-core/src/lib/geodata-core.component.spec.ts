import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import {GeodataCoreComponent} from "./geodata-core.component";

describe('GeodataCoreComponent', () => {
  let spectator: Spectator<GeodataCoreComponent>;
  const createComponent = createComponentFactory({
    component: GeodataCoreComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
