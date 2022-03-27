import { FC } from 'react';
import { OutlinedInput, InputLabel, FormHelperText } from '@mui/material';
import StyledFormControl from '../styled-form-control/styled-form-control';
import { TFormInput } from '../../types';

const FormInput:FC<TFormInput> = ({ id, inputLabel, placeholder, inputWidth, required, validationTemplate, onChange, error, value }) => {
  return (
    <StyledFormControl 
      sx={{width: inputWidth}}
      margin="none"
    >
      <InputLabel shrink htmlFor={id} error={error?.message ? true : false}>{inputLabel}</InputLabel>
      <OutlinedInput
        notched
        id={id}
        name={id}
        placeholder={placeholder}
        label={inputLabel}
        required={required ? true : false}
        onChange={onChange}
        error={error?.message ? true : false}
        value={value}
      />
      <FormHelperText id={id} error={error?.message ? true : false}>{error?.message}</FormHelperText>
    </StyledFormControl>
  )
}

export default FormInput;

