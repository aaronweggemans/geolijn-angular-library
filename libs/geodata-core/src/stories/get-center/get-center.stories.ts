import type { Meta, StoryObj } from '@storybook/angular';
import { WrapperComponent } from './get-center-component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WrapperComponent> = {
  title: 'Geodata Core/Get Center',
  component: WrapperComponent,
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Voorbeeld: StoryObj<WrapperComponent> = {
  args: {
    polygon: [
      [54.0, 3.0],
      [54.0, 8.0],
      [50.0, 8.0],
      [50.0, 3.0],
    ],
  },
};
