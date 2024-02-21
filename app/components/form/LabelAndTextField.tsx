import React from 'react'
import { SyntheticEvent } from 'react'
import Label from './Label'
import TextField from './TextField'

interface LabelAndTextFieldProps extends React.HTMLAttributes<any> {
  fieldName: string;
  fieldSetter: React.Dispatch<React.SetStateAction<string>>;
  labelText: string;
}

export default function LabelAndTextField({fieldName, fieldSetter, labelText}: LabelAndTextFieldProps) {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/4">
        <Label fieldName={fieldName} labelText={labelText} />
      </div>
      <div className="md:w-2/4">
        <TextField fieldName={fieldName} fieldSetter={fieldSetter} />
      </div>
    </div>
  )
}
