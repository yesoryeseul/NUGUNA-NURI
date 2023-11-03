import type { Meta, StoryObj } from '@storybook/react';

import { CustomPagination } from './CustomPagination';
// import Pagination from './Pagination';

const meta = {
  title: 'Component/Pagination',
  component: CustomPagination,
  tags: ['autodocs'],
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
    color: {
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
} satisfies Meta<typeof CustomPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bgColor: 'gray',
    shape: 'square',
    color: 'gray',
    total_count: 300,
    list: 12,
    itemPerPage: 10,
  },
};

export const Pink: Story = {
  args: {
    bgColor: 'pink',
    shape: 'primary',
    color: 'pink',
    total_count: 300,
    list: 12,
    itemPerPage: 10,
  },
};

export const Blue: Story = {
  args: {
    bgColor: 'blue',
    shape: 'full',
    color: 'blue',
    total_count: 300,
    list: 12,
    itemPerPage: 10,
  },
};
