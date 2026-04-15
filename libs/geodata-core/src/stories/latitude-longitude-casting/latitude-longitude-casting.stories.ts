import type { Meta, StoryObj } from '@storybook/angular';
import { WrapperComponent } from '../wrapper-component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WrapperComponent> = {
  title: 'Geodata Core/Latitude And Longitude Casting',
  component: WrapperComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<WrapperComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Voorbeeld: Story = {};
