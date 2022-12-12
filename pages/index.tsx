//#region Imports
//import { useSession, signOut } from 'next-auth/react'
import React, { useState } from 'react'
import type { NextPage } from 'next'
import * as M from '@components/index'


//#endregion


const Home: NextPage = () => {
  // const { data: session } = useSession()

  // const session = useRequireAuth();
  // if (!session) return <div>loading...</div>;

  const [name, setName] = useState('')

  const handleNameOnChange = (n: any) => {
    setName(n)
  }




  const [phone, setPhone] = useState('')
  const handleInput = ({ target: { value } }) => setPhone(value)

  return (
    <>
      <M.Navbar label="Products" goNextPage="login" />
      <M.Wrapper>
        <M.Content>
          <M.ButtonCancel $full={true}>Test</M.ButtonCancel>
          <M.Spacer />
          <M.ButtonConfirm $full={true}>A</M.ButtonConfirm>
          <M.Spacer />
          <M.SearchBar onChange={handleNameOnChange} placeholder="products" />
        </M.Content>
        <M.Spacer />
        <M.Content>
          <M.Form>
            <M.Input label="Teste" />
            <M.Spacer />
            <M.Input label="E-mail" />
          </M.Form>
        </M.Content>
        <M.Spacer />
        <M.Content>
          <M.InputMaskPhone label="Telefone" value={phone} onChange={handleInput} />
          <M.Spacer />
          <M.InputMaskDate label="Date" value={phone} onChange={handleInput} />
          <M.Spacer />
          <M.P>{phone}</M.P>
        </M.Content>
      </M.Wrapper>
    </>
  )
}

export default Home
