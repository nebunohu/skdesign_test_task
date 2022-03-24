import { ChangeEvent, FC } from 'react';
import { FormControl, OutlinedInput, InputLabel, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

type TFormInput = {
  id: string;
  inputLabel: string;
  placeholder: string;
  inputWidth?: string;
  required?: boolean;
  validationTemplate?: object;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: {message: string};
}

const StyledFormControl = styled(FormControl)(({theme}) => ({
  width: "180px",
  minHeight: "50px",
  boxSizing: "border-box",
  marginBottom: "22px",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  "& .Mui-focused > .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(0, 134, 168, 1)"
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "rgba(235, 94, 85, 1)",
  },
  "& .MuiFormHelperText-root": {
    color: "rgba(235, 94, 85, 1)"
  },  
  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(235, 94, 85, 1)"
  },
  "& input": {
    textOverflow: 'ellipsis',
  },
  
}));

const FormInput:FC<TFormInput> = ({ id, inputLabel, placeholder, inputWidth, required, validationTemplate, onChange, error }) => {
  

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
      />
      <FormHelperText id={id} error={error?.message ? true : false}>{error?.message}</FormHelperText>
    </StyledFormControl>
  )
}

export default FormInput;

