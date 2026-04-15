import type { Meta, StoryObj } from '@storybook/angular';
import { GeolijnTestComponent } from '../../lib/test-component/test-component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<GeolijnTestComponent> = {
  title: 'Generieke Componenten/Test Component',
  component: GeolijnTestComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GeolijnTestComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Voorbeeld: Story = {};
