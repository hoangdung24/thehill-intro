import { forwardRef } from "react";
import { FormControl, FormHelperText, FormLabel, Input } from "@mui/material";

const InputBase = forwardRef(
  (
    { FormControlProps, FormLabelProps, InputProps, FormHelperTextProps, ...props },
    ref
  ) => {
    return (
      <FormControl
        fullWidth={true}
        sx={{
          marginBottom: 2,
        }}
        {...FormControlProps}
      >
        <FormLabel {...FormLabelProps} />
        <Input inputRef={ref} {...props} {...InputProps} />

        <FormHelperText {...FormHelperTextProps} />
      </FormControl>
    );
  }
);

export default InputBase;
