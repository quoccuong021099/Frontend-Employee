import { Paper, Typography } from "@material-ui/core";
import { useStyleAuth } from "./style";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ButtonAdvanced from "../../common/ButtonAdvance";
import InputCustom from "../../common/InputCustom";
import { registerAction } from "../../redux/actions/auth";

export function RegisterPage() {
  const classes = useStyleAuth();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerAction(data));
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Register
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
          <InputCustom
            inputProps={{ ...register("fullname") }}
            label="Please enter your fullname"
          />
          <InputCustom
            inputProps={{ ...register("phone") }}
            label="Please enter your phone"
          />
          <br />
          <ButtonAdvanced type="submit" fullWidth>
            Register
          </ButtonAdvanced>
        </form>
      </Paper>
    </div>
  );
}
