import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Button } from '..'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Test button</Button>
)

export const Primary = Template.bind({})
