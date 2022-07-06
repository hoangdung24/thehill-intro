import { string, object, setLocale, number } from "yup";

export const defaultValuesPageNew = {
  search: "",
};
export const defaultValues = {
  store_name: "",
  presentator: "",
  category: "",
  email: "",
  phone: "",
  bank_number: "",
  bank: "",
  owner: "",
  branch: "",
  files: "",
};

export const schema = object().shape({
  store_name: string("Vui lòng nhập nội dung").required(),
  category: string("Vui lòng nhập nội dung").required(),
  presentator: string("Vui lòng nhập nội dung").required(),
  phone: string("Vui lòng nhập nội dung"),
  email: string("Vui lòng nhập nội dung")
    .required()
    .email("Vui lòng nhập đúng định dạng email"),
  bank: string("Vui lòng nhập nội dung").required(),
  bank_number: number("Vui lòng nhập nội dung")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required(),
  owner: string("Vui lòng nhập nội dung").required(),
  branch: string("Vui lòng nhập nội dung").required(),
});
