import { useDropzone } from "react-dropzone";
import { useController } from "react-hook-form";
import { useState, useCallback } from "react";

import { FormControl, Button, FormHelperText, Stack, Typography } from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";

const Upload = ({ control, name, passHandler = () => {} }) => {
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
    maxSize: 5242880,
    multiple: true,
  });

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControl fullWidth>
        <label htmlFor={name}>
          <input id={name} {...getInputProps()} />
          <Button variant="contained" component="span" sx={{}} startIcon={<AttachFileIcon />}>
            <span>File đính kèm</span>
          </Button>
        </label>

        <FormHelperText
          sx={{
            marginLeft: 0,
            paddingY: 1,
          }}
        >
          Lưu ý: File đính kèm không vượt quá 20Mb
        </FormHelperText>
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
