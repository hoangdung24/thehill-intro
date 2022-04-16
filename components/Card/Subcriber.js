import axios from "axios";
import Chance from "chance";
import { object, string } from "yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import SendIcon from "@mui/icons-material/Send";

import { DOMAIN, SUBSCRIBERS } from "../../helpers/api";

import {
  Typography,
  Box,
  Button,
  TextField,
  styled,
  Stack,
  FormHelperText,
  alpha,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

const URL = `${DOMAIN}${SUBSCRIBERS}`;

const validateSchema = object({
  email: string().email("Vui lòng nhập email hợp lệ").required(),
});

const chance = new Chance();

const defaultValues = {
  email: chance.email(),
};

const Subcriber = () => {
  const resolver = yupResolver(validateSchema);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver,
    defaultValues,
  });

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback((data) => {
    setLoading(true);

    axios
      .post(URL, data)
      .then((res) => {
        enqueueSnackbar("Đăng ký thành công", {
          variant: "success",
        });

        reset(defaultValues, {
          keepDirty: false,
        });
      })
      .catch((error) => {
        if (error.response) {
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Stack direction="column" spacing={2} justifyContent="space-between" alignItems="flex-start">
      <Title variant="h6">Đăng ký nhận thông tin</Title>
      <Stack width="100%" direction="row" spacing={1.5}>
        <InputEmail
          InputProps={{
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            },
          }}
          inputProps={{
            sx: {
              paddingBottom: 1.5,
              paddingTop: 1.5,
            },
          }}
          className="Input Form"
          variant="outlined"
          placeholder="Your email address"
          fullWidth
          {...register("email")}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            loading={loading}
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
            disableRipple
            endIcon={<SendIcon />}
            sx={{
              height: "100%",
              whiteSpace: "nowrap",
              borderRadius: "6px",
              backgroundColor: "common.white",
              color: "primary.color",
              paddingX: 2,
              "&:hover": {
                backgroundColor: alpha("#FFF", 0.8),
                boxShadow: "none",
              },
            }}
          >
            Đăng ký
          </LoadingButton>
        </Box>
      </Stack>
      {!!errors.email && <FormHelperText error children={errors.email.message} />}
    </Stack>
  );
};

export default Subcriber;

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.black,
  };
});

const InputEmail = styled(TextField)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.white,
    borderRadius: 6,
  };
});

// const StyledButton = styled(Box)(({ theme }) => {
//   return {
//     borderRadius: "6px",
//     height: "100%",

//     whiteSpace: "nowrap",
//     backgroundColor: theme.palette.common.white,
//     transition: "all 0.3s",
//     "&:hover": {
//       backgroundColor: theme.palette.common.white,
//       boxShadow: "none",
//     },
//   };
// });
