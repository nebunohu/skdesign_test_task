import { Button, styled } from "@mui/material";
import { FC } from "react";

type TStyledButtonProps = {
  disabled: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const CssButton = styled(Button)(() => ({
  backgroundColor: "rgba(0, 134, 168, 1)",
  "&:hover": {
    backgroundColor: "rgba(0, 101, 126, 1)"
  }
}));

const StyledButton:FC<TStyledButtonProps> = ({ disabled, type }) => {
  return (
    <CssButton
      type={type}
      sx={{width: "100%", height: "50px"}}
      variant="contained"
      disabled={disabled}  
    >Отправить заявку
    </CssButton>
  )
}

export default StyledButton;