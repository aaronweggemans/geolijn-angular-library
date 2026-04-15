import type { Meta, StoryObj } from '@storybook/angular';
import { WrapperComponent } from './latitude-longitude-casting-component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WrapperComponent> = {
  title: 'Geodata Core/Latitude And Longitude Casting',
  component: WrapperComponent,
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Voorbeeld: StoryObj<WrapperComponent> = {
  args: {
    coordinaten: [51.83206, 5.34657],
  },
};
