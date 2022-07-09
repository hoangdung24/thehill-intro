import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

import InputBase from "./InputBase";

const InputPhoneNumber = ({
  required,
  label,
  control,
  name,
  FormHelperTextProps,
}) => {
  if (!control || !name) {
    return null;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // console.log("errorerror", error);
        return (
          <PhoneInput
            required={required}
            error={error}
            label={label}
            value={value}
            onChange={onChange}
            defaultCountry="VN"
            country="VN"
            inputComponent={InputBase}
            FormHelperTextProps={{
              ...FormHelperTextProps,
              ...(!!error && {
                errorType: error,
              }),
            }}
          />
        );
      }}
    />
  );
};

export default InputPhoneNumber;
