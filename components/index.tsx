import tw from 'tailwind-styled-components'
import React, { Children } from 'react'
import type { FC, ReactElement, ReactNode } from 'react'

//#region Actions

/* Detail
 * Button,
 * Dropdown,
 * Modal,
 * Swap
 * Button Group
 * input group
 * */

const Btn = tw.button<{ $full?: boolean }>`
  ${(p) => (p.$full ? 'btn-block' : 'btn-xs sm:btn-sm md:btn-sm lg:btn-sm')}
  btn 
  btn-sm
  rounded-lg
`

export const ButtonConfirm = tw(Btn)`
  btn-secondary
`
export const ButtonCancel = tw(Btn)`
  btn-outline
  btn-secondary
`
export const ButtonDelete = tw(Btn)`
  bg-red-600
`
export const ButtonFab = tw.button`
 btn 
 btn-sm
 btn-circle 
 btn-secondary
`
export const ButtonLoading = tw(Btn)`
 loading
`

export const ButtonLink = tw.button`
 btn
 btn-ghost
 btn-circle
 btn-sm
`

//#endregion

//#region DataDisplay
/*Detail
 *Alert, Avata, Badge, Card, Carousel, Chat, Collapse Countdown, KBD, Progress, Slat, Table, Tooltip
 * */
const SIZE = 'w-6 h-5'

export const Icons = {
  Add: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={SIZE}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  ),
  Seach: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={SIZE}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  ),
  Chevron: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={SIZE}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={SIZE}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  ),
  Menu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={SIZE}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  ),
  Notification: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={SIZE}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  Trash: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={SIZE}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  ),
  XMark: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={SIZE}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
}
//#endregion

//#region DataInputs
/*
 * Checkbox
 * file Input
 * Radio
 * Range
 * Rating
 * Select
 * Text Input
 * Text Area
 * Toggle
 *
 * */

export const FormItem = tw.form`
 relative 
 mb-8
`
export const Form = tw.div`
 mt-1
`

export const Label = tw.label`
 absolute 
 left-0 -top-3.5 
 text-secondary 
 text-sm transition-all 
 peer-placeholder-shown:text-prymary 
 peer-placeholder-shown:text-prymary
 peer-placeholder-shown:top-2 
 peer-focus:-top-3.5 
 peer-focus:text-gray-600 
 peer-focus:text-sm"
`

const Base = tw.input`
 w-full 
 h-10 
 text-gray-900 
 placeholder-transparent 
 border-b-2 
 border-gray-300 
 peer 
 focus:outline-none 
 focus:border-purple-600"
`
export const Input = tw(Base)`
`
export const Search = tw.input`
 z-0
 h-10 
 w-full 
 rounded-lg 
 pl-10 
 pr-20 
 focus:shadow 
 focus:outline-none  
 focus:border-indigo-500 
 focus:ring-indigo-500 
 sm:text-sm
`

//#endregion

//#region Layout
/*Detail
 *
 * 
 Divider
 Drawer
 Footer
 Hero
 Indicator 
 Mask
 Stack
 Tost
 * */

export const Spacer = tw.p`
 my-2
`

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
type ContentProps = {
  children: ReactElement[] | ReactElement | undefined
}
export const Content = ({ children, ...rest }: ContentProps) => (
  <div className="relative flex flex-col overflow-hidden" {...rest}>
    <div className="w-full p-6 m-auto bg-base-300 rounded-md shadow-md border-top lg:max-w-3xl">
      {children}
    </div>
  </div>
)

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
//#endregion

//#region Navigations
/*
 *Breadcrumb,
 Botton navigation
 Link
 Menu
 Navbar
 Pagination
 Steps
 Tab
 *
 *
 * */

export const SearchBar = () => (
  <div className="relative w-full">
    <div className="absolute top-3 left-3">
      <Icons.Seach />
    </div>
    <Search type="search" placeholder="Search anything..." />
  </div>
)

/*
    <div class="relative w-full">
      <div class="absolute top-3 left-3">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="z-20 h-5 w-5 text-gray-400 hover:text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input type="search" class="z-0 h-10 w-full rounded-lg pl-10 pr-20 focus:shadow focus:outline-none  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search anything..." />
      <div class="absolute top-1 right-2">
        <button class="btn btn-sm h-8 w-20 rounded-lg bg-red-300 text-white hover:bg-red-600">Search</button>
      </div>
    </div>
  </div>
*/
//#endregion

//#region Typography

/*
  Ref 
*/

export const Title = tw.h2<{ $center?: boolean }>`
 ${(p) => (p.$center ? 'text-center' : '')}
  text-3xl 
  font-semibold 
  text-prymary
  dark:text-white 
  md:text-3xl
`
export const P = tw.p<{ $bold?: boolean }>`
 ${(p) => (p.$bold ? 'block text-xl font-semibold' : 'text-base')}
  text-gray-500 
  dark:text-gray-400
`
export const TextHighlight = tw.span`
 text-primary-focus
`

//#endregion
