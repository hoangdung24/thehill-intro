import { IconButton, InputBase, Paper, useTheme } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useMedia from "../../hooks/useMedia";

export default function InputSearchOld({ name, changeInput, aaaa, ...props }) {
  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  return (
    <Paper
      sx={[
        {
          boxShadow: "none",
          border: `2px solid ${theme.palette.common.natural4}`,
          borderRadius: "12px",
          p: "5px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginBottom: "2.3rem",
          marginTop: "5.5rem",
        },
        isSmDown && { marginBottom: "1.5rem" },
      ]}
    >
      <InputBase
        name={name}
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "15px",
          color: " theme.palette.common.natural1",
          opacity: 1,
        }}
        placeholder="Tìm kiếm..."
      />
      <IconButton
        type="submit"
        color="primary"
        sx={{
          p: "10px",
          width: "2.2rem",
          height: "2.2rem",
          backgroundColor: theme.palette.secondary.light,
        }}
        aria-label="directions"
      >
        <SearchIcon
          sx={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
      </IconButton>
    </Paper>
  );
}
