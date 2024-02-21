import React from 'react'

interface LabelProps extends React.HTMLAttributes<any> {
  fieldName: string;
  labelText: string;
}

export default function Label({fieldName, labelText}: LabelProps) {
  const classNames = 'block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4';

  return (
    <label className={classNames} htmlFor={fieldName}>
      {labelText}
    </label>
  )
}
