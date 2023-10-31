
import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';

const meta = {
  title: 'Component/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bgColor: {
      options: ['gray', 'blue', 'pink'],
      control: { type: 'select' },
    },
    shape: {
      options: ['square', 'primary', 'full'],
      control: { type: 'select' },
    },
    arrow: {
      options: ['gray', 'blue', 'pink'],
      control: { type: 'select' },
    },
    primaryButton: {
      options: ['gray', 'blue', 'pink'],
      control: { type: 'select' },
    },
    total_count: {
      control: {
        type: 'number',
        defaultValue: 100,
      },
      description: '총 항목 수',
    },
    list: {
      control: {
        type: 'number',
        defaultValue: 10,
      },
      description: '페이지당 항목 수',
    },
    itemPerPage: {
      control: {
        type: 'number',
        default: 10,
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bgColor: 'gray',
    shape: 'square',
    arrow: 'gray',
    primaryButton: 'gray',
    total_count: 300,
    list: 12,
    itemPerPage: 10,
  },
};
