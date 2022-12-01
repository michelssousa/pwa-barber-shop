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
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import React, { Children } from 'react'
import type { FC, ReactElement, ReactNode } from 'react'
import { Container, Row, Column, Left, Right, Center, Icons, Typography } from '@components/index'
import { Buttons } from './actions'
import Router from 'next/router'

type NavlinkProps = {
  href?: string | null
  name?: string | null
  children?: ReactElement[] | ReactElement | undefined
}
const NavLink = ({ href, name, children }: NavlinkProps) => {
  if (name) {
    return (
      <Link href={href} passHref legacyBehavior>
        {name}
      </Link>
    )
  }
  return (
    <Link href={href} passHref legacyBehavior>
      {children}
    </Link>
  )
}

const NavMenu = () => (
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
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
    </label>
    <ul
      tabIndex={0}
      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <a>Homepage</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </ul>
  </div>
)

const NavArrowBack = ({ hrefBack, title }) => (
  <Row className="flex items-center ">
    <NavLink href={hrefBack}>
      <Buttons.link className="lg:pl-2 " onClick={() => Router.back()}>
        <Icons.ArrowLeft />
      </Buttons.link>
    </NavLink>
    <Typography.P className="lg:pl-1 ">{title}</Typography.P>
  </Row>
)

const NavStartComponentName = {
  Menu: 1,
  Arrow: 2,
}
type NavStartComponentProps = {
  name: number
  hrefBack?: string | null
  title?: string | null
}
const NavStartComponent = ({ name, hrefBack, title }: NavStartComponentProps) => {
  if (name == NavStartComponentName.Menu) {
    return <NavMenu />
  }
  return <NavArrowBack hrefBack={hrefBack} title={title} />
}

type NavbarProps = {
  hrefBack?: string | null
  children?: ReactElement[] | ReactElement | undefined
  className?: string | null
  title?: string | null
  navStart: number | null
}

const Navbar = ({ navStart, children, title = '', hrefBack = '/', ...rest }: NavbarProps) => (
  <div className="navbar bg-base-100 px-0 sm:px-5" {...rest}>
    <div className="flex-none ">
      <NavStartComponent name={navStart} title={title} hrefBack={hrefBack} />
    </div>
    <div className="flex-1"></div>
    <div className="flex-none">{children}</div>
  </div>
)

const NavbarSearch = ({ navStart, children, title = '', hrefBack = '/', ...rest }: NavbarProps) => (
  <div className="navbar" {...rest}>
    <div className="flex-none">
      <NavStartComponent name={navStart} title={title} hrefBack={hrefBack} />
    </div>
    <div className="nav-center  w-full">{children}</div>
  </div>
)

export const Navigation = {
  Navbar: Navbar,
  Navlink: NavLink,
  NavStartItem: NavStartComponentName,
  NavbarSearch: NavbarSearch,
}
