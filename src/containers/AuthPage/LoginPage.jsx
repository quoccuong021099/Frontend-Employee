import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ButtonAdvanced from "../../common/ButtonAdvance";
import InputCustom from "../../common/InputCustom";
import { loginAction } from "../../redux/actions/auth";
import { useStyleAuth } from "./style";

export function LoginPage() {
  const classes = useStyleAuth();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginAction(data));
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          <InputCustom
            inputProps={{ ...register("email") }}
            label="Please enter your email"
          />
          <InputCustom
            inputProps={{ ...register("password") }}
            label="Please enter your password"
            type="password"
          />
          <br />
          <ButtonAdvanced type="submit" fullWidth>
            Login
          </ButtonAdvanced>
        </form>
      </Paper>
    </div>
  );
}
