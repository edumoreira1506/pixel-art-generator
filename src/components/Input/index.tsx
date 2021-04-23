import React, { ReactElement } from 'react';

import { StyledInput } from './styles';

type InputType = {
  value: string;
  onChange: (newValue: string) =>  void;
  placeholder: string;
  type: string;
  required: boolean;
}

const Input = ({ value, onChange, placeholder, type, required }: InputType): ReactElement => (
  <StyledInput value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type} required={required} />
);

export default Input;
