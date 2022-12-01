/*
 *Button Group
 Divider
 Drawer
 Footer
 Hero
 Indicator
 input group
 Mask
 Stack
 Tost
 * */

import tw from 'tailwind-styled-components'
import React, { Children } from 'react'
import type { FC, ReactElement, ReactNode } from 'react'

export const Wrapper = tw.div`
    bg-gradient-to-tl 
    from-base-100
    to-base-100
    py-16 
    w-screen
    h-screen
    px-4"
`

export const Container = tw.div`
 container
 mx-auto
 my-2
`
const Slot: React.FC<{
  position: 'left' | 'right' | 'center' | 'top' | 'bottom'
  direction: 'row' | 'col' | 'row-reverse' | 'col-reverse'
}> = () => null

type BoxProps = {
  children: ReactElement[] | ReactElement | undefined
  direction: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  className?: string | null
}

export const Box = ({ children, direction, className, ...rest }: BoxProps) => {
  const childrenArray = Children.toArray(children) as unknown as React.ReactElement[]
  const leftActionsSlot = childrenArray.find((child) => child?.props?.position === 'left')
  const centerActionsSlot = childrenArray.find((child) => child?.props?.position === 'center')
  const rightActionsSlot = childrenArray.find((child) => child?.props?.position === 'right')
  const topActionsSlot = childrenArray.find((child) => child?.props?.position === 'top')
  const bottomActionsSlot = childrenArray.find((child) => child?.props?.position === 'bottom')

  let formatted = `flex flex-auto flex-${direction} `
  let formattedBase = 'flex flex-auto flex-col'

  let formattedLeft = `${formattedBase} `
  let formattedCenter = `${formattedBase} items-center justify-center`
  let formattedRight = `${formattedBase} items-end justify-center`

  formatted = formatted.concat(className)

  return (
    <div className={formatted} {...rest}>
      {leftActionsSlot && (
        <div className={formattedLeft}>
          {leftActionsSlot?.props?.children}
          {topActionsSlot?.props?.children}
        </div>
      )}
      {centerActionsSlot && (
        <div className={formattedCenter}>{centerActionsSlot?.props?.children}</div>
      )}

      {rightActionsSlot && (
        <div className={formattedRight}>{rightActionsSlot?.props?.children}</div>
      )}
    </div>
  )
}

Box.Slot = Slot

type BoxSpecificProps = {
  children: ReactElement[] | ReactElement | undefined
  className?: string | null
}

export const Center = ({ children, ...rest }: BoxSpecificProps) => {
  return (
    <>
      <Box direction="col" {...rest}>
        <Box.Slot position="center" direction="col">
          {children}
        </Box.Slot>
      </Box>
    </>
  )
}

export const Left = ({ children, ...rest }: BoxSpecificProps) => {
  return (
    <>
      <Box direction="row" {...rest}>
        <Box.Slot position="left" direction="col">
          {children}
        </Box.Slot>
      </Box>
    </>
  )
}

export const Right = ({ children, ...rest }: BoxSpecificProps) => {
  return (
    <>
      <Box direction="row" {...rest}>
        <Box.Slot position="right" direction="col">
          {children}
        </Box.Slot>
      </Box>
    </>
  )
}

export const Row = tw.div`
  flex
  w-full
`
export const Column = tw.div`
 flex 
 w-full
 h-full
 flex-col 
`
