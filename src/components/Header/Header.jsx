// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          className={classes.title}
        >
          Happy Hour Locator
        </Typography>
        <Box display="flex">
          <Typography
            variant="h6"
            className={classes.title}
          >
            Explore new places
          </Typography>
          {/* Search Box */}
          {/* {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
