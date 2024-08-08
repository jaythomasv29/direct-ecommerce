import Header from "./components/Header/Header";
import { CssBaseline, Grid } from "@mui/material";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
export default function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={3}
        style={{ width: "100%" }}
      >
        <Grid
          item
          xs={12}
          md={4}
          // style={{ border: "1px solid black" }}
        >
          <List />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          // style={{ border: "1px solid black" }}
        >
          <Map />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
