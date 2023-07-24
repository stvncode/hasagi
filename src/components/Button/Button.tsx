import {
  ButtonProps as MantineButtonProps,
  Button as MantineButton,
} from '@mantine/core'
import React from 'react'

export const Button = (props: MantineButtonProps) => (
  <MantineButton {...props} />
)

export type ButtonProps = MantineButtonProps
