import { FC } from 'react';
import { FormControl, OutlinedInput, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

type TFormInput = {
  id: string;
  inputLabel: string;
  placeholder: string;
  inputWidth?: string;
}

const StyledFormControl = styled(FormControl)(({theme}) => ({
  width: "180px",
  height: "50px",
  boxSizing: "border-box",
  marginBottom: "25px",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  '& .Mui-focused > .MuiOutlinedInput-notchedOutline': {
    border: "2px solid rgba(0, 134, 168, 1)"
  },
  '& input': {
    textOverflow: 'ellipsis',
  }
}));

const FormInput:FC<TFormInput> = ({ id, inputLabel, placeholder, inputWidth }) => {
  return (
    <StyledFormControl sx={{width: inputWidth}}>
      <InputLabel  shrink htmlFor={id}>{inputLabel}</InputLabel>
      <OutlinedInput
        notched
        id={id}
        required
        placeholder={placeholder}
        label={inputLabel}
      />
    </StyledFormControl>
  )
}

export default FormInput;

