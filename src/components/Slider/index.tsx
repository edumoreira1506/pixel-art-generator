import React, { ReactElement } from 'react';
import MaterialUiSlider from '@material-ui/core/Slider';
import { StyledSlider, StyledSliderArea, StyledSliderLabel } from './styles';

type SliderPropsType = {
  label: string;
  value: number;
  onChange: any;
}

const Slider = ({ label, value, onChange }: SliderPropsType): ReactElement => (
  <StyledSlider>
    <StyledSliderLabel>{label}</StyledSliderLabel>
    <StyledSliderArea>
      <MaterialUiSlider
        aria-labelledby="continuous-slider"
        value={value}
        onChange={(_, newValue) => onChange(newValue)}
      />
    </StyledSliderArea>
  </StyledSlider>
);

export default Slider;
