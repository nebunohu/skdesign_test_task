import { Button, styled } from "@mui/material";

const CssButton = styled(Button)(() => ({
  backgroundColor: "rgba(0, 134, 168, 1)",
  "&:hover": {
    backgroundColor: "rgba(0, 101, 126, 1)"
  }
}));

const StyledButton = () => {
  return (
    <CssButton
      sx={{width: "100%", height: "50px"}}
      variant="contained">Отправить заявку
    </CssButton>
  )
}

export default StyledButton;