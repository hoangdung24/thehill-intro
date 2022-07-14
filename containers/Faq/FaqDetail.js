import {
  Box,
  Button,
  Container,
  useTheme,
  Divider as MuiDivider,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import useMedia from "../../hooks/useMedia";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PAGES } from "../../apis";
import { transformUrl } from "../../libs";
import { ReaderHTML } from "../../components";

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

export default function FaqDetail({ initData }) {
  const [listingFAQ, detailFAQ] = initData;
  const [expanded, setExpanded] = useState("panel2");
  const [question, setQuestion] = useState();
  const { banner } = listingFAQ.items[0];

  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const router = useRouter();

  const { data: resData } = useSWR(
    transformUrl(`${PAGES}${router.query.id}`, {})
  );

  useEffect(() => {
    if (resData === undefined) {
      return;
    }
    setQuestion(resData.questions);
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // const backFAQ = (id) => {
  //   router.push(`${router.pathname}/${id}`);
  // };

  const renderAccordition = () => {
    if (!question) {
      return null;
    } else {
      return question?.map((item, index) => {
        return (
          <Fragment key={index}>
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
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
                  {item?.value.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  border: "none",
                  paddingLeft: 0,
                  "& .MuiBox-root h1": {
                    lineHeight: "3rem",
                  },
                  "& .MuiBox-root h2": {
                    lineHeight: "2.5rem",
                  },
                }}
              >
                <ReaderHTML content={item.value.answer} />
              </AccordionDetails>
            </Accordion>
            <Border />
          </Fragment>
        );
      });
    }
  };
  return (
    <Box>
      <BannerTop data={banner} />
      <Container maxWidth="lg">
        <LineTitle
          titleData={resData === undefined ? "TÊN DANH MỤC" : resData.title}
          type="center"
        />
        <Button
          onClick={() => router.back()}
          variant="outlined"
          sx={[
            {
              padding: "0.8rem 1rem",
              marginTop: "5.5rem",
              marginBottom: "1rem",
            },
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

        <Box sx={{ marginBottom: "8.5rem" }}>{renderAccordition()}</Box>
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
