import React, { ReactElement } from 'react';

import { StyledInput } from './styles';

type InputType = {
  value: string;
  onChange: (newValue: string) =>  void;
  placeholder: string;
  type: string;
  required: boolean;
  dataInput?: string;
}

const Input = ({ value, onChange, placeholder, type, required, dataInput }: InputType): ReactElement => (
  <StyledInput data-input={dataInput} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type} required={required} />
);

export default Input;
