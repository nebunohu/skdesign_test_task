import { styled, FormControl } from '@mui/material';

const StyledFormControl = styled(FormControl)(() => ({
  width: "180px",
  minHeight: "50px",
  boxSizing: "border-box",
  marginBottom: "22px",
  "@media screen and (max-width: 390px)": {
    width: "100%",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 134, 168, 1)",
  },
  "& > .Mui-focused > fieldset.MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 134, 168, 1)"
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "rgba(235, 94, 85, 1)",
  },
  "& .MuiFormHelperText-root": {
    color: "rgba(235, 94, 85, 1)"
  },  
  "& .Mui-error fieldset.MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(235, 94, 85, 1)"
  },
  "& input": {
    textOverflow: 'ellipsis',
  },
  
}));

export default StyledFormControl;