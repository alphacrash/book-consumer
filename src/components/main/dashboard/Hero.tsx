import { Container, Grid, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h5">
            <FormattedMessage id="hero-header" />
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={12}>
        Carousel
      </Grid>
    </Grid>
  );
};

export default Hero;
