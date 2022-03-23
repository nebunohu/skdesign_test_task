import { FC } from 'react';
import { FormControl, Select, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

type TFormSelect = {
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

const FormSelect:FC<TFormSelect> = ({ id, inputLabel, placeholder, inputWidth }) => {
  return (
    <StyledFormControl sx={{width: inputWidth}}>
      <InputLabel htmlFor={id}>{inputLabel}</InputLabel>
      <Select
        id={id}
        required
        placeholder={placeholder}
        label={inputLabel}
      />
    </StyledFormControl>
  )
}

export default FormSelect;