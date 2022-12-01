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

import React, { useState, ChangeEvent } from 'react'
import tw from 'tailwind-styled-components'
import { Icons, Row, Column } from '@components/index'

const Base = tw.input`
 input
 input-sm
 input-primary
 w-full
`

const InputBase = tw(Base)`
 pl-1
`
const Input = ({ label, placeholder, labelInfo }) => (
  <Column className="form-control w-full">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <InputBase type="text" placeholder={placeholder} />
    <label className="label">
      <span className="label-text-alt"></span>
      <span className="label-text-alt">{labelInfo}</span>
    </label>
  </Column>
)

type SearchProps = {
  placeholder: string
  onChange?: (e: any) => void
}
const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (ev: any) => {
    setSearchValue(ev.target.value)
    onChange(ev.target.value)
  }

  const clear = () => {
    setSearchValue('')
    onChange('')
  }

  return (
    <div className="form-control flex-1">
      <div className="input-group bg-black relative">
        <div className="absolute left-3 top-3">m</div>
        <input
          type="text"
          placeholder={placeholder}
          className="input w-full input-sm input-bordered"
          value={searchValue}
          onChange={handleSearchChange}
          // onFocus={handleSearchActive}
        />

        {searchValue.length > 0 && (
          <div>
            <button className="btn btn-sm btn-ghost px-1" onClick={() => clear()}>
              <Icons.XMark />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export const DataInput = {
  Search: Search,
  Input: Input,
}
