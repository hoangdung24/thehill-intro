import {
  Box,
  Button,
  Container,
  useTheme,
  Divider as MuiDivider,
} from "@mui/material";
import React, { useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import useMedia from "../../hooks/useMedia";

const valuelineTitle = {
  title: "FAQ",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FaqDetail() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box>
      <BannerTop />
      <Container maxWidth="lg">
        <LineTitle data={valuelineTitle} type="center" />

        <Button
          sx={[
            { marginTop: "5.5rem", marginBottom: "1rem" },
            isSmDown && { marginTop: "4rem", marginBottom: "1rem" },
          ]}
        >
          <Typography
            variant="button2"
            sx={{
              color: theme.palette.secondary.light,
            }}
          >
            Trở Về
          </Typography>
        </Button>

        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ border: "none" }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                flexDirection: "row",
                padding: 0,
                background: "none",
                "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                  color: theme.palette.secondary.main,
                },
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <Typography
                variant="hairline1"
                sx={{ color: theme.palette.secondary.main }}
              >
                Collapsible Group Item #1
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: "none", paddingLeft: 0 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Border />

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ border: "none" }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                flexDirection: "row",
                padding: 0,
                background: "none",
                "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                  color: theme.palette.secondary.main,
                },
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <Typography
                variant="hairline1"
                sx={{ color: theme.palette.secondary.main }}
              >
                Collapsible Group Item #1
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: "none", paddingLeft: 0 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Border />

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ border: "none" }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                flexDirection: "row",
                padding: 0,
                background: "none",
                "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                  color: theme.palette.secondary.main,
                },
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <Typography
                variant="hairline1"
                sx={{ color: theme.palette.secondary.main }}
              >
                Collapsible Group Item #1
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: "none", paddingLeft: 0 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}

const Border = styled(MuiDivider)(({ theme }) => {
  return {
    margin: " 1rem 0",
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  };
});
