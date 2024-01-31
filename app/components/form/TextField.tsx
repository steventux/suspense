import React from 'react'
import { SyntheticEvent } from 'react'

interface TextFieldProps {
  fieldName: string;
  fieldSetter: Function;
}

export default function TextField({fieldName, fieldSetter}: TextFieldProps) {
  const classNames = 'bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    fieldSetter(e.currentTarget.value);
  }

  return (
    <input className={classNames} id={fieldName} type="text" onChange={onChange}/>
  )
}
