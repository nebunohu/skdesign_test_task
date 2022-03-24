import { FC } from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

type TFormSelect = {
  id: string;
  inputLabel: string;
  placeholder: string;
  inputWidth?: string;
  required?: boolean;
  data: Array<string>
}

const StyledFormControl = styled(FormControl)(({theme}) => ({
  width: "180px",
  minHeight: "50px",
  boxSizing: "border-box",
  marginBottom: "22px",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: "2px solid rgba(0, 134, 168, 1)"
  },
  '& input': {
    textOverflow: 'ellipsis',
  }
}));

const FormSelect:FC<TFormSelect> = ({ id, inputLabel, placeholder, inputWidth, required, data }) => {
  return (
    <StyledFormControl sx={{width: inputWidth}}>
      <InputLabel htmlFor={id}>{inputLabel}</InputLabel>
      <Select
        id={id}
        required={required ? true : false}
        placeholder={placeholder}
        label={inputLabel}
        defaultValue=''
      >
        {data.map((el, index) => <MenuItem value={el} key={index}>{el}</MenuItem> )}
      </Select>
    </StyledFormControl>
  )
}

export default FormSelect;