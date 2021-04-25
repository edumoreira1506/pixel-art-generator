import React, { ReactElement } from 'react';

import { StyledSelect } from './styles';

type OptionType = {
  value: string;
  label: string;
}

type SelectPropsType = {
  options: Array<OptionType>;
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

const Select = ({ options, value, onChange, placeholder }: SelectPropsType): ReactElement => (
  <StyledSelect value={value} onChange={e => onChange(e.target.value)}>
    {placeholder && (
      <option>
        {placeholder}
      </option>
    )}
    {options.map(({ value, label }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
