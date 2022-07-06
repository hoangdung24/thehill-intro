import {
  FormControl,
  FormHelperText,
  MenuItem,
  TextField,
  useTheme,
} from "@mui/material";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

const InputSelect = ({ data, required, label, control, name }) => {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // console.log("fieldState", error);
        return (
          <FormControl
            fullWidth
            error={!!error ? true : false}
            sx={{ marginBottom: "1.6rem" }}
          >
            <TextField
              value={value || ""}
              onChange={onChange}
              select
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
                "& .MuiOutlinedInput-root .MuiSelect-select": {
                  fontSize: "15px",
                  padding: "8.5px 14px",
                },
              }}
            >
              {data.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <FormHelperText
              children={!!error ? error.message : ""}
              sx={{ textAlign: "right" }}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default InputSelect;

// <TextField
// select
// required={required}
// fullWidth
// label={label}
// color="secondary"
// focused
// sx={{
//   marginBottom: "1.6rem",
//   "& .MuiInputLabel-root.Mui-focused": {
//     color: theme.palette.common.natural2,
//     paddingLeft: "20px",
//     fontSize: "21px",
//   },
//   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//     borderColor: `${theme.palette.common.natural2} !important`,
//     paddingLeft: "20px",
//     borderRadius: "8px",
//   },
//   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline legend span":
//     {
//       padding: "0",
//     },
//   "& .MuiOutlinedInput-root .MuiSelect-select": {
//     fontSize: "15px",
//     padding: "8.5px 14px",
//   },
// }}
// >
// {data.map((option) => (
//   <MenuItem key={option.id} value={option.id}>
//     {option.name}
//   </MenuItem>
// ))}
// </TextField>
