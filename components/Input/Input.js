import { TextField, useTheme } from "@mui/material";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

const Input = ({
  required,
  label,
  control,
  name,
  FormControlProps,
  FormLabelProps,
  InputProps,
  FormHelperTextProps,
}) => {
  const theme = useTheme();
  return (
    <TextField
      required={required}
      fullWidth
      label={label}
      color="secondary"
      focused
      sx={{
        marginBottom: "1.6rem",
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.palette.common.natural2,
          paddingLeft: "20px",
          fontSize: "21px",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.common.natural2} !important`,
          paddingLeft: "20px",
          borderRadius: "8px",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline legend span":
          {
            padding: "0",
          },
        "& .MuiOutlinedInput-root input": {
          fontSize: "15px",
          padding: "13.5px 14px",
        },
      }}
    />
  );
};

export default Input;
