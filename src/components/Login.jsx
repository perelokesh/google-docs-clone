import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    minHeight: "100vh",
    paddingLeft: theme.spacing(30),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
function Login() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid items>
      <img src="google_docs_image_url" alt='' />
      </Grid>
    <Grid items className={classes.button}>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Grid>
    </Grid>
  );
}

export default Login;
