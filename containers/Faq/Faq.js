import { Container, Grid, Box } from "@mui/material";

import Card from "./components/Card";

const DUMB_DATA = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6"];

const faq = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {DUMB_DATA.map((el) => {
          return (
            <Grid item xs={4} key={el}>
              <Card data={el} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default faq;
