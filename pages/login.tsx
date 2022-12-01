import React, { useState } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { Navigation, Buttons, Icons, DataInput } from '@components/index'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

function Login() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (ev: any) => {
    setSearchValue(ev)
  }

  return (
    <>
      <Navigation.NavbarSearch navStart={Navigation.NavStartItem.Arrow}>
        <DataInput.Search placeholder="Produtos..." onChange={handleSearchChange} />
      </Navigation.NavbarSearch>
      <div>{searchValue}</div>
    </>
  )
}

export default Login

// <Navigation.Navbar navStart={Navigation.NavStartItem.Arrow}>
//   <a className="btn btn-sm btn-ghost">Reservar</a>
// </Navigation.Navbar>
