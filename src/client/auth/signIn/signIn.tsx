import React from "react";
import { FormControl, Grid, TextField } from "@mui/material";
import styles from "../auth.module.scss";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigateTo = useNavigate();
  const handleSignUpClick = () => {
    navigateTo("/signup");
  };
  return (
    <Grid container justifyContent="center" className={styles.authContainer}>
      <Grid item xs={12} md={4}>
        <h3>Sign In</h3>
        <p className={styles.description}> Welcome back to Sandwiches!</p>
        <FormControl className={styles.formControl}>
          <TextField
            id="username"
            label="Username"
            sx={{ marginTop: "16px" }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ marginTop: "16px" }}
          />
          <Button label={"Sign In"} variant="contained" style="primary" />
        </FormControl>
        <p className={`caption ${styles.bottomLink}`}>
          Don't have an account?{" "}
          <a onClick={handleSignUpClick}>Click here to sign up.</a>
        </p>
      </Grid>
    </Grid>
  );
};

export default SignIn;
