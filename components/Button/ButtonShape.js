import { Bulb } from "../../components";
import { Stack, styled, Box, Typography } from "@mui/material";
import { ButtonUnstyled } from "@mui/base";

const ButtonShape = ({ title, isBackground = false, backgroundColor = "6EDCD9", ...props }) => {
  return (
    <ButtonStyled
      isBackground={isBackground}
      backgroundColor={backgroundColor}
      {...props}
      sx={{
        border: "none",
      }}
    >
      <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
        <SvgContainer component={"div"}>
          <Bulb />
        </SvgContainer>
        <Title variant="h4">{title}</Title>
      </Stack>
    </ButtonStyled>
  );
};

export default ButtonShape;

// Styled Sheet

const ButtonStyled = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) => {
    return prop !== "isBackground" && prop !== "backgroundColor";
  },
})(({ theme, isBackground, backgroundColor }) => {
  let defaultStyle = {
    position: "relative",
    whiteSpace: "nowrap",
    maxWidth: "fit-content",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: 50,
  };

  if (isBackground && backgroundColor) {
    return {
      ...defaultStyle,
      background: backgroundColor,
    };
  } else {
    return {
      ...defaultStyle,
    };
  }
});

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});

const SvgContainer = styled(Box)(({ theme }) => {
  return {
    backgroundColor: "#fff",
    borderRadius: "50%",
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };
});
