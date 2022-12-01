/*
 * Button, Dropdown, Modal, Swap
 * */

import tw from 'tailwind-styled-components'
// import React, { Children } from 'react'
// import type { FC, ReactElement, ReactNode } from 'react'

const Btn = tw.button<{ $full?: boolean }>`
  ${(p) => (p.$full ? 'btn-block' : 'btn-xs sm:btn-sm md:btn-sm lg:btn-sm')}
  btn 
  btn-sm
  rounded-lg
`

const ButtonConfirm = tw(Btn)`
  btn-primary
`
const ButtonCancel = tw(Btn)`
  btn-outline
  btn-primary
`
const ButtonDelete = tw(Btn)`
  bg-red-600
`
const ButtonFab = tw.button`
 btn 
 btn-sm
 btn-circle 
 btn-primary
`
const ButtonLoading = tw(Btn)`
 loading
`

const ButtonLink = tw.button`
 btn
 btn-ghost
 btn-circle
 btn-sm
`

export const Buttons = {
  Confirm: ButtonConfirm,
  Cancel: ButtonCancel,
  Delete: ButtonDelete,
  Fab: ButtonFab,
  loading: ButtonLoading,
  link: ButtonLink,
}
