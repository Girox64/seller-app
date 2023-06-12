import { string } from "prop-types";
import { AppBar, Link as MUILink, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts";

export default function Header({ title, caption }) {
  const { isLoggedIn, salesChannel } = UserContext.useUser();

  console.log({ isLoggedIn, salesChannel });
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
