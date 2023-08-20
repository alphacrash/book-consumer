import { Grid } from "@mui/material";
import Hero from "./Hero";
import Shop from "./Shop";

const Dashboard = () => {
  return (
    <Grid>
      <Grid>
        <Hero />
      </Grid>
      <Grid>
        <Shop />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
