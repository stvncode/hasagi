import {
  SelectProps as MantineSelectProps,
  Select as MantineButton,
} from '@mantine/core'
import React from 'react'

export const Select = (props: MantineSelectProps) => (
  <MantineButton {...props} />
)

export type SelectProps = MantineSelectProps
