import { useDropzone } from "react-dropzone";
import { useController } from "react-hook-form";
import { useState, useCallback } from "react";

import {
  FormControl,
  Button,
  FormHelperText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box } from "@mui/system";

const Upload = ({ control, name, passHandler = () => {} }) => {
  const theme = useTheme();
  const {
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    function (acceptedFiles, rejectedFiles) {
      passHandler({
        acceptedFiles,
        rejectedFiles,
        setFiles,
      });

      if (acceptedFiles.length === 0) {
        setFiles([]);
        return;
      }

      setFiles(acceptedFiles);
    },
    [passHandler]
  );

  const { getInputProps } = useDropzone({
    accept: ".doc, .docx, .pdf",
    onDrop,
    maxSize: 1000000,
    multiple: true,
  });

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControl fullWidth>
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor={name}>
            <input id={name} {...getInputProps()} />
            <Button
              variant="outlined"
              component="span"
              sx={{}}
              startIcon={<AttachFileIcon />}
            >
              <span>File đính kèm</span>
            </Button>
          </label>

          {files.map((el) => {
            return (
              <Typography
                sx={{
                  fontSize: 12,
                }}
                key={el.name}
              >
                {el.name}
              </Typography>
            );
          })}
        </Stack>

        <FormHelperText
          sx={{
            textAlign: "left",
            color: theme.palette.common.natural3,
            marginLeft: 0,
            paddingY: 1,
          }}
        >
          Lưu ý: File đính kèm không vượt quá 20Mb
        </FormHelperText>
        {error && (
          <FormHelperText
            error
            sx={{
              marginLeft: 0,
              paddingY: 1,
            }}
          >
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    </Stack>
  );
};

export default Upload;
