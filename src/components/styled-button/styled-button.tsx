import { styled } from "@mui/material";
import { LoadingButton } from '@mui/lab'
import { FC } from "react";

type TStyledButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const CssButton = styled(LoadingButton)(() => ({
  backgroundColor: "rgba(0, 134, 168, 1)",
  "&:hover": {
    backgroundColor: "rgba(0, 101, 126, 1)"
  }
}));

const StyledButton:FC<TStyledButtonProps> = ({ disabled, loading, type }) => {
  return (
    <CssButton
      type={type}
      sx={{width: "100%", height: "50px"}}
      variant="contained"
      disabled={disabled}  
      loading={loading}
    >Отправить заявку
    </CssButton>
  )
}

export default StyledButton;