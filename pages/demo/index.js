import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { PAGES, types } from "../../apis";
import ContactPage from "../../containers/Contact/Contact";
import { transformUrl, prefetchData } from "../../libs";

export default function DemoNha({ ...props }) {
  return (
    <Box
      sx={{
        width: "90%",
        marginLeft: "auto",
      }}
    >
      <ContactPage />
    </Box>
  );
}
