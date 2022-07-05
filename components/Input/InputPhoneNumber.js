import {
  FormControl,
  FormHelperText,
  TextField,
  useTheme,
} from "@mui/material";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

export default function InputPhoneNumber({ required, label, control, name }) {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        console.log("fieldStatePhone", error);
        return (
          <PhoneInput
            value={value}
            onChange={onChange}
            defaultCountry="VN"
            country="VN"
            inputComponent={InputBase}
          />
        );
      }}
    />
  );
}

const InputBase = () => {
  return (
    <FormControl
      fullWidth
      error={!!error ? true : false}
      sx={{ marginBottom: "1.6rem" }}
    >
      <TextField
        required={required}
        fullWidth
        label={label}
        color="secondary"
        focused
        sx={{
          "& .MuiInputLabel-root.Mui-focused": {
            color: !!error
              ? `${theme.palette.error.main} !important`
              : theme.palette.common.natural2,
            paddingLeft: "1.2rem",
            fontSize: "1.3rem",
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: !!error
              ? `${theme.palette.error.main} !important`
              : `${theme.palette.common.natural2} !important`,
            paddingLeft: "1.25rem",
            borderRadius: "0.5rem",
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline legend span":
            {
              padding: "0",
            },
          "& .MuiOutlinedInput-root input": {
            fontSize: "0.9rem",
            padding: "13.5px 14px",
          },
        }}
      />
      <FormHelperText
        children={!!error ? error.message : ""}
        sx={{ textAlign: "right" }}
      />
    </FormControl>
  );
};
