import { styled, FormControl } from '@mui/material';

const StyledFormControl = styled(FormControl)(() => ({
  width: "180px",
  minHeight: "50px",
  boxSizing: "border-box",
  marginBottom: "22px",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  "& > .Mui-focused > .MuiOutlinedInput-notchedOutline": {
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

export default StyledFormControl;