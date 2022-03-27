import { FC, ReactNode } from 'react';
import { FormControl, Select, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';

type TFormSelect = {
  id: string;
  inputLabel: string;
  placeholder: string;
  inputWidth?: string;
  required?: boolean;
  data: Array<string>,
  value: string;
  onChange?: (event: SelectChangeEvent<string>, child?: ReactNode) => void
}

const StyledFormControl = styled(FormControl)(() => ({
  width: "180px",
  minHeight: "50px",
  boxSizing: "border-box",
  marginBottom: "22px",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  '& > .Mui-focused > .MuiOutlinedInput-notchedOutline': {
    border: "2px solid rgba(0, 134, 168, 1) !important"
  },
  '& .Mui-focused > .MuiOutlinedInput-notchedOutline': {
    border: "2px solid rgba(0, 134, 168, 1)"
  },
  '& input': {
    textOverflow: 'ellipsis',
  }
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  height: "32px",
  width: "100%",
  borderBottom: "2px solid rgba(227, 227, 227, 1)",
  boxSizing: "border-box",
  "&:last-child":{
    border: "none"
  }
}));

const SelectMenuProps = {
  PaperProps: {
    sx: {
      borderRadius: "8px",
      border: "2px solid rgba(227, 227, 227, 1)",
      boxShadow: "0px 5px 20px rgba(53, 50, 56, 0.14)",
    }
  },
  MenuListProps: {
    sx : {
      padding: "0px",
    }
  }
}

const FormSelect:FC<TFormSelect> = ({ id, inputLabel, placeholder, inputWidth, required, data, value, onChange }) => {
  return (
    <StyledFormControl sx={{width: inputWidth}}>
      <InputLabel htmlFor={id}>{inputLabel}</InputLabel>
      <Select
        id={id}
        name={id}
        required={required ? true : false}
        placeholder={placeholder}
        label={inputLabel}
        defaultValue=''
        value={value}
        onChange={onChange}
        MenuProps={SelectMenuProps}
      >
        {data.map((el, index) => <StyledMenuItem value={el} key={index}>{el}</StyledMenuItem> )}
      </Select>
    </StyledFormControl>
  )
}

export default FormSelect;