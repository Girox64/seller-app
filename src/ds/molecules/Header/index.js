import { AppBar, Link as MUILink, Toolbar, Typography } from "@mui/material";
import { string } from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ title, caption }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <MUILink
          component={Link}
          to="/"
          sx={{ color: "white", textDecoration: "none" }}
        >
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
        </MUILink>
        <Typography
          sx={{
            paddingLeft: 2,
          }}
        >
          {caption}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: string,
  caption: string,
};
