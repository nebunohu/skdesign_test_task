import { ChangeEvent, FC, useState } from 'react';
import { FormControl, OutlinedInput, InputLabel, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

type TFormInput = {
  id: string;
  inputLabel: string;
  placeholder: string;
  inputWidth?: string;
  required?: boolean;
  template?: object;
}

const StyledFormControl = styled(FormControl)(({theme}) => ({
  width: "180px",
  height: "50px",
  boxSizing: "border-box",
  marginBottom: "25px",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "rgba(235, 94, 85, 1)",
  },
  "& .Mui-focused > .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(0, 134, 168, 1)"
  },
  "& .Mui-error > .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgba(235, 94, 85, 1)"
  },
  "& input": {
    textOverflow: 'ellipsis',
  },
  "& .MuiFormHelperText-root": {
    color: "#EB5E55"

  }
}));

const FormInput:FC<TFormInput> = ({ id, inputLabel, placeholder, inputWidth, required, template }) => {
  const [error, setError] = useState({message: ''});
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if( typeof template === 'undefined' ) {
      if( e.target.value.length < 2 ) setError({message: 'Должно быть больше 2 символов'})
      else setError({message: ''})
    }
  }

  return (
    <StyledFormControl sx={{width: inputWidth}}>
      <InputLabel shrink htmlFor={id} error={error.message ? true : false}>{inputLabel}</InputLabel>
      <OutlinedInput
        notched
        id={id}
        placeholder={placeholder}
        label={inputLabel}
        required={required ? true : false}
        onChange={onChangeHandler}
        error={error.message ? true : false}
      />
      <FormHelperText id={id} error={error.message ? true : false}>{error.message}</FormHelperText>
    </StyledFormControl>
  )
}

export default FormInput;

