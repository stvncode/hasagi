import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Select } from '..'

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => (
  <Select
    {...args}
    label="Your favorite framework/library"
    placeholder="Pick one"
    data={[
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'vue', label: 'Vue' },
    ]}
  />
)

export const Primary = Template.bind({})
