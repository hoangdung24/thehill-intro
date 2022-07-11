import { forwardRef } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  TextField,
  useTheme,
} from "@mui/material";

import { useIntl } from "react-intl";

import get from "lodash/get";

const InputBase = forwardRef(
  ({ required, error, label, FormHelperTextProps, ...props }, ref) => {
    const theme = useTheme();
    // const { messages } = useIntl();
    const { errorType = {}, ...restFormHelperTextProps } = FormHelperTextProps;

    const type = get(errorType, "type");
    const keyMessage = get(errorType, "message");
    const name = get(errorType, "ref.name");
    const messageId = `form.${type}.${name}`;

    // let message = "";

    // if (keyMessage) {
    //   message = messages?.[keyMessage]?.[0]?.["value"];
    // } else {
    //   message = messages?.[messageId]?.[0]?.["value"];
    // }
    return (
      <FormControl fullWidth sx={{ marginBottom: "1.6rem" }} error={!!type}>
        {/* <FormLabel {...FormLabelProps} /> */}
        {/* <Input inputRef={ref} {...props} {...InputProps} /> */}
        <TextField
          inputRef={ref}
          {...props}
          id="outlined-required"
          required={required}
          label={label}
          color="secondary"
          focused
          sx={{
            transition: "all 0.5s",
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: `${theme.palette.common.natural3} !important`,
            },
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
        <FormHelperText {...restFormHelperTextProps} children={""} />
      </FormControl>
    );
  }
);

export default InputBase;
