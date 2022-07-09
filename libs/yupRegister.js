import { string, object, setLocale, number } from "yup";
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";

export const defaultValuesPageNew = {
  search: "",
};
export const defaultValues = {
  store_name: "sadasd@gmail.com",
  presentator: "sadasd@gmail.com",
  category: "sadasd@gmail.com",
  email: "sadasd@gmail.com",
  phone: "0398 813 369",
  bank_number: "0398 813 369",
  bank: "sadasd@gmail.com",
  owner: "sadasd@gmail.com",
  branch: "sadasd@gmail.com",
  files: "",
};

export const schema = object().shape({
  store_name: string("Vui lòng nhập nội dung").required(),
  category: string("Vui lòng nhập nội dung").required(),
  presentator: string("Vui lòng nhập nội dung").required(),
  phone: string()
    .required()
    .test({
      test: (value) => {
        if (value) {
          const phoneNumber = parsePhoneNumber(value);

          if (phoneNumber) {
            if (phoneNumber.country !== "VN") {
              return false;
            }
            if (isValidPhoneNumber(phoneNumber.number)) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      message: "Số điện thoại không hợp lệ",
      name: "validate",
    }),
  email: string("Vui lòng nhập nội dung")
    .required()
    .email("Vui lòng nhập đúng định dạng email"),
  bank: string("Vui lòng nhập nội dung").required(),
  bank_number: string("Vui lòng nhập nội dung").required(),
  owner: string("Vui lòng nhập nội dung").required(),
  branch: string("Vui lòng nhập nội dung").required(),
});
