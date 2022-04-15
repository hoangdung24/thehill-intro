import { Box, Grid, Typography, styled } from "@mui/material";
import { Subcriber } from "../../components";
import { useSetting } from "../../hooks";
import ReaderHTML from "../ReaderHTML";

const FooterTop = () => {
  const { info } = useSetting();
  return (
    <WrapperFooterTop>
      <Grid spacing={3} container>
        <Grid item xs={12} md={6}>
          <ReaderHTML content={info} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Subcriber />
        </Grid>
      </Grid>
    </WrapperFooterTop>
  );
};

export default FooterTop;

// styled Sheet

const WrapperFooterTop = styled(Box)(({ theme }) => {
  return {
    paddingBottom: 15,
  };
});
